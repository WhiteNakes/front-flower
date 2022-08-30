<template>
<div>
  <div style="width: 500px;height: 100%;margin: 50px auto">

    <el-form label-width="80px">
      <el-form-item>
        <h2 style="font-size: 24px;font-weight: 400;color: #222222;font-family: 'Rubik'">更改密码</h2>
      </el-form-item>
      <el-form-item prop="buyerEmail" label="验证码">
        <el-input v-model="code"></el-input>
        <el-button size="small" @click="sendCode" :disabled="isSend" style="margin-top: 2px" type="warning" plain>获取验证码</el-button>
      </el-form-item>
      <el-form-item prop="buyerEmail" label="输入新密码">
        <el-input v-model="newPassWord"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="danger" style="width: 100%" @click="updatePassWord">更改密码</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>

<script>
import userPass from "@/api/userPass";
import userApi from "@/api/user";

export default {
  name: "updatePassWord",
  data() {
    return {
      code:'',
      isSend:false,
      newPassWord:''
    };
  },
  methods:{
    updatePassWord(){
      userApi.updatePassWord(this.newPassWord,this.code)
        .then(re=>{
          if(re.success){
            this.$message.success("成功修改")
            this.code=''
            this.newPassWord=''
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
