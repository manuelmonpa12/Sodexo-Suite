<template>
  <div class="navbar">
    <div class="sub-navbar">
      <div class="content-logo">
        <img alt="logo" class="logo" src="../assets/logo.png" />
      </div>
      <span class="circle"></span>
      <div class="display-column align-start">
        <span class="text-simple">Sodexo Suite </span>
        <span class="text-bold"> Administración de Beneficiario </span>
      </div>
    </div>
    <div class="search">
      <span class="circle"></span>
      <span class="round"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String,
  },
};
</script>

<style>
.navbar {
  justify-content: space-between;
  align-items: center;
  display: flex;
  border-bottom: 1px solid #e5e5e5;
  height: 9vh;
}

.sub-navbar {
  justify-content: start;
  align-items: center;
  display: flex;
  height: 100%;
}
</style>
