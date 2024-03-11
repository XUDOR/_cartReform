document.addEventListener('DOMContentLoaded', function() {
  const images = ['images/image_1.jpg', 'images/image_2.jpg' /*Add more image paths here*/];
  const imageContainer = document.getElementById('imageContainer');
  
  // Random image rotation
  setInterval(function() {
    const randomIndex = Math.floor(Math.random() * images.length);
    imageContainer.innerHTML = `<img src="${images[randomIndex]}" alt="Gallery Image">`;
  }, 3000); // Change image every 3 seconds

  // Collapsible sidebar
  const sidebar = document.getElementById('sidebar');
  document.addEventListener('click', function(event) {
    if (event.target.closest('#sidebar') || event.target.closest('.toggle-sidebar')) {
      sidebar.classList.toggle('collapse');
    } else {
      sidebar.classList.add('collapse');
    }
  });
});
