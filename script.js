// Создание летающих сердечек
function createHearts() {
    const container = document.body;
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '100vh';
        heart.style.fontSize = Math.random() * 1 + 1.5 + 'em';
        const duration = 3 + Math.random() * 2;
        heart.style.animation = `heartFloat ${duration}s ease-in forwards`;
        container.appendChild(heart);

        setTimeout(() => heart.remove(), duration * 1000);
    }
}

// Intersection Observer для анимаций при скролле
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Наблюдаем за элементами
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in, .gallery-item');
    elements.forEach(el => {
        observer.observe(el);
    });

    // Кнопка celebrate
    const celebrationBtn = document.getElementById('celebrationBtn');
    if (celebrationBtn) {
        celebrationBtn.addEventListener('click', createHearts);
    }
});

// Плавный скролл при клике на навигацию
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Нежные летающие сердечки при клике
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') return;
    
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '💕';
    heart.style.left = e.clientX + 'px';
    heart.style.top = e.clientY + 'px';
    heart.style.fontSize = '1.2em';
    heart.style.animation = `heartFloat 2s ease-in forwards`;
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
});

// Приветственное сообщение
console.log('💕 Welcome to Our Love Story! 💕');
