self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",event=>event.waitUntil(self.clients.claim()));
self.addEventListener("fetch",event=>{
  const url=new URL(event.request.url);
  if(url.pathname.endsWith("/__sw_alive")){
    event.respondWith(new Response("true",{status:200,headers:{"Content-Type":"text/plain","Cache-Control":"no-store"}}));
    return;
  }
  event.respondWith(fetch(event.request));
});