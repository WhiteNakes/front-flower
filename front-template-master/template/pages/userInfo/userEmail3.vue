<template>
<div>
  <el-steps active="2" finish-status="success" align-center>
    <el-step title="已完成"></el-step>
    <el-step title="已完成"></el-step>
  </el-steps>
  <el-result icon="success" title="邮箱更换成功！" subTitle="您已经更换邮箱，点击按钮返回首页">
    <template slot="extra">
      <el-button type="primary" size="medium" @click="next">返回</el-button>
    </template>
  </el-result>
</div>
</template>

<script>
export default {
  name: "userEmail",
  data() {
    return {
      active: 0
    };
  },

  methods: {
    next() {
      this.$router.push({path:"/"})
    }
  }
}
</script>

<style scoped>

</style>
