<template>
  <div class="images-wrapper">
    <common-search>
      <template v-slot:searchOptions>
        <a-form-model-item label="项目名">
          <a-input placeholder="项目名称"></a-input>
        </a-form-model-item>
        <a-form-model-item label="资源名">
          <a-input placeholder="资源名"></a-input>
        </a-form-model-item>
      </template>
    </common-search>
    <div class="images-add">
      <a-button type="success" @click="addItem">添加</a-button>
    </div>
    <div class="images-table">
      <a-table bordered :data-source="tableData" :columns="columns">
        <template #action="text, record">
          <div class="images-table-action">
            <a-button type="primary" @click="obtainDetail(record)"
              >详情</a-button
            >
            <a-button type="danger" @click="deleteItem">删除</a-button>
          </div>
        </template>
      </a-table>
    </div>
    <pop-modal ref="imagesModal"></pop-modal>
  </div>
</template>
<script>
import popModal from '../components/pop-modal'
import commonSearch from '../components/common-search'
export default {
  name: 'imagesComponent',
  data() {
    return {
      tableData: [
        {
          key: '0',
          project: 'Edward King 0',
          sourceName: '32',
          path: 'London, Park Lane no. 0'
        },
        {
          key: '1',
          project: 'Edward King 1',
          sourceName: '32',
          path: 'London, Park Lane no. 1'
        }
      ],
      columns: [
        {
          title: '项目',
          align: 'center',
          dataIndex: 'project'
        },
        {
          title: '资源名',
          dataIndex: 'sourceName'
        },
        {
          title: 'CDN路径',
          dataIndex: 'path'
        },
        {
          title: '操作',
          dataIndex: 'action',
          scopedSlots: { customRender: 'action' }
        }
      ]
    }
  },
  components: {
    popModal,
    commonSearch
  },
  methods: {
    addItem() {
      this.$refs.imagesModal.showModalFunc()
    },
    obtainDetail(record) {
      this.$refs.imagesModal.showModalFunc()
      console.warn('宁德时代', record)
    },
    deleteItem() {}
  }
}
</script>
<style lang="less" scoped>
.images-wrapper {
  width: 100%;
  height: 100%;
  padding: 20px 0px 0px 30px;
  .images-add {
    width: 100%;
    height: 50px;
  }
  .images-table-action {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}
</style>
