<template>
    <div class="mb-40">
        <div class="container mx-auto px-5 pt-10">
            <div class="w-full relative">
                <div class="ellipse ellipse-blue"></div>
                <div class="flex flex-col items-center justify-center">
                    <img src="../../../assets/images/iHub_logo.svg" alt="project logo" class="h-44"> 
                </div>
            </div>
        </div>
        <img src="../../../assets/images/project_wave.png" alt="project wave" class="h-44 w-full mt-[-1.5rem] relative"> 
        <div class="container mx-auto px-5 pt-10">
            <div class="w-full">
                <h1 class="text-5xl font-medium mb-14">О проекте</h1>
                <p class="text-xl leading-6 w-10/12 mb-10">Lorem ipsum dolor sit amet consectetur. Leo commodo arcu elit aliquet habitasse id risus commodo. Purus egestas at vulputate bibendum ac lacus vulputate.  Purus egestas at vulputate bibendum ac lacus vulputate. Lorem ipsum dolor sit amet consectetur. Leo commodo arcu elit aliquet habitasse id risus commodo.</p>
                <p class="flex items-center text-xl mb-12 opacity-80 relative z-10">Подразделение: <span class="text-4xl ml-6">{{ project.subdivision }}</span></p>
                <h1 class="text-5xl font-medium mb-12 relative z-10">Команда</h1>
                <div class="relative">
                    <div class="ellipse ellipse-purple"></div>
                    <div class="ellipse ellipse-cyan"></div>
                </div>
                <div class="grid grid-cols-3 gap-x-5 gap-y-6 mb-7 relative z-10">
                    <div class="flex items-center justify-center gap-4 py-4 mb-3 bg-white text-black rounded-2xl col-span-3">
                        <img class="w-24" src="../../../assets/images/arthur.svg" alt="person">
                        <div class="flex flex-col items-center">
                            <h5 class="text-3xl font-medium">Далакян Артур</h5>
                            <p class="text-lg">Senior UX/UI designer</p>
                        </div>
                    </div>
                    <div v-for="n in 6" class="flex items-center justify-center gap-4 py-4 bg-white text-black rounded-2xl">
                        <img class="w-20" src="../../../assets/images/arthur.svg" alt="person">
                        <div class="flex flex-col items-start">
                            <h5 class="text-2xl font-medium">Далакян Артур</h5>
                            <p class="text-base">Senior UX/UI designer</p>
                        </div>
                    </div>
                </div>
                <div class="relative">
                    <div class="ellipse ellipse-darkblue"></div>
                </div>
                <p class="text-xl opacity-80 text-center cursor-pointer">Показать всё</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            project: {
                logoUrl: '',
                text: '',
                subdivision: '',
            }
        }
    },
    created() {
        const id = this.$route.params.id;
        this.project = this.$store.state.projects[id];
        delete this.project.wave 
    }
}
</script>

<style lang="scss" scoped>
@import "./Project.scss";
</style>