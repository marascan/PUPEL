const cacheName = 'pupel-v1';
//assets duhet të përfshijë emrin fiks siç e ke në folder
const assets = [
  './', 
  './index.html', 
  './panda.png',
  './manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('PWA: Duke ruajtur skedarët në cache...');
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});