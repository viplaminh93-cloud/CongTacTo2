self.addEventListener('fetch', (event) => {
  // Cho phép app tải trang bình thường từ mạng
  event.respondWith(fetch(event.request));
});
