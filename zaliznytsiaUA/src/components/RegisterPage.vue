<template>
  
  <div class="flex justify-center items-center h-screen bg-gray-100">
    <form @submit.prevent="register" class="bg-white p-8 rounded-lg shadow-md w-80">
      <h2 class="text-2xl font-semibold mb-6">Реєстрація</h2>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium mb-2">Логін (Email)</label>
        <input
          v-model="email"
          type="email"
          id="email"
          name="email"
          placeholder="Введіть email"
          required
          class="w-full p-3 text-sm border border-gray-300 rounded-md"
        />
      </div>
      <div class="mb-4">
        <label for="password" class="block text-sm font-medium mb-2">Пароль</label>
        <input
          v-model="password"
          type="password"
          id="password"
          name="password"
          placeholder="Введіть пароль"
          required
          class="w-full p-3 text-sm border border-gray-300 rounded-md"
        />
      </div>
      <button type="submit" class="w-full py-3 text-lg bg-green-500 text-white rounded-md hover:bg-green-700 transition duration-300">Зареєструватися</button>
      <div v-if="errorMessage" class="text-red-500 mt-4 text-center">
        {{ errorMessage }}
      </div>
      <div class="text-center mt-4">
        <p class="text-sm">Вже маєте акаунт?
          <router-link to="/login" class="text-blue-500 hover:underline">Увійдіть</router-link>
        </p>
      </div>
    </form>
  </div>

</template>

<script>

  import { ref } from 'vue';
  import { supabase } from '@/lib/supabaseClient';

  export default {
    setup() {
      const email = ref('');
      const password = ref('');
      const errorMessage = ref('');

      const register = async () => {
        const { error } = await supabase.auth.signUp({
          email: email.value,
          password: password.value,
        });
        if (error) {
          errorMessage.value = error.message;
        } else {
          window.location.href = '/your-tickets';
        }
      };

      return { email, password, register, errorMessage };
    },
  };

</script>