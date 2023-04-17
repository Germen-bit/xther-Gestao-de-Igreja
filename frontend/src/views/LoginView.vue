<template lang="">
  <div class="main-content" style="overflow-y: hidden;">
    <main class="form-signin w-100 m-auto">
      <form>
        <!-- <img
          class="mb-4"
          src=""
          alt=""
          width="72"
          height="57"
        /> -->
        <h1 class="h3 mb-3 fw-normal">Entrar na sua conta</h1>
  
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Palavra-Passe" />
          <label for="floatingPassword">Palavra-Passe</label>
        </div>
  
        <button class="w-100 mt-3 btn btn-lg btn-primary" type="submit">Entrar</button>
        <p class="mt-5 text-center mb-3 text-body-secondary">&copy; 2023</p>
      </form>
    </main>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.main-content {
  width: 350px;
  margin: 150px;
}
</style>
