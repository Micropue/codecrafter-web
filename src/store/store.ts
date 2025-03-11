import { createStore } from 'vuex'
const store = createStore({
    state() {
        return {
            thememode: "auto",
            loading:false,
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