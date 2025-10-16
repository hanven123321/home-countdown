const CACHE_NAME = 'fat-loss-pwa-v1';
const ASSETS = ['/', '/index.html', '/favicon.ico', '/icons/icon-192.png', '/icons/icon-512.png'];
self.addEventListener('install', evt => {
  evt.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
});
self.addEventListener('fetch', evt => {
  evt.respondWith(caches.match(evt.request).then(r => r || fetch(evt.request)));
});