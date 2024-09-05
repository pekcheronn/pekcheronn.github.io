/* script.js */
document.addEventListener('mousemove', function(event) {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
    
    const gradientBackground = document.querySelector('.gradient-background');
    
    gradientBackground.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
});
