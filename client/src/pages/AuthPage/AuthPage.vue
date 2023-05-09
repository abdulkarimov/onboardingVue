<template>
    <div class="fixed top-0 left-0 right-0 w-full h-full flex items-center justify-center">
        <div class="relative">
            <div class="ellipse ellipse-blue"></div>
            <div class="flex flex-col relative z-10">
                <h1 class="text-[22px] font-medium mb-5 text-center">Добро пожаловать в iHub</h1>
                <!-- <div @click="onGoogleAuth" class="flex items-center px-16 py-4 mb-6 bg-[#4286F5] hover:bg-[#3779e3] rounded-2xl">
                    <img class="w-9 mr-6" src="../../assets/images/google.svg" alt="google">
                    Войти через Google
                </div> -->
                <a href="http://3000/auth/google" class="flex items-center px-16 py-4 mb-6 bg-[#4286F5] hover:bg-[#3779e3] rounded-2xl">
                    <img class="w-9 mr-6" src="../../assets/images/google.svg" alt="google">
                    Войти через Google
                </a>
                <!-- <g-signin-button
                    :params="googleSignInParams"
                    @success="onGoogleSignInSuccess"
                    @error="onGoogleSignInError"
                >
                    <button class="flex items-center px-16 py-4 mb-6 bg-[#4286F5] hover:bg-[#3779e3] rounded-2xl">
                        <img class="w-9 mr-6" src="../../assets/images/google.svg" alt="google">
                        Войти через Google
                    </button>
                </g-signin-button> -->
                <router-link to="/survey" class="flex items-center px-16 py-4 bg-[#FF000E] hover:bg-[#e2242e] rounded-2xl">
                    <img class="w-9 mr-6" src="../../assets/images/yandex.svg" alt="google">
                    Войти через Яндекс
                </router-link>
            </div>
            <div class="ellipse ellipse-purple"></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data () {
        return {
            googleSignInParams: {
                client_id: '597665638542-f1o47j3s591pqc85ku6mq033g4gadjgq.apps.googleusercontent.com'
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.ellipse{
    position: absolute;

    &-blue {
        width: 370px;
        height: 450px;

        background: #169DFF;
        opacity: 0.2;
        filter: blur(159px);
        top: -16rem;
        left: -22rem;
    }

    &-purple {
        width: 425px;
        height: 400px;
        
        background: #C701FC;
        opacity: 0.2;
        filter: blur(159px);
        bottom: -20rem;
        right: -24rem;
    }
}
</style>