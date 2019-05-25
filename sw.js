self.addEventListener('fetch', function (event) {});


self.addEventListener('push', function (event) {
    console.log('[Service Worker] Push Received.');
    console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

    const title = 'Push Codelab';
    const options = {
        body: 'Yay it works.',
        icon: 'images/icon.png',
        badge: 'images/badge.png'
    };

    event.waitUntil(self.registration.showNotification(title, options));
});

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