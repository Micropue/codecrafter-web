//主机名
const HOST = "http://api.test.cc.micropue.com.cn"
interface APIURI {
    [name:string]:string
    CHECK_LOGIN:string
}
let APIURI: APIURI= {
    CHECK_LOGIN: "/index.php/user/checkLogin",
}
for (const i in APIURI) {
    APIURI[i] = HOST + APIURI[i]
}
export default APIURI