<template>
    <div class="container mx-auto px-4 p-8 mb-16">
        <div class="mb-16 relative">
            <h1 class="text-[2.75rem] font-normal mb-6 relative z-10">Поиск сотрудника</h1>
            <div class="ellipse ellipse-blue"></div>
            <div class="relative w-full mb-3">
                <div class="absolute z-10 inset-y-0 right-0 flex items-center pr-6 pointer-events-none cursor-pointer">
                    <img class="w-6 h-6" src="../../assets/images/glass.svg" alt="glass">
                </div>
                <input @keypress="searchHandler" v-model="searchField" type="text" id="employee-search" class="border bg-transparent border-white text-white text-[22px] rounded-full block w-full pl-6 pr-16 p-3 outline-none" placeholder="Введите имя/должность/команду/стек">
            </div>
            <div class="flex flex-col mb-6 relative">
                <div>
                    <div class="inline-block min-w-full py-2">
                        <div>
                            <div class="min-w-full flex items-center px-6">
                                <div class="text-[18px] relative py-2 w-[35%] pl-[3.75rem]">Имя</div>
                                <div class="text-[18px] relative w-1/4 pl-2">Должность</div>
                                <div class="text-[18px] relative w-[15%] pl-8">Грейд</div>
                                <div class="text-[18px] relative text-start w-1/4 pl-10">Команда</div>
                            </div>
                            <div class="bg-white text-black text-[17px] font-normal rounded-2xl relative z-10">
                                <div v-for="n in 10" class="flex items-center employee w-full" id="employeeMain">
                                    <div class="flex items-center w-full employeeBody cursor-pointer transition hover:bg-gray-100">
                                        <div class="flex items-center px-6 py-4 w-[35%]">
                                            <img class="w-10 h-10 rounded-full" src="../../assets/images/zhanizbay_daulet.svg" alt="Жанысбай Даулет">
                                            <p class="pl-5">Владимир Козловский</p>
                                        </div>
                                        <div class="whitespace-nowrap px-6 py-2 align-middle w-1/4">Frontend-разработчик</div>
                                        <div class="whitespace-nowrap px-8 py-2 align-middle mx-3 w-[15%]" style="color: #00000080">Middle</div>
                                        <div class="whitespace-nowrap px-6 py-2 align-middle text-start w-1/4">Centras Komesk Life</div>
                                    </div>
                                    <div class="relative">
                                        <div id="tooltip" class="absolute top-0 left-[-710px] invisible opacity-0 inline-block w-fit p-10 pr-20 pb-6 text-sm text-black transition-opacity duration-300 bg-white rounded-2xl shadow-sm">
                                            <div class="flex items-start gap-8">
                                                <img class="w-40" src="../../assets/images/zhanizbay_daulet2.svg" alt="daulet">
                                                <div>
                                                    <h2 class="text-3xl font-bold mb-2">Жансыбай Даулет</h2>
                                                    <h3 class="text-[1.4rem] font-regular text-blue-dark">Middle Backend-разработчик</h3>
                                                    <div class="flex items-center my-2 mt-3 opacity-30">
                                                        <p class="text-gray-600 text-[15px] font-medium">04.04.2005</p>
                                                        <div class="bg-gray-600 w-[0.5px] h-[20px] mx-2"></div>
                                                        <p class="text-gray-600 text-[15px] font-medium">c 09:00 до 18:00</p>
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <div class="flex items-center">
                                                            <img class="w-4 h-4 mr-3 blackSvg" src="../../assets/images/mail.svg" alt="user photo">
                                                            <p class="text-[16px] font-medium">z.daulet@gmail.com</p>
                                                        </div>
                                                        <div class="flex items-center">
                                                            <img class="w-4 h-4 mr-3 blackSvg" src="../../assets/images/telegram.svg" alt="user photo">
                                                            <p class="text-[16px] font-medium">@daulet.z</p>
                                                        </div>
                                                        <div class="flex items-center">
                                                            <img class="w-4 h-4 mr-3 blackSvg" src="../../assets/images/phone.svg" alt="user photo">
                                                            <p class="text-[16px] font-medium">+7 (777) 777-77-77</p>
                                                        </div>
                                                    </div>
                                                    <p class="flex items-center text-[1.2rem] font-medium mt-4 relative z-10">Команда: <span class="text-2xl ml-6 font-regular">Alpha</span></p>
                                                    <p class="flex items-center text-[1.2rem] font-medium mt-4 mb-4 relative z-10">Hard skills</p>
                                                    <div class="max-w-[25rem]">
                                                        <span class="text-xs text-gray-700 font-semibold inline-block rounded-full px-4 pt-[6px] pb-2 mr-3 mb-3 border-2 border-solid border-black">Java</span>
                                                        <span class="text-xs text-gray-700 font-semibold inline-block rounded-full px-4 pt-[6px] pb-2 mr-3 mb-3 border-2 border-solid border-black">Python</span>
                                                        <span class="text-xs text-gray-700 font-semibold inline-block rounded-full px-4 pt-[6px] pb-2 mr-3 mb-3 border-2 border-solid border-black">C#</span>
                                                        <span class="text-xs text-gray-700 font-semibold inline-block rounded-full px-4 pt-[6px] pb-2 mr-3 mb-3 border-2 border-solid border-black">MySQL</span>
                                                        <span class="text-xs text-gray-700 font-semibold inline-block rounded-full px-4 pt-[6px] pb-2 mr-3 mb-3 border-2 border-solid border-black">Django</span>
                                                        <span class="text-xs text-gray-700 font-semibold inline-block rounded-full px-4 pt-[6px] pb-2 mr-3 mb-3 border-2 border-solid border-black">Oracle</span>
                                                        <span class="text-xs text-gray-700 font-semibold inline-block rounded-full px-4 pt-[6px] pb-2 mr-3 mb-3 border-2 border-solid border-black">HTTP</span>
                                                        <span class="text-xs text-gray-700 font-semibold inline-block rounded-full px-4 pt-[6px] pb-2 mr-3 mb-3 border-2 border-solid border-black">Node.js</span>
                                                        <span class="text-xs text-gray-700 font-semibold inline-block rounded-full px-4 pt-[6px] pb-2 mr-3 mb-3 border-2 border-solid border-black">Flask</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-center gap-8 relative">
                <img @click="previousPage(pagination.currentPage)" src="../../assets/images/previousPage.svg" alt="previousPage" class="w-5 h-5 cursor-pointer">
                <ul class="inline-flex -space-x-px gap-4">
                    <li v-for="n of 5">
                        <a @click="pagination.currentPage = n" class="flex items-center justify-center w-10 h-10 leading-tight text-xl border-2 border-solid border-white rounded-md transition cursor-pointer" :class="[ n === pagination.currentPage ? 'bg-white text-black' : 'bg-black hover:bg-white hover:text-black' ]">{{ n }}</a>
                    </li>
                </ul>
                <img @click="nextPage(pagination.currentPage)" src="../../assets/images/nextPage.svg" alt="nrextPage" class="w-6 h-6 -ml-1 cursor-pointer">
            </div>
        </div>
        <div class="mb-24 relative">
            <h1 class="text-[2.75rem] font-medium mb-12 relative z-10">Топ менеджмент</h1>
            <div class="ellipse ellipse-cyan"></div>
            <div class="grid grid-rows-3 grid-flow-col gap-8 relative">
                <div class="flex flex-col items-center" v-for="n in 3">
                    <img class="w-40 mb-3" src="../../assets/images/eugen_kan.svg" alt="man">
                    <h3 class="text-[2rem] font-medium">Евгений Кан</h3>
                    <p class="text-sm text-blue-dark">Независимый директор, основатель компании</p>
                </div>
                <div class="flex flex-col items-center" v-for="n in 3">
                    <img class="w-40 mb-3" src="../../assets/images/eldar_abdrazakov.svg" alt="man">
                    <h3 class="text-[2rem] font-medium">Ельдар Абдразаков</h3>
                    <p class="text-sm text-blue-dark">Председатель совета директоров</p>
                </div>
                <div class="flex flex-col items-center" v-for="n in 3">
                    <img class="w-40 mb-3" src="../../assets/images/beibit_tursynbekov.svg" alt="man">
                    <h3 class="text-[2rem] font-medium">Беибит Турысбеков</h3>
                    <p class="text-sm text-blue-dark">Член Совета Директоров</p>
                </div>
            </div>
        </div>
        <div class="w-full">
            <h1 class="text-[2.75rem] font-medium mb-20">Организационная структура </h1>
            <img class="w-full" src="../../assets/images/project_structure.png" alt="structure">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pagination: {
                pagesCount: 5,
                currentPage: 1
            },
            searchField: ''
        }
    },
    methods: {
        searchHandler(e) {
            if(e.key === "Enter") {
                console.log(this.searchField);
                this.searchField = 'Бэка ещё нет :('
            }
        },
        previousPage(page) {
            if (page <= 1) {
                return
            }

            this.pagination.currentPage -= 1;
        },
        nextPage(page) {
            if (page >= this.pagination.pagesCount) {
                return
            }

            this.pagination.currentPage += 1;
        },
    }
}
</script>

<style lang="scss" scoped>
@import './Employees.scss'
</style>