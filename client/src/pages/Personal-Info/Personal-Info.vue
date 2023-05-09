<template>
    <div>
        <Navbar></Navbar>
        <div class="container max-w-3xl flex flex-col items-start mx-auto px-2 p-12">
            <div class="relative w-full">
                <div class="ellipse ellipse-cyan"></div>
                <div class="flex items-center gap-12 pb-10">
                    <div class="relative">
                        <img class="w-56 h-56 rounded-full" :src="user.profile_image" alt="user photo">
                        <div v-if="user.isAdmin" class="absolute right-0 bottom-4 bg-white font-semibold text-blue w-fit px-4 rounded-2xl">Admin</div>
                    </div>
                    <div class="flex flex-col">
                        <h2 class="text-[2.5rem] font-medium">{{ user.name }} {{ user.surname }}</h2>
                        <h4 id="work" class="text-2xl text-blue-dark">{{ user.level }} {{ user.work }}</h4>
                        <div id="tooltip" class="absolute top-24 z-30 visible opacity-0 inline-block px-5 py-5 text-sm text-black transition-opacity duration-300 bg-white w-96 rounded-3xl shadow-sm">
                            <p class="text-base font-medium">Должностные обязанности</p>
                            <p class="text-base font-medium text-blue-darkest">{{ user.work }}</p>
                            <p class="text-base">Lorem ipsum dolor sit amet consectetur. Elit purus sit suspendisse arcu tincidunt quis. Erat cursus urna in aenean feugiat faucibus. Aliquam mauris phasellus eget donec aliquam magna tristique. Eleifend netus ipsum faucibus eget.</p>
                        </div>
                        <div class="flex items-center mt-2">
                            <p class="text-gray-600 text-base font-medium">{{ user.date_of_birth.day }}.{{ user.date_of_birth.month }}.{{ user.date_of_birth.year }}</p>
                            <div class="bg-gray-600 w-[0.25px] h-[24px] mx-3"></div>
                            <p class="text-gray-600 text-base font-medium">{{ user.employmentTime }}</p>
                        </div>
                        <div class="flex flex-col gap-2 mt-3">
                            <div class="flex items-center">
                                <img class="w-5 h-5 mr-3" src="../../assets/images/mail.svg" alt="user photo">
                                <p class="text-lg">{{ user.contacts.mail }}</p>
                            </div>
                            <div class="flex items-center">
                                <img class="w-5 h-5 mr-3" src="../../assets/images/telegram.svg" alt="user photo">
                                <p class="text-lg">{{ user.contacts.telegram }}</p>
                            </div>
                            <div class="flex items-center">
                                <img class="w-5 h-5 mr-3" src="../../assets/images/phone.svg" alt="user photo">
                                <p class="text-lg">{{ user.contacts.phone }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <router-link  
                    to="/personal-info-edit"
                    class="w-full flex justify-center items-center text-xl bg-blue-dark hover:bg-blue-darker rounded-full py-[14px] mb-12 mx-auto relative z-10"
                >
                    <img class="w-5 h-5 mr-5" src="../../assets/images/pen.svg" alt="user photo">
                    Редактировать профиль
                </router-link>
                <div class="flex justify-between mb-3 w-full">
                    <span class="text-lg font-light text-gray-300">Новичок</span>
                    <span class="text-lg font-light text-gray-300" :class="{ 'text-white font-normal relative left-6' : user.isAdmin }">Профессионал</span>
                </div>
            </div>
            <div class="relative">
                <div class="ellipse ellipse-purple"></div>
                <div class="w-full bg-gray-200 rounded-full h-2 mb-12 relative z-10">
                    <div class="bg-blue-dark h-2 rounded-full" :style="{ width: this.levelPercent.percent + '%' }">
                        <span class="absolute bottom-full mb-3.5 rounded-sm py-1 px-2 text-lg font-regular text-white" :style="{ left: this.levelPercent.left }">
                            <span
                                class="bg-blue-dark absolute bottom-[-26px] left-1/3 h-4 w-4 rounded-full"
                            ></span>
                            {{ !user.isAdmin ? this.levelPercent.percent + '%' : '' }}
                        </span>
                    </div>
                </div>
                <div class="mb-8 relative z-10">
                    <h1 class="text-[26px] mb-2">Обо мне</h1>
                    <p class="text-lg leading-6 font-light" v-html="userPersonality"></p>
                </div>
                <div class="mb-6 relative z-10">
                    <h1 class="text-[26px] mb-2">Soft Skills</h1>
                    <div>
                        <span v-for="softSkill of user.softSkills" :key="softSkill" class="text-sm inline-block bg-white rounded-full px-5 py-2 font-semibold text-gray-700 mr-4 mb-4">{{ softSkill }}</span>
                    </div>
                </div>
                <div class="mb-8 relative z-10">
                    <h1 class="text-[26px] mb-2">Hard skills</h1>
                    <div>
                        <span v-for="hardSkill of user.hardSkills" :key="hardSkill" class="text-sm inline-block bg-white rounded-full px-5 py-2 font-semibold text-gray-700 mr-4 mb-4">{{ hardSkill }}</span>
                    </div>
                </div>
                <div class="mb-8 relative z-10">
                    <h1 class="text-3xl mb-5">Проект</h1>
                    <div class="block bg-white text-black p-8 pb-16 rounded-3xl overflow-hidden relative">
                        <img src="../../assets/images/iHub_logo2.svg" class="h-14 mb-4" alt="iHub logo" />
                        <div class="flex items-center justify-between mb-2">
                            <p class="text-base leading-6 w-[585px]">Lorem ipsum dolor sit amet consectetur. Arcu vulputate dignissim a tellus tincidunt porttitor mi sagittis. Adipiscing gravida nisl morbi tempor arcu neque enim.</p>
                            <div class="flex flex-col ml-12">
                                <h5 class="text-lg">Команда</h5>
                                <div class="flex items-center justify-between">
                                    <img src="../../assets/images/team_mate1.svg" class="h-16 right-3 z-20 relative" alt="team_mate" />
                                    <img src="../../assets/images/team_mate2.svg" class="h-16 -left-9 z-10 relative" alt="team_mate" />
                                    <img src="../../assets/images/team_mate3.svg" class="h-16 -left-16 relative" alt="team_mate" />
                                    <p class="text-lg -left-[3.75rem] relative">+12</p>
                                </div>
                            </div>
                        </div>
                        <p class="text-xl font-normal">Подразделение</p>
                        <h3 class="text-[32px] font-medium">{{ user.project }}</h3>
                        <img class="w-full left-0 bottom-0 absolute" src="../../assets/images/blue_wave.png" alt="wave">
                    </div>
                </div>
                <div class="mb-20" v-if="!user.isAdmin">
                    <h1 class="text-[28px] mb-2">Наставник</h1>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-8">
                            <img class="w-28 h-28 rounded-full" src="../../assets/images/design_sensei.svg" alt="user photo">
                            <div class="flex flex-col">
                                <h2 class="mb-1.5 text-3xl font-medium">Станислав</h2>
                                <h4 class="text-xl text-blue-dark">Senior UX/UI designer</h4>
                            </div>
                        </div>
                        <div class="flex flex-col gap-2">
                            <div class="flex items-center">
                                <img class="w-5 h-5 mr-4" src="../../assets/images/mail.svg" alt="user photo">
                                <p class="text-base">forexample123@gmail.com</p>
                            </div>
                            <div class="flex items-center">
                                <img class="w-5 h-5 mr-4" src="../../assets/images/telegram.svg" alt="user photo">
                                <p class="text-base">@forexample123</p>
                            </div>
                            <div class="flex items-center">
                                <img class="w-5 h-5 mr-4" src="../../assets/images/phone.svg" alt="user photo">
                                <p class="text-base">+7 (777) 777-77-77</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container flex flex-col items-start mx-auto">
            <div class="mb-14 relative z-10 w-full" v-if="!user.isAdmin">
                <h1 class="text-[28px] mb-5">Полезные файлы</h1>
                <div class="grid grid-cols-2 gap-6">
                    <div class="flex items-center justify-center h-8 py-14 text-lg font-medium text-white rounded-[20px] border-2 border-solid border-white">Презентация OnBoarding</div>
                    <div class="flex items-center justify-center h-8 py-14 text-lg font-medium text-white rounded-[20px] border-2 border-solid border-white">Дорожная карта новичка</div>
                </div>
            </div>
            <div class="mb-16 relative z-10 w-full" v-if="!user.isAdmin">
                <h1 class="text-[28px] mb-3">Анкеты</h1>
                <div class="grid grid-cols-2 gap-6">
                    <div class="flex items-center flex-col py-4 text-lg font-medium text-white rounded-[20px] border-2 border-solid border-white opacity-50">
                        <P class="text-2xl font-normal">Анкета 1</P>
                        <p class="text-xl font-normal pb-2 opacity-40">Будет доступно через 2 недели</p>
                    </div>
                    <div class="flex items-center flex-col py-4 text-lg font-medium text-white rounded-[20px] border-2 border-solid border-white opacity-50">
                        <P class="text-2xl font-normal">Анкета 2</P>
                        <p class="text-xl font-normal pb-2 opacity-40">Будет доступно через 3 месяца</p>
                    </div>
                </div>
            </div>
            <div class="mb-14 relative z-10 w-full" v-if="user.isAdmin">
                <h1 class="text-[28px] mb-5">Файлы</h1>
                <div class="grid grid-cols-3 gap-6">
                    <div v-for="(file, id) of files" class="flex items-center justify-center h-8 py-14 text-base font-medium text-white rounded-[20px] border-2 border-solid border-white text-center relative parent">
                        <div class="pen" @click="file.isEditing = !file.isEditing, !file.text ? files.splice(id, 1) : ''"></div>
                        <div class="trash" @click="files.splice(id, 1)"></div>
                        <p v-html="file.text" v-if="!file.isEditing"></p>
                        <input @keypress="changeFiles(id)" class="bg-transparent text-white outline-none text-center opacity-80" v-model="file.text" placeholder="Название файла..." v-if="file.isEditing">
                    </div>
                    <div class="flex items-center justify-center h-8 py-14 text-base font-medium text-white rounded-[20px] text-center">
                        <div @click="files.push({ text: 'new file', isEditing: false })" class="bg-[#969696] text-black text-4xl font-bold pb-[0.45rem] w-12 h-12 flex items-center justify-center rounded-full cursor-pointer transition-all hover:bg-white">
                            +
                        </div>
                    </div>
                </div>
            </div>
            <div class="mb-32 relative z-10 w-full">
                <h1 class="text-[28px] mb-8">Какие доступы нужно получить?</h1>
                <div class="grid grid-cols-6 gap-5">
                    <div v-for="(acc, id) of access" class="flex flex-col items-center relative" :class="{ 'parent2' : user.isAdmin }">
                        <div class="flex items-center justify-center h-32 py-4 text-lg font-medium text-white rounded-[20px] border-2 border-solid border-white w-full">
                            <img v-if="!acc.isEditing" class="w-12 h-12 transition-all" :class="`${String(acc.path).includes('mycent.kz') ? 'w-28' : '' ? acc.path === kias : 'w-16'}`" :src="acc.path" alt="image">
                            <div v-if="acc.isEditing && user.isAdmin" class="absolute w-10 h-10 bg-[#b5b5b5] blur-md opacity-70"></div>
                            <div v-if="acc.isEditing && user.isAdmin" class="access-pen cursor-pointer" @click="acc.isEditing = !acc.isEditing, !acc.text ? access.splice(id, 1) : ''"></div>
                            <div v-if="acc.isEditing && user.isAdmin" class="access-trash cursor-pointer" @click="access.splice(id, 1)"></div>
                        </div>
                        <div class="pen" @click="acc.isEditing = !acc.isEditing, !acc.text ? access.splice(id, 1) : ''" v-if="!acc.isEditing && user.isAdmin"></div>
                        <div class="trash" @click="access.splice(id, 1)" v-if="!acc.isEditing && user.isAdmin"></div>
                        <p class="text-center leading-5 mt-3" v-html="acc.text" v-if="!acc.isEditing"></p>
                        <input @keypress="changeAccess(id)" class="bg-transparent text-white outline-none text-center opacity-80 mt-[10px]" v-model="acc.text" placeholder="Название доступа..." v-if="acc.isEditing && user.isAdmin">
                    </div>
                </div>
                <div class="mx-auto w-full" v-if="user.isAdmin">
                    <div class="flex items-center justify-center h-8 py-14 text-base font-medium text-white rounded-[20px] text-center">
                        <div @click="access.push({ text: 'new acess', isEditing: false, path: null })" class="bg-[#969696] text-black text-4xl font-bold pb-[0.45rem] w-12 h-12 flex items-center justify-center rounded-full cursor-pointer transition-all hover:bg-white">
                            +
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Navbar from '../../components/layout/Navbar/Navbar.vue';
import Footer from '../../components/layout/Footer/Footer.vue';

import adminImage from '../../assets/images/admin.png';

import outlook from '../../assets/images/outlook.svg';
import mycentkz from '../../assets/images/mycent.kz.svg';
import wechat from '../../assets/images/wechat.svg';
import kias from '../../assets/images/kias.svg';
import telegram from '../../assets/images/telegram.svg';
import whatsapp from '../../assets/images/whatsapp.svg';

export default {
    data() {
        return {
            user: {
                profile_image: "",
                name: "",
                surname: "",
                work: "",
                level: "",
                date_of_birth: {
                    day: "",
                    month: "",
                    year: ""
                },
                employmentTime: "",
                personality: "",
                softSkills: [],
                hardSkills: [],
                project: "",
                contacts: {
                    mail: "",
                    telegram: "",
                    phone: ""
                },
                isAdmin: false
            },
            files: [
                {
                    text: 'Презентация OnBoarding',
                    isEditing: false
                },
                {
                    text: 'Анкета 1',
                    isEditing: false
                },
                {
                    text: 'Анкета 2',
                    isEditing: false
                },
                {
                    text: 'Дорожная карта <br> (SQL разработчик)',
                    isEditing: false
                },
                {
                    text: 'Дорожная карта <br> (Backend разработчик)',
                    isEditing: false
                },
                {
                    text: 'Дорожная карта <br> (Fronted разработчик)',
                    isEditing: false
                },
                {
                    text: 'Дорожная карта <br> (QA)',
                    isEditing: false
                },
                {
                    text: 'Дорожная карта <br> (QA)',
                    isEditing: false
                },
                {
                    text: 'Дорожная карта <br> (Scrum мастер)',
                    isEditing: false
                },
                {
                    text: 'Дорожная карта (дизайнер)',
                    isEditing: false
                }
            ],
            access: [
                {
                    text: 'Электронная почта Outlook',
                    isEditing: false,
                    path: outlook
                },
                {
                    text: 'Корпоративный портал',
                    isEditing: false,
                    path: mycentkz
                },
                {
                    text: 'Общение с коллегами WeChat',
                    isEditing: false,
                    path: wechat
                },
                {
                    text: 'Все процессы компании',
                    isEditing: false,
                    path: kias
                },
                {
                    text: 'Чат-бот в Telegram',
                    isEditing: false,
                    path: telegram
                },
                {
                    text: 'Группа в WhatsApp',
                    isEditing: false,
                    path: whatsapp
                },
            ]
        };
    },
    computed: {
        levelPercent() {
            switch (this.user.level) {
                case "Junior":
                    return {
                        percent: 30,
                        left: "12.75rem"
                    };
                case "Junior+":
                    return {
                        percent: 40,
                        left: "17.75rem"
                    };
                case "Middle":
                    return {
                        percent: 60,
                        left: "27rem"
                    };
                case "Middle+":
                    return {
                        percent: 80,
                        left: "36.5rem"
                    };
                case "Senior":
                    return {
                        percent: 100,
                        left: "47.5rem"
                    };
                default:
                    return 0;
            }
        },
        userPersonality() {
            return `${this.user.personality}`.replaceAll("\n", "<br>");
        }
    },
    methods: {
        changeFiles(id) {
            if(event.key === "Enter") {
                this.files[id].isEditing = false;
            }
        },
        changeAccess(id) {
            if(event.key === "Enter") {
                this.access[id].isEditing = false;
            }
        }
    },
    created() {
        this.user = this.$store.state.user;

        // Для админа
        this.user.profile_image = adminImage;
        this.user.name = 'Айгерим';
        this.user.surname = 'Абилова';
        this.user.work = 'HR manager';
        this.user.level = 'Senior';
        this.user.date_of_birth.day = '24';
        this.user.date_of_birth.month = '09';
        this.user.date_of_birth.year = '1989';
        this.user.employmentTime = 'с 8:00 до 17:00';
        this.user.softSkills = ['Коммуникабельность','Эмпатия','Критическое мышление'];
        this.user.hardSkills = ['Набор персонала','Укмплектование штатов','Управление производительносью'];
        this.user.contacts.mail = 'abilova.aigerim@gmail.com';
        this.user.contacts.telegram = '@aigerim2409';
        this.user.contacts.phone = '+7 (777) 777-77-77';
        this.user.project = this.$store.state.user.project;
        this.user.isAdmin = true;
    },
    components: { Navbar, Footer }
}
</script>

<style lang="scss" scoped>
@import "./Personal-Info.scss";

.pen {
    width: 16px;
    height: 16px;

    background-position: center;
    background-color: #fff;
    mask: url('../../assets/images/pen.svg') no-repeat center / contain;
    opacity: 0.6;
    transition: all 0.25s ease 0s;

    position: absolute;
    top: 1rem;
    right: 2.75rem;

    opacity: 0;
    visibility: hidden;

    cursor: pointer;

    &:hover{
        opacity: 1;
    }
}

.trash {
    width: 18px;
    height: 18px;

    background-position: center;
    background-color: #fff;
    mask: url('../../assets/images/trash.svg') no-repeat center / contain;
    opacity: 0.6;
    transition: all 0.25s ease 0s;

    position: absolute;
    top: 1rem;
    right: 1rem;

    opacity: 0;
    visibility: hidden;

    cursor: pointer;

    &:hover{
        opacity: 1;
    }
}

.access-pen, .access-trash {
    height: 22px;

    background-position: center;
    background-color: #fff;
    cursor: pointer;
}

.access-pen {
    width: 20px;
    mask: url('../../assets/images/pen.svg') no-repeat center / contain;
    margin-right: 0.5rem;
}

.access-trash {
    width: 22px;
    mask: url('../../assets/images/trash.svg') no-repeat center / contain;
}

.parent:hover {
    img {
        opacity: 0;
        visibility: hidden;
    }

    .pen, .trash {
        opacity: 1;
        visibility: visible;
    }
}

.parent2:hover {
    .pen, .trash {
        opacity: 1;
        visibility: visible;
    }

    img {
        opacity: 0;
        visibility: hidden;
    }
}

</style>