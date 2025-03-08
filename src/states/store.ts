import { createStore } from "vuex"
interface State {
    visible: boolean
}
export const store = createStore({
    state: {
        visible: false
    },
    mutations: {
        changeloader(state: State, bool: boolean) {
            state.visible = bool
        }
    },
    actions: {
        open({ commit }) {
            commit('changeloader', true)
        },
        close({ commit }) {
            commit('changeloader', false)
        }
    }
})