<template>
  <div class="row g-3 mt-4" style="overflow-x: hidden;">
    <div class="col-md-4">
      <p class="h3">Lançamento de reunião</p>
    </div>

    <div class="col-md-8">
      <form>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Culto ou Reunião</label>
        <input type="text" class="form-control" id="inputEmail4" />
      </div>
      <div class="col-md-3">
        <label for="inputPassword4" class="form-label">Semana Nº</label>
        <input type="number" class="form-control" id="inputPassword4" />
      </div>
      <div class="col-md-3">
        <label for="inputAddress" class="form-label">Data do culto</label>
        <input type="date" class="form-control" id="inputAddress" placeholder="" />
      </div>
      <div class="col-12">
        <label for="inputAddress2" class="form-label">Palavra</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder="" />
      </div>
      <hr />

      <p class="h3">Presenças</p>
      <div class="row">
        <div class="col-md-4 p-2 rounded-1">
          <label for="inputCity" class="form-label p-1">Adultos</label>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Alvo</span>
            <input
              type="text"
              class="form-control"
              placeholder="alvo"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div class="input-group mb-3">    
            <span class="input-group-text mr-1" id="basic-addon1">Real</span>
            <input
              type="text"
              class="form-control"
              placeholder="real"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div class="col-md-4 p-2 rounded-1">
          <label for="inputCity" class="form-label p-1">Crianças</label>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Alvo</span>
            <input
              type="text"
              class="form-control"
              placeholder="alvo"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text mr-1" id="basic-addon1">Real</span>
            <input
              type="text"
              class="form-control"
              placeholder="real"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div class="col-md-4 p-2 rounded-1">
          <label for="inputCity" class="form-label p-1">Novos convertidos</label>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Alvo</span>
            <input
              type="text"
              class="form-control"
              placeholder="alvo"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text mr-1" id="basic-addon1">Real</span>
            <input
              type="text"
              class="form-control"
              placeholder="real"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
      </div>
      <hr />
      <p class="h3">Finanças</p>
      <div class="row">
        <div class="col-md-3 p-2 rounded-1">
          <label for="inputCity" class="form-label p-1">Alvo das finanças</label>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Alvo</span>
            <input
              type="text"
              class="form-control"
              placeholder="0"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div class="col-md-3 p-2 rounded-1">
          <label for="inputCity" class="form-label p-1">Dízimos</label>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Alvo</span>
            <input
              type="text"
              class="form-control"
              placeholder="0"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text mr-1" id="basic-addon1">Real</span>
            <input
              type="text"
              class="form-control"
              placeholder="0"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div class="col-md-3 p-2 rounded-1">
          <label for="inputCity" class="form-label p-1">Ofertas</label>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Ofertas</span>
            <input
              type="text"
              class="form-control"
              placeholder="0"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div class="col-md-3 p-2 rounded-1">
          <label for="inputCity" class="form-label p-1">Total Real</label>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="0"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
      </div>
      <hr />

      <p class="h3 mb-4">Pregadores Assistente</p>
      <div class="row">
        <div class="input-group mb-3">
          <label class="input-group-text" for="inputGroupSelect01">Palavra de Amor</label>
          <select class="form-select" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <label class="input-group-text" for="inputGroupSelect01">Palavra de finanças</label>
          <select class="form-select" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <hr />

      <div class="input-group">
        <span class="input-group-text">Observação</span>
        <textarea class="form-control" aria-label="With textarea"></textarea>
      </div>

      <div class="col-12 mt-2 mb-2">
        <button type="submit" class="d-grid gap-2 col-6 mx-auto btn btn-primary">Salvar</button>
      </div>
      <div class="col-12">
        <button type="submit" class="d-grid gap-2 col-6 mx-auto btn btn-outline-danger">Cancelar</button>
      </div>
      </form>
    </div> 
    
  </div>
</template>
<script>
export default {}
</script>
<style lang=""></style>
