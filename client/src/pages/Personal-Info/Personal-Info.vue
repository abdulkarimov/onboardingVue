<template>
    <div>
        <div class="container max-w-3xl flex flex-col items-start mx-auto px-2 p-12">
            <div class="relative w-full">
                <div class="ellipse ellipse-cyan"></div>
                <div class="flex items-center gap-12 pb-10">
                    <img class="w-56 h-56 rounded-full" :src="user.profile_image" alt="user photo">
                    <div class="flex flex-col">
                        <h2 class="text-[2.5rem] font-medium">{{ user.name }} {{ user.surname }}</h2>
                        <h4 id="work" class="text-2xl text-blue-dark">{{ user.level }} {{ user.work }}</h4>
                        <div id="tooltip" class="absolute top-24 z-10 visible opacity-0 inline-block px-5 py-5 text-sm text-black transition-opacity duration-300 bg-white w-96 rounded-3xl shadow-sm">
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
                    class="w-full flex justify-center items-center text-xl bg-blue-dark hover:bg-blue-darker rounded-full py-[14px] mb-12 mx-auto"
                >
                    <img class="w-5 h-5 mr-5" src="../../assets/images/pen.svg" alt="user photo">
                    Редактировать профиль
                </router-link>
                <div class="flex justify-between mb-3 w-full">
                    <span class="text-lg font-light text-gray-300">Новичок</span>
                    <span class="text-lg font-light text-gray-300">Профессионал</span>
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
                            {{ this.levelPercent.percent }}% 
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
                <div class="mb-20">
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
            <div class="mb-14 relative z-10 w-full">
                <h1 class="text-[28px] mb-5">Полезные файлы</h1>
                <div class="grid grid-cols-2 gap-6">
                    <div class="flex items-center justify-center h-8 py-14 text-lg font-medium text-white rounded-[20px] border-2 border-solid border-white-500">Презентация OnBoarding</div>
                    <div class="flex items-center justify-center h-8 py-14 text-lg font-medium text-white rounded-[20px] border-2 border-solid border-white-500">Дорожная карта новичка</div>
                </div>
            </div>
            <div class="mb-16 relative z-10 w-full">
                <h1 class="text-[28px] mb-3">Анкеты</h1>
                <div class="grid grid-cols-2 gap-6">
                    <div class="flex items-center flex-col py-4 text-lg font-medium text-white rounded-[20px] border-2 border-solid border-white-500 opacity-50">
                        <P class="text-2xl font-normal">Анкета 1</P>
                        <p class="text-xl font-normal pb-2 opacity-40">Будет доступно через 2 недели</p>
                    </div>
                    <div class="flex items-center flex-col py-4 text-lg font-medium text-white rounded-[20px] border-2 border-solid border-white-500 opacity-50">
                        <P class="text-2xl font-normal">Анкета 2</P>
                        <p class="text-xl font-normal pb-2 opacity-40">Будет доступно через 3 месяца</p>
                    </div>
                </div>
            </div>
            <div class="mb-32 relative z-10 w-full">
                <h1 class="text-[28px] mb-8">Какие доступы нужно получить?</h1>
                <div class="grid grid-cols-6 gap-5">
                    <div class="flex flex-col items-center">
                        <div class="flex items-center justify-center h-32 py-4 text-lg font-medium text-white rounded-[20px] border-2 border-solid border-white-500 w-full">
                            <img class="w-12 h-12" src="../../assets/images/outlook.svg" alt="outlook">
                        </div>
                        <p class="text-center mt-3 text-base">Электронная почта Outlook</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="flex items-center justify-center h-32 py-4 text-lg font-medium text-white rounded-[20px] border-2 border-solid border-white-500 w-full">
                            <img class="w-[7.5rem] h-[7.5rem]" src="../../assets/images/mycent.kz.svg" alt="outlook">
                        </div>
                        <p class="text-center mt-3 text-base">Корпоративный портал</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="flex items-center justify-center h-32 py-4 text-lg font-medium text-white rounded-[20px] border-2 border-solid border-white-500 w-full">
                            <img class="w-[4rem] h-[4rem]" src="../../assets/images/wechat.svg" alt="outlook">
                        </div>
                        <p class="text-center mt-3 text-base">Общение с коллегами WeChat</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="flex items-center justify-center h-32 py-4 text-lg font-medium text-white rounded-[20px] border-2 border-solid border-white-500 w-full">
                            <img class="w-[4.5rem] h-[4.5rem]" src="../../assets/images/kias.svg" alt="outlook">
                        </div>
                        <p class="text-center mt-3 text-base">Все процессы компании</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="flex items-center justify-center h-32 py-4 text-lg font-medium text-white rounded-[20px] border-2 border-solid border-white-500 w-full">
                            <img class="w-12 h-12" src="../../assets/images/telega.svg" alt="outlook">
                        </div>
                        <p class="text-center mt-3 text-base">Чат-бот в Telegram</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="flex items-center justify-center h-32 py-4 text-lg font-medium text-white rounded-[20px] border-2 border-solid border-white-500 w-full">
                            <img class="w-12 h-12" src="../../assets/images/whatsapp.svg" alt="outlook">
                        </div>
                        <p class="text-center mt-3 text-base">Группа в WhatsApp</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
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
    computed: {
        levelPercent() {
            switch (this.user.level) {
                case 'Junior':
                    return {
                        percent: 30,
                        left: '12.75rem'
                    };
                case 'Junior+':
                return {
                        percent: 40,
                        left: '17.75rem'
                    };
                case 'Middle':
                return {
                        percent: 60,
                        left: '27rem'
                    };
                case 'Middle+':
                return {
                        percent: 80,
                        left: '36.5rem'
                    };
                case 'Senior':
                return {
                        percent: 100,
                        left: '46.5rem'
                    };
                default:
                    return 0;
            }
        },
        userPersonality() {
            return `${this.user.personality}`.replaceAll('\n', '<br>');
        }
    },
    created() {
        this.user = this.$store.state.user;
    }
}
</script>

<style lang="scss" scoped>
@import "./Personal-Info.scss";
</style>