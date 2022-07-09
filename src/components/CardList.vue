<template>
  <!-- <div class="display-row card background-white"  @click="select(dataInfo.id)"> -->
  <div
    v-bind:class="cravings"
    @click="select(dataInfo.id)"
  >
    <span class="circle"></span>
    <div class="display-column align-start py-6">
      <span class="text-simple">Beneficiario</span>
      <span v-if="dataInfo" class="text-bold">{{ dataInfo.name[0].toUpperCase() + dataInfo.name.substring(1) }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardList",
  props: {
    dataInfo: {
      type: Object,
      required: false,
    },
  },
  methods: {
    select(value) {
      this.$store.commit("SET_EDITING_OBJECT", {
        key: "itemSelect",
        value,
      });
    },
  },
  computed: {
    cravings: function() {
        return this.itemSelect == this.dataInfo.id ? 'display-row dont-select card-blue background-white' : 'display-row dont-select card background-white';
    },
    itemSelect: {
      get() {
        return this.$store.state.itemSelect || null;
      },
    },
  },
};
</script>

<style>
.card {
  border-radius: 5px;
  padding: 5px 10px 5px 0;
}

.card-empty {
  border-radius: 5px;
  padding: 10px 0;
  background:white;
  width: 100%; 
}

.card-empty > img{
    width: 40%;
}

.card-blue {
  border-radius: 5px;
  border:solid 1px #283897;
  padding: 5px 10px 5px 0;
}

.card-blue  > .circle {
  background-color: #283897;
}

.card-blue > div > .text-bold {
  color: #283897;
}

.card:hover {
  background-color: #283897;
}

.card:hover > div > .text-bold {
  color: white;
}

.card:hover > div > .text-simple {
  color: white;
}

@media only screen and (max-width: 830px) {
  .display-row > .circle {
    display: none;
  }
  .display-column {
    padding-left: 5px;
  }
  .display-column > span {
    line-height: 14px;
  }
  .full-width > .background-white {
    flex-wrap: wrap;
  }
  .primary {
    margin-left: 0 !important;
    margin-top: 5px;
  }
  .btn-error {
    margin-left: 0 !important;
    margin-top: 5px;
  }
}
</style>
