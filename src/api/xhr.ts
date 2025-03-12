//xhr封装
interface Options {
    url: string, //请求地址
    type?: "GET" | "POST", //请求方式
    data?: {
        [query: string]: string
    },//数据
    success?(data: any, status: number): void, //请求成功：200
    error?(status: number, message: string): void //请求失败 !200
}
function Ajax(options: Options):Promise<null> {
    const type = options.type === "POST" ? "POST" : "GET"
    const url = options.url ?? console.error("can't find params \"url\" or it's empty")
    let data = ""
    const success: Function = options.success ?? function () { }
    const error: Function = options.error ?? function () { }
    if (options.data) {
        let iteration = 0
        const dataLength = Object.keys(options.data).length
        for (const i in options.data) {
            data += `${encodeURIComponent(i)}=${encodeURIComponent(options.data[i])}` + (iteration == dataLength - 1 ? "" : "&")
        }
        if (type === "GET") data = "?" + data
    }
    const xhr = new XMLHttpRequest()
    xhr.open(type, url + (type === "GET" ? data : ""))
    xhr.setRequestHeader('Content-type', "x-www-form-urlencoded")
    xhr.send(type === "POST" ? data : null)
    return new Promise((done) => {
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) return
            done(null)
            if (xhr.status === 200) {
                const response = xhr.responseText || ""
                try {
                    const data = JSON.parse(response)
                    success(data, xhr.status)
                } catch (e) {
                    error(xhr.status, e)
                }
            } else {
                error(xhr.status, "")
            }
        }
    })
}
export default Ajax