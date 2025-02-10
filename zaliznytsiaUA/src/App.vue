<template>
  
  <div id="app" class="flex flex-col min-h-screen">
    <header class="bg-blue-900 text-white py-4 sticky top-0 z-10">
      <div class="container mx-auto flex justify-between items-center px-4">
        <h1 class="text-2xl font-bold">Залізниця UA</h1>
        <button class="text-2xl md:hidden" @click="toggleMenu">&#9776;</button>
        <nav :class="['absolute md:relative top-full left-0 w-full md:w-auto bg-blue-900 md:bg-transparent md:flex md:items-center', { 'block': isMenuOpen, 'hidden': !isMenuOpen }]">
          <ul class="flex flex-col md:flex-row md:space-x-6 text-center md:text-left">
            <li class="py-2 md:py-0"><router-link class="block px-4 py-2 hover:bg-gray-200 hover:text-black rounded-md" to="/">Головна</router-link></li>
            <li class="py-2 md:py-0"><router-link class="block px-4 py-2 hover:bg-gray-200 hover:text-black rounded-md" to="/about">Про нас</router-link></li>
            <li class="py-2 md:py-0"><router-link class="block px-4 py-2 hover:bg-gray-200 hover:text-black rounded-md" to="/ticket">Купити квиток</router-link></li>
            <li class="py-2 md:py-0"><router-link class="block px-4 py-2 hover:bg-gray-200 hover:text-black rounded-md" to="/support">Підтримка</router-link></li>
            <li class="py-2 md:py-0"><router-link class="block px-4 py-2 hover:bg-gray-200 hover:text-black rounded-md" to="/your-tickets">Ваші квитки</router-link></li>
          </ul>
        </nav>
      </div>
    </header>
    
    <main class="flex-grow flex flex-col justify-center py-8">
      <router-view></router-view>
    </main>
    
    <footer class="bg-blue-900 text-white text-center py-4 mt-auto">
      <div class="container mx-auto px-4">
        <p>&copy; 2025 Залізниця UA. Всі права захищені.</p>
      </div>
    </footer>
  </div>

</template>

<script>

  export default {
    name: "App",
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
    },
  };

</script>