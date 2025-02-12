<template>
  
  <div class="flex flex-col items-center p-8 space-y-8">
    <h1 class="text-3xl font-bold text-center text-gray-800">Підтримка</h1>

    <form ref="form" @submit.prevent="sendEmail" class="w-full max-w-md bg-white p-6 rounded-lg shadow-lg space-y-4">
      <label class="block font-semibold text-gray-700">Ім'я</label>
      <input type="text" name="user_name" required class="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400">
      
      <label class="block font-semibold text-gray-700">Email</label>
      <input type="email" name="user_email" required class="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400">
      
      <label class="block font-semibold text-gray-700">Ваше повідомлення</label>
      <textarea name="message" required class="w-full p-2 border border-gray-300 rounded resize-none focus:ring-2 focus:ring-blue-400"></textarea>
      
      <input type="submit" value="Надіслати" class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 cursor-pointer transition duration-300">
    </form>

    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" @click="closeModal">
      <div class="bg-white p-6 rounded-lg shadow-lg text-center" @click.stop>
        <p class="text-lg font-semibold text-gray-800">Повідомлення надіслано!</p>
        <button @click="closeModal" class="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Закрити</button>
      </div>
    </div>
  </div>

</template>

<script>

  import emailjs from '@emailjs/browser';

  export default {
    data() {
      return {
        showModal: false,
      };
    },
    methods: {
      sendEmail() {
        emailjs
          .sendForm('service_mf2g87k', 'template_5y8as19', this.$refs.form, {
            publicKey: 'JQEth3m6_jT50Z7mO',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              this.showModal = true;
              setTimeout(this.closeModal, 3000);
              this.$refs.form.reset();
            },
            (error) => {
              console.log('FAILED...', error.text);
            }
          );
      },
      closeModal() {
        this.showModal = false;
      },
    },
  };

</script>