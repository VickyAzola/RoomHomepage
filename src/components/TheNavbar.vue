<script setup>
import { ref } from '@vue/reactivity'
import Hamburger from '/icon-hamburger.svg'
import Close from '/icon-close.svg'
import Logo from '/logo.svg'


const NavLinks = [
    {id: 0, name: "home", link: "#"},
    {id: 1, name: "shop", link: "#"},
    {id: 2, name: "about", link: "#"},
    {id: 3, name: "contact", link: "#"},
]

let open = ref(false)

function menuOpen() {
  open.value = !open.value
}

</script>

<template>
    <div class="bg-transparent h-24 lg:h-32 fixed top-0 z-20 w-full md:flex md:pl-6">

        <div class="h-full px-8 flex items-center justify-center">
            <button @click="menuOpen()" class="absolute z-20 top-0 left-0 my-auto inset-y-0 pl-6 md:hidden">
                <img :src="[open ? Close : Hamburger]" alt="Open and Close the Navigation menu" />
            </button>
            <a href="#">
              <img :src=Logo alt="Logo" />
            </a>
        </div>

        <nav aria-label="Top Navigation" id="topNav">
          <div 
            @click="menuOpen()"
            class="absolute z-10 w-full min-h-screen bg-VeryDarkGray/50 transition-all"
            :class="[open ? 'block' : 'hidden']"
          >
          </div>
          <ul
            class="bg-white flex items-center justify-end gap-x-8 px-6 absolute w-full h-full ease-in-out duration-500
            md:static md:transition-none md:bg-transparent md:text-white"
              :class="[open ? 'top-0' : 'top-[-100%]']"
            >
              <li class="font-semibold"
                v-for="link in NavLinks" 
              >
                <a :href="link.link" class="flex flex-col items-end"> {{ link.name }} 
                  <span class="line scale-up-horizontal-center"></span>
                </a>
            </li>
          </ul>
        </nav>

    </div>
</template>

<style scoped>
.line {
  width: 70%;
  height: 1.5px;
  background-color: transparent;
}

li:hover .line {
  display: inline-block;
  width: 70%;
  height: 1.5px;
  background-color: white;
}

li:hover .scale-up-horizontal-center {
  animation: scale-up-horizontal-center 0.4s 
} 

@keyframes scale-up-horizontal-center {
  0% {
    transform: scaleX(.4);
    transform-origin: center
  }
  100% {
    transform: scaleX(1);
    transform-origin: center
  }
}
</style>
