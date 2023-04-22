import { createStore } from 'vuex'
import usuario from './modules/usuario'
import error from './modules/error'

// Create store
const store = createStore({
  modules: {
    usuario,
    error
  }
})

export default store
