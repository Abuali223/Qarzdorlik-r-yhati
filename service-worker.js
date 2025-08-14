self.addEventListener('install', (e)=>{
  e.waitUntil(caches.open('nasiya-cache-v5').then(cache=>cache.addAll([
    './','./index.html','./manifest.json'
  ])));
});
self.addEventListener('fetch', (e)=>{
  e.respondWith(caches.match(e.request).then(r=> r || fetch(e.request)));
});