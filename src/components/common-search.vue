<template>
  <div class="common-search-wrapper">
    <a-form-model layout="inline">
      <slot name="searchOptions">
        <a-form-model-item label="项目">
          <a-input placeholder="项目名称"></a-input>
        </a-form-model-item>
        <a-form-model-item label="资源名">
          <a-input placeholder="资源名"></a-input>
        </a-form-model-item>
      </slot>
      <a-form-model-item>
        <a-button type="primary" @click="search">搜索</a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
export default {
  name: 'commonSearch',
  data() {
    return {}
  },
  methods: {
    search() {}
  }
}
</script>
<style lang="less" scoped>
.common-search-wrapper {
  width: 100%;
  height: 60px;
}
</style>
