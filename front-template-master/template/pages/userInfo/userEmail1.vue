<template>
<div>
  <el-steps :active="0" finish-status="success" align-center>
    <el-step title="进行中"></el-step>
    <el-step title="步骤 2"></el-step>
  </el-steps>
  <div style="width: 500px;height: 100%;margin: 50px auto">

    <el-form label-width="80px">
      <el-form-item>
        <h2 style="font-size: 24px;font-weight: 400;color: #222222;font-family: 'Rubik'">验证旧邮箱</h2>
      </el-form-item>
      <el-form-item prop="buyerEmail" label="验证码">
        <el-input v-model="code"></el-input>
        <el-button size="small" @click="sendCode" :disabled="isSend" style="margin-top: 2px" type="warning" plain>获取验证码</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="danger" style="width: 100%" @click="next">下一步</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>

<script>
import userApi from "@/api/user";
import cookie from "js-cookie";
import userPass from "@/api/userPass";
export default {
  name: "userEmail",
  data() {
    return {
      code:'',
      isSend:false
    };
  },
  methods: {
    next() {
      userApi.checkOldEmail(this.code)
        .then(re=>{
          if(re.success){
            this.$router.push({path:"/userInfo/userEmail2"})
          }
        })
    },
    sendCode(){
      this.isSend = true
      userPass.getUserInfo()
        .then(re=>{
          let userInfo = re.data.userInfo
          userApi.sendCode(userInfo.email)
            .then(re=>{
              this.$message.success("成功发送验证码")
            })
        })
    }
  }
}
</script>

<style scoped>

</style>
