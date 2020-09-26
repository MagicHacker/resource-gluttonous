<template>
  <div class="lotties-wrapper">
    <div class="lotties-search">
      <a-form-model layout="inline">
        <a-form-model-item label="项目">
          <a-input placeholder="项目名称"></a-input>
        </a-form-model-item>
        <a-form-model-item label="资源名">
          <a-input placeholder="资源名"></a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-button type="primary">搜索</a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
    <div class="lotties-add">
      <a-button type="success">添加</a-button>
    </div>
    <div class="lotties-table">
      <a-table bordered :data-source="tableData" :columns="columns">
        <template v-slot:action>
          <div class="lotties-table-action">
            <a-button type="primary">详情</a-button>
            <a-button type="danger">删除</a-button>
          </div>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'lottiesComponent',
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
          title: '路径',
          dataIndex: 'path'
        },
        {
          title: '操作',
          dataIndex: 'action',
          scopedSlots: { customRender: 'action' }
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.lotties-wrapper {
  width: 100%;
  height: 100%;
  padding: 20px 0px 0px 30px;
  .lotties-search {
    width: 100%;
    height: 60px;
  }
  .lotties-add {
    width: 100%;
    height: 50px;
  }
  .lotties-table-action {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}
</style>
