//登录检测返回数据
export interface Response_LoginCheck {
    code: 1 | 2
    msg: string,
    data?:[]
}