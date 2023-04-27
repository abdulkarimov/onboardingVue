<template>
    <div class="fixed top-0 left-0 right-0 w-full h-full flex items-center justify-center">
        <div class="relative">
            <div class="ellipse ellipse-blue"></div>
            <div class="bg-white text-black px-16 pt-6 pb-6 relative z-10 rounded-xl">
                <h3 class="text-xl font-bold leading-6 text-center mb-5">Добро пожаловать в iHub! <br> Заполните анкету.</h3>
                <form @submit="e => submitHandler(e)">
                    <div class="grid md:grid-cols-2 md:gap-3">
                        <div class="relative z-0 w-full mb-5 group">
                            <input
                                v-model="userForm.fullName" 
                                type="text" 
                                class="shadow-sm bg-white border border-[#7A7979] text-gray-900 text-sm rounded-2xl block w-56 p-3 font-medium outline-none" 
                                placeholder="ФИО" 
                            />
                            <p v-if="v$.userForm.fullName.$invalid && wasSubmitted" class="mt-1 text-sm text-red-600">Заполните своё ФИО</p>
                        </div>
                        <div class="relative z-0 w-full mb-5 group">
                            <input
                                v-model="userForm.workLevel" 
                                type="text" 
                                class="shadow-sm bg-white border border-[#7A7979] text-gray-900 text-sm rounded-2xl block w-56 p-3 font-medium outline-none" 
                                placeholder="Должность/грейд" 
                            />
                            <p v-if="v$.userForm.workLevel.$invalid && wasSubmitted" class="mt-1 text-sm text-red-600">Заполните свою должность/грейд</p>
                        </div>
                    </div>
                    <div class="grid md:grid-cols-2 md:gap-3">
                        <div class="relative z-0 w-full mb-5 group">
                            <input
                                v-model="userForm.phone" 
                                v-maska data-maska="+# (###) ###-##-##"
                                type="phone" 
                                class="shadow-sm bg-white border border-[#7A7979] text-gray-900 text-sm rounded-2xl block w-56 p-3 font-medium outline-none" 
                                placeholder="Телефон" 
                            />
                            <p v-if="v$.userForm.phone.$invalid && wasSubmitted" class="mt-1 text-sm text-red-600">Заполните свой телефон</p>
                        </div>
                        <div class="relative z-0 w-full mb-5 group">
                            <input
                                v-model="userForm.subdivision" 
                                type="text" 
                                class="shadow-sm bg-white border border-[#7A7979] text-gray-900 text-sm rounded-2xl block w-56 p-3 font-medium outline-none" 
                                placeholder="Подразделение" 
                            />
                            <p v-if="v$.userForm.subdivision.$invalid && wasSubmitted" class="mt-1 text-sm text-red-600">Заполните своё подразделение</p>
                        </div>
                    </div>
                    <div class="grid md:grid-cols-2 md:gap-3">
                        <div class="relative z-0 w-full mb-5 group">
                            <input
                                v-model="userForm.telegram" 
                                v-maska 
                                data-maska="!@**********************"
                                type="text" 
                                class="shadow-sm bg-white border border-[#7A7979] text-gray-900 text-sm rounded-2xl block w-56 p-3 font-medium outline-none" 
                                placeholder="Телеграмм" 
                            />
                            <p v-if="v$.userForm.telegram.$invalid && wasSubmitted" class="mt-1 text-sm text-red-600">Заполните свой телеграм</p>
                        </div>
                        <div class="relative z-0 w-full mb-5 group">
                            <input
                                v-model="userForm.project" 
                                type="text" 
                                class="shadow-sm bg-white border border-[#7A7979] text-gray-900 text-sm rounded-2xl block w-56 p-3 font-medium outline-none" 
                                placeholder="Проект/команда" 
                            />
                            <p v-if="v$.userForm.project.$invalid && wasSubmitted" class="mt-1 text-sm text-red-600">Заполните свой проект</p>
                        </div>
                    </div>
                    <div class="grid md:grid-cols-2 md:gap-3">
                        <div class="relative z-0 w-full mb-5 group">
                            <input
                                v-model="userForm.dateOfBirth" 
                                type="date" 
                                class="shadow-sm bg-white border border-[#7A7979] text-gray-900 text-sm rounded-2xl block w-56 p-3 font-medium outline-none" 
                                placeholder="Дата рождения" 
                            />
                            <p v-if="v$.userForm.dateOfBirth.$invalid && wasSubmitted" class="mt-1 text-sm text-red-600">Заполните свою дату рождения</p>
                        </div>
                        <div class="relative z-0 w-full mb-5 group">
                            <input
                                v-model="userForm.employmentTime" 
                                type="text" 
                                class="shadow-sm bg-white border border-[#7A7979] text-gray-900 text-sm rounded-2xl block w-56 p-3 font-medium outline-none" 
                                placeholder="График работы" 
                            />
                            <p v-if="v$.userForm.employmentTime.$invalid && wasSubmitted" class="mt-1 text-sm text-red-600">Заполните свой график работы</p>
                        </div>
                    </div>
                    <div class="grid md:grid-cols-2 md:gap-3">
                        <div class="relative z-0 w-full mb-5 group">
                            <input
                                v-model="userForm.softSkills" 
                                type="text" 
                                class="shadow-sm bg-white border border-[#7A7979] text-gray-900 text-sm rounded-2xl block w-56 p-3 font-medium outline-none" 
                                placeholder="Soft skills" 
                            />
                            <p v-if="v$.userForm.softSkills.$invalid && wasSubmitted" class="mt-1 text-sm text-red-600">Заполните свои soft skills</p>
                        </div>
                        <div class="relative z-0 w-full mb-5 group">
                            <input
                                v-model="userForm.hardSkills" 
                                type="text" 
                                class="shadow-sm bg-white border border-[#7A7979] text-gray-900 text-sm rounded-2xl block w-56 p-3 font-medium outline-none" 
                                placeholder="Hard skills" 
                            />
                            <p v-if="v$.userForm.hardSkills.$invalid && wasSubmitted" class="mt-1 text-sm text-red-600">Заполните свои hard skills</p>
                        </div>
                    </div>
                    <div class="relative z-0 w-full mb-5 group">
                        <input
                            v-model="userForm.personality" 
                            type="text" 
                            class="shadow-sm bg-white border border-[#7A7979] text-gray-900 text-sm rounded-2xl block w-full p-3 font-medium outline-none"
                            placeholder="О себе" 
                        />
                        <p v-if="v$.userForm.personality.$invalid && wasSubmitted" class="mt-1 text-sm text-red-600">Заполните о себе</p>
                    </div>
                    <button class="hidden" type="submit"></button>
                </form>
            </div>
            <div class="ellipse ellipse-purple"></div>
        </div>
    </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

import { vMaska } from "maska";

export default {
    directives: { 
        maska: vMaska
    },
    setup () {
        return { v$: useVuelidate() }
    },
    data() {
        return{
            wasSubmitted: false,
            userForm: {
                fullName: '',
                workLevel: '',
                phone: '',
                subdivision: '',
                telegram: '',
                project: '',
                dateOfBirth: '',
                employmentTime: '',
                softSkills: '',
                hardSkills: '',
                personality: '',
            },
        }
    },
    validations () {
        return {
            userForm: {
                fullName: { required },
                workLevel: { required },
                phone: { required },
                subdivision: { required },
                telegram: { required },
                project: { required },
                dateOfBirth: { required },
                employmentTime: { required },
                softSkills: { required },
                hardSkills: { required },
                personality: { required },
            }
        }
    },
    methods: {
        submitHandler(e){
            this.wasSubmitted = true;
            e.preventDefault();

            if (!this.v$.$invalid) {
                this.$router.push('/welcome');
            }
        }
    },
    created() {
        this.$store.state.previousPage = '/survey';
    }
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