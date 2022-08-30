<template>
<div>
  <div style="width: 500px;height: 100%;margin: 50px auto">

    <el-form :rules="rules" label-width="80px">
      <el-form-item>
        <h2 style="font-size: 24px;font-weight: 400;color: #222222;font-family: 'Rubik'">
          当前余额:<span style="color: red;font-size: 30px;font-weight: 500">￥{{nowMoney}}</span>
        </h2>
      </el-form-item>
      <el-form-item required>
        <label>输入充值金额<span style="color: red">(最少冲1元)</span></label>
        <el-input v-model.number="money"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="danger" style="width: 100%" @click="addMoney">充值</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>

<script>
import userApi from "@/api/user";
import cookie from "js-cookie";
export default {
  name: "addMoney",
  data(){
    return{
      money:1,
      nowMoney:'',
      rules:{
        money: [
          { required: true, message: '输入金额不能为空', trigger: 'blur' },
          { type: 'number',min:1, message: '金额必须为数字值'}
        ],
      }
    }
  },
  created() {
    this.getMoney()
  },
  methods:{
    getMoney(){
      userApi.getUserInfo()
        .then(re=>{
          this.nowMoney=re.data.userInfo.money
          this.money=1
        })
    },
    addMoney(){
      userApi.addMoney(this.money)
        .then(re=>{
          this.nowMoney=re.data.money
        })
    }
  }
}
</script>

<style scoped>

</style>
