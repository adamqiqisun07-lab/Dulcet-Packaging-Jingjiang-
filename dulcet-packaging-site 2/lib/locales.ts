export const locales = ['en', 'pt', 'zh'] as const;
export type Locale = typeof locales[number];
export const localeNames: Record<string, string> = { en: 'English', pt: 'Português', zh: '简体中文' };
