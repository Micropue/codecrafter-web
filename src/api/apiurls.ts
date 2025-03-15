//主机名
const HOST = "https://api.codecrafter.micropue.com.cn"
interface APIURI {
    [name: string]: string
    CHECK_LOGIN: string
    LOGIN: string
    REGISTER: string
    SENDEMAILCODE:string
    RESTPWD:string
}
let APIURI: APIURI = {
    CHECK_LOGIN: "/index.php/user/checkLogin",
    LOGIN: "/index.php/user/login",
    REGISTER: "/index.php/user/register",
    SENDEMAILCODE:"/index.php/user/getCode",
    RESTPWD:"/index.php/User/resetPassword"
}
for (const i in APIURI) {
    APIURI[i] = HOST + APIURI[i]
}
export default APIURI