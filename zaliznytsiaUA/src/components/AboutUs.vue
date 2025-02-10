<template>

  <div class="flex flex-col items-center p-8 space-y-8">
    <section class="text-center bg-gradient-to-b from-blue-400 to-blue-700 text-white p-8 rounded-lg w-full max-w-4xl">
      <h1 class="text-4xl font-bold">About Us</h1>
      <p class="text-lg mt-4">Welcome to Залізниця UA! We are committed to making your railway travel safe, efficient, and enjoyable.</p>
    </section>

    <section class="max-w-4xl text-gray-700">
      <h2 class="text-2xl font-semibold text-blue-500 mt-6">Our Mission</h2>
      <p class="mt-2 text-lg leading-relaxed">
        Our mission is to connect cities and people across Ukraine by providing reliable, affordable, and high-quality railway services. 
        We strive to promote sustainable mobility solutions that contribute to the economic growth and environmental well-being of our country. 
        Our commitment is to ensure safe, efficient, and comfortable travel for all passengers, fostering connections that go beyond destinations.
      </p>

      <h2 class="text-2xl font-semibold text-blue-500 mt-6">Our Team</h2>
      <p class="mt-2 text-lg leading-relaxed">
        We are a team of dedicated professionals who work tirelessly to ensure that you have the best travel experience. 
        From our engineers to our customer service representatives, every member of our team plays a key role in achieving our goals.
      </p>
      <p class="mt-2 text-lg leading-relaxed">
        Our team values continuous improvement and innovation. We invest in regular training and development to stay ahead of industry trends 
        and technological advancements. Driven by passion and professionalism, we are proud to serve millions of passengers every year, 
        making every journey memorable and meaningful.
      </p>
    </section>

    <router-link to="/support" class="bg-blue-500 text-white py-3 px-6 rounded-lg transition-transform transform hover:bg-blue-600 hover:scale-105">Contact Us</router-link>
  </div>

</template>

<script>

  export default {
    name: "AboutUs",
  };

</script>