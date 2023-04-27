<template>
    <div class="py-16 pl-16">
        <div class="flex items-start justify-between transition-all duration-300" :class="{ 'hidden' : currentSlide !== 0 }">
            <div class="mr-4 relative">
                <div class="ellipse ellipse-cyan"></div>
                <h2 class="text-6xl font-medium mt-6 mb-16 relative">Добро пожаловать <br> <span class="ml-3">в Centras iHub!</span></h2>
                <p class="leading-[18px] max-w-[540px] font-medium relative">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel justo tempor ante elementum lacinia eget eget ex. Sed aliquet erat eget pellentesque gravida. Aliquam vulputate id augue in egestas. Quisque pellentesque purus arcu, vel mattis quam ultricies semper. Nulla facilisi. Donec placerat suscipit felis nec porta. Nullam tristique, enim eu accumsan consequat, dolor sem commodo arcu, porta fringilla turpis ex nec velit. Morbi venenatis mollis lectus, nec consectetur elit ultricies non. Nunc in felis non nibh venenatis gravida in at lacus. Aliquam dapibus tempor pharetra. Maecenas nisl mi, ultrices eu consequat ut, eleifend ac mi. Phasellus metus justo, hendrerit sit amet ornare sit amet, commodo sit amet leo. Duis in euismod felis.</p>
            </div>
            <img class="w-96 relative" src="../../assets/images/welcome_ellipse.svg" alt="welcome_ellipse">
            <div class="swiper-button-next right-12" @click="currentSlide = 1"></div>
        </div>
        <div class="flex items-start justify-between overflow-hidden" :class="{ 'hidden' : currentSlide !== 1 }">
            <div class="mr-4 relative">
                <div class="ellipse ellipse-cyan"></div>
                <h2 class="text-6xl font-medium mt-6 relative">О нас</h2>
                <h4 class="text-3xl font-medium mt-10 mb-6 max-w-[400px] relative">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h4>
                <p class="leading-[18px] max-w-[330px] font-medium relative">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel justo tempor ante elementum lacinia eget eget ex. Sed aliquet erat eget pellentesque gravida. Aliquam vulputate id augue in egestas. Quisque pellentesque purus arcu, vel mattis quam ultricies semper. Nulla facilisi. Donec placerat suscipit felis nec porta. Nullam tristique, enim eu accumsan consequat, dolor sem commodo arcu, porta fringilla turpis ex nec velit. Morbi venenatis mollis lectus, nec consectetur elit ultricies non. Nunc in felis non nibh venenatis gravida in at lacus. Aliquam dapibus tempor pharetra. Maecenas nisl mi, ultrices eu consequat ut, eleifend ac mi. Phasellus metus justo, hendrerit sit amet ornare sit amet, commodo sit amet leo. Duis in euismod felis.</p>
            </div>
            <img class="w-[584px] absolute top-0 right-0" src="../../assets/images/about_woman.svg" alt="about_woman">
            <div class="swiper-button-prev right-12" @click="currentSlide = 0"></div>
            <div class="swiper-button-next right-12" @click="currentSlide = 2"></div>
        </div>
        <div class="relative pr-16" :class="{ 'hidden' : currentSlide !== 2 }">
            <h2 class="text-6xl font-medium mt-6 mb-20 relative">Наше развитие</h2>
            <div class="overflow-hidden relative">
                <div class="ellipse ellipse-cyan left-0"></div>
                <div class="flex items-start justify-between">
                    <div class="flex flex-col items-center">
                        <img class="w-52 mb-4" src="../../assets/images/evolve_1.svg" alt="man">
                        <h3 class="text-[1.75rem] font-medium">Lorem ipsum </h3>
                        <p class="text-base text-center leading-[18px] w-48 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel justo tempor ante elementum lacinia eget eget ex. Sed aliquet erat eget pellentesque gravida.</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <img class="w-52 mb-4" src="../../assets/images/evolve_2.svg" alt="man">
                        <h3 class="text-[1.75rem] font-medium">Lorem ipsum </h3>
                        <p class="text-base text-center leading-[18px] w-48 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel justo tempor ante elementum lacinia eget eget ex. Sed aliquet erat eget pellentesque gravida.</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <img class="w-52 mb-4" src="../../assets/images/evolve_3.svg" alt="man">
                        <h3 class="text-[1.75rem] font-medium">Lorem ipsum </h3>
                        <p class="text-base text-center leading-[18px] w-48 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel justo tempor ante elementum lacinia eget eget ex. Sed aliquet erat eget pellentesque gravida.</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <img class="w-52 mb-4" src="../../assets/images/evolve_4.svg" alt="man">
                        <h3 class="text-[1.75rem] font-medium">Lorem ipsum </h3>
                        <p class="text-base text-center leading-[18px] w-48 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel justo tempor ante elementum lacinia eget eget ex. Sed aliquet erat eget pellentesque gravida.</p>
                    </div>
                </div>
            </div>
            <div class="swiper-button-prev -ml-16" @click="currentSlide = 1"></div>
            <div class="swiper-button-next right-4" @click="currentSlide = 3"></div>
        </div>
        <div class="relative pr-16" :class="{ 'hidden' : currentSlide !== 3 }">
            <h2 class="text-6xl font-medium mt-6 mb-12 relative">Ваши возможности</h2>
            <div class="overflow-hidden relative pl-16">
                <div class="ellipse ellipse-cyan left-0"></div>
                <div class="grid grid-rows-2 grid-flow-col gap-8">
                    <div class="flex items-center p-6 bg-white rounded-xl">
                        <img class="w-40 mr-6" src="../../assets/images/opporunity_1.svg" alt="image">
                        <div class="flex flex-col">
                            <h3 class="text-lg text-[#7A7979] font-medium">Lorem ipsum </h3>
                            <p class="text-lg font-medium leading-[18px] w-48 mt-3 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                        </div>
                    </div>
                    <div class="flex items-center p-6 bg-white rounded-xl">
                        <img class="w-40 mr-6" src="../../assets/images/opporunity_2.svg" alt="image">
                        <div class="flex flex-col">
                            <h3 class="text-lg text-[#7A7979] font-medium">Lorem ipsum </h3>
                            <p class="text-lg font-medium leading-[18px] w-48 mt-3 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                        </div>
                    </div>
                    <div class="flex items-center p-6 bg-white rounded-xl">
                        <img class="w-40 mr-6" src="../../assets/images/opporunity_3.svg" alt="image">
                        <div class="flex flex-col">
                            <h3 class="text-lg text-[#7A7979] font-medium">Lorem ipsum </h3>
                            <p class="text-lg font-medium leading-[18px] w-48 mt-3 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                        </div>
                    </div>
                    <div class="flex items-center p-6 bg-white rounded-xl">
                        <img class="w-40 mr-6" src="../../assets/images/opporunity_4.svg" alt="image">
                        <div class="flex flex-col">
                            <h3 class="text-lg text-[#7A7979] font-medium">Lorem ipsum </h3>
                            <p class="text-lg font-medium leading-[18px] w-48 mt-3 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-button-prev -ml-6" @click="currentSlide = 2"></div>
            <div class="swiper-button-next -ml-6" @click="nextPage"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentSlide: 0
        }
    },
    methods: {
        nextPage() {
            
            this.$router.push('/');
        }
    }
}
</script>

<style lang="scss" scoped>
.ellipse{
    position: absolute;

    &-cyan {
        width: 100vw;
        height: 225px;
        background: rgba(22, 157, 255, 0.41);

        opacity: 0.2;
        filter: blur(50px);
        top: 13.75rem;
        right: -40vw;
    }
}
</style>