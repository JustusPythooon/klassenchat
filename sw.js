const CACHE='klassencloud-v21';
const APP_SHELL=['/','/index.html','/css/style.css','/js/app.js','/manifest.json','/icon-192.png','/icon-512.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(c=>c.addAll(APP_SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET') return;
  const url=new URL(req.url);
  if(url.origin!==location.origin) return;
  if(url.pathname.startsWith('/api/')) return;
  event.respondWith(fetch(req).then(res=>{const copy=res.clone();caches.open(CACHE).then(c=>c.put(req,copy));return res}).catch(()=>caches.match(req).then(r=>r||caches.match('/index.html'))));
});
self.addEventListener('push',event=>{
 let data={title:'KlassenCloud',text:'Neue Nachricht',url:'/'};
 try{data={...data,...event.data.json()}}
 catch{try{data.text=event.data.text()}catch{}}

 event.waitUntil((async()=>{
   const count=Math.max(1,Number(data.badgeCount||data.unread||1)||1);
   try{
     const cs=await clients.matchAll({type:'window',includeUncontrolled:true});
     for(const c of cs)c.postMessage({type:'KLASSENCLOUD_PUSH',count,title:data.title,text:data.text});
   }catch{}

   await self.registration.showNotification(data.title,{
     body:data.text,
     icon:'/icon-192.png',
     badge:'/icon-192.png',
     tag:data.tag||('klassencloud-'+Date.now()),
     renotify:false,
     requireInteraction:false,
     data:{url:data.url||'/',chatId:data.chatId||null,chatType:data.chatType||null,senderName:data.senderName||null,chatTitle:data.chatTitle||data.title||null}
   });
 })());
});

self.addEventListener('notificationclick',event=>{
 event.notification.close();
 const target=new URL(event.notification.data?.url||'/',self.location.origin).href;
 event.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(async cs=>{
   const c=cs.find(x=>x.url.startsWith(self.location.origin));
   if(c){
     await c.focus();
     try{await c.navigate(target)}catch{}
     return c;
   }
   return clients.openWindow(target);
 }));
});
