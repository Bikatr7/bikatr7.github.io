var scrollArrow = document.getElementById('scroll-arrow');

// when clicked the arrow scrolls to the bottom of the page
scrollArrow.addEventListener('click', function() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});

function debounce(func, wait) {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), wait);
  };
}

window.addEventListener('scroll', debounce(function() {
  // check if the scroll position is at the top
  if (window.scrollY === 0) {
    // if at the top, show the scroll arrow
    scrollArrow.style.display = 'block';
  } else {
    // if not at the top, hide the scroll arrow
    scrollArrow.style.display = 'none';
  }
}, 20));