<template>
    <div>
        <div class="container flex flex-col items-start mx-auto px-2 sm:px-4 p-12 max-w-[1050px]">
            <div class="relative w-full">
                <div class="ellipse ellipse-cyan"></div>
                <div class="flex items-center gap-16 pb-16">
                    <img class="w-72 h-72 rounded-full" src="../../assets/images/demo_avatar2.svg" alt="user photo">
                    <div class="flex flex-col">
                        <h2 class="mb-2.5 text-5xl font-medium">Артур Далакян</h2>
                        <h4 id="work" class="text-3xl text-blue-dark">Junior UX/UI designer</h4>
                        <div id="tooltip" class="absolute top-28 z-10 visible opacity-0 inline-block px-5 py-5 text-sm text-black transition-opacity duration-300 bg-white w-96 rounded-3xl shadow-sm opacity-100 tooltip">
                            <p class="text-base font-medium">Должностные обязанности</p>
                            <p class="text-base font-medium text-blue-darkest">Junior UX/UI design</p>
                            <p class="text-base">Lorem ipsum dolor sit amet consectetur. Elit purus sit suspendisse arcu tincidunt quis. Erat cursus urna in aenean feugiat faucibus. Aliquam mauris phasellus eget donec aliquam magna tristique. Eleifend netus ipsum faucibus eget.</p>
                        </div>
                        <div class="flex items-center mt-5">
                            <p class="text-gray-600 text-xl font-medium">04.04.2005</p>
                            <div class="bg-gray-600 w-[0.25px] h-[24px] mx-4"></div>
                            <p class="text-gray-600 text-xl font-medium">c 09:00 до 18:00</p>
                        </div>
                        <div class="flex flex-col gap-2 mt-5">
                            <div class="flex items-center">
                                <img class="w-6 h-6 mr-4" src="../../assets/images/mail.svg" alt="user photo">
                                <p class="text-xl">arturdalakan748@gmail.com</p>
                            </div>
                            <div class="flex items-center">
                                <img class="w-6 h-6 mr-4" src="../../assets/images/telegram.svg" alt="user photo">
                                <p class="text-xl">@Arthur1703</p>
                            </div>
                            <div class="flex items-center">
                                <img class="w-6 h-6 mr-4" src="../../assets/images/phone.svg" alt="user photo">
                                <p class="text-xl">+7 (777) 777-77-77</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="w-full flex justify-center items-center text-2xl bg-blue-dark hover:bg-blue-darker rounded-full py-4 mb-12 mx-auto">
                    <img class="w-6 h-6 mr-5" src="../../assets/images/pen.svg" alt="user photo">
                    Редактировать профиль
                </button>
                <div class="flex justify-between mb-5 w-full">
                    <span class="text-xl font-light text-gray-300">Новичок</span>
                    <span class="text-xl font-light text-gray-300">Профессионал</span>
                </div>
            </div>
            <div class="relative">
                <div class="ellipse ellipse-purple"></div>
                <div class="w-full bg-gray-200 rounded-full h-2 mb-12 relative z-10">
                    <div class="bg-blue-dark h-2 rounded-full" style="width: 30%">
                        <span class="absolute left-[17.75rem] bottom-full mb-3.5 rounded-sm py-1 px-2 text-xl font-regular text-white">
                            <span
                                class="bg-blue-dark absolute bottom-[-26px] left-1/3 h-4 w-4 rounded-full"
                            ></span>
                            30%
                        </span>
                    </div>
                </div>
                <div class="mb-9 relative z-10">
                    <h1 class="text-[34px] mb-3">Обо мне</h1>
                    <p class="text-[23.5px] leading-6 font-light">Lorem ipsum dolor sit amet consectetur. Arcu vulputate dignissim a tellus tincidunt porttitor mi sagittis. Adipiscing gravida nisl morbi tempor arcu neque enim. Enim interdum ut velit scelerisque viverra vestibulum fringilla ornare adipiscing. Sit fames sed venenatis in. Enim interdum ut velit scelerisque viverra vestibulum fringilla ornare adipiscing. Sit fames sed venenatis in.</p>
                </div>
                <div class="mb-9 relative z-10">
                    <h1 class="text-[34px] mb-3">Soft Skills</h1>
                    <div class="pb-2">
                        <span class="text-[18px] inline-block bg-white rounded-full px-5 py-2 font-semibold text-gray-700 mr-4 mb-2">Креативность</span>
                        <span class="text-[18px] inline-block bg-white rounded-full px-5 py-2 font-semibold text-gray-700 mr-4 mr-3 mb-2">Любознательность</span>
                        <span class="text-[18px] inline-block bg-white rounded-full px-5 py-2 font-semibold text-gray-700 mr-4 mr-3 mb-2">Коммуникабельность</span>
                    </div>
                </div>
                <div class="mb-9 relative z-10">
                    <h1 class="text-[34px] mb-2">Hard skills</h1>
                    <div class="pb-2">
                        <span class="text-[18px] inline-block bg-white rounded-full px-5 py-2 font-semibold text-gray-700 mr-4 mb-2">Типографика</span>
                        <span class="text-[18px] inline-block bg-white rounded-full px-5 py-2 font-semibold text-gray-700 mr-4 mr-3 mb-2">Figma</span>
                        <span class="text-[18px] inline-block bg-white rounded-full px-5 py-2 font-semibold text-gray-700 mr-4 mr-3 mb-2">Adobe PhotoShop</span>
                        <span class="text-[18px] inline-block bg-white rounded-full px-5 py-2 font-semibold text-gray-700 mr-4 mb-2">UX анализ</span>
                        <span class="text-[18px] inline-block bg-white rounded-full px-5 py-2 font-semibold text-gray-700 mr-4 mr-3 mb-2">Agile</span>
                        <span class="text-[18px] inline-block bg-white rounded-full px-5 py-2 font-semibold text-gray-700 mr-4 mr-3 mb-2">Коммуникационный дизайн</span>
                    </div>
                </div>
                <div class="mb-9 relative z-10">
                    <h1 class="text-[34px] mb-5">Подразделение</h1>
                    <div class="block bg-white text-black p-8 pb-16 rounded-3xl overflow-hidden relative">
                        <img src="../../assets/images/iHub_logo2.svg" class="h-14 mb-4" alt="iHub logo" />
                        <div class="flex items-center justify-between mb-2">
                            <p class="text-xl leading-6 w-[590px]">Lorem ipsum dolor sit amet consectetur. Arcu vulputate dignissim a tellus tincidunt porttitor mi sagittis. Adipiscing gravida nisl morbi tempor arcu neque enim.</p>
                            <div class="flex flex-col">
                                <h5 class="text-xl">Команда</h5>
                                <div class="flex items-center justify-between">
                                    <img src="../../assets/images/team_mate1.svg" class="h-16 right-3 z-20 relative" alt="team_mate" />
                                    <img src="../../assets/images/team_mate2.svg" class="h-16 -left-9 z-10 relative" alt="team_mate" />
                                    <img src="../../assets/images/team_mate3.svg" class="h-16 -left-16 relative" alt="team_mate" />
                                    <p class="text-xl -left-[3.75rem] relative">+12</p>
                                </div>
                            </div>
                        </div>
                        <p class="text-[26px] font-normal">Подразделение</p>
                        <h3 class="text-5xl font-normal">Centras iHub</h3>
                        <img class="w-full left-0 bottom-0 absolute" src="../../assets/images/blue_wave.png" alt="wave">
                    </div>
                </div>
                <div class="mb-20">
                    <h1 class="text-[34px] mb-2">Наставник</h1>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-10">
                            <img class="w-32 h-32 rounded-full" src="../../assets/images/design_sensei.svg" alt="user photo">
                            <div class="flex flex-col">
                                <h2 class="mb-1.5 text-4xl font-medium">Станислав</h2>
                                <h4 class="text-2xl text-blue-dark">Senior UX/UI designer</h4>
                            </div>
                        </div>
                        <div class="flex flex-col gap-2">
                            <div class="flex items-center">
                                <img class="w-6 h-6 mr-4" src="../../assets/images/mail.svg" alt="user photo">
                                <p class="text-xl">forexample123@gmail.com</p>
                            </div>
                            <div class="flex items-center">
                                <img class="w-6 h-6 mr-4" src="../../assets/images/telegram.svg" alt="user photo">
                                <p class="text-xl">@forexample123</p>
                            </div>
                            <div class="flex items-center">
                                <img class="w-6 h-6 mr-4" src="../../assets/images/phone.svg" alt="user photo">
                                <p class="text-xl">+7 (777) 777-77-77</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container flex flex-col items-start mx-auto">
            <div class="mb-14 relative z-10 w-full">
                <h1 class="text-[34px] mb-5">Полезные файлы</h1>
                <div class="grid grid-cols-2 gap-6">
                    <div class="flex items-center justify-center py-14 text-xl font-medium text-white rounded-[20px] border-2 border-solid border-white-500">Презентация OnBoarding</div>
                    <div class="flex items-center justify-center py-14 text-xl font-medium text-white rounded-[20px] border-2 border-solid border-white-500">Дорожная карта новичка</div>
                </div>
            </div>
            <div class="mb-16 relative z-10 w-full">
                <h1 class="text-[34px] mb-3">Анкеты</h1>
                <div class="grid grid-cols-2 gap-6">
                    <div class="flex items-center flex-col py-6 text-lg font-medium text-white rounded-[20px] border-2 border-solid border-white-500 opacity-50">
                        <P class="text-3xl font-normal">Анкета 1</P>
                        <p class="text-2xl font-normal pb-2 opacity-40">Будет доступно через 2 недели</p>
                    </div>
                    <div class="flex items-center flex-col py-6 text-lg font-medium text-white rounded-[20px] border-2 border-solid border-white-500 opacity-50">
                        <P class="text-3xl font-normal">Анкета 2</P>
                        <p class="text-2xl font-normal pb-2 opacity-40">Будет доступно через 3 месяца</p>
                    </div>
                </div>
            </div>
            <div class="mb-32 relative z-10 w-full">
                <h1 class="text-[34px] mb-8">Какие доступы нужно получить?</h1>
                <div class="grid grid-cols-6 gap-8">
                    <div class="flex flex-col items-center">
                        <div class="flex items-center justify-center py-4 text-lg font-medium text-white rounded-[20px] border-2 border-solid border-white-500 w-full h-full">
                            <img class="w-16 h-16" src="../../assets/images/outlook.svg" alt="outlook">
                        </div>
                        <p class="text-center mt-3 text-[1.4rem]">Электронная почта Outlook</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="flex items-center  justify-center py-4 text-lg font-medium text-white rounded-[20px] border-2 border-solid border-white-500 w-full h-full">
                            <img class="w-36 h-36" src="../../assets/images/mycent.kz.svg" alt="outlook">
                        </div>
                        <p class="text-center mt-3 text-[1.4rem]">Корпоративный портал</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="flex items-center justify-center py-4 text-lg font-medium text-white rounded-[20px] border-2 border-solid border-white-500 w-full h-full">
                            <img class="w-[4.5rem] h-[4.5rem]" src="../../assets/images/wechat.svg" alt="outlook">
                        </div>
                        <p class="text-center mt-3 text-[1.4rem]">Общение с коллегами WeChat</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="flex items-center justify-center py-4 text-lg font-medium text-white rounded-[20px] border-2 border-solid border-white-500 w-full h-full">
                            <img class="w-20 h-20" src="../../assets/images/kias.svg" alt="outlook">
                        </div>
                        <p class="text-center mt-3 text-[1.4rem]">Все процессы компании</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="flex items-center justify-center py-4 text-lg font-medium text-white rounded-[20px] border-2 border-solid border-white-500 w-full h-[178px]">
                            <img class="w-16 h-16" src="../../assets/images/telega.svg" alt="outlook">
                        </div>
                        <p class="text-center mt-3 text-[1.4rem]">Чат-бот в Telegram</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="flex items-center justify-center py-4 text-lg font-medium text-white rounded-[20px] border-2 border-solid border-white-500 w-full h-[178px]">
                            <img class="w-16 h-16" src="../../assets/images/whatsapp.svg" alt="outlook">
                        </div>
                        <p class="text-center mt-3 text-[1.4rem]">Группа в WhatsApp</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "./Personal-Info.scss";
</style>