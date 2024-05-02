<script setup>
import TheNavbar from './components/TheNavbar.vue';
import Carousel from './components/Carousel.vue';
import TheCredits from './components/TheCredits.vue';
</script>

<template>
  <header>
    <TheNavbar />
    <Carousel />
  </header>
  <main>
    <section class="lg:flex">
      <img class="w-full lg:w-[30%]" src="/image-about-dark.jpg" alt="two black chairs and a round table">
      <div class="px-8 lg:px-12 py-12 lg:w-[40%] lg:m-auto">
        <h1 class="font-bold uppercase tracking-[.17rem] text-xl">About our furniture</h1>
        <p class="text-DarkGray mt-4 text-sm">
          Our multifunctional collection blends design and function to suit your individual taste.
          Make each room unique, or pick a cohesive theme that best express your interests and what
          inspires you. Find the furniture pieces you need, from traditional to contemporary styles
          or anything in between. Product specialists are available to help you create your dream space.
        </p>
        <div class="hidden lg:block">
          <TheCredits 
            linkFrontendMentor="https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq"
            linkGithub="https://github.com/VickyAzola/RoomHomepage"
          />
        </div>
      </div>
      <img class="w-full lg:w-[30%]" src="/image-about-light.jpg" alt="a white chair">
    </section>
  </main>
  <footer class="my-2 lg:hidden">
    <TheCredits 
      linkFrontendMentor="https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq"
      linkGithub="https://github.com/VickyAzola/RoomHomepage"
    />
  </footer>
  


</template>

<style scoped>

</style>
