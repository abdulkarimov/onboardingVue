<template>
    <div>
        <Navbar></Navbar>
        <div class="mb-32 overflow-hidden">
            <div class="container flex flex-col items-start mx-auto px-2 p-12 max-w-4xl">
                <div class="relative w-full">
                    <div class="ellipse ellipse-cyan"></div>
                    <div class="flex items-center justify-center mb-12">
                        <div class="relative">
                            <div class="absolute right-0 shadow drop-shadow-xl flex items-center justify-center p-3 w-12 h-12 rounded-full bg-white cursor-pointer">
                                <img class="w-12 h-12 rounded-full" src="../../assets/images/plus.svg" alt="plus">
                                <input @input="e => changeProfileImage(e)" type="file" id="fileInput" class="absolute w-full h-full opacity-0 rounded-full">
                            </div>
                            <img class="w-56 h-56 rounded-full" :src="userForm.profile_image ? userForm.profile_image : imageData" alt="user photo">
                        </div>
                    </div>
                    <div class="mb-9">
                        <h1 class="text-2xl mb-5">Личная информация</h1>
                        <form class="relative" @submit="e => submitHandler(e)">
                            <div class="ellipse ellipse-purple"></div>
                            <div class="grid gap-6 gap-x-8 mb-8 grid-cols-2">
                                <div>
                                    <input @input="v$.userForm.name.$touch" v-model="userForm.name" type="text" id="name" class="text-white font-normal placeholder:font-light bg-transparent border text-2xl rounded-3xl outline-none block w-full px-6 py-4" autocomplete="off" placeholder="Имя">
                                    <p v-if="!v$.userForm.name.$model.length && wasSubmitted" class="mt-2 text-xl text-red-600 dark:text-red-500">Заполните ваше имя</p>
                                </div>
                                <div>
                                    <input @input="v$.userForm.surname.$touch" v-model="userForm.surname" type="text" id="surname" class="text-white font-normal placeholder:font-light bg-transparent border text-2xl rounded-3xl outline-none block w-full px-6 py-4" autocomplete="off" placeholder="Фамилия">
                                    <p v-if="!v$.userForm.surname.$model.length && wasSubmitted" class="mt-2 text-xl text-red-600 dark:text-red-500">Заполните вашу фамилию</p>
                                </div>
                                <div class="relative">
                                    <div class="relative">
                                        <div class="absolute inset-y-0 right-0 flex items-center pointer-events-none">
                                            <svg class="w-8 h-8 mr-9 opacity-60" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                        <input 
                                            @keypress="workHandler" 
                                            @focus="userForm.dropDownState.isWork = true"
                                            @blur="blurHandler('work')"
                                            v-model="userForm.work" 
                                            type="text" 
                                            autocomplete="off" 
                                            id="work" 
                                            ref="work"
                                            class="text-white font-normal placeholder:font-light bg-transparent border text-2xl rounded-3xl outline-none block w-full px-6 py-4" 
                                            placeholder="Должность"
                                        >
                                    </div>
                                    <Dropdown 
                                        :items="workPrompt"
                                        :isActive="userForm.dropDownState.isWork"
                                        :height="'max-h-fit'"
                                        :fontSize="'text-xl'"
                                        category="work"
                                        @itemHandler="handleItemChanged"
                                        v-if="workPrompt.length"
                                    />
                                    <p v-if="!v$.userForm.work.$model.length && wasSubmitted" class="mt-2 text-xl text-red-600 dark:text-red-500">Укажите свою специальность</p>
                                </div>  
                                <div class="relative"> 
                                    <div class="relative">
                                        <div class="absolute inset-y-0 right-0 flex items-center pointer-events-none">
                                            <svg class="w-8 h-8 mr-9 opacity-60" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                        <input 
                                            @keypress="levelHandler" 
                                            @focus="userForm.dropDownState.isLevel = true"
                                            @blur="blurHandler('level')"
                                            v-model="userForm.level" 
                                            type="text" 
                                            autocomplete="off" 
                                            id="level" 
                                            ref="level"
                                            class="text-white font-normal placeholder:font-light bg-transparent border text-2xl rounded-3xl outline-none block w-full px-6 py-4" 
                                            placeholder="Грейд"
                                        >
                                    </div>
                                    <Dropdown 
                                        :items="levelPrompt"
                                        :isActive="userForm.dropDownState.isLevel"
                                        :height="'max-h-fit'"
                                        :fontSize="'text-xl'"
                                        category="level"
                                        @itemHandler="handleItemChanged"
                                        v-if="levelPrompt.length"
                                    />
                                    <p v-if="!v$.userForm.level.$model.length && wasSubmitted" class="mt-2 text-xl text-red-600 dark:text-red-500">Укажите свой уровень</p>
                                </div> 
                            </div>
                            <div class="grid grid-cols-2 gap-6 gap-x-8 mb-8 relative z-30">
                                <div class="h-16">
                                    <h1 class="text-2xl mb-5">Дата Рождения</h1>
                                    <div class="flex items-baseline gap-4">
                                        <div>
                                            <input v-model="userForm.date_of_birth.day" type="number" id="date_of_birth" class="text-white text-center font-normal placeholder:font-light bg-transparent border text-xl rounded-3xl outline-none block w-full px-4 py-4" autocomplete="off" placeholder="День">
                                        </div>
                                        <div class="relative w-[44rem]"> 
                                            <div class="relative">
                                                <div class="absolute inset-y-0 right-0 flex items-center pointer-events-none">
                                                    <svg class="w-8 h-8 mr-9 opacity-60" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                                </div>
                                                <input 
                                                    @keypress="monthHandler" 
                                                    @focus="userForm.dropDownState.isMonth = true"
                                                    @blur="blurHandler('month')"
                                                    v-model="userForm.date_of_birth.month" 
                                                    type="text" 
                                                    autocomplete="off" 
                                                    id="month" 
                                                    ref="month"
                                                    class="text-white font-normal placeholder:font-light bg-transparent border text-xl rounded-3xl outline-none block w-full px-6 py-4" 
                                                    placeholder="Месяц"
                                                >
                                            </div>
                                            <Dropdown 
                                                :items="monthPrompt"
                                                :isActive="userForm.dropDownState.isMonth"
                                                :height="'max-h-60'"
                                                :fontSize="'text-xl'"
                                                category="month"
                                                @itemHandler="handleItemChanged"
                                                v-if="monthPrompt.length"
                                            />
                                            </div> 
                                        <div>
                                        <input v-model="userForm.date_of_birth.year" type="number" id="month" class="text-white text-center font-normal placeholder:font-light bg-transparent border text-xl rounded-3xl outline-none block w-24 px-4 py-4" autocomplete="off" placeholder="Год">
                                        </div>
                                    </div>
                                    <p v-if="(!v$.userForm.date_of_birth.day.$model.length || !v$.userForm.date_of_birth.month.$model.length || !v$.userForm.date_of_birth.year.$model.length) && wasSubmitted" class="mt-2 text-xl text-red-600 dark:text-red-500">Укажите дату рождения</p>
                                </div>
                                <div>
                                    <h1 class="text-2xl mb-5">График работы</h1>
                                    <div class="grid grid-cols-3 gap-4 h-16">
                                        <div class="flex items-center justify-between text-white bg-transparent border border-solid border-white text-xs rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer" :class="{'activeTime' : userForm.employmentTime === 'с 8:00 до 17:00'}" @click="userForm.employmentTime = 'с 8:00 до 17:00'">с 8:00 до 17:00</div>
                                        <div class="flex items-center justify-between text-white bg-transparent border border-solid border-white text-xs rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer" :class="{'activeTime' : userForm.employmentTime === 'с 9:00 до 18:00'}" @click="userForm.employmentTime = 'с 9:00 до 18:00'">с 9:00 до 18:00</div>
                                        <div class="flex items-center justify-between text-white bg-transparent border border-solid border-white text-xs rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer" :class="{'activeTime' : userForm.employmentTime === 'с 10:00 до 19:00'}" @click="userForm.employmentTime = 'с 10:00 до 19:00'">с 10:00 до 19:00</div>
                                    </div>
                                    <p v-if="v$.userForm.employmentTime.$invalid && wasSubmitted" class="mt-2 text-xl text-red-600 dark:text-red-500">Укажите график работы</p>
                                </div>
                            </div>
                            <div class="mb-8">
                                <h1 class="text-2xl mb-5">Обо мне</h1>
                                <div>
                                    <textarea 
                                        v-model="userForm.personality" 
                                        type="text" 
                                        id="personality"
                                        class="scroll-none text-white font-base bg-transparent border text-2xl rounded-3xl outline-none resize-none block w-full h-48 px-6 pb-16 py-4" 
                                        :class="{'empty-area' : !userForm.personality.length}" 
                                        style="min-height: 200px;"
                                        @input="v$.userForm.personality.$touch"
                                        @keydown="flexibleScroll"
                                        autocomplete="off" 
                                        placeholder="Lorem ipsum dolor sit amet consectetur. Vestibulum ut mauris turpis sit sed semper. Pellentesque auctor massa diam a arcu in eu eget tincidunt. Eu ultrices arcu eget aenean quam vel felis non blandit. Ornare nunc morbi magna morbi dolor." 
                                    >
                                    </textarea>
                                    <p v-if="!v$.userForm.personality.$model.length && wasSubmitted" class="mt-2 text-xl text-red-600 dark:text-red-500">Заполните информацию о себе</p>
                                </div>
                                <p v-if="v$.userForm.personality.$invalid && v$.userForm.personality.$anyDirty && wasSubmitted" class="mt-2 text-xl text-red-600 dark:text-red-500">Расскажите немного о себе</p>
                            </div>
                            <div class="grid grid-cols-2 gap-6 gap-x-8 mb-8">
                                <div>
                                    <h1 class="text-2xl mb-5">Soft Skills</h1>
                                        <div class="relative"> 
                                            <div class="relative">
                                                <div class="absolute inset-y-0 right-0 flex items-center pointer-events-none">
                                                    <svg class="w-8 h-8 mr-9 opacity-60" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                                </div>
                                                <input 
                                                    @keypress="softSkillHandler" 
                                                    @focus="userForm.dropDownState.isSoftSkills = true"
                                                    @blur="blurHandler('soft')"
                                                    v-model="userForm.softSkill" 
                                                    type="text" 
                                                    autocomplete="off" 
                                                    id="softSkill" 
                                                    ref="softSkill"
                                                    class="flex items-center justify-between pr-20 text-white bg-transparent border border-solid border-white text-xl rounded-3xl outline-none w-full px-6 py-4 cursor-pointer" 
                                                    placeholder="Soft skill"
                                                >
                                            </div>
                                            <Dropdown 
                                                :items="softSkillsPrompt"
                                                :isActive="userForm.dropDownState.isSoftSkills"
                                                :height="'max-h-fit'"
                                                :fontSize="'text-xl'"
                                                category="softSkills"
                                                @itemHandler="handleItemChanged"
                                                v-if="softSkillsPrompt.length"
                                            />
                                            </div> 
                                            <p v-if="!v$.userForm.softSkills.$model.length && wasSubmitted" class="mt-2 text-xl text-red-600 dark:text-red-500">Выберите ваши софт скиллы</p>
                                            <div :class="[{'mt-8' : userForm.softSkills.length}, 'flex flex-wrap']">
                                                <span 
                                                    v-for="(item, idx) in userForm.softSkills" :key="idx" 
                                                    class="text-[18px] w-fit flex items-center justify-between bg-white rounded-full px-5 py-2 font-semibold text-gray-700 mr-4 mb-5 hover:bg-gray-100"
                                                >
                                                    {{ item }} <svg aria-hidden="true" @click="delSoftSkill(idx)" class="w-6 h-6 ml-4 mt-1 cursor-pointer" fill="#5282E7" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></span>
                                            </div>
                                        <div>
                                    </div>
                                </div>
                                <div class="relative">
                                    <h1 class="text-2xl mb-5">Hard skills</h1>
                                    <div class="relative">
                                        <div class="absolute inset-y-0 right-0 flex items-center pointer-events-none">
                                            <svg class="w-8 h-8 mr-9 opacity-60" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                        <input 
                                            @keypress="hardSkillHandler" 
                                            @focus="userForm.dropDownState.isHardSkills = true"
                                            @blur="blurHandler('hard')"
                                            v-model="userForm.hardSkill" 
                                            type="text" 
                                            autocomplete="off" 
                                            id="hardSkill" 
                                            ref="hardSkill"
                                            class="flex items-center justify-between pr-20 text-white bg-transparent border border-solid border-white text-xl rounded-3xl outline-none w-full px-6 py-4 cursor-pointer" 
                                            placeholder="Hard skill"
                                        >
                                    </div>
                                    <Dropdown 
                                        :items="hardSkillsPrompt"
                                        :isActive="userForm.dropDownState.isHardSkills"
                                        :height="'max-h-fit'"
                                        :fontSize="'text-xl'"
                                        category="hardSkills"
                                        @itemHandler="handleItemChanged"
                                        v-if="hardSkillsPrompt.length"
                                    />
                                    <p v-if="!v$.userForm.hardSkills.$model.length && wasSubmitted" class="mt-2 text-xl text-red-600 dark:text-red-500">Выберите ваши хард скиллы</p>
                                    <div :class="[{'mt-8' : userForm.hardSkills.length}, 'flex flex-wrap']">
                                        <span 
                                            v-for="(item, idx) in userForm.hardSkills" :key="idx" 
                                            class="text-[18px] w-fit flex items-center justify-between bg-white rounded-full px-5 py-2 font-semibold text-gray-700 mr-4 mb-5 hover:bg-gray-100"
                                        >
                                            {{ item }} <svg aria-hidden="true" @click="delHardSkill(idx)" class="w-6 h-6 ml-4 mt-1 cursor-pointer" fill="#5282E7" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></span>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-10 relative">
                                <h1 class="text-2xl mb-5">Проект</h1>
                                <div class="relative">
                                    <div class="absolute inset-y-0 right-0 flex items-center pointer-events-none">
                                        <svg class="w-8 h-8 mr-9 opacity-60" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                    <input 
                                        @keypress="projectHandler" 
                                        @focus="userForm.dropDownState.isProject = true"
                                        @blur="blurHandler('project')"
                                        v-model="userForm.project" 
                                        type="text" 
                                        autocomplete="off" 
                                        id="project"
                                        ref="project"
                                        class="flex items-center justify-between pr-20 text-white bg-transparent border border-solid border-white text-2xl rounded-3xl outline-none w-full px-6 py-4 cursor-pointer" 
                                        placeholder="Выберите проект"
                                    >
                                </div>
                                <Dropdown 
                                    :items="projectsPrompt"
                                    :isActive="userForm.dropDownState.isProject"
                                    :height="'max-h-fit'"
                                    :fontSize="'text-xl'"
                                    category="project"
                                    @itemHandler="handleItemChanged"
                                />
                                <p v-if="v$.userForm.project.$invalid && wasSubmitted" class="mt-2 text-xl text-red-600 dark:text-red-500">Выберите проект</p>
                            </div>
                            <div class="px-6">
                                <h1 class="text-2xl mb-8">Контакты</h1>
                                <div>
                                    <div class="mb-10">
                                        <div class="relative">
                                            <div class="absolute inset-y-0 left-0 flex items-center pl-8 pointer-events-none">
                                                <label class="z-20 absolute -top-4 left-12 text-xl bg-black text-white px-2">Почта</label>
                                                <img class="w-10 h-10" :class="{'opacity-60' : !userForm.contacts.mail}" src="../../assets/images/mail.svg" alt="mail" />
                                            </div>
                                            <input @input="v$.userForm.contacts.mail.$touch" v-model="userForm.contacts.mail" type="email" id="mail" autocomplete="off" class="peer border text-white bg-transparent text-2xl rounded-3xl outline-none block w-full px-24 py-6" placeholder="Forexample@forexample.com">
                                        </div>
                                        <p v-if="!v$.userForm.contacts.mail.$model.length && wasSubmitted" class="mt-2 text-xl text-red-600 dark:text-red-500">Укажите правильную почту</p>
                                    </div>
                                    <div class="mb-10">
                                        <div class="relative">
                                            <div class="absolute inset-y-0 left-0 flex items-center pl-8 pointer-events-none">
                                                <label class="z-20 absolute -top-4 left-12 text-xl bg-black text-white px-2">Telegram</label>
                                                <img class="w-10 h-10" :class="{'opacity-60' : !userForm.contacts.telegram}" src="../../assets/images/telega.svg" alt="mail" />
                                            </div>
                                            <input @input="v$.userForm.contacts.telegram.$touch" v-model="userForm.contacts.telegram" v-maska data-maska="!@**********************" type="text" autocomplete="off" id="telegram" class="border text-white bg-transparent text-2xl rounded-3xl outline-none block w-full px-24 py-6" placeholder="@Forexample">
                                        </div>
                                        <p v-if="!v$.userForm.contacts.telegram.$model.length && wasSubmitted" class="mt-2 text-xl text-red-600 dark:text-red-500">Укажите ваш профиль в telegram</p>
                                    </div>
                                    <div class="mb-10">
                                        <div class="relative">
                                            <div class="absolute inset-y-0 left-0 flex items-center pl-8 pointer-events-none">
                                                <label class="z-20 absolute -top-4 left-12 text-xl bg-black text-white px-2">Телефон</label>
                                                <img class="w-10 h-10" :class="{'opacity-60' : !userForm.contacts.phone}" src="../../assets/images/phone.svg" alt="mail" />
                                            </div>
                                            <input @input="v$.userForm.contacts.phone.$touch" v-model="userForm.contacts.phone" v-maska data-maska="+# (###) ###-##-##" type="phone" autocomplete="off" id="phone" class="border text-white bg-transparent text-2xl rounded-3xl outline-none block w-full px-24 py-6" placeholder="+7 (777) 777-77-77">
                                        </div>
                                        <p v-if="!v$.userForm.contacts.phone.$model.length && wasSubmitted" class="mt-2 text-xl text-red-600 dark:text-red-500">Укажите ваш номер телефона</p>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" class="text-white text-xl bg-blue-dark hover:bg-blue-darker font-medium rounded-2xl px-14 py-3.5 mt-6 mr-2 mb-2 float-right">Сохранить изменения</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Dropdown from '../../components/UI/Dropdown/Dropdown.vue'

