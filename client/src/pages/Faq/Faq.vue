<template>
    <div>
        <Navbar></Navbar>
        <div class="container mx-auto px-5 p-16 mb-10">
            <div class="w-full relative">
                <h1 class="text-8xl font-medium text-center">FAQs</h1>
                <div class="ellipse ellipse-blue"></div>
                <div class="w-full mt-20">
                    <div>
                        <div class="grid grid-cols-3 gap-4 relative z-10">
                            <div class="row-span-2">
                                <h3 class="text-[2.5rem] font-normal">Общие</h3>
                            </div>
                            <div class="col-span-2 relative z-10">
                                <div class="pl-36">
                                    <div class="col" v-for="n of questions.length">
                                        <div class="tabs">
                                            <div class="tab">
                                                <input type="checkbox" :id="'chck' + n">
                                                <label class="tab-label" :for="'chck' + n">{{ questions[n - 1]?.name }}</label>
                                                <div class="tab-content opacity-75">
                                                    {{ answers[n - 1]?.content }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ellipse ellipse-cyan"></div>
                        <div class="grid grid-cols-3 gap-4 relative z-10">
                            <div class="row-span-4">
                                <h3 class="text-[2.5rem] font-normal">Конфиденциальность</h3>
                            </div>
                            <div class="col-span-2 pl-36">
                                <div class="col" v-for="n of questions.length">
                                        <div class="tabs">
                                            <div class="tab">
                                                <input type="checkbox" :id="'chck' + n * 100">
                                                <label class="tab-label" :for="'chck' + n * 100">{{ questions[n - 1]?.name }}</label>
                                                <div class="tab-content opacity-75">
                                                    {{ answers[n - 1]?.content }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-3 gap-4 relative z-10">
                            <div class="row-span-4">
                                <h3 class="text-[2.5rem] font-normal">Договоренность</h3>
                            </div>
                            <div class="col-span-2 pl-36">
                                <div class="col" v-for="n of questions.length">
                                    <div class="tabs">
                                        <div class="tab">
                                            <input type="checkbox" :id="'chck' + n * 900000">
                                            <label class="tab-label" :for="'chck' + n * 900000">{{ questions[n - 1]?.name }}</label>
                                            <div class="tab-content opacity-75">
                                                {{ answers[n - 1]?.content }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ellipse ellipse-darkblue"></div>
                        <div class="ellipse ellipse-purple"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <input type="image" alt="image" src="http://127.0.0.1:3000/api/img/upload"> -->
        <Footer></Footer>
    </div>
</template>

<script>
import Navbar from '../../components/layout/Navbar/Navbar.vue';
import Footer from '../../components/layout/Footer/Footer.vue';

import axios from 'axios';

export default {
    components: {
        Navbar,
        Footer,
    },
    data(){
        return {
            questions: [],
            answers: []
        }
    },
    created() {
        axios.get("http://127.0.0.1:3000/api/question/get")
        .then(response => {
            this.questions = response.data;
        });

        axios.get("http://127.0.0.1:3000/api/answer/get")
        .then(response => {
            this.answers = response.data;
        });

        axios.get("http://127.0.0.1:3000/api/img/upload")
        .then(response => {
            console.log(response);
        });
    },
}
</script>

<style lang="scss" scoped>
@import "./Faq.scss";
</style>