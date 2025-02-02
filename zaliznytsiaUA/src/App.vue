<template>

  <div id="app">
    <header class="header">
      <div class="container">
        <h1 class="logo">Залізниця UA</h1>
        <button class="burger" @click="toggleMenu">&#9776;</button>
        <nav :class="['nav', { 'nav--open': isMenuOpen }]">
          <ul class="nav__list">
            <li class="nav__item"><router-link to="/">Головна</router-link></li>
            <li class="nav__item"><router-link to="/about">Про нас</router-link></li>
            <li class="nav__item"><router-link to="/ticket">Купити квиток</router-link></li>
            <li class="nav__item"><router-link to="/support">Підтримка</router-link></li>
            <li class="nav__item"><router-link to="/your-tickets">Ваші квитки</router-link></li>
          </ul>
        </nav>
      </div>
    </header>

    <main class="main-content">
      <router-view></router-view>
    </main>

    <footer class="footer">
      <div class="container">
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

<style lang="scss">

  $main-color: #2e3a59;
  $accent-color: #e3e3e3;
  $light-color: #f4f4f9;

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  html, body {
    height: 100%;
  }

  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
  }

  .header {
    background-color: $main-color;
    color: white;
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 10;

    .logo {
      font-size: 1.8rem;
      font-weight: bold;
    }

    .burger {
      background: none;
      border: none;
      color: white;
      font-size: 1.8rem;
      cursor: pointer;
      display: none;
    }

    .nav {
      display: flex;
      justify-content: center;

      &__list {
        list-style: none;
        display: flex;
        gap: 1.5rem;
      }

      &__item a {
        color: white;
        text-decoration: none;
        padding: 0.5rem 1rem;
        border-radius: 8px;

        &:hover {
          background-color: $accent-color;
          color: black;
        }
      }
    }
  }

  .main-content {
    flex-grow: 1;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .footer {
    background-color: $main-color;
    color: white;
    text-align: center;
    padding: 1rem 0;
    margin-top: auto;
  }

  @media (max-width: 768px) {
    .header {
      .burger {
        display: block;
      }

      .nav {
        display: none;
        flex-direction: column;
        align-items: center;

        &--open {
          display: flex;
          background-color: $main-color;
          padding: 1rem 0;
        }

        &__list {
          flex-direction: column;
          gap: 0.5rem;
        }
      }
    }
  }

  @media (max-width: 465px) {
    .header {
      .nav {
        &--open {
          font-size: 0.9rem;
        }
      }
    }
  }

</style>