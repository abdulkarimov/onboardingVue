<template>
    <div class="absolute z-40 mt-1 bg-white divide-y divide-gray-100 rounded-3xl shadow w-full opacity-0 invisible transition-opacity duration-300 overflow-scroll" :class="[{active : isActive}, height]">
        <ul class="py-4 text-black" :class="[fontSize]">
            <li v-for="item in items" @click="$emit('itemHandler', item, category)">
                <div class="block px-6 py-4 cursor-pointer hover:bg-gray-100" :class="{'big-divider' : height === 'max-h-fit' && category !== 'project', 'medium-divider' : height === 'max-h-60', 'extrabig-divider' : category === 'project'}">{{item}}</div>
            </li>
        </ul>                            
    </div>
</template>

<script>
export default {
    props: {
        items: Array,
        isActive: Boolean,
        height: String,
        fontSize: String,
        category: String
    }
}
</script>

<style lang="scss" scoped>
@import "./Dropdown.scss";
</style>