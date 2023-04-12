<template>
    <nav class="px-4 py-4 relative z-20">
        <div class="container max-w-4 flex flex-wrap items-center justify-between mx-auto pr-8">
            <a href="https://www.cic.kz/" target="_blank" class="flex items-center">
                <img src="../../../assets/images/iHub_logo.svg" class="h-[5.5rem] mr-3" alt="iHub logo" />
            </a>
            <div class="flex items-center md:order-2">
                <div class="flex items-center">
                    <img @click="toggleNotification" class="w-[1.5rem] h-[1.5rem] mr-6 rounded-full cursor-pointer" src="../../../assets/images/notification.svg" alt="notification">
                    <router-link to="/personal-info">
                        <img class="w-12 h-12 rounded-full cursor-pointer" :src="this.$store.state.user.profile_image" alt="user photo">
                    </router-link>
                    <Modal @closeWindow="isNotification = !isNotification" :isNotification="isNotification">
                        <div @click.stop class="relative top-20 float-right bg-white rounded-[18px] shadow max-w-[575px]">
                            <div class="flex items-start justify-between py-4 px-6 border-b-2 border-[#D9D9D9] border-solid rounded-t">
                                <h3 class="text-2xl font-semibold text-black">
                                    Уведомления
                                </h3>
                                <button @click="isNotification = !isNotification" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-hide="defaultModal">
                                    <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div>
                                <div class="text-black border-b-2 border-[#D9D9D9] border-solid py-6">
                                    <div class="flex items-center px-6 relative">
                                        <img class="w-14 h-14 mr-4" src="../../../assets/images/iHub_notification.svg" alt="iHub Logo">
                                        <div>
                                            <h6 class="text-[17px] font-medium">Система</h6>
                                            <p class="max-w-sm leading-5">Поздравляю! Вы успешно заполнили Анкету 1. Скоро с вами свяжется Заира HR.</p>
                                        </div>
                                        <div class="absolute top-0 right-6 w-3 h-3 bg-blue-dark rounded-full"></div>
                                    </div>
                                </div>
                                <div class="text-black border-b-2 border-[#D9D9D9] border-solid py-6">
                                    <div class="flex items-start px-6">
                                        <img class="w-14 h-14 mr-4" src="../../../assets/images/iHub_notification.svg" alt="iHub Logo">
                                        <div>
                                            <h6 class="text-[17px] font-medium">Напоминание</h6>
                                            <p class="max-w-sm leading-5"><span class="font-medium border-b border-black border-solid">Анкета 1</span> уже доступна в вашем <span class="font-medium border-b border-black border-solid">Личном кабинете</span>. Заполните анкету.</p>
                                            <button class="text-white bg-blue-dark px-10 py-[10px] mt-4 rounded-xl transition hover:bg-blue-darker">Перейти к анкете</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-black border-b-2 border-[#D9D9D9] border-solid py-6">
                                    <div class="flex items-center px-6">
                                        <img class="w-14 h-14 mr-4" src="../../../assets/images/iHub_notification.svg" alt="iHub Logo">
                                        <div>
                                            <h6 class="text-[17px] font-medium">Система</h6>
                                            <p class="max-w-sm leading-5">Имя, не забудьте заполнить Анкету 1 через 3 дня.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 rounded-b">
                                <p class="text-base text-blue-dark font-medium text-center cursor-pointer">Посмотреть все</p>
                            </div>
                        </div>
                    </Modal>
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
import Modal from '../../UI/Modal/Modal.vue';

export default {
    components: {
        Modal
    },
    data(){
        return {
            isNotification: false
        }
    },
    methods: {
        toggleNotification() {
            document.body.style.overflowY = 'hidden';
            this.isNotification = !this.isNotification
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./Navbar.scss";
</style>