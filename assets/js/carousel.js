document.addEventListener('DOMContentLoaded', function() {
  let currentProject = 0;
  const projects = document.querySelectorAll('.project-slide');
  const nextProjectBtn = document.querySelector('.next-project');
  const prevProjectBtn = document.querySelector('.prev-project');

  const imageCarousels = document.querySelectorAll('.image-carousel');
  let currentImages = Array.from(imageCarousels).map(() => 0);

  function showProject(index) {
    projects.forEach((project, idx) => {
      project.style.display = idx === index ? 'block' : 'none';
      project.classList.toggle('active', idx === index);
      if (idx === index) {
        showImage(idx, currentImages[idx]); 
      }
    });
  }

  function changeProject(direction) {
    currentProject += direction;
    if (currentProject >= projects.length) currentProject = 0;
    if (currentProject < 0) currentProject = projects.length - 1;
    showProject(currentProject);
  }

  function showImage(projectIndex, imageIndex) {
    let images = imageCarousels[projectIndex].querySelectorAll('.image-slide');
    images.forEach((img, idx) => {
      img.style.display = idx === imageIndex ? 'block' : 'none';
      img.classList.toggle('active', idx === imageIndex);
    });

    currentImages[projectIndex] = imageIndex;
  }

  function changeImage(projectIndex, direction) {
    let images = imageCarousels[projectIndex].querySelectorAll('.image-slide');
    let currentImage = currentImages[projectIndex]; 
    let nextImage = (currentImage + direction + images.length) % images.length;
    showImage(projectIndex, nextImage);
  }

  nextProjectBtn.addEventListener('click', () => changeProject(1));
  prevProjectBtn.addEventListener('click', () => changeProject(-1));

  showProject(currentProject);

  let prevImgBtns = document.querySelectorAll('.prev-img');
  let nextImgBtns = document.querySelectorAll('.next-img');
  
  prevImgBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => changeImage(idx, -1));
  });
  
  nextImgBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => changeImage(idx, 1));
  });
});
