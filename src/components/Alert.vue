<template>
  <div v-if="active" class="full-width d-flex justify-center dont-select mobile">
    <div class="alert-primary">
      <span>{{ message }}</span>
      <div class="btn-icon-end">
        <span class="text-bold">{{ timerCount }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: {
    message: String,
    visible: Boolean,
  },
  data: () => ({
    active: false,
    timerCount: null,
  }),
  watch: {
    visible() {
      if (this.visible) {
        this.active = this.visible;
        this.timerCount = 90;
      }
    },
    timerCount: {
      handler(value) {
        if (this.timerCount) {
          if (value > 0) {
            setTimeout(() => {
              this.timerCount--;
            }, 1000);
          } else {
            this.active = false;
          }
        }else {
            this.active = false;
          }
      },
      immediate: true, // This ensures the watcher is triggered upon creation
    },
  },
};
</script>
<style scoped>
.alert-primary {
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  position: relative;
  width: 80%;
  background: #273897;
  border-radius: 18px;
  color: white;
  padding: 5px 15px;
  min-height: 27px;
  justify-content: center;
  align-items: center;
  display: flex;
  animation-name: opacity;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}

</style>
