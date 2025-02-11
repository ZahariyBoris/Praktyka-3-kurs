<template>
  
  <div class="flex justify-center items-center h-screen bg-gray-100">
    <form @submit.prevent="login" class="bg-white p-8 rounded-lg shadow-md w-80">
      <h2 class="text-2xl font-semibold mb-6">Вхід</h2>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium mb-2">Логін</label>
        <input
          v-model="email"
          type="text"
          id="email"
          name="email"
          placeholder="Введіть логін"
          required
          class="w-full p-3 text-sm border border-gray-300 rounded-md"
        />
      </div>
      <div class="mb-6">
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
      <button type="submit" class="w-full py-3 text-lg bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300">Увійти</button>
      <div v-if="errorMessage" class="text-red-500 mt-4 text-center">
        {{ errorMessage }}
      </div>
    </form>
  </div>

</template>

<script>

  import { ref, onMounted } from 'vue';
  import { supabase } from '@/lib/supabaseClient';

  export default {
    setup() {
      const email = ref('');
      const password = ref('');
      const errorMessage = ref('');

      const login = async () => {
        const { error } = await supabase.auth.signInWithPassword({
          email: email.value,
          password: password.value,
        });
        if (error) {
          errorMessage.value = error.message;
        } else {
          window.location.href = '/your-tickets';
        }
      };

      onMounted(async () => {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
          window.location.href = '/your-tickets';
        }
      });

      return { email, password, login, errorMessage };
    },
  };

</script>