<template lang="">
  <div class="row g-3 mt-4" style="overflow-x: hidden;">
    <div class="col-md-4">
      <p class="h3">Cadastro de Pastores</p>
    </div>

    <div class="col-md-8">
      <form>
        <div class="col-md-12">
          <label for="inputAddress" class="form-label">Nome Completo</label>
          <input type="text" class="form-control" id="name" />
        </div>
        <div class="col-md-12">
          <label for="inputEmail4" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail4"
            placeholder="email@exemplo.com"
          />
        </div>
        <div class="row">
          <div class="col-md-6">
            <label for="telefone" class="form-label">Telefone 1</label>
            <input type="number" class="form-control" id="number-tel1" />
          </div>
          <div class="col-md-6">
            <label for="telefone" class="form-label">Telefone 2</label>
            <input type="number" class="form-control" id="number-tel1" />
          </div>
        </div>

        <div class="col-12">
          <label for="inputAddress" class="form-label">Morada</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="Rua Laurinda Gustavo"
          />
        </div>

        <div class="row">
          <div class="col-md-6">
            <label for="provincia" class="form-label">Provincia</label>
            <input type="text" class="form-control" id="provincia" />
          </div>
          <div class="col-md-6">
            <label for="inputState" class="form-label">Municipio</label>
            <select id="inputState" class="form-select">
              <option selected>Escolher</option>
              <option>...</option>
            </select>
          </div>
        </div>

        <div class="col-12">
          <hr />
        </div>
        <div class="col-12">
          <button type="submit" class="d-grid gap-2 col-6 mx-auto btn btn-primary mb-2">Salvar</button>
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
export default {}
</script>
<style lang=""></style>
