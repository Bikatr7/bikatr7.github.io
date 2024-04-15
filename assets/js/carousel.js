document.addEventListener('DOMContentLoaded', function() {
  const projects = document.querySelectorAll('.project-slide');
  const imageCarousels = document.querySelectorAll('.image-carousel');
  const nextProjectBtn = document.querySelector('.next-project');
  const prevProjectBtn = document.querySelector('.prev-project');
  const prevImgBtns = document.querySelectorAll('.prev-img');
  const nextImgBtns = document.querySelectorAll('.next-img');

  let currentProject = 0;
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
    currentProject = (currentProject + direction + projects.length) % projects.length;
    showProject(currentProject);
  }

  function showImage(projectIndex, imageIndex) {
    const images = imageCarousels[projectIndex].querySelectorAll('.image-slide');
    images.forEach((img, idx) => {
      img.style.display = idx === imageIndex ? 'block' : 'none';
      img.classList.toggle('active', idx === imageIndex);
    });

    currentImages[projectIndex] = imageIndex;
  }

  function changeImage(projectIndex, direction) {
    const images = imageCarousels[projectIndex].querySelectorAll('.image-slide');
    const currentImage = currentImages[projectIndex]; 
    const nextImage = (currentImage + direction + images.length) % images.length;
    showImage(projectIndex, nextImage);
  }

  nextProjectBtn.addEventListener('click', () => changeProject(1));
  prevProjectBtn.addEventListener('click', () => changeProject(-1));

  showProject(currentProject);

  prevImgBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => changeImage(idx, -1));
  });
  
  nextImgBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => changeImage(idx, 1));
  });

    // Helper function to detect swipe direction
    function detectSwipe(el, callback) {
      let touchstartX = 0;
      let touchendX = 0;
  
      const threshold = 100; // Minimum distance of swipe to trigger the callback
  
      el.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
      }, false);
  
      el.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        handleSwipeGesture();
      }, false);
  
      function handleSwipeGesture() {
        if (touchendX + threshold < touchstartX) {
          callback('left');
        }
        if (touchendX > touchstartX + threshold) {
          callback('right');
        }
      }
    }
  
    projects.forEach((project, index) => {
      detectSwipe(project, (direction) => {
        if (direction === 'left') {
          changeProject(1);
        } else if (direction === 'right') {
          changeProject(-1);
        }
      });
    });

});