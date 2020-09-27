<template>
  <div class="pop-modal-wrapper">
    <a-modal
      v-model="showModal"
      title="title"
      :destroyOnClose="true"
      :footer="null"
      @cancel="handleCancel"
    ></a-modal>
  </div>
</template>
<script>
export default {
  name: 'popModal',
  data() {
    return {
      showModal: false
    }
  },
  props: {},
  methods: {
    showModalFunc() {
      this.showModal = true
    },
    handleCancel() {}
  }
}
</script>
<style lang="less" scoped>
.pop-modal-wrapper {
  width: 100%;
}
</style>
