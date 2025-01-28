// Плавний скрол для навігації
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Динамічна зміна тексту в героїчному блоці
const heroTexts = [
    "Швидкі перевезення для кожного!",
    "Квитки за чудовими цінами",
    "Купуйте вже зараз!"
];
let textIndex = 0;
const heroHeading = document.querySelector('.hero h1');

setInterval(() => {
    textIndex = (textIndex + 1) % heroTexts.length;
    heroHeading.textContent = heroTexts[textIndex];
}, 3000);