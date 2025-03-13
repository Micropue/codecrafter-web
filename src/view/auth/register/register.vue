<template>
    <div class="main">
        <h1>加入论坛</h1>
        <s-text-field label="设置用户名" @input="methods.checkRegex.username" :error="!regex.username"
            v-model="formData.username" maxLength="20" countered="true">
            <s-icon slot="start">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                    <path
                        d="M560-680v-80h320v80H560Zm0 160v-80h320v80H560Zm0 160v-80h320v80H560Zm-240-40q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM80-160v-76q0-21 10-40t28-30q45-27 95.5-40.5T320-360q56 0 106.5 13.5T522-306q18 11 28 30t10 40v76H80Zm86-80h308q-35-20-74-30t-80-10q-41 0-80 10t-74 30Zm154-240q17 0 28.5-11.5T360-520q0-17-11.5-28.5T320-560q-17 0-28.5 11.5T280-520q0 17 11.5 28.5T320-480Zm0-40Zm0 280Z">
                    </path>
                </svg>
            </s-icon>
            <s-icon-button slot="end" v-if="formData.username" @click="formData.username = ''">
                <s-icon name="close"></s-icon>
            </s-icon-button>
            <div slot="text">需2-20位且不可包含空格</div>
        </s-text-field>
        <s-text-field label="设置密码" @input="methods.checkRegex.password" :error="!regex.password"
            v-model="formData.password" type="password" maxLength="16" countered="true">
            <s-icon slot="start">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                    <path
                        d="M80-200v-80h800v80H80Zm46-242-52-30 34-60H40v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Zm320 0-52-30 34-60h-68v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Zm320 0-52-30 34-60h-68v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Z">
                    </path>
                </svg>
            </s-icon>
            <s-icon-button slot="end" v-if="formData.password" @click="formData.password = ''">
                <s-icon name="close"></s-icon>
            </s-icon-button>
            <div slot="text">需6-16位且仅可包含数字、大小写字母、短横线和下划线</div>
        </s-text-field>
        <s-text-field label="确认密码" @input="methods.checkRegex.repassword" :error="!regex.repassword"
            v-model="formData.repassword" type="password" maxLength="16" countered="true">
            <s-icon slot="start">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                    <path
                        d="M80-200v-80h800v80H80Zm46-242-52-30 34-60H40v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Zm320 0-52-30 34-60h-68v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Zm320 0-52-30 34-60h-68v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Z">
                    </path>
                </svg>
            </s-icon>
            <s-icon-button slot="end" v-if="formData.repassword" @click="formData.repassword = ''">
                <s-icon name="close"></s-icon>
            </s-icon-button>
            <div slot="text">需与第一次输入一致</div>
        </s-text-field>
        <s-text-field label="邮件" @input="methods.checkRegex.email" :error="!regex.email" v-model="formData.email">
            <s-icon-button slot="end" v-if="formData.email" @click="formData.email = ''">
                <s-icon name="close"></s-icon>
            </s-icon-button>
            <s-icon slot="start">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                    <path
                        d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v58q0 59-40.5 100.5T740-280q-35 0-66-15t-52-43q-29 29-65.5 43.5T480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480v58q0 26 17 44t43 18q26 0 43-18t17-44v-58q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h200v80H480Zm0-280q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z">
                    </path>
                </svg>
            </s-icon>
            <div slot="text">输入正确的邮件例如：example@example.com</div>
        </s-text-field>
        <div class="line">
            <s-text-field label="验证码" v-model="formData.code">
                <s-icon-button slot="end" v-if="formData.code" @click="formData.code = ''">
                    <s-icon name="close"></s-icon>
                </s-icon-button>
            </s-text-field>
            <s-button :disabled="status.is_codeSending || status.codeButtonLabel != 0" @click="methods.sendCode">
                <s-circular-progress indeterminate="true" slot="start"
                    v-if="status.is_codeSending"></s-circular-progress>
                {{ status.codeButtonLabel == 0 ? "发送验证码" : `请${status.codeButtonLabel}秒后再试` }}
            </s-button>
        </div>
        <s-divider>注册代表您同意我们的隐私政策</s-divider>
        <s-button :disabled="status.is_registering" @click="methods.register">
            <s-circular-progress indeterminate="true" slot="start" v-if="status.is_registering"></s-circular-progress>
            注册
        </s-button>
        <s-button type="outlined" @click="$router.push('/auth/login')">返回登录</s-button>
    </div>
