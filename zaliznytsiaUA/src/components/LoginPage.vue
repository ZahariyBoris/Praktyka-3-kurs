<template>
  <div class="flex justify-center items-center h-screen bg-gray-100">
    <form action="/login" method="POST" class="bg-white p-8 rounded-lg shadow-md w-80">
      <h2 class="text-2xl font-semibold mb-6">Вхід</h2>
      <div class="mb-4">
        <label for="username" class="block text-sm font-medium mb-2">Логін</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Введіть логін"
          required
          class="w-full p-3 text-sm border border-gray-300 rounded-md"
        />
      </div>
      <div class="mb-6">
        <label for="password" class="block text-sm font-medium mb-2">Пароль</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Введіть пароль"
          required
          class="w-full p-3 text-sm border border-gray-300 rounded-md"
        />
      </div>
      <button type="submit" class="w-full py-3 text-lg bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300">Увійти</button>
    </form>
  </div>
</template>

<script>

</script>
