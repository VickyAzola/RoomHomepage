<script setup>
import { ref } from '@vue/reactivity'

    const carousel = [
        {
            id: 0, 
            urlMobile: '/mobile-image-hero-1.jpg',
            urlDesktop: '/desktop-image-hero-1.jpg',
            alt: "Two white chairs and a table with a plant on top",
            title: 'Discover innovative ways to decorate',
            description: ' We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
        },
        {
            id: 1, 
            urlMobile: '/mobile-image-hero-2.jpg',
            urlDesktop: '/desktop-image-hero-2.jpg',
            alt: "A black chair",
            title: 'We are available all across the globe',
            description: 'With stores all over the world, its easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Dont hesitate to contact us today.'
        },
        {
            id: 2, 
            urlMobile: '/mobile-image-hero-3.jpg',
            urlDesktop: '/desktop-image-hero-3.jpg',
            alt: "three chairs",
            title: 'Manufactured with the best materials',
            description: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
        },
    ]

    const currentImage = ref(0)
    const length = carousel.length

    function nextImg() {
        currentImage.value = currentImage.value === length - 1 ? 0 : currentImage.value + 1
    }

    function prevImg() {
        currentImage.value = currentImage.value === 0 ? length - 1 : currentImage.value - 1
    }

</script>

<template>
    <section v-for="(image, index) in carousel" :key="image.id">
        <div v-if="index == currentImage" class="lg:flex overflow-hidden">
            <div class="relative">
                <img 
                    class="min-w-[100vw] lg:hidden h-auto" 
                    :src=image.urlMobile 
                    :alt=image.alt
                />
                <img 
                    class="min-w-[60vw] hidden lg:block h-full" 
                    :src=image.urlDesktop
                    :alt=image.alt
                />
                <div class="absolute right-0 lg:right-[-8rem] bottom-0 z-10 bg-black">
                    <button @click="nextImg" aria-label="next item" class="px-5 py-5 bg-black hover:bg-VeryDarkGray hover:transition-all">
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fill-rule="evenodd"/>
                        </svg>
                    </button>
                    <button @click="prevImg" aria-label="previous item" class="px-5 py-5 bg-black hover:bg-VeryDarkGray hover:transition-all">
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fill-rule="evenodd"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="px-8 py-12 lg:px-16 h-full lg:m-auto lg:max-w-[33rem]">
                <h1 class="font-semibold text-4xl lg:text-[2.8rem]">
                    {{ image.title }}
                </h1>
                <p class="text-DarkGray my-4 text-sm">
                    {{ image.description }}
                </p>
                <a href="" class="group hover:cursor-pointer hover:text-DarkGray hover:transition-all py-4 uppercase font-bold tracking-[.8rem] flex items-center gap-x-5">
                    Shop now
                    <svg class="fill-black group-hover:fill-DarkGray" width="40" height="12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill-rule="nonzero"/>
                    </svg>
                </a>
            </div>
        </div>
    </section>
</template>
