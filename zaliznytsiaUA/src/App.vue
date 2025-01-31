<template>

  <div id="app">
    <header>
      <h1>Залізниця UA</h1>
      <nav>
        <div class="right">
          <ul><router-link to="/">Home</router-link></ul>
          <ul><router-link to="/about">About Us</router-link></ul>
          <ul><router-link to="/ticket">Buy Tickets</router-link></ul>
          <ul><router-link to="/support">Tech Support</router-link></ul>
        </div>

        <div class="left">
          <ul><router-link to="/your-tickets">Your Tickets</router-link></ul>
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
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    padding: 0.5rem 1rem;

    .left {
      display: flex;
      gap: 1rem;
    }

    .right {
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

  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem;
    background: linear-gradient(to bottom, #f0f0f0, #e0e0e0);
    height: 400px;

    h1 {
      margin: 0 0 1rem;
      font-size: 2.5rem;
    }

    p {
      font-size: 1.2rem;
      margin: 0 0 1.5rem;
    }

    .btn {
      background-color: $main-color;
      color: white;
      padding: 0.75rem 1.5rem;
      text-decoration: none;
      border-radius: 5px;
      transition: background-color 0.3s;

      &:hover {
        background-color: #256a82;
      }
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
    text-decoration: none;
  }

</style>