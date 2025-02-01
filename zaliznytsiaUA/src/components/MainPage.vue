<template>

  <div class="hero" id="hero">
    <h1>Створюємо майбутнє разом</h1>
    <p>Дізнайтеся більше про наші послуги та пропозиції вже сьогодні.</p>
    <router-link to="/ticket" class="btn">Buy Tickets</router-link>
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
    min-height: 80vh;
    background: linear-gradient(to bottom, #4c96af, #0056b3);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
    gap: 1rem;

    h1 {
      font-size: 3rem;
      margin: 0;
    }

    p {
      font-size: 1.5rem;
      max-width: 600px;
    }

    .btn {
      background-color: #fff;
      color: #333;
      padding: 1rem 2rem;
      border-radius: 1rem;
      transition: all 0.3s ease;
      text-decoration: none;

      &:hover {
        background-color: #c3c3c3;
        transform: scale(1.05);
      }
    }
  }

</style>