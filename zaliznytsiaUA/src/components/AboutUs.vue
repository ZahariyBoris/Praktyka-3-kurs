<template>

  <div class="about-us">
    <section class="hero">
      <h1>About Us</h1>
      <p>
        Welcome to Залізниця UA! We are committed to making your railway travel
        safe, efficient, and enjoyable.
      </p>
    </section>

    <section class="content">
      <h2>Our Mission</h2>
      <p>
        Our mission is to connect cities and people across Ukraine by providing
        reliable, affordable, and high-quality railway services.
      </p>

      <h2>Our Team</h2>
      <p>
        We are a team of dedicated professionals who work tirelessly to ensure
        that you have the best travel experience. From our engineers to our
        customer service representatives, every member of our team plays a key
        role in achieving our goals.
      </p>
    </section>
  </div>

</template>

<script>

  export default {
    name: "AboutUs",
  };

</script>

<style scoped lang="scss">

  .about-us {
    padding: 2rem;
    font-family: Arial, sans-serif;

    .hero {
      text-align: center;
      padding: 2rem;
      background: linear-gradient(to bottom, #f0f0f0, #e0e0e0);
      border-radius: 8px;
      margin-bottom: 2rem;

      h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: #4c96af;
      }

      p {
        font-size: 1.2rem;
        color: #333;
      }
    }

    .content {
      h2 {
        font-size: 1.8rem;
        margin-top: 1.5rem;
        color: #4c96af;
      }

      p {
        font-size: 1.1rem;
        line-height: 1.6;
        color: #555;
        margin-top: 0.5rem;
      }
    }
  }

</style>