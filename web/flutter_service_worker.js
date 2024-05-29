'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "f68732d34990ec5c8d0a1ab0f8aabf6b",
"/": "f68732d34990ec5c8d0a1ab0f8aabf6b",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "84451ef86a7f375bb408731635ec9f6b",
"main.dart.js": "5c444749e647859b0803fea60345e781",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ccffc9a579aa9fe57c60529c6f1badb3",
"assets/AssetManifest.json": "06d17da1d798b5bbdfdbac0b95f647fb",
"assets/AssetManifest.bin.json": "8eb6bf53afeb64a17bcbcb06277820f0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "8ff8c36aa9cbbf693931b6dbb78ed290",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "04e8df5d9fc68c9d220ec004bfa9e26f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/NOTICES": "5c1b6f37aed6b771847db5ae6cb8cbea",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/res/exercises.json": "a8df3345c44bb43574e9f2f325734e27",
"assets/res/emoji_u1f43b.png": "f1a245fc25c8e5ba3da1383f8cce20ef",
"assets/res/images/Biceps%2520from%2520Side_0.jpg": "8da9f0255a06bdeaf06b1ccb09755008",
"assets/res/images/Elbow%2520to%2520Heel_0.jpg": "3a973d1bf5da89181c43294333ac1471",
"assets/res/images/Front%2520Support%2520Lunge%2520Jumps_0.jpg": "05e0cc8fb31d6791a2995819b24a6054",
"assets/res/images/Push%2520Ups_1.jpg": "377db2a438dc8eeaced2ed2488a4250d",
"assets/res/images/Crab%2520Ankle_1.jpg": "ed24057815187fcb18c03086bcef00b9",
"assets/res/images/Back%2520Lunges%2520+%2520Torsion_0.jpg": "c4ad4a6f921efc3ae749261f00953139",
"assets/res/images/Front%2520Support%2520+%2520Rotation_0.jpg": "7b76a283f9ee0068e9157a9f5e610141",
"assets/res/images/Caterpillar_2.jpg": "185f130db2e4849e7c8a6ccfb141a1b5",
"assets/res/images/High%2520Knees_1.jpg": "6ba3346ec77169b798de42198adfc088",
"assets/res/images/Kettlebell%2520Swing_2.jpg": "3c9b8b72a71043fdf2adf5afea7f2afc",
"assets/res/images/Back%2520Touch%2520Jumps_0.jpg": "aff6ad692cc384417593abdb8119d73d",
"assets/res/images/Dips_1.jpg": "3ba078070bb8d17c3c8fded360729bcc",
"assets/res/images/Deep%2520Lunge%2520Jumps_0.jpg": "a740e1a6d094a2a6028533dfada1b726",
"assets/res/images/Deep%2520Speed%2520Feet_0.jpg": "b96b63b76213940c6a327492eeb07849",
"assets/res/images/Caterpillar_0.jpg": "d16433e54b859871b3b22fd482f8629e",
"assets/res/images/Biceps%2520from%2520Back_0.jpg": "ae6ac75f1d0fde02e432d02112d4fa59",
"assets/res/images/Bird%2520Dog_0.jpg": "6f6c4a153dcea5e664619851f81978cf",
"assets/res/images/Front%2520Support%2520Lunge%2520Jumps_1.jpg": "7ea759c6c79a17e85e5a3b8a7691e5b4",
"assets/res/images/Front%2520Lifts_0.jpg": "61ff237a0dc33bd31065bb48659d90bd",
"assets/res/images/Front%2520Support%2520+%2520Rotation_1.jpg": "ae0294eb340bd5893c80a48065557494",
"assets/res/images/Push%2520Ups_0.jpg": "88f77000b4af7b7e2908521527a2bcbb",
"assets/res/images/Elbow%2520to%2520Knee%2520Jumps_0.jpg": "094f33d305b22207207703bbc38faf34",
"assets/res/images/Planks_0.jpg": "b33c65def7d4dcefcd6606e2b849741e",
"assets/res/images/Butt%2520Lifts_0.jpg": "922d543d2b225b76bc8b9130ae02e909",
"assets/res/images/Dips_0.jpg": "bdde4505daead9590f7f57612c373a8a",
"assets/res/images/Back%2520Lunges%2520+%2520Torsion_1.jpg": "d04f71aeee6dbcd22a2e05c834e54a10",
"assets/res/images/Bank%2520Lunge_0.jpg": "539ea03c7994029a43d563cf2861a193",
"assets/res/images/Front%2520Lifts_1.jpg": "211e9a7d36df8f80ba25a89a4480c586",
"assets/res/images/Bank%2520Lunge_1.jpg": "fd067666df2a900e43a801b793c6f3a1",
"assets/res/images/High%2520Knees_0.jpg": "b8b770d5e944a1d9832b0f0e7e8d03fd",
"assets/res/images/Bank%2520Lifts_1.jpg": "0433c020a8cc92c29d67dbd091adad4f",
"assets/res/images/Back%2520Touch%2520Jumps_1.jpg": "c26c68a01732423d3df50391911f811c",
"assets/res/images/Elbow%2520to%2520Knee%2520Jumps_1.jpg": "42ba7f8d3855046d64d65bd558759784",
"assets/res/images/Breakdancer_2.jpg": "67e332f7630b10f1c67510778c175c62",
"assets/res/images/Elbow%2520to%2520Heel_1.jpg": "7746769a5c99782b3cf6d17476f85bd1",
"assets/res/images/Breakdancer_0.jpg": "1e0b69d2199a795fcb9252fdf5261ffe",
"assets/res/images/Caterpillar_1.jpg": "859044975b7f659ee43fbf4f34d04540",
"assets/res/images/Bank%2520Lifts_0.jpg": "81916e9819e877a7b87eadd6c58cc102",
"assets/res/images/Butt%2520Lifts_1.jpg": "3ce365bb1f12b00e82377f99ea976253",
"assets/res/images/Down%2520Dog%2520Walks_1.jpg": "123db2f3965a70386f8a1bc11defd104",
"assets/res/images/Biceps%2520from%2520Back_1.jpg": "8cac8ad2c390a2a03bac82eee767c772",
"assets/res/images/Down%2520Dog%2520Walks_0.jpg": "e1650c476d5780812a7bc886a7465e38",
"assets/res/images/Front%2520Support%2520+%2520Rotation_2.jpg": "5be76617e512793e9fd2d7558d6c4f80",
"assets/res/images/Bird%2520Dog_1.jpg": "54ecb7346623e60fe11a3be037069c08",
"assets/res/images/Crab%2520Ankle_0.jpg": "e1b2437f459b7e17e1ace518aa184f44",
"assets/res/images/Deep%2520Lunge%2520Jumps_1.jpg": "ffd52d4930403ef8caeb58b1147113ce",
"assets/res/images/Breakdancer_1.jpg": "6c32377cb0000e822d01c0d7b17c2a4e",
"assets/res/images/Kettlebell%2520Swing_1.jpg": "5c0cec46dfad836e49a1b42463ded168",
"assets/res/images/Kettlebell%2520Swing_0.jpg": "6275ece6854f51fcc276f9f051edbf55",
"assets/res/images/Cat%2520Pushes_1.jpg": "5cc9a688dc0064e818d40b6162ae231c",
"assets/res/images/Jumping%2520Jacks_0.jpg": "592f634d815ff4cfb0b701f6489bf7f6",
"assets/res/images/Cat%2520Pushes_0.jpg": "dd018dee1d20763b42270c1843322c57",
"assets/res/images/Biceps%2520from%2520Side_1.jpg": "3c160b9e9e5acb71a54a3f9ff8102c19",
"assets/res/images/Jumping%2520Jacks_1.jpg": "880c5b37bacfebfabde1e47160ceb364",
"assets/res/images/Bird%2520Dog_2.jpg": "864807027ff90c9f4715c0f5b5585529",
"assets/res/images/Pistol%2520Squats_0.jpg": "d58e5c18a69d05fd7403e4c01678d915",
"assets/fonts/MaterialIcons-Regular.otf": "411619a06678309bf09ec8a2186da507",
"version.json": "e576649a806e3c7a8d05b0c26d230c27",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"icons/Icon-maskable-192.png": "3b872b92ed14b3c3a133287775237f0b",
"icons/Icon-192.png": "3b872b92ed14b3c3a133287775237f0b",
"icons/Icon-512.png": "81b4741175457f4664f397b5b4710d2a",
"icons/Icon-maskable-512.png": "81b4741175457f4664f397b5b4710d2a",
"flutter_bootstrap.js": "84bc8563a363dcb42dcebf34c4164de5",
"manifest.json": "e3656b2270448ab2be29fed71cc668b5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
