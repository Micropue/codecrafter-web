//登录检测返回数据
export interface Response_LoginCheck {
    code: 1 | 2
    msg: string,
    data?: []
}
//获取用户信息
export interface Response_GetUserInfo {

}
//登录
export interface Response_Login {
    code: number,
    msg: string
}
//注册
export interface Response_Register {
    code: number,
    msg: string
}
//获取验证码
export interface Response_GetCode {
    code: number,
    msg?: string
}
//重置密码
export interface Response_Restpwd{
    code:number,
    msg?:string
}