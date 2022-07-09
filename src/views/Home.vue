<template>
  <div class="home base">
    <navbar />
    <div class="content">
      <menuLeft />
      <div class="d-flex full-width">
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

.beneficiaries-width {
  width: 30%;
  max-width: 300px;
}

.detail-width {
  min-width: 70%;
  width:inherit;
  position: relative;
}

/* .name-enterprise {
  padding: 0 15px
} */
@media only screen and (max-width: 630px) {
  .search {
    display: none;
  }
  .grid-gray {
    display: none !important;
  }
  .content-btn {
    flex-wrap: wrap;
    justify-content: flex-end;
  }
  .box-padding {
    padding-bottom: 27px;
  }
  .content-img {
    width: 30%;
  }
  .content {
    height: 95%;
  }
  .btn-icon-end {
    display: none;
  }
}

@media only screen and (max-width: 430px) {
  .align-start {
    text-align: start;
  }
  .text-bold {
    font-size: 12px;
    line-height: 13px;
  }
  .btn-icon {
    display: none !important;
  }

  .primary {
    min-width: 80px !important;
  }
  .content-img {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .content-forms {
    width: 90%;
  }

  .container-detail {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}

.navbar {
  justify-content: space-between;
  align-items: center;
  display: flex;
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
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
