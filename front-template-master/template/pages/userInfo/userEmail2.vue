<template>
  <div>
    <el-steps :active="1" finish-status="success" align-center>
      <el-step title="已完成"></el-step>
      <el-step title="进行中"></el-step>
    </el-steps>
    <div style="width: 500px;height: 100%;margin: 50px auto">

      <el-form :model="user" label-width="80px">
        <el-form-item>
          <h2 style="font-size: 24px;font-weight: 400;color: #222222;font-family: 'Rubik'">验证新邮箱</h2>
        </el-form-item>
        <el-form-item prop="buyerEmail" label="邮箱">
          <el-input v-model="user.email"></el-input>
          <el-button size="small" @click="sendCode" :disabled="isSend" style="margin-top: 2px" type="warning" plain>
            获取验证码
          </el-button>
        </el-form-item>
        <el-form-item label="验证码">
          <el-input v-model="user.code"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="danger" style="width: 100%" @click="next">下一步</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
  </div>
</template>

<script>
import userApi from "@/api/user";

export default {
  name: "userEmail",
  data() {
    return {
      user: {
        email: '',
        code: ''
      },
      isSend: false
    };
  },
  methods: {
    next() {
      userApi.addNewEmail(this.user.email, this.user.code)
        .then(re => {
          if (re.success) {
            this.$router.push({path: "/userInfo/userInfoManage"})
          }
        })
    },
    sendCode() {
      this.isSend = true
      userApi.sendCode(this.user.email)
        .then(re => {
          this.$message.success("成功发送验证码")
        })
    }
  }
}
</script>

<style scoped>

</style>
