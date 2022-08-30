<template>
  <div>
    <!--Login Start-->
    <div style="width: 500px;height: 100%;margin: 50px auto">

      <el-form :ref="user" :model="user" label-width="80px">
        <el-form-item>
          <h2 style="font-size: 24px;font-weight: 400;color: #222222;font-family: 'Rubik'">更改您的信息</h2>
        </el-form-item>
        <el-form-item prop="buyerEmail" label="邮箱">
          <p>{{ user.email }}</p>
          <router-link style="color: red" to="/userInfo/userEmail1">点击前往更换邮箱</router-link>
        </el-form-item>
        <el-form-item type="password" prop="checkPassword" label="密码">
            <router-link style="color: red" to="/userInfo/updatePassWord">点击前往更改密码</router-link>

        </el-form-item>
        <el-form-item label="名称">
          <el-input v-model="user.name"></el-input>
        </el-form-item>
        <!-- 用户头像 -->
        <el-form-item label="头像">
          <el-upload
            class="avatar-uploader"
            :action="url"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="user.avatar" :src="user.avatar" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" style="width: 100%" @click="updateUser">修改</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--Login End-->
  </div>
</template>

<script>
import userPass from "@/api/userPass";
import userApi from "@/api/user";
import cookie from "js-cookie";
import "assets/gyflower/style.css"
import base from "@/api/base";

export default {
  name: "userInfoManage",
  data() {
    return {
      user: {},
      url: base.base_api+"/flower/fileoss",
    }
  },
  created() {
    this.getUserInfo()
  },
  methods: {
    goEmail() {
      this.$router.push({path: "/userInfo/userEmail1"})
    },
    updateUser() {
      userApi.updateUser(this.user)
        .then(re => {
          if (re.success) {
            this.$message({
              showClose:true,
              message:"成功修改",
              type:"success",
              duration:1000
            })
            cookie.set('user_ucenter', JSON.stringify(this.user), {domain: 'localhost'})
            location.reload()
          }
        })
    },
    getUserInfo() {
      userApi.getUserInfo()
        .then(re => {
          this.user = re.data.userInfo
        })
    },
    handleAvatarSuccess(res, file) {
      this.user.avatar = res.data.url
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }
  }
}
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
  border-radius: 50%;
}
</style>
