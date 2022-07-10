<template>
  <div class="home base">
    <navbar />
    <div class="content">
      <menuLeft />
      <div class="d-flex full-width content-page">
        <beneficiaries class="beneficiaries-width" />
        <detail />
      </div>
    </div>
  </div>
</template>
<script>
import navbar from "@/components/Navbar.vue";
import menuLeft from "@/components/Menu.vue";
import beneficiaries from "@/components/Beneficiaries.vue";
import detail from "@/components/Detail.vue";

export default {
  name: "Home",
  components: {
    navbar,
    menuLeft,
    beneficiaries,
    detail,
  },
};
</script>

<style>
@import "./../styles/base.css";
@import "./../styles/figures.css";
@import "./../styles/fonts.css";
@import "./../styles/buttom.css";
@import "./../styles/inputs.css";
@import "./../styles/padding.css";
@import "./../styles/animation.css";
@import "./../styles/responsive.css";
</style>
