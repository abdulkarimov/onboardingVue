<template>
    <div @click="$emit('close')" :class="{ 'greeting' : isVisible }" class="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur-[7px] opacity-0 invisible transition-all duration-200">
        <div @click.stop class="relative w-full max-w-2xl max-h-full">
            <div class="relative bg-white rounded-xl shadow pt-8 px-6">
                <div class="p-[1.5rem] pb-0">
                    <h2 class="text-5xl font-semibold text-gray-900">
                        Привет, друг!
                    </h2>
                </div>
                <div class="p-6 pt-4 space-y-6">
                    <p class="text-[15px] leading-4 text-[#000000]">
                        Мы рады приветствовать тебя в нашей команде! Мы надеемся, что теперь мы вместе будем достигать амбициозных целей, которые стоят перед нашей командой. <br>
                        В личном кабинете имеется твоя дорожная карта на ближайшие 3 месяца. Она поможет тебе пройти путь от новичка, до профессионала, который драйвит команду, предлагает новые технологии, непрерывно улучшает рабочие процессы, постоянно развивается сам и помогает развиваться команде.
                        Любой путь начинается с первого шага, и твой первый шаг - ознакомиться cо своими основными обязанностями и целями на период адаптации (3 месяца).
                        Если тебе что-то непонятно по твоим обязанностям/целям на период обучения
                        - уточни у своего наставника. Если все понятно - переходи к следующему шагу: ознакомься с твоим пошаговым планом на период адаптации и иди по нему. План адаптации и имя наставника с его контактными данными ты найдешь у себя в личном кабинете
                    </p>
                </div>
                <div class="flex items-center justify-end p-6 pt-3 space-x-2 border-t border-gray-200 rounded-b">
                    <button class="text-[#000] font-medium cursor-pointer" @click="$emit('close')">Закрыть</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['isVisible'],
}
</script>

<style lang="scss" scoped>
.greeting{
    opacity: 1;
    visibility: visible;
}
</style>