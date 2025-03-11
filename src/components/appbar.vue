<template>
    <s-appbar>
        <!--应用栏-左侧导航按钮-->
        <s-icon-button slot="navigation" onclick="document.querySelector('s-drawer').toggle()">
            <s-icon name="menu"></s-icon>
        </s-icon-button>
        <!--应用栏-标题-->
        <div slot="headline" @click="$router.push('/')">
            <img src="../assets/logo.png" alt="logo">
            <img style="filter:invert(var(--inverted));" src="../assets/logo-text.png" alt="logo-text" />
            <p>官方论坛</p>
        </div>
        <!-- 显示加载器 -->
        <s-circular-progress title="正在处理..." v-show="$store.state.loading" indeterminate="true" style="width:20px;margin:10px;"></s-circular-progress>
        <Search></Search>
        <!--应用栏-操作按钮-->
        <ThemeChanger />
        <s-tooltip slot="end">
            <s-icon-button slot="trigger" onclick="window.open('https://github.com/Micropue/codecrafter-web/')">
                <s-icon>
                    <svg data-v-eb706c3e="" viewBox="0 0 1024 1024">
                        <path data-v-eb706c3e=""
                            d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z">
                        </path>
                    </svg>
                </s-icon>
            </s-icon-button>
            网站源码
        </s-tooltip>
    </s-appbar>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const $store = useStore()
import ThemeChanger from './themechanger.vue'
import Search from './search.vue'
const $router = useRouter()
</script>
<style lang="scss" scoped>
[slot=headline] {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: 10px;
        left: 0;
        right: 0;
        margin: auto;
        height: 2px;
        width: 0%;
        background-color: rgb(0, 140, 255);
        transition: width 0.3s;
    }

    &:hover::after {
        width: 100%;
    }

    img[alt=logo] {
        width: 40px;

    }

    img[alt=logo-text] {
        width: 130px;

        @media screen and (max-width:700px) {
            & {
                width: 90px;
            }
        }

        height: auto;
    }

    p {
        font-size: 14px;

        @media screen and (max-width:700px) {
            & {
                display: none;
            }
        }
    }
}

[slot=search] {
    @media screen and (max-width:700px) {
        & {
            display: none;
        }
    }
}
</style>