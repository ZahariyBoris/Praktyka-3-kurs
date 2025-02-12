<template>

  <div class="flex flex-col items-center p-8 space-y-8">
    <section class="text-center bg-gradient-to-b from-blue-400 to-blue-700 text-white p-8 rounded-lg w-full max-w-4xl">
      <h1 class="text-4xl font-bold">Про нас</h1>
      <p class="text-lg mt-4">Ласкаво просимо до Залізниця UA! Ми прагнемо зробити ваші подорожі безпечними, ефективними та приємними.</p>
    </section>

    <section class="max-w-4xl text-gray-700">
      <h2 class="text-2xl font-semibold text-blue-500 mt-6">Наша мета</h2>
      <p class="mt-2 text-lg leading-relaxed">
        Наша місія - з'єднувати міста та людей по всій Україні, надаючи надійні, доступні та якісні залізничні послуги. 
        Ми прагнемо просувати рішення для сталої мобільності, які сприяють економічному зростанню та екологічному добробуту нашої країни. 
        Ми прагнемо забезпечити безпечні, ефективні та комфортні подорожі для всіх пасажирів, сприяючи розвитку сполучень, які виходять за межі пунктів призначення.
      </p>

      <h2 class="text-2xl font-semibold text-blue-500 mt-6">Наша команда</h2>
      <p class="mt-2 text-lg leading-relaxed">
        Ми - команда відданих своїй справі професіоналів, які невтомно працюють, щоб забезпечити вам найкращі враження від подорожей. 
        Від наших інженерів до представників служби підтримки клієнтів - кожен член нашої команди відіграє ключову роль у досягненні наших цілей.
      </p>
      <p class="mt-2 text-lg leading-relaxed">
        Наша команда цінує постійне вдосконалення та інновації. Ми інвестуємо в регулярне навчання та розвиток, щоб бути попереду галузевих тенденцій 
        та технологічного прогресу. Керуючись пристрастю та професіоналізмом, ми пишаємося тим, що обслуговуємо мільйони пасажирів щороку, 
        роблячи кожну подорож незабутньою та змістовною.
      </p>
    </section>

    <router-link to="/support" class="bg-blue-500 text-white py-3 px-6 rounded-lg transition-transform transform hover:bg-blue-600 hover:scale-105">Напишіть нам!</router-link>
  </div>

</template>

<script>

  export default {
    name: "AboutUs",
  };

</script>