<template>

  <div class="hero" id="hero">
    <h1>Створюємо майбутнє разом</h1>
    <p>Дізнайтеся більше про наші послуги та пропозиції вже сьогодні.</p>
    <a href="#" class="btn"><router-link to="/ticket">Buy Tickets</router-link></a>
  </div>

</template>

<script>

  export default {
    name: "Home",
    mounted() {
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
  };

</script>

<style lang="scss">

  .hero {
    text-align: center;
    padding: 2rem;
    background-color: #f5f5f5;

    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.25rem;
      margin-bottom: 2rem;
    }

    .btn {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      background-color: #4c96af;
      color: white;
      text-decoration: none !important;
      border-radius: 0.5rem;

      &:hover {
        background-color: #0056b3;
        text-decoration: none;
      }

      a {
        text-decoration: none !important;
        color: inherit;
      }
    }
  }

</style>