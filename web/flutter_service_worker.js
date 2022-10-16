'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "32d0358d4d85ccbe8bac114c039caa3d",
"/": "32d0358d4d85ccbe8bac114c039caa3d",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "be58549cd6466babb6362be9df1d78ad",
"assets/shaders/ink_sparkle.frag": "9eb8f4c3e8854f102d88294c230aab0c",
"assets/AssetManifest.json": "586abd663fc6c2a01edb5fcf7f6eda2f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/NOTICES": "3298107ef6444f9ba11c904db96d4247",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/res/exercises.json": "79e032d360a86e92d0aa3993585d1b44",
"assets/res/emoji_u1f43b.png": "f1a245fc25c8e5ba3da1383f8cce20ef",
"assets/res/images/Biceps%2520from%2520Side_0.jpg": "8da9f0255a06bdeaf06b1ccb09755008",
"assets/res/images/Elbow%2520to%2520Heel_0.jpg": "3a973d1bf5da89181c43294333ac1471",
"assets/res/images/Front%2520Support%2520Lunge%2520Jumps_0.jpg": "05e0cc8fb31d6791a2995819b24a6054",
"assets/res/images/Push%2520Ups_1.jpg": "377db2a438dc8eeaced2ed2488a4250d",
"assets/res/images/Crab%2520Ankle_1.jpg": "ed24057815187fcb18c03086bcef00b9",
"assets/res/images/Back%2520Lunges%2520+%2520Torsion_0.jpg": "c4ad4a6f921efc3ae749261f00953139",
"assets/res/images/Front%2520Support%2520+%2520Rotation_0.jpg": "7b76a283f9ee0068e9157a9f5e610141",
"assets/res/images/Caterpillar_2.jpg": "185f130db2e4849e7c8a6ccfb141a1b5",
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
"assets/res/images/Butt%2520Lifts_0.jpg": "922d543d2b225b76bc8b9130ae02e909",
"assets/res/images/Dips_0.jpg": "bdde4505daead9590f7f57612c373a8a",
"assets/res/images/Back%2520Lunges%2520+%2520Torsion_1.jpg": "d04f71aeee6dbcd22a2e05c834e54a10",
"assets/res/images/Bank%2520Lunge_0.jpg": "539ea03c7994029a43d563cf2861a193",
"assets/res/images/Front%2520Lifts_1.jpg": "211e9a7d36df8f80ba25a89a4480c586",
"assets/res/images/Bank%2520Lunge_1.jpg": "fd067666df2a900e43a801b793c6f3a1",
"assets/res/images/Elbow%2520to%2520Knee%2520Jumps_1.jpg": "42ba7f8d3855046d64d65bd558759784",
"assets/res/images/Elbow%2520to%2520Heel_1.jpg": "7746769a5c99782b3cf6d17476f85bd1",
"assets/res/images/Caterpillar_1.jpg": "859044975b7f659ee43fbf4f34d04540",
"assets/res/images/Butt%2520Lifts_1.jpg": "3ce365bb1f12b00e82377f99ea976253",
"assets/res/images/Biceps%2520from%2520Back_1.jpg": "8cac8ad2c390a2a03bac82eee767c772",
"assets/res/images/Front%2520Support%2520+%2520Rotation_2.jpg": "5be76617e512793e9fd2d7558d6c4f80",
"assets/res/images/Bird%2520Dog_1.jpg": "54ecb7346623e60fe11a3be037069c08",
"assets/res/images/Crab%2520Ankle_0.jpg": "e1b2437f459b7e17e1ace518aa184f44",
"assets/res/images/Deep%2520Lunge%2520Jumps_1.jpg": "ffd52d4930403ef8caeb58b1147113ce",
"assets/res/images/Cat%2520Pushes_1.jpg": "5cc9a688dc0064e818d40b6162ae231c",
"assets/res/images/Cat%2520Pushes_0.jpg": "dd018dee1d20763b42270c1843322c57",
"assets/res/images/Biceps%2520from%2520Side_1.jpg": "3c160b9e9e5acb71a54a3f9ff8102c19",
"assets/res/images/Bird%2520Dog_2.jpg": "864807027ff90c9f4715c0f5b5585529",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"version.json": "4858155e54ec4bfb938c13f36ce1ffe7",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"manifest.json": "e3656b2270448ab2be29fed71cc668b5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
