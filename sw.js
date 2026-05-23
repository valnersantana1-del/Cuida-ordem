const CACHE_NAME = 'cuida-ordem-v1';

// Arquivos que serão cacheados para funcionar offline
const ARQUIVOS_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/icon-180.png',
  '/icons/icon-167.png',
  '/icons/icon-152.png',
  'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap'
];

// Instalar: cacheia todos os arquivos essenciais
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ARQUIVOS_CACHE).catch(err => {
        console.warn('Alguns arquivos não puderam ser cacheados:', err);
      });
    })
  );
  self.skipWaiting();
});

// Ativar: apaga caches antigos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Fetch: cache-first para arquivos locais, network-first para externos
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Ignora requisições não-GET
  if (event.request.method !== 'GET') return;

  // Ignora extensões do Capacitor ou chrome-extension
  if (url.protocol === 'chrome-extension:' || url.protocol === 'capacitor:') return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request)
        .then(response => {
          // Cacheia respostas válidas
          if (response && response.status === 200 && response.type !== 'opaque') {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => {
          // Offline e sem cache: retorna index.html como fallback
          if (event.request.destination === 'document') {
            return caches.match('/index.html');
          }
        });
    })
  );
});

// Notificações Push (iOS 16.4+ quando instalado na tela inicial)
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  const titulo = data.title || 'Cuida Ordem';
  const opcoes = {
    body: data.body || 'Lembrete espiritual',
    icon: '/icons/icon-192.png',
    badge: '/icons/icon-192.png',
    data: data
  };
  event.waitUntil(self.registration.showNotification(titulo, opcoes));
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.openWindow('/'));
});
