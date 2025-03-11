<template>
  <s-page :theme="$store.state.thememode">
    <s-drawer>
      <div slot="start" style="width: auto;">
        <Navigation></Navigation>
      </div>
      <Appbar></Appbar>
      <s-scroll-view style="flex-grow: 1;scroll-behavior:smooth">
        <main style="height: 100%;">
          <Router-view v-slot="{ Component }">
            <Transition name="opacity" mode="out-in">
              <component :is="Component"></component>
            </Transition>
          </Router-view>
        </main>
      </s-scroll-view>
    </s-drawer>
  </s-page>
</template>
<style scoped>
.opacity-enter-active,
.opacity-leave-active {
    filter:blur(0px);
    opacity: 1;
    transition: all 0.3s;
}

.opacity-enter-from,
.opacity-leave-to {
    filter:blur(10px);
    opacity: 0;
}
</style>
<script setup lang="ts">
import Navigation from './components/navigation.vue'
import Appbar from './components/appbar.vue'
import { create as createtheme } from 'sober-theme'
import { cookie } from './api/setcookie'
import { onMounted } from 'vue'
import { THEME_COOKIE_NAME, THEMEMODE_COOKIE_NAME } from './api/config'
import { Snackbar } from 'sober'
import { useStore } from 'vuex'
const $store = useStore()
onMounted(() => {
  const theme = cookie.get(THEME_COOKIE_NAME)
  if (theme) {
    createtheme(theme, document.querySelector('s-page')!).catch(() => {
      Snackbar.builder({ text: "缓存主题生成失败", type: "error" })
    })
  }
  const thememode = cookie.get(THEMEMODE_COOKIE_NAME)
  if (thememode) {
    $store.state.thememode = thememode
  }
})
</script>