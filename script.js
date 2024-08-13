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
