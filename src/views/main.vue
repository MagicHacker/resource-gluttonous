<template>
  <a-layout class="layout-wrap">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <router-link to="/main/images">
            <a-icon type="picture" />
            <span>图片</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/main/audios">
            <a-icon type="audio" />
            <span>音频</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to="/main/lotties">
            <a-icon type="deployment-unit" />
            <span>动效</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="4">
          <router-link to="/main/cdns">
            <a-icon type="funnel-plot" />
            <span>CDN</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="main-header">
        <a-icon
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="menuTrigger"
        ></a-icon>
        <div class="main-header-title">{{ headerTitle }}</div>
      </a-layout-header>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  name: 'mainComponent',
  data() {
    return {
      collapsed: false,
      titleHash: {
        images: '图片',
        audios: '音频',
        lotties: '动效',
        cdns: 'CDN'
      }
    }
  },
  computed: {
    headerTitle() {
      const key = this.$route.path.match(/^\/.*\/(.*)/)
      return this.titleHash[key[1]]
    }
  },
  mounted() {},
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
    padding: 0px 30px;
    .main-header-title {
      display: inline-block;
      margin-left: 20px;
      font-weight: bold;
    }
  }
  li {
    margin-top: 0px;
  }
}
</style>
