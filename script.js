/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    const cube = document.querySelector('.cube');
    let isDragging = false;
    let startX, startY;
    let rotationX = -30, rotationY = -45;

    const startDrag = (event) => {
        isDragging = true;
        cube.style.animation = 'none'; // Pause the rotation animation

        startX = event.clientX || event.touches[0].clientX;
        startY = event.clientY || event.touches[0].clientY;
    };

    const onDrag = (event) => {
        if (!isDragging) return;

        const currentX = event.clientX || event.touches[0].clientX;
        const currentY = event.clientY || event.touches[0].clientY;

        const deltaX = currentX - startX;
        const deltaY = currentY - startY;

        rotationX += deltaY * 0.5;
        rotationY += deltaX * 0.5;

        cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

        startX = currentX;
        startY = currentY;
    };

    const stopDrag = () => {
        isDragging = false;
        cube.style.animation = ''; // Resume the rotation animation
    };

    // Mouse events
    cube.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', stopDrag);

    // Touch events
    cube.addEventListener('touchstart', startDrag);
    document.addEventListener('touchmove', onDrag);
    document.addEventListener('touchend', stopDrag);
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  function handleScroll() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const windowHeight = window.innerHeight;

    animatedElements.forEach(element => {
        const rect = element.getBoundingClientRect();

        // Check if the element is visible in the viewport
        if (rect.top < windowHeight && rect.bottom > 0) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll); // Trigger on page load in case any element is already in view


function handleScroll() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-on-scroll-right');
    const windowHeight = window.innerHeight;

    animatedElements.forEach(element => {
        const rect = element.getBoundingClientRect();

        // Check if the element is visible in the viewport
        if (rect.top < windowHeight && rect.bottom > 0) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll); // Trigger on page load in case any element is already in view
