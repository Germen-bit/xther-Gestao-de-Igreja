<template lang="">
  <div style="overflow-y: hidden">
    <main class="form-signin w-100 m-auto">
      <form class="main-content">
         <!-- Logo -->
        <div class="container mb-4">
          <a class="navbar-brand d-flex justify-content-center" href="#">
            <img
              src="../assets/xther-logo 512.png"
              alt="Xther"
              width="64"
              height="60"
            />
          </a>
        </div>

        <div v-if="getErrors.length !== 0" class="alert alert-danger" role="alert">
          {{ getErrors.message }}
        </div>

        <h1 class="h3 mb-3 fw-normal text-center">Entrar na sua conta</h1>

        <div class="form-floating mb-3">
          <input
            v-on:focus="clearError"
            type="email"
            class="form-control"
            id="email"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email</label>
        </div>
        <div class="form-floating">
          <input
            v-on:focus="clearError"
            type="password"
            class="form-control"
            id="password"
            placeholder="Palavra-Passe"
          />
          <label for="floatingPassword">Palavra-Passe</label>
        </div>

        <button class="w-100 mt-3 btn btn-lg btn-primary" type="submit" @click="login($event)">
          Entrar
        </button>
        <p class="mt-5 text-center mb-3 text-body-secondary">&copy; 2023</p>
      </form>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { useRouter } from 'vue-router'
import checkUsuario from '../js/checkUsuario'
const router = useRouter()

export default {
  computed: {
    ...mapGetters(['getErrors'])
  },
  methods: {
    ...mapMutations(['setError', 'clearState']),
    ...mapActions(['loginUsuario']),
    storeError(error) {
      this.setError(error)
    },
    clearError() {
      this.clearState(0)
    },
    async login(event) {
      event.preventDefault()

      const email = document.querySelector('#email').value
      const password = document.querySelector('#password').value

      try {
        const response = await axios.post('/usuarios/login', {
          email,
          password
        })
        this.setToken(response.data.token)
        this.$router.push({ path: '/home' })
        checkUsuario()
      } catch (error) {
        this.storeError(error.response.data)
      }
    },
    setToken(token) {
      localStorage.setItem('token', `${token}`)
    }
  },
  beforeMount() {
    checkUsuario()
  }
}
</script>

<style scoped>
.main-content {
  width: 450px;
  margin: 150px;
}
</style>
