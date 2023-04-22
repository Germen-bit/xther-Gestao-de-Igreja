import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import AddMinister from '../views/AddMinister.vue'
import CultoReunioesView from '../views/CultosReunioes.vue'
import LancamentoView from '../views/Lancamento.vue'
import RelatoriosView from '../views/Relatorios.vue'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/home",
      name:"home",
      component: HomeView
    },
    {
      path:"/",
      name:"home",
      redirect: "/home"
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/add-minister',
      name: 'addMinister',
      component: AddMinister
    },
    {
      path: '/cultos-reunioes', 
      name: 'cultos-reunioes',
      component: CultoReunioesView
    },
    {
      path: '/lancamento', 
      name: 'lancamento',
      component: LancamentoView
    },
    {
      path: '/relatorios',
      name: 'relatorios',
      component: RelatoriosView
    }
  ]
})

export default router
