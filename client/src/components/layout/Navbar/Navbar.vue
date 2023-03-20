<template>
    <nav class="px-2 sm:px-4 py-4 rounded">
        <div class="container flex flex-wrap items-center justify-between mx-auto pr-8">
            <a href="https://www.cic.kz/" target="_blank" class="flex items-center">
                <img src="../../../assets/images/iHub_logo.svg" class="h-20 mr-3 sm:h-28" alt="iHub logo" />
            </a>
            <div class="flex items-center md:order-2">
                <span class="sr-only">Open user menu</span>
                    <div class="flex items-center">
                        <img class="w-9 h-9 mr-6 rounded-full cursor-pointer" src="../../../assets/images/notification.svg" alt="notification">
                        <router-link to="/personal-info">
                            <img class="w-16 h-16 rounded-full cursor-pointer" src="../../../assets/images/demo_avatar1.svg" alt="user photo">
                        </router-link>
                    </div>
                <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                <ul class="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                    <li>
                        <router-link to="/" exact class="block ml-4 mr-4 text-xl font-light text-gray-500">Главная</router-link>
                    </li>
                    <li>
                        <router-link to="/employees" class="block ml-4 mr-4 text-xl font-light text-gray-500">Люди</router-link>
                    </li>
                    <li>
                        <router-link to="/projects" class="block ml-4 mr-4 text-xl font-light text-gray-500">Проекты</router-link>
                    </li>
                    <li>
                        <router-link to="/faq" class="block ml-4 mr-4 text-xl font-light text-gray-500">FAQ</router-link>
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