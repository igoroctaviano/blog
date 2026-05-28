// Replaces the legacy Gatsby service worker and clears stale caches.
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();
      await Promise.all(cacheNames.map((name) => caches.delete(name)));

      const clients = await self.clients.matchAll({ type: "window" });
      await Promise.all(
        clients.map((client) => {
          if ("navigate" in client) {
            return client.navigate(client.url);
          }
          return client.focus();
        }),
      );

      await self.registration.unregister();
    })(),
  );
});
