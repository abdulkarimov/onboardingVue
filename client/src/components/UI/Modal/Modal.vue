<template>
    <div @click.stop :class="[isNotification ? 'active' : 'inactive']" class="fixed top-0 left-0 right-0 bottom-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto transition bg-[rgba(0,0,0,0.4)]">
        <div @click="closeWindow" class="relative w-full h-full">
            <slot @click.stop></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isNotification: Boolean
    },
    methods: {
        closeWindow() {
            document.body.style.overflowY = 'scroll';
            this.$emit('closeWindow')
        }
    }
}
</script>

<style lang="scss" scoped>
.active {
    visibility: visible !important;
    opacity: 1 !important;
}

.inactive {
    visibility: hidden !important;
    opacity: 0 !important;
}
</style>