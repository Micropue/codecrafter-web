import { createStore } from 'vuex'
const store = createStore({
    state() {
        return {
            thememode: "auto"
        }
    }
})
export default store