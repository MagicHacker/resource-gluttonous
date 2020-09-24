<template>
  <a-layout class="layout-wrap">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <a-icon type="picture" />
          <span>图片</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="audio" />
          <span>音频</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="deployment-unit" />
          <span>动效</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="main-header">
        <a-icon
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="menuTrigger"
        ></a-icon>
      </a-layout-header>
      <a-layout-content>
        content
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  name: 'mainComponent',
  data() {
    return {
      collapsed: true
    }
  },
  methods: {
    menuTrigger() {
      this.collapsed = !this.collapsed
    }
  }
}
</script>
<style lang="less" scoped>
.layout-wrap {
  width: 100%;
  height: 100%;
  font-size: 16px;
  .main-header {
    background: #fff;
  }
}
</style>
