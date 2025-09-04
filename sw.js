self.addEventListener('install', (e) => {
  console.log('Service Worker instalado!');
});

self.addEventListener('fetch', function(event) {
  // Aqui você pode controlar cache de arquivos se quiser offline
});
