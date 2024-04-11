// for the header and footer to be sticky
document.addEventListener("DOMContentLoaded", function() {
    var headerHeight = document.querySelector('header').offsetHeight;
    var footerHeight = document.querySelector('footer').offsetHeight;
  
    document.body.style.paddingTop = headerHeight + 'px';
    document.body.style.paddingBottom = footerHeight + 'px';
  });