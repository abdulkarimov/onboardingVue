<template>
    <div class="container mx-auto px-5 p-12 mb-10">
        <div class="relative w-full">
            <h1 class="text-6xl mb-12">Проекты</h1>
            <div class="grid gap-y-12">
                <div v-for="(project, idx) of projects" :key="project.logoUrl" class="relative cursor-pointer">
                    <div class="block bg-white text-black p-8 pb-16 rounded-3xl relative z-10" @click="navigate(idx)">
                        <img :src="project.logoUrl" class="mb-4" :class="[ project?.subdivision === 'Mycent' ? 'h-10' : 'h-16' ]" alt="project logo" />
                        <div class="flex items-center justify-between mb-2">
                            <p class="text-base leading-6 w-[585px]">{{  project.text  }}</p>
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
                        <h3 class="text-4xl font-medium">{{ project.subdivision }}</h3>
                        <img class="w-full left-0 bottom-0 absolute" :src="project.wave" alt="wave">
                    </div>
                    <div :class="'ellipse ellipse-' + ellipses[idx]" v-if="ellipses[idx]"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            projects: [],
            ellipses: ['blue', 'cyan', 'darkblue', 'purple']
        }
    },
    methods: {
        navigate(id) {
            this.$router.push('/projects/' + id)
        }
    },
    created() {
        this.projects = this.$store.state.projects;

        axios.get('http://127.0.0.1:3000/api/project/get')
            .then(data => console.log(data))
    }
}
</script>

<style lang="scss" scoped>
@import "./Projects.scss";
</style>