<template>
  
  <div class="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-b from-blue-400 to-blue-700 text-white text-center p-8 space-y-4">
    <h1 class="text-4xl font-bold" id="hero-heading">Створюємо майбутнє разом</h1>
    <p class="text-lg max-w-xl">Дізнайтеся більше про наші послуги та пропозиції вже сьогодні.</p>
    <router-link to="/ticket" class="bg-white text-gray-800 py-3 px-6 rounded-lg transition-transform transform hover:bg-gray-300 hover:scale-105">Купити квиток</router-link>
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
      const heroHeading = document.getElementById("hero-heading");
      
      setInterval(() => {
        textIndex = (textIndex + 1) % heroTexts.length;
        heroHeading.textContent = heroTexts[textIndex];
      }, 3000);
    }
  };

</script>