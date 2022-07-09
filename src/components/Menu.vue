<template>
  <div class="grid-gray">
    <div>
      <span class="circle color-left"></span>
      <span class="circle color-left"></span>
      <span class="circle color-left"></span>
    </div>
    <div class="end-box">
      <span class="circle color-left-bottom"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style>
.grid-gray {
  width: 70px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)),
linear-gradient(0deg, #363A3E, #363A3E);
  /* background: #363a3e; */
  height: 91vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
}
.end-box {
  background:  #00000033;
  width: 100%;
  position: absolute;
  bottom: 0;
}
</style>
