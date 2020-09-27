<template>
  <div class="pop-modal-wrapper">
    <a-modal
      v-model="showModal"
      title="资源清单"
      width="600px"
      :destroyOnClose="true"
      :footer="null"
      @cancel="handleCancel"
    >
      <a-form-model layout="vertical">
        <a-form-model-item label="项目">
          <a-input placeholder="项目名称"></a-input>
        </a-form-model-item>
        <a-form-model-item label="资源名">
          <a-input placeholder="资源名"></a-input>
        </a-form-model-item>
        <a-form-model-item label="路径">
          <a-input placeholder="路径"></a-input>
        </a-form-model-item>
      </a-form-model>
    </a-modal>
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
