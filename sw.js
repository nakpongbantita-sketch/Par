const cacheName = 'lotto-app-v1';
const assets = [
  './',
  './index.html',
  'https://cdn-icons-png.flaticon.com/512/2953/2953361.png'
];

// ติดตั้งและเก็บไฟล์ลง Cache
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// ดึงข้อมูลจาก Cache เมื่อ Offline
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
