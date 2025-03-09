<template>
    <div class="auth" v-loading="checking">
        <el-button type="primary" v-if="!logined">登录</el-button>
        <el-button type="primary" v-if="!logined" plain>注册</el-button>
        <el-button type="danger" plain v-if="logined">退出登录</el-button>
    </div>
</template>
<script setup lang="ts">
import Ajax from '@/api/xhr'
import { useStore } from 'vuex'
import APIURI from '@/api/apiurls'
import { ElMessage } from 'element-plus'
import { computed, ref } from 'vue'
import { store as actions_store } from '@/states/store'
import type { Response_LoginCheck } from '@/api/apitype'
//引入全局状态管理
const store = useStore()
const logined = computed(() => store.state.logined)
const checking = ref(true)
//登录检测逻辑
Ajax({
    url: APIURI.CHECK_LOGIN,
    success(data: Response_LoginCheck) {
        if (data.code === 1) {
            actions_store.dispatch('logined')
        } else {
            actions_store.dispatch('unlogined')
        }
    },
    error(status, message) {
        ElMessage.error("检测登录失败：" + message + status)
    },
}).then(() => checking.value = false)
</script>
<style lang="scss" scoped>
.auth {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
}
</style>