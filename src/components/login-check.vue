<template>
    <s-icon-button slot="start" type="filled-tonal" :disabled="!status.loaded" title="个人"
        @click="$router.push('/auth')">
        <s-icon v-if="status.loaded">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path
                    d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z">
                </path>
            </svg>
        </s-icon>
        <s-circular-progress style="width:20px;" v-if="!status.loaded" indeterminate="true"></s-circular-progress>
    </s-icon-button>
</template>
<script lang="ts" setup>
import { onMounted, reactive } from 'vue'
import Ajax from '@/api/xhr'
import APIURI from '@/api/apiurls'
import { Snackbar } from 'sober'
import { useStore } from 'vuex'
import type { Response_LoginCheck } from '@/api/apitype'
const $store = useStore()
const status = reactive({
    loaded: false
})
const methods = {
    checklogin() {
        Ajax<Response_LoginCheck>({
            url: APIURI.CHECK_LOGIN,
            success(data) {
                if (data.code == 1) {
                    $store.state.logined = true
                    Snackbar.builder("正在拉取用户信息")
                    methods.getUserInfo()
                } else {
                    $store.state.logined = false
                }
            },
            error(status, message) {
                Snackbar.builder({ text: "检测登录时出现问题：" + status + message, type: "error" })
            }
        }).then(() => {
            status.loaded = true
        })
    },
    getUserInfo() {

    },
}
onMounted(methods.checklogin)
</script>