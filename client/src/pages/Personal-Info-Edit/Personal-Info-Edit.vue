<template>
    <div class="mb-32 overflow-hidden">
        <div class="container flex flex-col items-start mx-auto px-2 3xl:px-4 p-12 max-w-[1060px]">
            <div class="relative w-full">
                <div class="ellipse ellipse-cyan"></div>
                <div class="flex items-center justify-center mb-12">
                    <div class="relative">
                        <div class="absolute right-0 shadow drop-shadow-xl flex items-center justify-center p-3 w-16 h-16 rounded-full bg-white cursor-pointer">
                            <img class="w-16 h-16 rounded-full" src="../../assets/images/plus.svg" alt="plus">
                            <input @input="e => changeProfileImage(e)" type="file" id="fileInput" class="absolute w-full h-full opacity-0 rounded-full">
                        </div>
                        <img class="w-72 h-72 rounded-full" :src="userForm.profile_image ? userForm.profile_image : imageData" alt="user photo">
                    </div>
                </div>
                <div class="mb-9">
                    <h1 class="text-4xl mb-5">Личная информация</h1>
                    <form class="relative" @submit="e => submitHandler(e)">
                        <div class="ellipse ellipse-purple"></div>
                        <div class="grid gap-6 gap-x-8 mb-8 grid-cols-2">
                            <div>
                                <input @input="v$.userForm.name.$touch" v-model="userForm.name" type="text" id="name" class="text-white font-normal placeholder:font-light bg-transparent border text-3xl rounded-3xl outline-none block w-full p-7 py-4" autocomplete="off" placeholder="Имя" required>
                                <p v-if="v$.userForm.name.$invalid && v$.userForm.name.$anyDirty && wasSubmitted" class="mt-2 text-xl text-red-600 dark:text-red-500">Заполните ваше имя</p>
                            </div>
                            <div>
                                <input @input="v$.userForm.surname.$touch" v-model="userForm.surname" type="text" id="surname" class="text-white font-normal placeholder:font-light bg-transparent border text-3xl rounded-3xl outline-none block w-full p-7 py-4" autocomplete="off" placeholder="Фамилия" required>
                                <p v-if="v$.userForm.surname.$invalid && v$.userForm.surname.$anyDirty && wasSubmitted" class="mt-2 text-xl text-red-600 dark:text-red-500">Заполните вашу фамилию</p>
                            </div>
                            <div class="relative">
                                <div 
                                    class="flex items-center justify-between bg-transparent border-2 border-solid border-white text-3xl font-light text-gray-400 rounded-3xl outline-none w-full px-8 py-4 cursor-pointer" 
                                    :class="{'filled' : userForm.work}" 
                                    @click="dropDownHandler(), userForm.dropDownState.isWork = !userForm.dropDownState.isWork"
                                >
                                    {{this.userForm.work ? this.userForm.work : 'Должность'}} <svg class="w-8 h-8 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                </div>
                                <p v-if="!v$.userForm.work.$model.length && wasSubmitted" class="mt-2 text-xl text-red-600 dark:text-red-500">Укажите свою специальность</p>
                                <Dropdown 
                                    :items="[
                                        'UX/UI designer',
                                        'Frontend-разработчик',
                                        'Backend-разработчик',
                                        'Project Manager',
                                        'Team Lead',
                                        'HR'
                                    ]"
                                    :isActive="userForm.dropDownState.isWork"
                                    :height="'max-h-fit'"
                                    :fontSize="'text-2xl'"
                                    category="work"
                                    @itemHandler="handleItemChanged"
                                />
                            </div>  
                            <div class="relative"> 
                                <div 
                                    class="flex items-center justify-between bg-transparent border-2 border-solid border-white text-3xl font-light text-gray-400 rounded-3xl outline-none w-full px-8 py-4 cursor-pointer" 
                                    :class="{'filled' : userForm.level}" 
                                    @click="dropDownHandler(), userForm.dropDownState.isLevel = !userForm.dropDownState.isLevel"
                                >
                                    {{this.userForm.level ? this.userForm.level : 'Грейд'}} <svg class="w-8 h-8 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                </div>
                                <p v-if="!v$.userForm.level.$model.length && wasSubmitted" class="mt-2 text-xl text-red-600 dark:text-red-500">Укажите свой уровень</p>
                                <Dropdown 
                                    :items="[
                                        'Junior',
                                        'Junior+',
                                        'Middle',
                                        'Middle',
                                        'Middle+',
                                        'Senior'
                                    ]"
                                    :isActive="userForm.dropDownState.isLevel"
                                    :height="'max-h-fit'"
                                    :fontSize="'text-2xl'"
                                    category="level"
                                    @itemHandler="handleItemChanged"
                                />
                            </div> 
                        </div>
                        <div class="grid grid-cols-2 gap-6 gap-x-8 mb-8 relative z-30">
                            <div>
                                <h1 class="text-4xl mb-5">Дата Рождения</h1>
                                <div class="flex items-baseline gap-4">
                                    <div>
                                        <input v-model="userForm.date_of_birth.day" type="number" id="date_of_birth" class="text-white text-center font-normal placeholder:font-light bg-transparent border text-2xl rounded-3xl outline-none block w-full p-7 py-4" autocomplete="off" placeholder="День" required>
                                    </div>
                                    <div class="relative"> 
                                        <div 
                                            class="flex items-center justify-between text-white font-light bg-transparent border-2 border-solid border-white text-xl rounded-3xl outline-none w-64 px-8 py-4 cursor-pointer" 
                                            :class="{'filled' : userForm.month}" 
                                            @click="dropDownHandler(), userForm.dropDownState.isMonth = !userForm.dropDownState.isMonth"
                                        >
                                            <span :class="[{'font-normal' : this.userForm.date_of_birth.month.length}, {'opacity-60 font-light' : !this.userForm.date_of_birth.month.length}, 'text-2xl']">{{this.userForm.date_of_birth.month ? this.userForm.date_of_birth.month : 'Месяц'}}</span> <svg class="w-8 h-8 ml-2 opacity-60" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                        <Dropdown 
                                            :items="[
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
                                            ]"
                                            :isActive="userForm.dropDownState.isMonth"
                                            :height="'max-h-60'"
                                            :fontSize="'text-xl'"
                                            category="month"
                                            @itemHandler="handleItemChanged"
                                        />
                                        </div> 
                                    <div>
                                    <input v-model="userForm.date_of_birth.year" type="number" id="month" class="text-white text-center font-normal placeholder:font-light bg-transparent border text-2xl rounded-3xl outline-none block w-full p-7 py-4" autocomplete="off" placeholder="Год" required>
                                    </div>
                                </div>
                                <p v-if="(!v$.userForm.date_of_birth.day.$model.length || !v$.userForm.date_of_birth.month.$model.length || !v$.userForm.date_of_birth.year.$model.length) && wasSubmitted" class="mt-2 text-xl text-red-600 dark:text-red-500">Укажите дату рождения</p>
                            </div>
                            <div>
                                <h1 class="text-4xl mb-5">График работы</h1>
                                <div class="grid grid-cols-3 gap-4">
                                    <div class="flex items-center justify-between text-white bg-transparent border-2 border-solid border-white text-base rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer" :class="{'activeTime' : userForm.employmentTime == 'с 8:00 до 17:00'}" @click="userForm.employmentTime = 'с 8:00 до 17:00'">с 8:00 до 17:00</div>
                                    <div class="flex items-center justify-between text-white bg-transparent border-2 border-solid border-white text-base rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer" :class="{'activeTime' : userForm.employmentTime == 'с 9:00 до 18:00'}" @click="userForm.employmentTime = 'с 9:00 до 18:00'">с 9:00 до 18:00</div>
                                    <div class="flex items-center justify-between text-white bg-transparent border-2 border-solid border-white text-base rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer" :class="{'activeTime' : userForm.employmentTime == 'с 10:00 до 19:00'}" @click="userForm.employmentTime = 'с 10:00 до 19:00'">с 10:00 до 19:00</div>
                                </div>
                                <p v-if="v$.userForm.employmentTime.$invalid && wasSubmitted" class="mt-2 text-xl text-red-600 dark:text-red-500">Укажите график работы</p>
                            </div>
                        </div>
                        <div class="mb-8">
                            <h1 class="text-4xl mb-5">Обо мне</h1>
                            <div>
                                <textarea 
                                    v-model="userForm.personality" 
                                    type="text" 
                                    id="personality"
                                    class="scroll-none text-white font-base bg-transparent border text-3xl rounded-3xl outline-none resize-none block w-full h-48 p-7 pb-16 py-4" 
                                    :class="{'empty-area' : !userForm.personality.length}" 
                                    style="min-height: 200px;"
                                    @input="v$.userForm.personality.$touch"
                                    @keydown="flexibleScroll"
                                    autocomplete="off" 
                                    placeholder="Lorem ipsum dolor sit amet consectetur. Vestibulum ut mauris turpis sit sed semper. Pellentesque auctor massa diam a arcu in eu eget tincidunt. Eu ultrices arcu eget aenean quam vel felis non blandit. Ornare nunc morbi magna morbi dolor." 
                                    required
                                >
                                </textarea>
                            </div>
                            <p v-if="v$.userForm.personality.$invalid && v$.userForm.personality.$anyDirty && wasSubmitted" class="mt-2 text-xl text-red-600 dark:text-red-500">Расскажите немного о себе</p>
                        </div>
                        <div class="grid grid-cols-2 gap-6 gap-x-8 mb-8">
                            <div>
                                <h1 class="text-4xl mb-5">Soft Skills</h1>
                                    <div class="relative"> 
                                        <div class="flex items-center justify-between text-white bg-transparent border-2 border-solid border-white text-2xl rounded-3xl outline-none w-full px-8 py-4 cursor-pointer" @click="dropDownHandler(), userForm.dropDownState.isSoftSkills = !userForm.dropDownState.isMonth"><span class="opacity-60">Soft skill</span> <svg class="w-8 h-8 ml-2 opacity-60" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div>
                                        <Dropdown 
                                            :items="[
                                                'Коммуникабельность',
                                                'Выступления на публике',
                                                'Обучаемость',
                                                'Упорство',
                                                'Наставничество',
                                            ]"
                                            :isActive="userForm.dropDownState.isSoftSkills"
                                            :height="'max-h-fit'"
                                            :fontSize="'text-2xl'"
                                            category="softSkills"
                                            @itemHandler="handleItemChanged"
                                        />
                                        </div> 
                                        <p v-if="!v$.userForm.softSkills.$model.length && wasSubmitted" class="mt-2 text-xl text-red-600 dark:text-red-500">Выберите ваши софт скиллы</p>
                                        <div :class="[{'mt-8' : userForm.softSkills.length}, 'flex flex-wrap']">
                                            <span 
                                                v-for="(item, idx) in userForm.softSkills" :key="idx" 
                                                class="text-xl w-fit flex items-center justify-between bg-white rounded-full px-5 py-2 font-semibold text-gray-700 mr-4 mb-5 hover:bg-gray-100"
                                            >
                                                {{ item }} <svg aria-hidden="true" @click="delSoftSkill(idx)" class="w-6 h-6 ml-4 mt-1 cursor-pointer" fill="#5282E7" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></span>
                                        </div>
                                    <div>
                                </div>
                            </div>
                            <div class="relative">
                                <h1 class="text-4xl mb-5">Hard skills</h1>
                                <div class="flex items-center justify-between text-white bg-transparent border-2 border-solid border-white text-2xl rounded-3xl outline-none w-full px-8 py-4 cursor-pointer" @click="dropDownHandler(), userForm.dropDownState.isHardSkills = !userForm.dropDownState.isHardSkills"><span class="opacity-60">Hard skill</span> <svg class="w-8 h-8 ml-2 opacity-60" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div>
                                <Dropdown 
                                    :items="[
                                        'Типографика',
                                        'Figma',
                                        'Продуктовый дизайн',
                                        'Исследование и анализ',
                                        'Agile',
                                    ]"
                                    :isActive="userForm.dropDownState.isHardSkills"
                                    :height="'max-h-fit'"
                                    :fontSize="'text-2xl'"
                                    category="hardSkills"
                                    @itemHandler="handleItemChanged"
                                />
                                <p v-if="!v$.userForm.hardSkills.$model.length && wasSubmitted" class="mt-2 text-xl text-red-600 dark:text-red-500">Выберите ваши хард скиллы</p>
                                <div :class="[{'mt-8' : userForm.hardSkills.length}, 'flex flex-wrap']">
                                    <span 
                                        v-for="(item, idx) in userForm.hardSkills" :key="idx" 
                                        class="text-xl w-fit flex items-center justify-between bg-white rounded-full px-5 py-2 font-semibold text-gray-700 mr-4 mb-5 hover:bg-gray-100"
                                    >
                                        {{ item }} <svg aria-hidden="true" @click="delHardSkill(idx)" class="w-6 h-6 ml-4 mt-1 cursor-pointer" fill="#5282E7" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></span>
                                </div>
                            </div>
                        </div>
                        <div class="mb-10 relative">
                            <h1 class="text-4xl mb-5">Проект</h1>
                            <div 
                                class="flex items-center justify-between text-white bg-transparent border-2 border-solid border-white rounded-3xl outline-none w-full px-8 py-4 cursor-pointer" 
                                @click="dropDownHandler(), userForm.dropDownState.isProject = !userForm.dropDownState.isProject"
                            >
                                <span :class="[{'opacity-60 font-light' : !userForm.project}, 'text-3xl']">{{this.userForm.project ? this.userForm.project : 'Название проекта'}}</span> <svg class="w-8 h-8 ml-2 opacity-60" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                            <p v-if="v$.userForm.project.$invalid && wasSubmitted" class="mt-2 text-xl text-red-600 dark:text-red-500">Выберите проект</p>
                            <Dropdown 
                                :items="[
                                    'Centras iHub',
                                    'Kupipolis',
                                    'Kommesk Life',
                                    'MyCent',
                                    'SOS Medical Assistance',
                                    'Alpha',
                                ]"
                                :isActive="userForm.dropDownState.isProject"
                                :height="'max-h-fit'"
                                :fontSize="'text-2xl'"
                                category="project"
                                @itemHandler="handleItemChanged"
                            />
                        </div>
                        <div class="px-6">
                            <h1 class="text-4xl mb-8">Контакты</h1>
                            <div>
                                <div class="mb-10">
                                    <div class="relative">
                                        <div class="absolute inset-y-0 left-0 flex items-center pl-8 pointer-events-none">
                                            <label class="z-20 absolute -top-4 left-12 text-2xl bg-black text-white px-2">Почта</label>
                                            <img class="w-10 h-10" :class="{'opacity-60' : !userForm.contacts.mail}" src="../../assets/images/mail.svg" alt="mail" />
                                        </div>
                                        <input @input="v$.userForm.contacts.mail.$touch" v-model="userForm.contacts.mail" type="email" id="mail" autocomplete="off" class="peer border text-white bg-transparent text-3xl rounded-3xl outline-none block w-full px-24 py-6" placeholder="Forexample@forexample.com" required>
                                    </div>
                                    <p v-if="v$.userForm.contacts.mail.$invalid && v$.userForm.contacts.mail.$anyDirty && wasSubmitted" class="mt-2 text-xl text-red-600 dark:text-red-500">Укажите правильную почту</p>
                                </div>
                                <div class="mb-10">
                                    <div class="relative">
                                        <div class="absolute inset-y-0 left-0 flex items-center pl-8 pointer-events-none">
                                            <label class="z-20 absolute -top-4 left-12 text-2xl bg-black text-white px-2">Telegram</label>
                                            <img class="w-10 h-10" :class="{'opacity-60' : !userForm.contacts.telegram}" src="../../assets/images/telega.svg" alt="mail" />
                                        </div>
                                        <input @input="v$.userForm.contacts.telegram.$touch" v-model="userForm.contacts.telegram" v-maska data-maska="!@******************************" type="text" autocomplete="off" id="telegram" class="border text-white bg-transparent text-3xl rounded-3xl outline-none block w-full px-24 py-6" placeholder="@Forexample" required>
                                    </div>
                                    <p v-if="v$.userForm.contacts.telegram.$invalid && v$.userForm.contacts.telegram.$anyDirty && wasSubmitted" class="mt-2 text-xl text-red-600 dark:text-red-500">Укажите ваш профиль в telegram</p>
                                </div>
                                <div class="mb-10">
                                    <div class="relative">
                                        <div class="absolute inset-y-0 left-0 flex items-center pl-8 pointer-events-none">
                                            <label class="z-20 absolute -top-4 left-12 text-2xl bg-black text-white px-2">Телефон</label>
                                            <img class="w-10 h-10" :class="{'opacity-60' : !userForm.contacts.phone}" src="../../assets/images/phone.svg" alt="mail" />
                                        </div>
                                        <input @input="v$.userForm.contacts.phone.$touch" v-model="userForm.contacts.phone" v-maska data-maska="+# (###) ###-##-##" type="phone" autocomplete="off" id="phone" class="border text-white bg-transparent text-3xl rounded-3xl outline-none block w-full px-24 py-6" placeholder="+7 (777) 777-77-77" required>
                                    </div>
                                    <p v-if="v$.userForm.contacts.phone.$invalid && v$.userForm.contacts.phone.$anyDirty && wasSubmitted" class="mt-2 text-xl text-red-600 dark:text-red-500">Укажите ваш номер телефона</p>
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="text-white text-2xl bg-blue-dark hover:bg-blue-darker font-medium rounded-2xl px-14 py-3.5 mt-6 mr-2 mb-2 float-right">Сохранить изменения</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Dropdown from '../../components/UI/Dropdown/Dropdown.vue'

import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

import imageData from '../../assets/images/undefined_logo.svg';
import { vMaska } from "maska";

export default {
  components: {
    Dropdown,
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
                break;
            case 'hardSkills':
                !this.userForm.hardSkills.includes(value) ? this.userForm.hardSkills.push(value) : '';
                break;
            case 'project':
                this.userForm.project = value;
                break;
            default:
                console.warn(`There's no such a field!`);
        }
        
        this.dropDownHandler();
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
    delSoftSkill(index) {
        this.userForm.softSkills.splice(index, 1);
    },  
    delHardSkill(index) {
        this.userForm.hardSkills.splice(index, 1);
    },
    submitHandler(e){
        e.preventDefault();
        this.wasSubmitted = true;
        
        if (this.v$.$invalid) {
            alert('Проверьте ещё раз форму!');
        } else {
            alert('Вы молодец! Форму успешно заполнили! Теперь ждём работу от Backend разработчиков :D');
            this.$router.push('/personal-info');
            window.scrollTo(0,0)
        }
    }
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