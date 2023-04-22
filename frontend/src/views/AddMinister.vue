<template lang="">
  <div class="row g-3 mt-4" style="overflow-x: hidden;">
    <div class="col-md-4">
      <p class="h3">Cadastro de Pastores</p>
    </div>

    <div class="col-md-8">
      <form>
        <div class="col-md-12">
          <label for="inputAddress" class="form-label">Nome Completo</label>
          <input v-model="name" type="text" class="form-control" id="name" />
        </div>
        <div class="col-md-12">
          <label for="inputEmail4" class="form-label">Email</label>
          <input
          v-model="email"
            type="email"
            class="form-control"
            id="inputEmail4"
            placeholder="email@exemplo.com"
          />
        </div>
        <div class="row">
          <div class="col-md-6">
            <label for="telefone" class="form-label">Telefone 1</label>
            <input v-model="tel1" type="number" class="form-control" id="number-tel1" />
          </div>
          <div class="col-md-6">
            <label for="telefone" class="form-label">Telefone 2</label>
            <input v-model="tel2" type="number" class="form-control" id="number-tel1" />
          </div>
        </div>

        <div class="col-12">
          <label for="inputAddress" class="form-label">Morada</label>
          <input
            v-model="morada"
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="Rua Laurinda Gustavo"
          />
        </div>

        <div class="row">
          <div class="col-md-6">
            <label for="provincia" class="form-label">Provincia</label>
            <input v-model="provincia" type="text" class="form-control" id="provincia" />
          </div>
          <div class="col-md-6">
            <label for="inputState" class="form-label">Municipio</label>
            <select v-model="municipio" id="inputState" class="form-select">
              <option selected>Escolher</option>
              <option>...</option>
            </select>
          </div>
        </div>

        <div class="col-12">
          <hr />
        </div>
        <div class="col-12">
          <button @click="createPastor($event)" class="d-grid gap-2 col-6 mx-auto btn btn-primary mb-2">Salvar</button>
        </div>
        <div class="col-12">
          <button type="submit" class="d-grid gap-2 col-6 mx-auto btn btn-outline-danger">
            Cancelar
          </button>
        </div>
      </form>
  </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      name:'',
      tel1:'',
      tel2:'',
      email:'',
      morada:'',
      provincia:'',
      municipio:'',
    }
  },
  methods: {
    async createPastor(event) {
      event.preventDefault();
      
      try {
        const response = await axios.post('/pastores/', {
          name:this.name,
          tel1:this.tel1,
          tel2:this.tel2,
          email:this.email,
          morada:this.morada,
          provincia:this.provincia,
          municipio:this.municipio,
        })
        console.log(response.data)
      } catch (error) {
        console.log(error.response.data)
      }
    }
  }

}
</script>
<style lang=""></style>
