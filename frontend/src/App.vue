<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBarView from './components/layout/NavBar.vue'

const logged = true
</script>

<template>
    <div id="main" class="">
      <div id="navbar-view" class="col-12 mt-3 bg-info-subtle p-2">
        <NavBarView v-if="logged" />
      </div>
    
      <div id="center-content" class="col-12">
        <RouterView />
      </div>
    </div>
    

</template>

<style scoped>
#main {
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;
  overflow-y: hidden;
}

#navbar-view {
  width: 100%;
}

#center-content {
  overflow-y: scroll;
  margin: 0 auto;
  padding: 10px;
  height: 87vh;
}
</style>
