<template>
    <s-navigation mode="rail">
        <!--抽屉顶部-->
        <s-icon-button slot="start" type="filled-tonal" title="个人">
            <s-icon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                    <path
                        d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z">
                    </path>
                </svg>
            </s-icon>
        </s-icon-button>
        <!--抽屉导航0-->
        <s-navigation-item selected="true">
            <s-icon name="home" slot="icon"></s-icon>
            <div slot="text">首页</div>
        </s-navigation-item>
        <!--抽屉导航1-->
        <s-navigation-item>
            <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path
                    d="M500-482q29-32 44.5-73t15.5-85q0-44-15.5-85T500-798q60 8 100 53t40 105q0 60-40 105t-100 53Zm220 322v-120q0-36-16-68.5T662-406q51 18 94.5 46.5T800-280v120h-80Zm80-280v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Zm-480-40q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM0-160v-112q0-34 17.5-62.5T64-378q62-31 126-46.5T320-440q66 0 130 15.5T576-378q29 15 46.5 43.5T640-272v112H0Zm320-400q33 0 56.5-23.5T400-640q0-33-23.5-56.5T320-720q-33 0-56.5 23.5T240-640q0 33 23.5 56.5T320-560ZM80-240h480v-32q0-11-5.5-20T540-306q-54-27-109-40.5T320-360q-56 0-111 13.5T100-306q-9 5-14.5 14T80-272v32Zm240-400Zm0 400Z">
                </path>
            </svg>
            <div slot="text">加入我们</div>
        </s-navigation-item>
        <!--抽屉导航2-->
        <s-navigation-item>
            <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path
                    d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z">
                </path>
            </svg>
            <div slot="text">社区</div>
        </s-navigation-item>
        <!--抽屉导航3-->
        <s-navigation-item>
            <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path
                    d="M320-320h480v-480h-80v280l-100-60-100 60v-280H320v480Zm0 80q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm360-720h200-200Zm-200 0h480-480Z">
                </path>
            </svg>
            <div slot="text">博客</div>
        </s-navigation-item>
        <s-navigation-item>
            <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path
                    d="M280-280h160v-160H280v160Zm240 0h160v-160H520v160ZM280-520h160v-160H280v160Zm240 0h160v-160H520v160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z">
                </path>
            </svg>
            <div slot="text">项目</div>
        </s-navigation-item>
        <s-navigation-item>
            <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path
                    d="m720-120-56-56 63-64H560v-80h167l-63-64 56-56 160 160-160 160Zm-600 0v-600q0-33 23.5-56.5T200-800h480q33 0 56.5 23.5T760-720v203q-10-2-20-2.5t-20-.5q-10 0-20 .5t-20 2.5v-203H200v400h283q-2 10-2.5 20t-.5 20q0 10 .5 20t2.5 20H240L120-120Zm160-440h320v-80H280v80Zm0 160h200v-80H280v80Zm-80 80v-400 400Z">
                </path>
            </svg>
            <div slot="text">聊天</div>
        </s-navigation-item>
        <div slot="end" style="display: flex;align-items: flex-end; padding: 16px 0;">
            <SettingsDialog></SettingsDialog>
        </div>
    </s-navigation>
</template>
<script setup lang="ts">
import SettingsDialog from './settings.vue'
</script>
