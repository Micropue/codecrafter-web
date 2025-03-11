<template>
    <s-picker slot="action">
        <s-tooltip slot="trigger">
            <s-icon-button slot="trigger">
                <s-icon name="dark_mode"></s-icon>
            </s-icon-button>
            主题切换
        </s-tooltip>
        <s-picker-item :selected="$store.state.thememode == 'auto'" @click="methods.changemode('auto')">跟随系统</s-picker-item>
        <s-picker-item :selected="$store.state.thememode == 'light'" @click="methods.changemode('light')">亮色模式</s-picker-item>
        <s-picker-item :selected="$store.state.thememode == 'dark'" @click="methods.changemode('dark')">深色模式</s-picker-item>
    </s-picker>
</template>
<script setup lang="ts">
import { useStore } from 'vuex'
import { cookie } from '@/api/setcookie'
import { THEMEMODE_COOKIE_NAME } from '@/api/config'
const $store = useStore()
const methods = {
    changemode(theme: string): void {
        $store.state.thememode = theme
        cookie.set(THEMEMODE_COOKIE_NAME, theme)
    }
}
</script>