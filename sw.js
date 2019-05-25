self.addEventListener('fetch', function(event) {});

// importScripts('cache-pollyfill.js');

// self.addEventListener('install', function (e) {
//     e.waitUntil(
//         caches.open('ams').then(function (cache) {
//             return cache.addAll([
//                 './assets/css',
//                 './controllers',
//                 './images',
//                 './views',
//                 './index.html',
//                 './assets'
//             ]);
//         })
//     );
// });

// self.addEventListener('fetch', function (event) {
//     console.log(event.request.url);

//     event.respondWith(
//         caches.match(event.request).then(function (response) {
//             return response || fetch(event.request);
//         })
//     );
// });