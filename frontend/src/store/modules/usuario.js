import axios from 'axios'

const state = {
  usuario: []
}

const getters = {
  getUsuario: (state) => state.usuario
}

const actions = {
  async loginUsuario({ commit }, dados) {
    axios.post('/usuarios/login', {
        email: dados.email,
        password: dados.password
      })
      .then(function (response) {
        commit('setUsuario', response.data)
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }
}

const mutations = {
  setUsuario: (state, usuario) => {
    state.usuario = usuario
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