</template>
<script lang="ts" setup>
import APIURI from '@/api/apiurls'
import Ajax from '@/api/xhr'
import { Snackbar } from 'sober'
import { reactive } from 'vue'
import type { Response_GetCode, Response_Register } from '@/api/apitype'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const $router = useRouter()
const $store = useStore()
interface FormData {
    username: string,
    password: string,
    repassword: string,
    email: string,
    code: string | number,
}
interface Status {
    is_registering: boolean
    is_codeSending: boolean
    codeButtonLabel: number
}
const status = reactive<Status>({
    is_registering: false,
    is_codeSending: false,
    codeButtonLabel: 0
})
const formData = reactive<FormData>({
    username: "",
    password: "",
    repassword: "",
    email: "",
    code: ""
})
const regex = reactive({
    username: false,
    password: false,
    repassword: false,
    email: false,
})
const methods = {
    checkRegex: {
        username: () => {
            regex.username = /^(.){2,20}$/.test(formData.username)
        },
        password: () => {
            regex.password = /^([a-zA-Z0-9_\-]*){6,16}$/.test(formData.password)
        },
        repassword: () => {
            regex.repassword = formData.password == formData.repassword
        },
        email: () => {
            regex.email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
        }
    },
    sendCode() {
        if (!regex.email) {
            Snackbar.builder({ text: "请填写正确的邮箱地址", type: "error" })
            return
        }
        status.is_codeSending = true
        Ajax<Response_GetCode>({
            url: APIURI.SENDEMAILCODE,
            type: "POST",
            data: {
                email: formData.email
            },
            success(data) {
                if (data.code == 1) {
                    Snackbar.builder("验证码已发送，请注意查收")
                    status.codeButtonLabel = 60
                    const interval = setInterval(() => {
                        if (status.codeButtonLabel == 0) {
                            clearInterval(interval)
                            return
                        }
                        status.codeButtonLabel--
                    }, 1000)
                }
                else
                    Snackbar.builder({ text: `${data?.msg} ${data.code}`, type: "error" })
            },
            error(s, m) {
                Snackbar.builder({ text: `调用获取验证码接口时出现错误:${s} ${m}`, type: "error" })
            }
        }).then(() => status.is_codeSending = false)
    },
    register() {
        if (!formData.username ||
            !formData.password ||
            !formData.code ||
            !formData.email ||
            !formData.repassword) {
            Snackbar.builder({ text: "请填写完整", type: "error" })
            return
        }
        if (!regex.email ||
            !regex.password ||
            !regex.repassword ||
            !regex.username
        ) {
            Snackbar.builder({ text: "请保证填写信息符合复杂性要求", type: "error" })
            return
        }
        status.is_registering = true
        Ajax<Response_Register>({
            url: APIURI.REGISTER,
            type: "POST",
            data: {
                username: formData.username,
                password: formData.password,
                email: formData.email,
                code: String(formData.code)
            },
            success(data) {
                if (data.code == 1) {
                    //注册成功
                    Snackbar.builder("注册完成，请登录")
                    $router.push('/auth/login')
                } else {
                    Snackbar.builder({ text: data.msg, type: "error" })
                }
            },
            error(status, message) {
                Snackbar.builder({ text: "请求接口失败：" + status + message, type: "error" })
            }
        }).then(() => status.is_registering = false)
    },
}
</script>
<style lang="scss" scoped>
div {
    width: 100%;
    max-width: 350px;

    p.tip {
        font-size: 13px;
        color: gray;
        text-align: center;
    }

    s-text-field {
        margin: 6px;
        width: 100%;
    }

    s-button {
        margin: 10px;
        width: 100%;
        border-radius: 10px;
    }

    s-divider {
        width: 100%;
    }

    div.line {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 10px;
        width: 100%;

        s-text-field {
            width: 65%;
            margin: 0;
        }

        s-button {
            width: 30%;
            height: 100%;
            border-radius: 100px;
            margin: 0;
        }
    }
}
</style>