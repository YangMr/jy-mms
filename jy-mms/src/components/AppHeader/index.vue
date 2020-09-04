<template>
  <div class="header">
    <div class="logo">
      <router-link class="link" :to="{path : '/'}">
        <img src="http://mengxuegu.com:9999/img/logo.7156be27.png" alt />
        <span class="company">积云会员管理系统</span>
      </router-link>
    </div>
    <div class="info">
      <el-dropdown @command="handle">
        <span class="el-dropdown-link">
          张三
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-edit" command="changePass">修改密码</el-dropdown-item>
          <el-dropdown-item icon="el-icon-s-fold" command="chenckOut">退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  components: {},
  methods: {
      handle(command){
          console.log(command)
          switch(command){
            case "changePass" : 
                this.changePass();
                break;
            case "checkOut" : 
                this.chenckOut();
                break;    
          }
      },
      changePass(){
          console.log("修改密码")
      },
      chenckOut(){
          console.log("退出登录")
      }
  },
};
</script>


<style scoped>
.header .logo {
  padding-left: 40px;
  float: left;
}
.header .logo img {
  width: 25px;
  height: 25px;
  vertical-align: middle;
}
.header .logo .link {
  text-decoration: none;
  color: #fff;
}
.header .logo .company {
  margin-left: 10px;
}
.header .info{
    float: right;
    padding-right: 40px;
}
.header .el-dropdown-link {
    cursor: pointer;
    color: #fff;
  }
</style>