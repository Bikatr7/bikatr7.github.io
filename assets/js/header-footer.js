// for the header and footer to be sticky
window.addEventListener("DOMContentLoaded", adjustPadding);
window.addEventListener("resize", adjustPadding);

function adjustPadding() {
  var headerHeight = document.querySelector('header').offsetHeight;
  var footerHeight = document.querySelector('footer').offsetHeight;

  document.body.style.paddingTop = headerHeight + 'px';
  document.body.style.paddingBottom = footerHeight + 'px';
}