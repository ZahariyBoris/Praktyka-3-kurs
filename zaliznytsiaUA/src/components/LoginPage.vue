<template>

  <div class="login-container">
    <form action="/login" method="POST" class="login-form">
      <h2>Вхід</h2>
      <div class="input-group">
        <label for="username">Логін</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Введіть логін"
          required
        />
      </div>
      <div class="input-group">
        <label for="password">Пароль</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Введіть пароль"
          required
        />
      </div>
      <button type="submit" class="login-btn">Увійти</button>
    </form>
  </div>

</template>

<script>

</script>

<style lang="scss">

  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f9;
  }

  .login-form {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 300px;
  }

  .input-group {
    margin-bottom: 15px;
  }

  .input-group label {
    display: block;
    font-size: 14px;
    margin-bottom: 5px;
  }

  .input-group input {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .login-btn {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    background-color: #4c96af;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .login-btn:hover {
    background-color: #0056b3;
  }

</style>