<template>
    <el-autocomplete v-model="data.searchValue" :fetch-suggestions="methods.querySearch" clearable
        style="max-width: 600px" placeholder="搜索" class="input-with-select item">
        <template #append>
            <el-button :icon="Search" @click="methods.search" />
        </template>
    </el-autocomplete>
</template>
<script lang="ts" setup>
import { onMounted, reactive } from 'vue'
import { Search } from '@vicons/ionicons5'
import { cookie } from '../api/setcookie'
import { MAX_SEARCH_HISTORY } from '../api/config'
interface Data {
    searchValue: string
    suggestions: {
        value: string
    }[]
}
const data = reactive<Data>({
    searchValue: "",
    suggestions: []
})
const methods = {
    querySearch(queryValue: string, cd: Function): void {
        queryValue = queryValue.toLowerCase()
        const result = queryValue ? data.suggestions.filter(item => {
            const value = item.value.toLowerCase()
            return value.includes(queryValue)
        }) : data.suggestions
        cd(result)
    },
    getSearchSuggestions(): void {
        const cookies = cookie.get("searchvalues") || ""
        //格式：123,123,123
        const arr = cookies.split(",")
        let iteration = arr.length - 1
        arr.forEach((v, key) => {
            if (iteration - key >= MAX_SEARCH_HISTORY + 1) return
            data.suggestions.push({
                value: arr[iteration].replace(/^\$$/, ",")
            })
            iteration--
        })
    },
    search(): void {
        const origin = data.suggestions?.map(item => item.value.replace(/^,$/, "$")).join(",")
        const nowvalue = data.searchValue.replace(/^,$/, "$")
        cookie.set("searchvalues", origin + "," + nowvalue)
        //每次搜索都刷新历史记录
        data.suggestions.length = 0
        methods.getSearchSuggestions()
    },
}
onMounted(methods.getSearchSuggestions)
</script>
<style lang="scss" scoped></style>