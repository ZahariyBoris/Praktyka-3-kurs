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
        reliable, affordable, and high-quality railway services. We strive to promote
        sustainable mobility solutions that contribute to the economic growth and
        environmental well-being of our country. Our commitment is to ensure safe,
        efficient, and comfortable travel for all passengers, fostering connections
        that go beyond destinations.
      </p>

      <h2>Our Team</h2>
      <p>
        We are a team of dedicated professionals who work tirelessly to ensure
        that you have the best travel experience. From our engineers to our
        customer service representatives, every member of our team plays a key
        role in achieving our goals. Our train operators, maintenance crews, and
        support staff collaborate seamlessly to maintain the highest standards of
        safety, punctuality, and service excellence.
      </p>
      <p>
        Our team values continuous improvement and innovation. We invest in regular
        training and development to stay ahead of industry trends and technological
        advancements. Driven by passion and professionalism, we are proud to serve
        millions of passengers every year, making every journey memorable and meaningful.
      </p>
    </section>

  </div>
  <router-link to="/support" class="btn">Contact Us</router-link>

</template>

<script>

  export default {
    name: "AboutUs",
  };

</script>

<style scoped lang="scss">

  $main-col: #4c96af;

  .about-us {
    padding: 2rem;
    font-family: Arial, sans-serif;

    .hero {
      text-align: center;
      padding: 2rem;
      background: linear-gradient(to bottom, #4c96af, #0056b3);
      border-radius: 8px;
      margin-bottom: 2rem;

      h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: #ffffff;
      }

      p {
        font-size: 1.2rem;
        color: #ffffff;
      }
    }

    .content {
      h2 {
        font-size: 1.8rem;
        margin-top: 1.5rem;
        color: $main-col;
      }

      p {
        font-size: 1.1rem;
        line-height: 1.6;
        color: #555;
        margin-top: 0.5rem;
      }
    }
  }

  .btn {
    background-color: $main-col;
    color: #ffffff;
    padding: 1rem 2rem;
    border-radius: 1rem;
    width: 145px;
    margin-left: 32px;
    transition: all 0.3s ease;
    text-decoration: none;

    &:hover {
      background-color: #0056b3;
      transform: scale(1.05);
    }
  }

</style>