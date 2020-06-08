// importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

// // when we use CacheFirst strategy, the file is loaded from network if it is not there in cache and is // then fetched from cache for every subsequent GET requests.
// // NetworkFirst strategy will always get it from the network.

// // cache javascript type files
// workbox.routing.registerRoute(
// 	new RegExp('.*\.js'),
// 	new workbox.strategies.CacheFirst({
// 		cacheName: "jsCache",
// 		plugins: [
// 			new workbox.expiration.Plugin({
// 				maxEntries: 130,
// 				// Cache for a maximum of 3 days	
// 				maxAgeSeconds: 3 * 24 * 60 * 60
// 			})
// 		]
// 	})
// );

// workbox.routing.registerRoute(
// 	new RegExp('.*\.properties'),
// 	new workbox.strategies.CacheFirst({
// 		cacheName: "msgPropCache",
// 		plugins: [
// 			new workbox.expiration.Plugin({
// 				// Cache only 60 images	
// 				maxEntries: 60,
// 				// Cache for a maximum of 3 days	
// 				maxAgeSeconds: 3 * 24 * 60 * 60
// 			})
// 		]
// 	})
// );

// workbox.routing.registerRoute(
// 	new RegExp('.*\.css'),
// 	new workbox.strategies.CacheFirst({
// 		cacheName: "cssCache",
// 		plugins: [
// 			new workbox.expiration.Plugin({
// 				// Cache only 60 images	
// 				maxEntries: 60,
// 				// Cache for a maximum of 3 days	
// 				maxAgeSeconds: 3 * 24 * 60 * 60
// 			})
// 		]
// 	})
// );

importScripts('./workbox-sw.js');

const {registerRoute} = workbox.routing;
const {StaleWhileRevalidate} = workbox.strategies;
const {CacheableResponse} = workbox.cacheableResponse;
const {ExpirationPlugin}  = workbox.expiration;
const {CacheFirst} = workbox.strategies

// when we use CacheFirst strategy, the file is loaded from network if it is not there in cache and is // then fetched from cache for every subsequent GET requests.
// NetworkFirst strategy will always get it from the network.

//

  // This will work!
registerRoute(
	({request}) => request.destination === 'script',
	new StaleWhileRevalidate()
  );

registerRoute(
	({request}) => request.destination === 'style',
	new StaleWhileRevalidate()
  );

  registerRoute(	
	new RegExp('.*\.properties'),	
	new CacheFirst({	
		cacheName: "msgPropCache",	
		plugins: [	
			new ExpirationPlugin({	
				// Cache only 60 images	
				maxEntries: 60,	
				// Cache for a maximum of 3 days	
				maxAgeSeconds: 3 * 24 * 60 * 60	
			})	
		]	
	})	
);

registerRoute(	
	new RegExp('.*\.json'),	
	new CacheFirst({	
		cacheName: "JSONCache",	
		plugins: [	
			new ExpirationPlugin({	
				// Cache only 60 images	
				maxEntries: 60,	
				// Cache for a maximum of 3 days	
				maxAgeSeconds: 3 * 24 * 60 * 60	
			})	
		]	
	})	
);

  self.addEventListener('fetch', (event) => {
	if (event.request.url.endsWith('.js')) {
	  // Referencing workbox.strategies will now work as expected.
	  const staleWhileRevalidate = new StaleWhileRevalidate();
	  event.respondWith(staleWhileRevalidate.handle({request: event.request}));
	}
  });