<template>

  <div id="app">
    <header>
      <h1>Залізниця UA</h1>
      <nav>
        <button class="burger" @click="toggleMenu">&#9776;</button>
        <div :class="['menu', { 'menu--open': isMenuOpen }]">
          <div class="right">
            <ul><router-link to="/">Home</router-link></ul>
            <ul><router-link to="/about">About Us</router-link></ul>
            <ul><router-link to="/ticket">Buy Tickets</router-link></ul>
            <ul><router-link to="/support">Tech Support</router-link></ul>
          </div>

          <div class="left">
            <ul><router-link to="/your-tickets">Your Tickets</router-link></ul>
          </div>
        </div>
      </nav>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer>
      <p>&copy; 2025 Залізниця UA. Всі права захищені.</p>
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

<style lang="scss">

  $main-color: #4c96af;

  body {
    margin: 0;
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  header {
    background-color: $main-color;
    color: white;
    padding: 1rem;
    text-align: center;
  }

  nav {
    display: flex;
    flex-direction: column;
    background-color: #333;
    padding: 0.5rem 1rem;
    position: relative;

    .burger {
      background: none;
      border: none;
      color: white;
      font-size: 1.5rem;
      cursor: pointer;
      display: none;
    }

    .menu {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .left, .right {
        display: flex;
        gap: 1rem;
      }

      a {
        color: white;
        text-decoration: none;
        padding: 0.5rem 1rem;

        &:hover {
          background-color: #555;
        }
      }
    }

    .menu--open {
      display: flex;
      flex-direction: column;
    }
  }

  #app {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  main {
    flex-grow: 1;
  }

  footer {
    text-align: center;
    background-color: #333;
    color: white;
    padding: 1rem 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  @media (max-width: 768px) {
    nav {
      .burger {
        display: block;
      }

      .menu {
        display: none;
      }

      .menu--open {
        display: flex;
        flex-direction: column;
      }

      .left, .right {
        flex-direction: column;
      }
    }
  }

</style>