<template>
  <div class="member">
    <el-table :data="list" height="380" border style="width: 100%">
      <el-table-column type="index" label="序号" width="60"></el-table-column>
      <el-table-column prop="cardNum" label="会员卡号"></el-table-column>
      <el-table-column prop="name" label="会员姓名" ></el-table-column>
      <el-table-column prop="birthday" label="会员生日" ></el-table-column>
      <el-table-column prop="phone" label="手机号码" width="110"></el-table-column>
      <el-table-column prop="integral" label="可用积分"></el-table-column>
      <el-table-column prop="money" label="开卡金额" ></el-table-column>
      <el-table-column prop="payType" label="支付类型" >
        <template slot-scope="scope">
            <span>{{scope.row.payType | pay}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="会员地址" width="180"></el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import MemberApi from "../../api/member";
const payType = [
  {
    type : 1,
    name : "现金"
  },
  {
    type : 2,
    name : "微信"
  },
  {
    type : 3,
    name : "支付宝"
  },
  {
    type : 4,
    name : "银行卡"
  }
]
export default {
  name: "",
  data() {
    return {
      list: []
    };
  },
  components: {},
  filters : {
    pay(data){
     const payValue = payType.find((item,index)=>{
       return item.type == data
     });
     return payValue.name;
    }
  },
  methods: {
     //编辑
     handleEdit(){

     },
     //删除
     handleDelete(){

     },

    //初始化数据
    fetchData() {
      //请求会员列表的数据
      MemberApi.getMemberList()
        .then(res => {
          //   console.log(res);
          this.list = res.data.data.data;
          console.log(this.list);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    this.fetchData();
  }
};
</script>


<style scoped>
.member{
    margin-top: 20px;
}
</style>