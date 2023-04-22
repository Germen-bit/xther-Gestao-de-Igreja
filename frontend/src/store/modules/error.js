const state = {
    error: []
}

const getters = {
    getErrors: (state) => state.error
}

const actions = {}

const mutations = {
    setError: (state, error) => state.error = error,
    clearState: (state, data) => state.error.length = data,
}

export default {
    state,
    getters,
    actions,
    mutations
}