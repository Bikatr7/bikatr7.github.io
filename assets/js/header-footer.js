// Copyright 2024 Kaden Bilyeu (Bikatr7) (https://github.com/Bikatr7) (https://github.com/Bikatr7/bikatr7.github.io) (https://bikatr7.github.io)
// Use of this source code is governed by a GNU General Public License v3.0
// license that can be found in the LICENSE file.

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