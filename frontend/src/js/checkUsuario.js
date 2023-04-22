import axios from 'axios'
import router from '../router'
import store from '../store'

const checkUsuario = async () => {
  try {
    const response = await axios.get('/usuarios/me')
    router.push({ path: '/home'})
    store.commit('setUsuario', response.data)

  } catch (error) {
    router.push({ path: '/login'})
  }
}

export default checkUsuario;