<template>
    <el-header>
        <div class="logo">
            <img src="../assets/logo.png" alt="logo">
            <p @click="$router.push('/')">CodeCrafter</p>
        </div>
        <div class="control">
            <el-input v-model="data.searchValue" style="max-width: 600px" placeholder="Please input"
                class="input-with-select item">
                <template #prepend>
                    <el-button :icon="Search" />
                </template>
            </el-input>
            <div class="pages">
                <p>加入我们</p>
                <p @click="$router.push('/community.html')">社区</p>
                <p @click="$router.push('/blog.html')">博客</p>
                <p @click="$router.push('/product.html')">项目</p>
            </div>
            <el-switch class="item" inline-prompt v-model="data.themeValue" :active-action-icon="Sunny"
                :inactive-action-icon="Moon" @change="toggleTheme"></el-switch>
        </div>
    </el-header>
</template>
<script setup lang="ts">
import { Search, Sunny, Moon } from '@element-plus/icons-vue'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
const $router = useRouter()

const data = reactive({
    searchValue: "",
    themeValue: true,
})

const toggleTheme = function () {
    const e = document.getElementsByTagName("html")[0]
    data.themeValue ? e.classList.remove("dark") : e.classList.add("dark")
}
</script>
<style scoped lang="scss">
.el-header {
    height: 65px;
    border-bottom: 1px solid var(--el-border-color);
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    .logo {
        display: flex;
        align-items: center;

        img[alt=logo] {
            width: 60px;
            height: 60px;
        }

        p {
            font-size: 19px;
            font-weight: 100;
            position: relative;
            color: var(--el-text-color-primary);
            margin:0 10px;
            &::after {
                position: absolute;
                content: '';
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
                height: 1px;
                width: 0%;
                background-color: rgb(0, 153, 255);
                transition: width 0.2s;
            }

            &:hover::after {
                width: 100%;
            }
        }
    }

    .control {
        display: flex;
        align-items: center;
        justify-content: center;

        .pages {
            display: flex;

            p {
                white-space: nowrap;
                margin: 0px 15px;
            }

            p {
                position: relative;
                color: var(--el-text-color-primary);

                &::after {
                    position: absolute;
                    content: '';
                    bottom: 0;
                    left: 0;
                    right: 0;
                    margin: auto;
                    height: 1px;
                    width: 0%;
                    background-color: rgb(0, 153, 255);
                    transition: width 0.2s;
                }

                &:hover::after {
                    width: 100%;
                }
            }
        }

        .item {
            margin: 0px 10px;
        }
    }
}
</style>