<template>
  <div class="user">
    <el-table :data="list" style="width: 100%;height:380px;">
      <el-table-column type="index" label="编号" width="180"></el-table-column>
      <el-table-column prop="registe_time" label="注册日期" width="180"></el-table-column>
      <el-table-column prop="username" label="用户姓名" width="180"></el-table-column>
      <el-table-column prop="city" label="注册地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import UserApi from "../../api/user"
export default {
  name: "",
  data() {
    return {
        list : []
    };
  },
  components: {},
  methods : {
      fetchData(){
          UserApi.getUserList().then(res=>{
              this.list = res.data;
              console.log(this.list)
          }).catch(error=>{
              console.log(error)
          })
      }
  },
  created() {
      this.fetchData();
  },
};
</script>


<style scoped>
.user{
    margin-top: 20px;
}
</style>