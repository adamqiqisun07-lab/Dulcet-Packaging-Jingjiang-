const WINDOW_MS = 60_000; // 1 minute
const MAX_REQ = 10;
const store = new Map<string, {count:number; ts:number}>();

export function rateLimit(key:string){
  const now = Date.now();
  const item = store.get(key);
  if(!item || now - item.ts > WINDOW_MS){
    store.set(key, {count:1, ts: now});
    return {ok:true};
  }
  if(item.count >= MAX_REQ) return {ok:false};
  item.count++; store.set(key, item); return {ok:true};
}
