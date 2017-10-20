<style scoped>

</style>

<template>
  <div class="user-news">
    <el-table :data="tableData" class='container'>
      <el-table-column prop="title" label="标题" width=""></el-table-column>
      <el-table-column  prop="lasttime" label="最后修改时间" width=""></el-table-column>
      <el-table-column prop="brief" label="简介" width=""></el-table-column>
      <el-table-column label="" width="150">
        <template slot-scope="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row.id)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'user-news',
    methods: {
      handleEdit () {

      },
      handleDelete () {

      }
    },
    data () {
      return {
        tableData: [{
          title: '标题1',
          lasttime: '2017-7-7 11:09:36',
          brief: '简介1',
          id: 23
        }, {
          title: '标题2',
          lasttime: '2017-7-7 11:09:36',
          brief: '简介2',
          id: 25
        }]
      }
    }
  }
</script>
