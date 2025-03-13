<template>
    <div class="about">
        <HeadlineList :list="list"></HeadlineList>
        <s-circular-progress indeterminate="true" v-if="!loaded"></s-circular-progress>
        <main v-html="data" ref="main"></main>
    </div>
</template>
<script setup lang="ts">
import { Snackbar } from 'sober'
import { onMounted, ref } from 'vue'
import { marked } from 'marked'
import HeadlineList from '@/components/headline-list.vue'
const data = ref<string>('')
const loaded = ref(false)
const list = ref<{
    name:string | null,
    location:number
}[]>([])
const main = ref<HTMLElement | null>(null)
const methods = {
    getMD() {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()
            xhr.open("GET", new URL('../../../../public/about.md', import.meta.url).href)
            xhr.send()
            xhr.onreadystatechange = () => {
                if (xhr.readyState !== 4) return
                loaded.value = true
                if (xhr.status == 200) {
                    const res: string = xhr.responseText
                    resolve(res)
                } else {
                    Snackbar.builder({ text: "无法获取存储库文件", type: "error" })
                    reject()
                }
            }
        })
    },
}
onMounted(() => {
    methods.getMD().then(v => {
        const _v: string = String(v)
        data.value = marked.parse(_v, {
            async: false
        })
        setTimeout(() => {
            if (main.value) {
                const html = [...main.value.querySelectorAll("h1,h2,h3,h4,h5,h6")]
                html.forEach(self => {
                    const ele = self
                    const location = ele.getBoundingClientRect().top
                    const name = ele.textContent
                    list.value.push({
                        name, location
                    })
                })
            }
        })
    })
})
</script>
<style scoped lang="scss">
div.about {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    main {
        width: 100%;
        max-width: 800px;
        padding: 20px;
        box-sizing: border-box;
        line-height: 2;
    }
}
</style>