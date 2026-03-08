self.addEventListener("install",e=>{
e.waitUntil(
caches.open("ezmeals").then(cache=>{
return cache.addAll([
"/",
"/index.html",
"/logo.png"
])
})
)
})

self.addEventListener("fetch",e=>{
e.respondWith(
caches.match(e.request).then(res=>{
return res || fetch(e.request)
})
)
})
