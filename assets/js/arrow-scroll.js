// Copyright 2024 Kaden Bilyeu (Bikatr7) (https://github.com/Bikatr7) (https://github.com/Bikatr7/bikatr7.github.io) (https://bikatr7.github.io)
// Use of this source code is governed by a GNU General Public License v3.0
// license that can be found in the LICENSE file.

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
  // check if the viewport width is more than 600px (mobile)
  if (window.innerWidth > 600) 
  {
    // check if the scroll position is at the top
    if (window.scrollY === 0) 
    {
      // if at the top, show the scroll arrow
      scrollArrow.style.display = 'block';
    } else {
      // if not at the top, hide the scroll arrow
      scrollArrow.style.display = 'none';
    }
  } 
  else 
  {
    scrollArrow.style.display = 'none';
  }
}, 20));