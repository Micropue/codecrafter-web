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
        <s-search placeholder="全局搜索" slot="search">
            <s-icon name="search" slot="start"></s-icon>
            <s-icon-button slot="end">
                <s-icon name="close"></s-icon>
            </s-icon-button>
        </s-search>
        <!--应用栏-操作按钮-->
        <ThemeChanger />
    </s-appbar>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import ThemeChanger from './themechanger.vue'
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
    }
}
</style>