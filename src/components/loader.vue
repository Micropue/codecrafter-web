<template>
    <div class="loader" v-if="visible"></div>
</template>
<style scoped lang="scss">
.loader{
    width:100%;
    height:4px;
    background-color: rgb(0, 153, 255);
    position: fixed;
    top:0;
    left:0;
    right:0;
    margin:auto;
    animation: loader 1s normal infinite;
    @keyframes loader {
        0%{
            width:0px;
        }
        100%{
            width:100%;
            opacity: 0;
        }
    }
}
</style>
<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex'
const store = useStore()
const visible = computed(()=>store.state.visible)
</script>