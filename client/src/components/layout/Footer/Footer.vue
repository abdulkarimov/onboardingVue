<template>
    <footer class="bg-black-dark pb-12 relative">
        <div class="mx-auto w-full pt-32 container">
            <h1 class="text-6xl px-6 mb-8 font-semibold">Centras Ihub</h1>
            <div class="grid grid-cols-2 gap-0 px-6 py-8 md:grid-cols-4">
                <div>
                    <h2 class="mb-6 text-4xl font-semibold text-white">Меню</h2>
                    <ul class="text-white text-2xl font-light">
                        <li class="mb-4">
                            <router-link to="/" class="opacity-60 transition hover:opacity-100">Главная</router-link>
                        </li>
                        <li class="mb-4">
                            <router-link to="/employees" class="opacity-60 transition hover:opacity-100">Люди</router-link>
                        </li>
                        <li class="mb-4">
                            <router-link to="/projects" class="opacity-60 transition hover:opacity-100">Проекты</router-link>
                        </li>
                        <li class="mb-4">
                            <router-link to="/faq" class="opacity-60 transition hover:opacity-100">FAQ</router-link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-4xl font-semibold text-white-500">Связь с нами</h2>
                    <ul class="text-white text-2xl font-light">
                        <li class="mb-4">
                            <a href="#" class="opacity-60 transition hover:opacity-100">Instagram</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" class="opacity-60 transition hover:opacity-100">Facebook</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" class="opacity-60 transition hover:opacity-100">Twitter</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" class="opacity-60 transition hover:opacity-100">Telegram</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-4xl font-semibold text-whit">Контакты</h2>
                    <ul class="text-white text-2xl font-light">
                        <li class="mb-4">
                            <a href="#" class="opacity-60 transition hover:opacity-100">+7 (777) 777-77-77</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" class="opacity-60 transition hover:opacity-100">arturdalakan748@gmail.com</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" class="opacity-60 transition hover:opacity-100">@Arthur1703</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <img class="absolute top-0 right-0 w-[42rem] h-[30rem]" src="../../../assets/images/circles_footer.png" alt="circles_footer">
    </footer>
</template>

<script>

</script>

<style lang="scss" scoped>

</style>