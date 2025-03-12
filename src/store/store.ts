import { createStore } from 'vuex'
interface State {
    thememode:string
    loading:boolean
    logined:boolean
    userInfo:{}
}
const store = createStore({
    state():State {
        return {
            thememode: "auto",
            loading:false,
            logined:false,
            userInfo:{}
        }
    },
    mutations:{
        load(state:any){
            state.loading = true
        },
        loaded(state:any){
            state.loading = false
        }
    }
})
export default store