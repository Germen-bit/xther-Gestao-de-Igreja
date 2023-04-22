<template lang="">
  <nav
    class="navbar navbar-expand-lg bg-light fixed-top mb-3 shadow"
    style="background-color: #e3f2fd"
  >
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../../assets/xther-logo 1080p.png" alt="Xther" width="96" height="40" />
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
          <router-link style="text-decoration: none" to="/home">
            <li class="nav-item">
              <a class="nav-link fw-semibold" aria-current="page">Home</a>
            </li>
          </router-link>
          <router-link style="text-decoration: none" to="/add-minister">
            <li class="nav-item">
              <a class="nav-link fw-semibold" href="#">Cadastros</a>
            </li>
          </router-link>
          <router-link style="text-decoration: none" to="cultos-reunioes">
            <li class="nav-item">
              <a class="nav-link fw-semibold" href="#">Cultos ou Reuniões</a>
            </li>
          </router-link>
          <router-link style="text-decoration: none" to="/lancamento">
            <li class="nav-item">
              <a class="nav-link fw-semibold">Lançamentos</a>
            </li>
          </router-link>
          <router-link style="text-decoration: none" to="/relatorios">
            <li class="nav-item">
              <a class="nav-link fw-semibold">Relatórios</a>
            </li>
          </router-link>
        </ul>
      </div>
      <div class="dropdown" style="margin-right: 30px">
        <a
          href="#"
          class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <strong class="text-black" style="margin-right: 10px">{{ getUsuario.nome }}</strong>
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            class="rounded-circle me-2"
          />
          <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
            <li><a class="dropdown-item" href="#">Definição</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#" @click="logout">Sair</a></li>
          </ul>
        </a>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from 'vuex'
import { useRouter } from 'vue-router'
const router = useRouter()

export default {
  computed: mapGetters(['getUsuario']),
  methods: {
    logout() {
      localStorage.removeItem('token')
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style scoped>
.main-content {
  height: 100vh;
  position: absolute;
}
#nav-link {
  text-decoration: none;
  color: #fff;
}
</style>
