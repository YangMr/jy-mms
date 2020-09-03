<template>
  <div class="hello">
      <ul>
         <li v-for="(item,index) in list" :key="index">{{item.name}}</li>
      </ul>
      <el-button type="success" icon="el-icon-check" circle></el-button>
  </div>
</template>

<script>
import testApi from "@/api/test"
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data : function(){
    return {
      list : []
    }
  },
  created() {
    // testApi.getBanner().then(res=>{
    //   this.list = res.data;
    //   console.log(res)
    // });
    // testApi.login().then(res=>{
    //   console.log(res)
    // })
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
