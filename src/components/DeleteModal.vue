<template>
  <div
    v-if="active"
    class="content-delete full-width d-flex justify-center dont-select"
  >
    <div class="modal-delete display-column">
      <img src="../assets/alert.png" height="60" alt="img delete" />
      <span class="p4 text-justify font-15"
        >Desea eliminar este beneficiario <b>{{ user.name }}</b> identificado
        con el documento <b>{{ user.document }}</b> ?</span
      >
      <div class="display-row">
        <button @click="removeItem()" class="btn primary">
          <span>Confirmar</span>
        </button>
        <button class="btn btn-gray" @click="close()">
          <span class="pl-5">Cancelar</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeleteModal",
  props: {
    user: Object,
    visible: Boolean,
  },
  data: () => ({
    active: false,
  }),
  watch: {
    visible() {
      if (this.visible) {
        this.active = this.visible;
      }
    },
  },
  methods: {
    removeItem() {
      // BUSCO EL INDICE PARA SABER QUE ELEMENTO ELIMINAR
      const indexOfObject = this.beneficiary.findIndex((object) => {
        return object.id === this.itemSelect;
      });
      // ELIMINO EL ELEMENTO DEL ARRAY DE OBJETOS
      this.beneficiary.splice(indexOfObject, 1);
      this.itemSelect = null;
      this.active = false;
    },
    close() {
      this.active = false;
    },
  },
  computed: {
    beneficiary: {
      get() {
        return this.$store.state.beneficiary || [];
      },
      set(value) {
        this.$store.commit("SET_EDITING_OBJECT", {
          key: "beneficiary",
          value,
        });
      },
    },
    itemSelect: {
      get() {
        return this.$store.state.itemSelect || null;
      },
      set(value) {
        this.$store.commit("SET_EDITING_OBJECT", {
          key: "itemSelect",
          value,
        });
      },
    },
  },
};
</script>
<style scoped>
.content-delete {
  position: absolute;
  top: 12%;
  height: 220px;
  background: rgba(255, 255, 255, 0.327);
  animation-name: down;
  animation-duration: 4s;
  animation-iteration-count: 1;
}

.modal-delete {
  position: relative;
  width: 80%;
  max-width: 400px;
  background: white;
  border-radius: 18px;
  color: black;
  padding: 5px 15px;
  min-height: 27px;
  justify-content: center;
  align-items: center;
  display: flex;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
</style>