import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

import imageData from '../../assets/images/undefined_logo.svg';
import { vMaska } from "maska";

import Navbar from '../../components/layout/Navbar/Navbar.vue';
import Footer from '../../components/layout/Footer/Footer.vue';

export default {
  components: {
    Dropdown,
    Navbar,
    Footer
},
  directives: { 
    maska: vMaska
  },
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
    return {
        imageData,
        wasSubmitted: false,
        userForm: {
            profile_image: '',
            name: '',
            surname: '',
            work: '',
            level: '',
            date_of_birth: {
                day: '',
                month: '',
                year: ''
            },
            dropDownState: {
                isWork: false,
                isLevel: false,
                isMonth: false,
                isSoftSkills: false,
                isHardSkills: false,
                isProject: false
            },
            employmentTime: '',
            personality: '',
            softSkill: '',
            hardSkill: '',
            softSkills: [],
            hardSkills: [],
            project: '',
            contacts: {
                mail: '',
                telegram: '',
                phone: ''
            }
        }
    }
  },
  computed: {
    workPrompt() {  
        return [
            'UX/UI designer',
            'Frontend-разработчик',
            'Backend-разработчик',
            'Project Manager',
            'Team Lead',
            'HR'
        ].filter(work => work.toLowerCase().includes(this.userForm.work.toLowerCase()));
    },
    levelPrompt() {
        return [
            'Junior',
            'Junior+',
            'Middle',
            'Middle+',
            'Senior'
        ].filter(level => level.toLowerCase().includes(this.userForm.level.toLowerCase()));
    },
    monthPrompt() {
        return [
            'Январь',
            'Февраль',
            'Март',
            'Апрель',
            'Май',
            'Июнь',
            'Июль',
            'Август',
            'Сентябрь',
            'Октябрь',
            'Ноябрь',
            'Декабрь',
        ].filter(month => month.toLowerCase().includes(this.userForm.date_of_birth.month.toLowerCase()));
    },
    softSkillsPrompt() {
        return [
            'Коммуникабельность',
            'Выступления на публике',
            'Обучаемость',
            'Упорство',
            'Наставничество',
        ].filter(skill => skill.toLowerCase().includes(this.userForm.softSkill.toLowerCase()) && !this.userForm.softSkills.find(softSkill => softSkill.toLowerCase().includes(skill.toLowerCase())));
    },
    hardSkillsPrompt() {
        return [
            'Типографика',
            'Figma',
            'Продуктовый дизайн',
            'Исследование и анализ',
            'Agile',
        ].filter(skill => skill.toLowerCase().includes(this.userForm.hardSkill.toLowerCase()) && !this.userForm.hardSkills.find(hardSkill => hardSkill.toLowerCase().includes(skill.toLowerCase())));
    },
    projectsPrompt() {
        return [
            'Centras iHub',
            'Kupipolis',
            'Kommesk Life',
            'MyCent',
            'SOS Medical Assistance',
            'Alpha',
        ].filter(project => project.toLowerCase().includes(this.userForm.project.toLowerCase()));
    }
  },    
  methods: {
    dropDownHandler () {
        Object.keys(this.userForm.dropDownState).forEach(key => this.userForm.dropDownState[key] = false);
    },
    handleItemChanged (value, category) {
        switch (category) {
            case 'work':
                this.userForm.work = value;
                break;
            case 'level':
                this.userForm.level = value;
                break;
            case 'month':
                this.userForm.date_of_birth.month = value;
                break;
            case 'softSkills':
                !this.userForm.softSkills.includes(value) ? this.userForm.softSkills.push(value) : '';
                this.userForm.softSkill = '';
                break;
            case 'hardSkills':
                !this.userForm.hardSkills.includes(value) ? this.userForm.hardSkills.push(value) : '';
                this.userForm.hardSkill = '';
                break;
            case 'project':
                this.userForm.project = value;
                break;
            default:
                console.warn(`There's no such a field!`);
        }
        
        this.dropDownHandler();
    },
    blurHandler(skill) {
        setTimeout(() => {
            switch (skill) {
                case 'work':
                    this.userForm.dropDownState.isWork = false;
                    break;
                case 'level':
                    this.userForm.dropDownState.isLevel = false;
                    break;
                case 'month':
                    this.userForm.dropDownState.isMonth = false;
                    break;
                case 'project':
                    this.userForm.dropDownState.isProject = false;
                    break;
                case 'soft':
                    this.userForm.dropDownState.isSoftSkills = false;
                    break;
                case 'hard':
                    this.userForm.dropDownState.isHardSkills = false;
                    break;
                default:
                    console.warn(`There's no such a field!`);
            }
        }, 125)
    },  
    changeProfileImage(e) {
        const file = e.target.files[0];

        let reader = new FileReader();

        reader.onload = event => {
            this.userForm.profile_image = event.target.result
        }

        reader.readAsDataURL(file)
    },      
    flexibleScroll() {
        personality.style.height = personality.scrollHeight + 'px'
    },
    monthHandler(e) {
        if(e.key === "Enter") {
            e.preventDefault();
            const value = this.userForm.date_of_birth.month;
            if (value) {
                this.userForm.date_of_birth.month = this.monthPrompt?.find(month => month.toLowerCase().includes(value.toLowerCase())) || '';
                this.$refs.month.blur();
            }
        }
    },
    softSkillHandler(e) {
        if(e.key === "Enter") {
            e.preventDefault();
            if (this.userForm.softSkill.length) {
                const value = this.softSkillsPrompt[0]?.toLowerCase()?.includes(this.userForm.softSkill?.toLowerCase()) ? this.softSkillsPrompt[0] : this.userForm.softSkill;
                !this.userForm.softSkills.includes(value) ? this.userForm.softSkills.push(value) : '';
                this.userForm.softSkill = '';
                this.userForm.dropDownState.isSoftSkills = false;
                this.$refs.softSkill.blur();
            }
        }
    },
    hardSkillHandler(e) {
        if(e.key === "Enter") {
            e.preventDefault();
            if (this.userForm.hardSkill.length) {
                const value = this.hardSkillsPrompt[0]?.toLowerCase()?.includes(this.userForm.hardSkill?.toLowerCase()) ? this.hardSkillsPrompt[0] : this.userForm.hardSkill;
                !this.userForm.hardSkills.includes(value) ? this.userForm.hardSkills.push(value) : '';
                this.userForm.hardSkill = '';
                this.userForm.dropDownState.isHardSkills = false;
                this.$refs.hardSkill.blur();
            }
        }
    },
    workHandler(e) {
        if(e.key === "Enter") {
            e.preventDefault();
            const value = this.userForm.work;
            if (value) {
                this.userForm.work = this.workPrompt?.find(work => work.toLowerCase().includes(value.toLowerCase())) || '';
                this.$refs.work.blur();
            }
        }
    },
    levelHandler(e) {
        if(e.key === "Enter") {
            e.preventDefault();
            const value = this.userForm.level;
            if (value) {
                this.userForm.level = this.levelPrompt?.find(level => level.toLowerCase().includes(value.toLowerCase())) || '';
                this.$refs.level.blur();
            }
        }
    },
    projectHandler(e) {
        if(e.key === "Enter") {
            e.preventDefault();
            const value = this.userForm.project;
            if (value) {
                this.userForm.project = this.projectsPrompt?.find(project => project.toLowerCase().includes(value.toLowerCase())) || '';
                this.$refs.project.blur();
            }
        }
    },
    delSoftSkill(index) {
        this.userForm.softSkills.splice(index, 1);
    },  
    delHardSkill(index) {
        this.userForm.hardSkills.splice(index, 1);
    },
    submitHandler(e){
        e.preventDefault();
        this.wasSubmitted = true;
        
        if (!this.v$.$invalid) {
            this.$store.state.user.profile_image = this.userForm.profile_image
            this.$store.state.user.name = this.userForm.name
            this.$store.state.user.surname = this.userForm.surname 
            this.$store.state.user.work = this.userForm.work 
            this.$store.state.user.level = this.userForm.level 
            this.$store.state.user.date_of_birth.day = this.userForm.date_of_birth.day 
            const numberOfMonth = [
                'Январь',
                'Февраль',
                'Март',
                'Апрель',
                'Май',
                'Июнь',
                'Июль',
                'Август',
                'Сентябрь',
                'Октябрь',
                'Ноябрь',
                'Декабрь',
            ].indexOf(this.userForm.date_of_birth.month) + 1;
            this.$store.state.user.date_of_birth.month = numberOfMonth < 10 ? '0' + numberOfMonth : numberOfMonth;
            this.$store.state.user.date_of_birth.year = this.userForm.date_of_birth.year 
            this.$store.state.user.employmentTime = this.userForm.employmentTime 
            this.$store.state.user.personality = this.userForm.personality 
            this.$store.state.user.softSkills = this.userForm.softSkills
            this.$store.state.user.hardSkills = this.userForm.hardSkills 
            this.$store.state.user.project = this.userForm.project
            this.$store.state.user.contacts.mail = this.userForm.contacts.mail
            this.$store.state.user.contacts.telegram = this.userForm.contacts.telegram;
            this.$store.state.user.contacts.phone = this.userForm.contacts.phone

            this.$router.push('/personal-info');
            window.scrollTo(0,0)
        }
    }
  },
  created() {
    const user = this.$store.state.user;
    this.userForm.profile_image = user?.profile_image;
    this.userForm.name = user?.name;
    this.userForm.surname = user?.surname;
    this.userForm.work = user?.work;
    this.userForm.level = user?.level;
    this.userForm.date_of_birth.day = user?.date_of_birth.day;
    this.userForm.date_of_birth.month = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
    ][Number(user?.date_of_birth.month) - 1];
    this.userForm.date_of_birth.year = user?.date_of_birth.year;
    this.userForm.employmentTime = user?.employmentTime;
    this.userForm.personality = user?.personality;
    this.userForm.softSkills = user?.softSkills;
    this.userForm.hardSkills = user?.hardSkills;
    this.userForm.project = user?.project;
    this.userForm.contacts.mail = user?.contacts.mail;
    this.userForm.contacts.telegram = user?.contacts.telegram;
    this.userForm.contacts.phone = user?.contacts.phone;
  },
  updated() {
    personality.style.height = personality.scrollHeight + 'px'
  },
  validations () {
    return {
        userForm: {
            profile_image: {  },
            name: { required },
            surname: { required },
            work: { required },
            level: { required },
            date_of_birth: {
                day: { required },
                month: { required },
                year: { required }
            },
            employmentTime: { required },
            personality: { required },
            softSkills: { required },
            hardSkills: { required },
            project: { required },
            contacts: {
                mail: { required, email },
                telegram: { required },
                phone: { required }
            }
        }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./Personal-Info-Edit.scss";
</style>