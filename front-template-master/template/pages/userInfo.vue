<template>
  <div class="container">
    <el-col :span="4">
      <el-menu
        :default-active="active"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <el-menu-item index="1">
          <span slot="title"><router-link to="/userInfo/userInfoManage">个人信息管理</router-link></span>
        </el-menu-item>
        <el-menu-item index="2">
          <span slot="title"><router-link to="/userInfo/userEmail1">更换邮箱</router-link></span>
        </el-menu-item>
        <el-menu-item index="3">
          <span slot="title"><router-link to="/userInfo/address">地址管理</router-link></span>
        </el-menu-item>
        <el-menu-item index="4">
          <span slot="title"><router-link to="/userInfo/updatePassWord">密码更改</router-link></span>
        </el-menu-item>
        <el-menu-item index="5">
          <span slot="title"><router-link to="/userInfo/addMoney">充值金额</router-link></span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="20">
      <nuxt-child/>
    </el-col>

  </div>
</template>
<script>
import userPass from "@/api/userPass";
export default {
  name: "userInfo",
  data(){
    return{
      active:'1'
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>

</style>
