//cookie设置与获取封装
export const cookie = {
    set(key: string, value: string): void {
        document.cookie = `${key}=${value}`
    },
    get(key: string): string {
        const cookies = document.cookie.split("; ")
        const _cookies = cookies.map((item) => {
            const r = item.split('=')
            return [r[0], r[1]]
        })
        const __cookies: {
            [name: string]: string
        } = {}
        _cookies.forEach(self => {
            __cookies[self[0]] = self[1]
        })
        return __cookies[key] ?? false
    },
}