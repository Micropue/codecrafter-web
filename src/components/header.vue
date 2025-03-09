<template>
    <el-header>
        <div class="logo">
            <img src="../assets/logo.png" alt="logo">
            <img @click="$router.push('/')" src="../assets/logo-text.png" alt="logo-text">
            <p>官方论坛</p>
        </div>
        <div class="control">
            <!-- 搜索框 -->
            <Search></Search>
            <div class="pages">
                <p class="link" @click="$router.push('/joinus.html')">加入我们</p>
                <p class="link" @click="$router.push('/community.html')">社区</p>
                <p class="link" @click="$router.push('/blog.html')">博客</p>
                <p class="link" @click="$router.push('/product.html')">项目</p>
            </div>
            <el-switch class="item" inline-prompt v-model="data.themeValue" :active-action-icon="Sunny"
                :inactive-action-icon="Moon" @change="toggleTheme"></el-switch>
            <!--登录按钮-->
            <LoginRegButton></LoginRegButton>
        </div>
    </el-header>
</template>
<script setup lang="ts">
import { Sunny, Moon } from '@element-plus/icons-vue'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { cookie } from '@/api/setcookie'
import LoginRegButton from './login-reg.button.vue'
import Search from './search.vue'
const $router = useRouter()

const data = reactive({
    themeValue: cookie.get('theme') == 'dark' ? false : true,
})
//切换主题
const toggleTheme = function () {
    const e = document.getElementsByTagName("html")[0]
    data.themeValue ? e.classList.remove("dark") : e.classList.add("dark")
    cookie.set("theme", data.themeValue ? "light" : "dark")
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
        cursor: pointer;

        img[alt=logo] {
            width: 60px;
            height: 60px;
        }

        img[alt=logo-text] {
            width: 130px;
            filter: invert(var(--inverted));
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
                font-size: 14px;

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

.link {
    cursor: pointer;
}
</style>