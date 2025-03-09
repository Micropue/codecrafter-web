import { createStore } from "vuex"
interface State {
    visible: boolean,
    logined: boolean
}
interface Commit {
    commit: Function
}
export const store = createStore({
    state: {
        visible: false,//加载条启用状态
        logined: false, //登录状态
    },
    mutations: {
        changeloader(state: State, bool: boolean) {
            state.visible = bool
        },
        changeLoginedStatus(state: State, bool: boolean) {
            state.logined = bool
        }
    },
    actions: {
        open({ commit }: Commit) {
            commit('changeloader', true)//加载条打开
        },
        close({ commit }: Commit) {
            commit('changeloader', false)//加载条关闭
        },
        logined({ commit }: Commit) {
            commit('changeloginedStatus', true)//已登录
        },
        unlogined({ commit }: Commit) {
            commit('changeLoginedStatus', false)//未登录
        }
    }
})