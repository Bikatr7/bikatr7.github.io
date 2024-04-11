// when clicked the arrow scrolls to the bottom of the page
document.getElementById('scroll-arrow').addEventListener('click', function() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  });