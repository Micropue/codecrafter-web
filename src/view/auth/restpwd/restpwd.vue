<template>
    <div>
        <h1>密码重置</h1>
        <s-text-field label="邮件" v-model="formData.email" @input="methods.checkRegex.email" :error="!regex.email">
            <s-icon slot="start">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                    <path
                        d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v58q0 59-40.5 100.5T740-280q-35 0-66-15t-52-43q-29 29-65.5 43.5T480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480v58q0 26 17 44t43 18q26 0 43-18t17-44v-58q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h200v80H480Zm0-280q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z">
                    </path>
                </svg>
            </s-icon>
            <s-icon-button slot="end" v-if="formData.email" @click="formData.email = ''">
                <s-icon name="close"></s-icon>
            </s-icon-button>
        </s-text-field>
        <div class="line">
            <s-text-field label="验证码" v-model="formData.code">
                <s-icon-button slot="end" v-if="formData.code" @click="formData.code = ''">
                    <s-icon name="close"></s-icon>
                </s-icon-button>
            </s-text-field>
            <s-button :disabled="status.is_sendingCode || status.sendingCodelabel != 0" @click="methods.sendCode">
                <s-circular-progress indeterminate="true" v-if="status.is_sendingCode"
                    slot="start"></s-circular-progress>
                {{ status.sendingCodelabel == 0 ?
                    "发送验证码" : `请${status.sendingCodelabel}秒后再试` }}</s-button>
        </div>
        <s-text-field label="新密码" type="password" v-model="formData.newpassword" @input="methods.checkRegex.newpassword"
            maxLength="16" countered="true" :error="!regex.newpassword">
            <s-icon slot="start">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                    <path
                        d="M80-200v-80h800v80H80Zm46-242-52-30 34-60H40v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Zm320 0-52-30 34-60h-68v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Zm320 0-52-30 34-60h-68v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Z">
                    </path>
                </svg>
            </s-icon>
            <s-icon-button slot="end" v-if="formData.newpassword" @click="formData.newpassword = ''">
                <s-icon name="close"></s-icon>
            </s-icon-button>
            <div slot="text">需6-16位且仅可包含数字、大小写字母、短横线和下划线</div>
        </s-text-field>
        <s-text-field label="确认密码" type="password" v-model="formData.repassword" @input="methods.checkRegex.repassword"
            maxLength="16" countered="true" :error="!regex.repassword">
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
        <s-divider>重置密码默认您同意我们的隐私政策</s-divider>
        <s-button :disabled="status.resetingpassword" @click="methods.reset">
            <s-circular-progress indeterminate="true" slot="start" v-if="status.resetingpassword"></s-circular-progress>
            重置
        </s-button>
        <s-button type="outlined" @click="$router.push('/auth/login')">返回登录</s-button>
    </div>
</template>
<script lang="ts" setup>
import type { Response_GetCode, Response_Restpwd } from '@/api/apitype'
import APIURI from '@/api/apiurls'
import Ajax from '@/api/xhr'
import { Snackbar } from 'sober'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
const $router = useRouter()
interface FormData {
    email: string
    code: string | number
    newpassword: string
    repassword: string
}
const formData = reactive<FormData>({
    email: "",
    code: "",
    newpassword: "",
    repassword: "",
})
const status = reactive({
    is_sendingCode: false,
    resetingpassword: false,
    sendingCodelabel: 0
})
const regex = reactive({
    email: false,
    newpassword: false,
    repassword: false,
})
const methods = {
    checkRegex: {
        email: () => {
            regex.email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
        },
        newpassword() {
            regex.newpassword = /^([a-zA-Z0-9_\-]+){6,16}$/.test(formData.newpassword)
        },
        repassword() {
            regex.repassword = formData.newpassword === formData.repassword
        },
    },
    reset(){
        if(!formData.code||
        !formData.email||
        !formData.newpassword||
        !formData.repassword){
            Snackbar.builder({text:"请填写完整",type:"error"})
            return
        }
        if(!regex.email||
            !regex.newpassword||
            !regex.repassword
        ){
            Snackbar.builder({text:"请保证填写信息符合复杂性要求",type:"error"})
        }
        status.resetingpassword = true
        Ajax<Response_Restpwd>({
            url:APIURI.RESTPWD,
            type:"POST",
            data:{
                email:formData.email,
                code:String(formData.code),
                new_password:formData.newpassword
            },
            success(data){
                if(data.code == 1){
                    Snackbar.builder("密码已成功修改，请返回登录")
                    $router.push('/auth/login')
                }else{
                    Snackbar.builder({text:`密码修改失败：${data.msg} ${data.code}`,type:"error"})
                }
            },
            error(status,message){
                Snackbar.builder({text:`请求失败：${status} ${message}`,type:"error"})
            }
        }).then(()=>status.resetingpassword= false)
    },
    sendCode() {
        if (!regex.email) {
            Snackbar.builder({ text: "请填写正确的邮箱地址", type: "error" })
            return
        }
        status.is_sendingCode = true
        Ajax<Response_GetCode>({
            url:APIURI.SENDEMAILCODE,
            type:"POST",
            data:{
                email:formData.email
            },
            success(data){
                if(data.code == 1){
                    Snackbar.builder("验证码已发送，请注意查收")
                    status.sendingCodelabel = 60
                    const interval = setInterval(()=>{
                        if(status.sendingCodelabel <= 0) clearInterval(interval)
                        status.sendingCodelabel --
                    },1000)
                }else{
                    Snackbar.builder({text:`验证码发送失败：${data.msg} ${data.code}`,type:"error"})
                }
            },
            error(status,message){
                Snackbar.builder({text:`验证码发送失败：${status} ${message}`,type:"error"})
            }
        }).then(()=>status.is_sendingCode = false)
    }
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