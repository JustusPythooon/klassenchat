const CACHE='klassencloud-v18';
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
 let data={title:'KlassenCloud',text:'Neue Nachricht',url:'/'};try{data={...data,...event.data.json()}}catch{try{data.text=event.data.text()}catch{}}
 event.waitUntil(self.registration.showNotification(data.title,{body:data.text,icon:'/icon-192.png',badge:'/icon-192.png',tag:data.tag||'klassencloud-push',data:{url:data.url||'/'},renotify:true}))
});

self.addEventListener('notificationclick',event=>{
 event.notification.close();
 event.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(cs=>{
   const c=cs.find(x=>x.url.startsWith(self.location.origin));
   return c?c.focus():clients.openWindow('/');
 }));
});
