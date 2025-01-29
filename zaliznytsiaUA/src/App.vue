<template>

  <header>
    <h1>Залізниця UA</h1>
  </header>

  <nav>
    <a href="#">Головна</a>
    <a href="#">Про нас</a>
    <a href="#">Квитки</a>
    <a href="#">Увійти</a>
  </nav>

  <div class="hero" id="hero">
    <h1>Створюємо майбутнє разом</h1>
    <p>Дізнайтеся більше про наші послуги та пропозиції вже сьогодні.</p>
    <a href="#" class="btn">Дізнатися більше</a>
  </div>

  <footer>
    <p>&copy; 2025 Залізниця UA. Всі права захищені.</p>
  </footer>

</template>

<script>

  export default {
    mounted() {
      document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
            targetElement.scrollIntoView ({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });

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
    }
  }

</script>

<style lang="scss">

  @import './assets/styles.scss'

</style>