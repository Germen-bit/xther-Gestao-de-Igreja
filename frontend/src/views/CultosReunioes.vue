<template lang="">
  <div>
    <div>
      <form class="row g-3 mt-4">
        <div class="col-md-4">
          <p class="h3">Novo Culto & Reunião</p>
        </div>

        <div class="col-md-8">
          <p class="h3">Liderança</p>
          <div class="col-md-8">
            <label for="inputAddress" class="form-label">Lider da reunião</label>
            <input type="text" class="form-control" id="nome-lider" />
          </div>
          <div class="col-md-4">
            <label for="inputAddress" class="form-label">Data</label>
            <input type="date" class="form-control" id="data" />
          </div>
          <div class="col-md-6">
            <label for="telefone" class="form-label">Co-Lider 1</label>
            <input type="text" class="form-control" id="co-lider1" />
          </div>
          <div class="col-md-6">
            <label for="telefone" class="form-label">Co-Lider 2</label>
            <input type="text" class="form-control" id="co-lider2" />
          </div>
          <div class="col-md-12">
            <label for="inputEmail4" class="form-label">Nome do culto ou reunião</label>
            <input
              type="text"
              class="form-control"
              id="nome-reuniao"
              placeholder="Reunião das senhoras"
            />
          </div>
          <hr />

          <p class="h3">Alvos do culto ou reunião</p>
          <div class="col-md-6">
            <label for="inputAddress" class="form-label">Presenças</label>
            <input type="number" min="1" class="form-control" id="presencas" placeholder="1" />
          </div>
          <div class="col-md-6">
            <label for="provincia" class="form-label">Convertidos</label>
            <input type="number" min="1" class="form-control" id="convertidos" placeholder="1" />
          </div>
          <div class="col-md-6">
            <label for="inputAddress" class="form-label">Crianças</label>
            <input type="number" min="1" class="form-control" id="criancas" placeholder="1" />
          </div>
          <div class="col-md-6">
            <label for="provincia" class="form-label">Finanças (Akz)</label>
            <input type="number" min="1" class="form-control" id="financas" placeholder="1000" />
          </div>
        
        <hr />
        <!-- <p class="h3">Visitantes</p>


      <table class="table table-striped">
        <thead>
            <tr>
            <th scope="col">Nome</th>
            <th scope="col">Contacto</th>
            <th scope="col">Igreja Proveniente</th>
            </tr>
        </thead>
        <tbody class="guest-table">
            <tr>
            <th scope="row"><input type="text" class="form-control"></th>
            <td ><input type="number" class="form-control"></td>
            <td><input type="text" class="form-control"></td>
            <td><button @click="removeGuest($event)" type="button" class="d-grid gap-2 col-xs-1 mx-auto btn btn-outline-danger">X</button></td>
            </tr>
        </tbody>
    </table>
    <div class="col-12">
        <button type="button" id="guest-table" @click="moreGuests" class="d-grid gap-2 col-2 mx-auto btn btn-outline-primary">Mais</button>
    </div> -->

        <div class="col-12">
          <button type="submit" class="d-grid gap-2 col-6 mx-auto btn btn-primary mb-2">Salvar</button>
        </div>
        <div class="col-12">
          <button type="submit" class="d-grid gap-2 col-6 mx-auto btn btn-outline-danger">
            Cancelar
          </button>
        </div>
      </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    moreGuests() {
      const table = `<tr>
            <th scope="row"><input type="text" class="form-control"></th>
            <td ><input type="number" class="form-control"></td>
            <td><input type="text" class="form-control"></td>
            <td><button type="button" class="d-grid gap-2 col-xs-1 mx-auto btn btn-outline-danger">X</button></td>
            </tr>`

      const guestTable = document.querySelector('.guest-table')
      guestTable.insertAdjacentHTML('beforeend', table)
    },
    removeGuest(e) {
      console.log(e)
    }
  }
}
</script>
<style lang=""></style>
