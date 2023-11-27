import { createStore } from 'vuex'

export default createStore({
    state: {
        searchResults: [],
    },
    mutations: {
        setSearchResults(state, results) {
            state.searchResults = results;
        }
    },
    getters: {
    },
    actions: {
    },
    modules: {
    }
})
