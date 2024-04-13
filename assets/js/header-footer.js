window.addEventListener("DOMContentLoaded", adjustPadding);
window.addEventListener("resize", adjustPadding);

function adjustPadding() {
  let header = document.querySelector('header');
  let footer = document.querySelector('footer');
  let bodyStyle = document.body.style;

  let headerHeight = header.offsetHeight;
  let footerHeight = footer.offsetHeight;

  bodyStyle.paddingTop = `${headerHeight}px`;
  bodyStyle.paddingBottom = `${footerHeight}px`;
}