// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Change header background color on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        header.style.background = 'linear-gradient(45deg, #ff4757, #ffa502)';
    } else {
        header.style.background = 'linear-gradient(45deg, #ff6a00, #ee0979)';
    }
});

// Random color for section background on load
function getRandomColor() {
    const colors = ['#ffa502', '#2ed573', '#1e90ff', '#ff4757', '#ff6b81', '#70a1ff'];
    return colors[Math.floor(Math.random() * colors.length)];
}

document.querySelectorAll('section').forEach(section => {
    section.style.backgroundColor = getRandomColor();
});

// Add a floating effect to images on hover
document.querySelectorAll('.image-grid img').forEach(img => {
    img.addEventListener('mouseenter', function() {
        this.style.transition = 'transform 0.5s ease';
        this.style.transform = 'translateY(-10px)';
    });

    img.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

