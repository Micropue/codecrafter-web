<template>
    <s-search placeholder="全局搜索..." slot="search" v-model="inputValue">
        <s-icon name="search" slot="start"></s-icon>
        <s-icon-button v-if="inputValue" slot="end" @click="methods.search">
            <s-icon name="arrow_forward"></s-icon>
        </s-icon-button>
        <div slot="dropdown">
            <s-ripple v-for="{ name } in history" @click="inputValue = name">
                <p>{{ name }}</p>
            </s-ripple>
        </div>
    </s-search>
</template>
<script setup lang="ts">
import { MAX_SEARCH_HISTORY, SEARCH_HISTORY_NAME } from '@/api/config'
import { cookie } from '@/api/setcookie'
import { onMounted, reactive, ref } from 'vue'
interface History {
    name: string
}
const history = reactive<History[]>([])
const inputValue = ref('')

const methods = {
    search(): void {
        this.saveHistory()
    },
    getHistory(): string[] {
        const cookieValue = cookie.get(SEARCH_HISTORY_NAME)
        if (!cookieValue) return []
        //格式：历史1,历史2,历史3
        const _history = cookieValue.split(',')
        _history.filter(item => item != "")
        _history.reverse()
        for (const name of _history) {
            history.push({ name: name.replace(/\*0312\*/, ",") })
        }
        return _history
    },
    saveHistory(): void {
        history.reverse()
        if (history.length >= MAX_SEARCH_HISTORY) history.pop()
        history.push({ name: inputValue.value })
        history.reverse()
        const _history: string[] = history.map(item => item.name.replace(/,/, "*0312*"))
        _history.reverse()
        cookie.set(SEARCH_HISTORY_NAME, _history.join(","))
    }
}
onMounted(methods.getHistory)
</script>
<style scoped lang="scss">
s-search {
    z-index: 2;
}

[slot=dropdown] {
    max-height: 300px;
    overflow-y: scroll;

    s-ripple {
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        word-wrap: anywhere;

        p {
            margin: 0;
        }
    }
}
</style>