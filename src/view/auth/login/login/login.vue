<template>
    <div>
        <h1>登录到论坛</h1>
        <s-text-field label="用户名">
            <s-icon slot="start">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                    <path
                        d="M560-680v-80h320v80H560Zm0 160v-80h320v80H560Zm0 160v-80h320v80H560Zm-240-40q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM80-160v-76q0-21 10-40t28-30q45-27 95.5-40.5T320-360q56 0 106.5 13.5T522-306q18 11 28 30t10 40v76H80Zm86-80h308q-35-20-74-30t-80-10q-41 0-80 10t-74 30Zm154-240q17 0 28.5-11.5T360-520q0-17-11.5-28.5T320-560q-17 0-28.5 11.5T280-520q0 17 11.5 28.5T320-480Zm0-40Zm0 280Z">
                    </path>
                </svg>
            </s-icon>
            <s-icon-button slot="end">
                <s-icon name="close"></s-icon>
            </s-icon-button>
        </s-text-field>
        <s-text-field label="密码">
            <s-icon slot="start">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                    <path
                        d="M80-200v-80h800v80H80Zm46-242-52-30 34-60H40v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Zm320 0-52-30 34-60h-68v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Zm320 0-52-30 34-60h-68v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Z">
                    </path>
                </svg>
            </s-icon>
            <s-icon-button slot="end">
                <s-icon name="close"></s-icon>
            </s-icon-button>
        </s-text-field>
        <div class="line">
            <s-checkbox disabled="true" checked="true">记住我</s-checkbox>
            <Router-link to="/auth/login/restpwd">重置密码</Router-link>
        </div>
        <s-button>登录</s-button>
        <s-button type="outlined" @click="$router.push('/auth/login/register')">注册</s-button>
    </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
div {
    width:100%;
    max-width:350px;
    s-text-field{
        margin:10px;
        width:100%;
    }
    s-button{
        margin:10px;
        width:100%;
        border-radius: 10px;
    }
    div.line{
        display: flex;
        align-items: center;
        justify-content: space-between;
        p{
            font-size:13px;
        }
    }
}
</style>