<template>
    <nav class="px-2 sm:px-4 py-4 rounded">
        <div class="container max-w-4 flex flex-wrap items-center justify-between mx-auto pr-8">
            <a href="https://www.cic.kz/" target="_blank" class="flex items-center">
                <img src="../../../assets/images/iHub_logo.svg" class="h-[5.5rem] mr-3" alt="iHub logo" />
            </a>
            <div class="flex items-center md:order-2">
                <div class="flex items-center">
                    <img class="w-[1.5rem] h-[1.5rem] mr-6 rounded-full cursor-pointer" src="../../../assets/images/notification.svg" alt="notification">
                    <router-link to="/personal-info">
                        <img class="w-12 h-12 rounded-full cursor-pointer" :src="this.$store.state.user.profile_image" alt="user photo">
                    </router-link>
                </div>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                <ul class="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                    <li>
                        <router-link to="/" exact class="block ml-2 mr-2 text-base font-light text-gray-500">Главная</router-link>
                    </li>
                    <li>
                        <router-link to="/employees" class="block ml-2 mr-2 text-base font-light text-gray-500">Люди</router-link>
                    </li>
                    <li>
                        <router-link to="/projects" class="block ml-2 mr-2 text-base font-light text-gray-500">Проекты</router-link>
                    </li>
                    <li>
                        <router-link to="/faq" class="block ml-2 mr-2 text-base font-light text-gray-500">FAQ</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>

</script>

<style lang="scss" scoped>
@import "./Navbar.scss";
</style>