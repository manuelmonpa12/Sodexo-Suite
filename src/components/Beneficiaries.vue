<template>
  <div class="content background-gray border" >
      <div class="full-width">
        <div
          class="d-flex p4 background-white box-padding justify-space-between"
        >
          <div class="display-column align-start">
            <span class="text-simple">Todos los</span>
            <span class="text-bold">Beneficiarios</span>
          </div>
          <button class="btn primary" @click="select(null)">
            <div class="btn-icon">
              <img
                src="../assets/plus.svg"
                height="15"
                alt="img delete"
                class="filter-white"
              />
            </div>
            <span>Nuevo</span>
          </button>
        </div>
        <div class="p4 input-search">
          <img
            v-show="!search"
            src="../assets/search.svg"
            height="60"
            alt="img delete"
          />
          <input
            class="input-primary text-center"
            placeholder="Buscar"
            v-model="search"
          />
        </div>
        <div
          class="p4 pt-0"
          v-for="person in search ? filteredList : beneficiary"
          :key="person.id"
        >
          <cardList :dataInfo="person" />
        </div>
        <div v-if="search && !filteredList.length" class="p4">
          <div class="card-empty display-column justify-center align-center">
            <img src="../assets/nofound.gif" alt="img delete" />
            <span class="text-simple text-center"
              >No se encontraron resultados</span
            >
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import cardList from "@/components/CardList.vue";

export default {
  name: "Beneficiaries",
  components: {
    cardList,
  },
  data: () => ({
    search: null,
    user: [],
  }),
  methods: {
    select(value) {
      this.$store.commit("SET_EDITING_OBJECT", {
        key: "itemSelect",
        value,
      });
    },
  },
  computed: {
    beneficiary: {
      get() {
        return this.$store.state.beneficiary || [];
      },
    },
    itemSelect: {
      get() {
        return this.$store.state.itemSelect || null;
      },
    },
    filteredList: function () {
      const temp = this.user.filter((fruit) =>
        fruit.name.toLowerCase().includes(this.search.toLowerCase())
      );
      return temp;
    },
  },
  mounted() {
    this.user = this.beneficiary;
  },
};
</script>
<style>
.beneficiaries-width {
  width: 30%;
  max-width: 430px;
  position: relative;
}
</style>
