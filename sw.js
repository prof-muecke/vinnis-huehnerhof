/* Vinnis Hühnerhof – Service Worker
   Macht die App offline nutzbar und installierbar.
   Bei jeder neuen Version unten die CACHE-Nummer hochzählen (v1 -> v2 ...). */
var CACHE = 'vinni-huehnerhof-v18';
var ASSETS = [
  './',
  'index.html',
  'manifest.webmanifest',
  'icon-192.png',
  'icon-512.png',
  'icon-180.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE)
      .then(function (c) { return c.addAll(ASSETS); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        if (k !== CACHE) return caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  // KI-Anfragen niemals cachen – die sollen immer frisch ans Netz gehen.
  if (req.url.indexOf('api.anthropic.com') >= 0) return;
  e.respondWith(
    caches.match(req).then(function (hit) {
      return hit || fetch(req).then(function (res) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { try { c.put(req, copy); } catch (err) {} });
        return res;
      }).catch(function () {
        // Offline-Fallback: bei Seitenaufrufen die App-Hülle liefern.
        if (req.mode === 'navigate') return caches.match('index.html');
      });
    })
  );
});
