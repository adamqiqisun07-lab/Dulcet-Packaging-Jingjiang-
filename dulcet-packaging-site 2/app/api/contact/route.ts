import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';
import { rateLimit } from '@/lib/rate-limit';

const schema = z.object({
  name: z.string().min(1),
  company: z.string().optional().default(''),
  email: z.string().email(),
  phone: z.string().optional().default(''),
  market: z.string().optional().default(''),
  message: z.string().min(1)
});

export async function POST(req: NextRequest){
  const ip = req.headers.get('x-forwarded-for') ?? 'local';
  const rl = rateLimit(ip);
  if(!rl.ok) return NextResponse.json({ok:false, error:'Too many requests'}, {status:429});

  const body = await req.json();
  const parsed = schema.safeParse(body);
  if(!parsed.success) return NextResponse.json({ok:false, error:'Invalid input'}, {status:400});

  const {name, company, email, phone, market, message} = parsed.data;

  if(!process.env.MAIL_HOST){
    // Dev fallback: pretend success without sending email
    return NextResponse.json({ok:true, dev:true});
  }

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT || 587),
    secure: False,
    auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS }
  });

  await transporter.sendMail({
    from: process.env.MAIL_FROM || 'no-reply@example.com',
    to: process.env.MAIL_TO || 'sales@example.com',
    subject: 'New Inquiry — Dulcet Packaging',
    text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\nMarket: ${market}\nMessage: ${message}`
  });

  return NextResponse.json({ok:true});
}
