<template>
    <div class="headline-list" :show="showList">
        <p>目录</p>
        <s-ripple v-for="{ name, location } in list" @click="locate(location)">{{ name }}</s-ripple>
    </div>
    <s-fab class="fab" @click="showList = !showList">
        <s-icon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path
                    d="M80-160v-160h160v160H80Zm240 0v-160h560v160H320ZM80-400v-160h160v160H80Zm240 0v-160h560v160H320ZM80-640v-160h160v160H80Zm240 0v-160h560v160H320Z">
                </path>
            </svg>
        </s-icon>
    </s-fab>
</template>
<script setup lang="ts">
/**
 * 使用方法：
 * 引入组件后，添加字段：`list`。
 * 类型：Array<{name:string,location:number}>
 */
import { ref } from 'vue'
const props = defineProps(['list'])
const list = ref(props.list)
const showList = ref(false)
const locate = (location: number) => {
    document.querySelector('s-scroll-view')!.scrollTop = location - 60
}
</script>
<style lang="scss" scoped>
.fab {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1;

    @media screen and (min-width:1200px) {
        & {
            display: none;
        }
    }
}

div.headline-list {
    position: fixed;
    right: 10px;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    top:100px;
    padding: 10px;
    transition: transform 0.4s cubic-bezier(0.35, 0, 0, 1);
    background-color: var(--s-color-background);
    box-shadow: 0px 4px 20px var(--s-color-surface-container-low);
    z-index: 1;
    border-radius: 10px;
    @media screen and (max-width:1200px) {
        &[show=false] {
            transform: translateX(100%);
        }
    }

    p {
        font-size: 12px;
        color: gray;
    }

    s-ripple {
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        border-radius: 10px;
        margin: 3px;
        font-size: 13px;

        &[selected] {
            color: rgb(0, 115, 255);
            font-weight: 900;
        }
    }
}
</style>


