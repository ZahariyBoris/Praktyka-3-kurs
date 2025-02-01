<template>

  <div>
    <h1 class="main-text">Contact Us:</h1>

    <form ref="form" @submit.prevent="sendEmail" class="contact-form">
      <label>Name</label>
      <input type="text" name="user_name" required>
      <label>Email</label>
      <input type="email" name="user_email" required>
      <label>Message</label>
      <textarea name="message" required></textarea>
      <input type="submit" value="Send">
    </form>

    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <p>Message sent successfully!</p>
        <button @click="closeModal">Close</button>
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

<style lang="scss">

  .main-text {
    font-size: 36px;
    display: flex;
    justify-content: center;
  }

  .contact-form {
    max-width: 400px;
    margin: 40px auto;
    padding: 20px;
    padding-right: 40px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    label {
      display: block;
      margin-bottom: 8px;
      font-weight: bold;
      color: #333;
    }

    input[type='text'],
    input[type='email'],
    textarea {
      width: 100%;
      padding: 10px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 14px;
      transition: border-color 0.3s;

      &:focus {
        border-color: #007bff;
        outline: none;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
      }
    }

    textarea {
      resize: vertical;
      min-height: 100px;
    }

    input[type='submit'] {
      background-color: #4c96af;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      transition: all 0.3s ease;

      &:hover {
        background-color: #0056b3;
        transform: scale(1.05);
      }
    }
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal-content {
    background: white;
    padding: 20px 30px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    p {
      font-size: 18px;
      margin-bottom: 15px;
    }

    button {
      background-color: #4c96af;
      color: white;
      padding: 8px 16px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #0056b3;
      }
    }
  }

</style>