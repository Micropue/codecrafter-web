<template>
    <s-dialog>
        <s-icon-button type="outlined" slot="trigger">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path
                    d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z">
                </path>
            </svg>
        </s-icon-button>
        <div slot="headline">偏好设置</div>
        <div class="body">
            <h3>cookie使用</h3>
            <div class="line">
                <p>动态主题设置</p>
                <s-switch disabled="true" checked="true"></s-switch>
            </div>
            <div class="line">
                <p>主题模式设置</p>
                <s-switch disabled="true" checked="true"></s-switch>
            </div>
            <div class="line">
                <p>搜索历史</p>
                <s-button @click="methods.clearHistory">清空</s-button>
            </div>
            <p style="color:gray;font-size:13px;margin-top:20px;">您无法更改cookie的创建权限，使用此网站代表您遵循此隐私政策。使用cookie是为了更好的网站体验。
            </p>
            <h3>更改主题颜色</h3>
            <div class="line">
                <label for="__color-input__">
                    <s-button>选择颜色</s-button>
                    <input type="color" class="color-input" id="__color-input__" @change="methods.createTheme"
                        v-model="data.themecolor">
                </label>
                <div class="view-color" :style="'--color:' + data.themecolor">
                    <p>{{ data.themecolor }}</p>
                </div>
            </div>
            <h3>关于</h3>
            <p style="color:gray;font-size:13px;margin-top:20px;">基于Vue3开发的通用博客系统（非模板），所有内容均归CodeCrafter团队所有。codecrafter
                & codecrafter团队<br>©️2025</p>
            <br>
            <s-button @click="$router.push('/about')">关于网站</s-button>
            <s-button @click="$router.push('/about')">贡献人员</s-button>
        </div>
        <s-button slot="action" type="text">完成</s-button>
    </s-dialog>
</template>
<script setup lang="ts">
import { create as createtheme } from 'sober-theme'
import { onMounted, reactive } from 'vue'
import { cookie } from '@/api/setcookie'
import { SEARCH_HISTORY_NAME, THEME_COOKIE_NAME, THEMEMODE_COOKIE_NAME } from '@/api/config'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { Snackbar } from 'sober'
const $router = useRouter()
const $store = useStore()
const data = reactive<{
    themecolor: any
    bigText: boolean
}>({
    themecolor: "",
    bigText: false
})
//主题设置
const methods = {
    createTheme() {
        createtheme(data.themecolor, document.querySelector('s-page')!).then(() => cookie.set(THEME_COOKIE_NAME, data.themecolor))
    },
    getTheme() {
        data.themecolor = cookie.get(THEME_COOKIE_NAME) || "#005ac3"
    },
    clearHistory() {
        cookie.set(SEARCH_HISTORY_NAME, "")
        Snackbar.builder("清空完成，请刷新页面。")
    },
}
onMounted(methods.getTheme)
</script>
<style lang="scss" scoped>
p {
    margin: 0;
}


.body {
    padding: 20px;
    box-sizing: border-box;

    s-button,
    s-switch {
        margin: 0px 5px;
    }
}

div.line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
}

label[for="__color-input__"] {
    position: relative;
    width: fit-content;
    height: fit-content;
    display: flex;
    border-radius: 100px;

    input {
        position: absolute;
        opacity: 0;
        pointer-events: none;
    }
}

.view-color {
    width: 100px;
    height: 40px;
    background-color: var(--color);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    font-size: 12px;
}
</style>