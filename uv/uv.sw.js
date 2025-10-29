self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (url.pathname.startsWith('/uv/')) {
    const real = atob(url.pathname.replace('/uv/', ''));
    const bare = 'https://medidi.lol.atamanco.eu';
    const proxy = `${bare}/v3/?url=${encodeURIComponent(real)}`;
    e.respondWith(fetch(proxy));
  }
});

