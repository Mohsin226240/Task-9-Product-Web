document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });    
    const slide = document.querySelector('.carousel-slide');
    if (slide) { 
        const images = document.querySelectorAll('.carousel-image');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const dotsContainer = document.getElementById('carouselDots');

        let currentIndex = 0;
        const totalImages = images.length;        
        for (let i = 0; i < totalImages; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.addEventListener('click', () => {
                goToSlide(i);
            });
            dotsContainer.appendChild(dot);
        }
        const dots = document.querySelectorAll('.dot');
        
        function updateDots() {
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }
        function goToSlide(index) {
            if (index < 0) {
                currentIndex = totalImages - 1;
            } else if (index >= totalImages) {
                currentIndex = 0;
            } else {
                currentIndex = index;
            }
            const offset = -currentIndex * 100;
            slide.style.transform = `translateX(${offset}%)`;
            updateDots();
        }
        nextBtn.addEventListener('click', () => {
            goToSlide(currentIndex + 1);
        });
        prevBtn.addEventListener('click', () => {
            goToSlide(currentIndex - 1);
        });    
        setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 5000); 
        goToSlide(0);
    }
});