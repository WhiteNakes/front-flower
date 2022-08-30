<template>
  <div style="background-color: white;padding-top: 20px;padding-bottom: 200px">
    <ol class="am-breadcrumb am-breadcrumb-slash">
      <li><a href="/">首页</a></li>
      <li>个人信息管理</li>
      <li class="am-active">地址管理</li>
    </ol>
    <el-table
      :data="addressList"
      style="width: 100%">
      <el-table-column
        prop="consignee"
        label="收件人"
        width="180">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="号码"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        label="是否默认">
        <template slot-scope="scope">
          <el-switch
            @change="updateDefault(scope.row.id)"
            :value="scope.row.isDefault==1?true:false"
            active-color="#13ce66"
            inactive-color="#909399">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" size="mini" @click="getOneAddress(scope.row.id)"></el-button>
          <el-button type="primary" icon="el-icon-delete" size="mini" @click="delAddress(scope.row.id)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button style="float: right" type="primary" @click="dialogVisible = true">添加地址</el-button>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
      width="30%">
      <span>地址信息</span>
      <!--    输入地址表单开始-->
      <el-form :rules="rules" ref="address" :model="address" label-width="80px">
        <el-form-item prop="address">
          <label>请输入地址</label>
          <el-input v-model="address.address"></el-input>
        </el-form-item>
        <el-form-item prop="consignee">
          <label>请输入收件人姓名</label>
          <el-input v-model="address.consignee"></el-input>
        </el-form-item>
        <el-form-item prop="phone">
          <label>请输入联系电话</label>
          <el-input v-model="address.phone"></el-input>
        </el-form-item>
      </el-form>
      <!--    输入地址表单结束-->
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import "~/assets/tb/AmazeUI-2.4.2/assets/css/amazeui.css"
import userAddress from "@/api/userAddress";
import shopCart from "@/api/shopCart";

export default {
  name: "address",
  data() {
    return {
      dialogVisible: false,
      address: {
        address: null,
        consignee: null,
        phone: null
      },
      addressList: [],
      rules: {
        address: [{required: true, message: '地址不能为空'}],
        consignee: [{required: true, message: '联系人不能为空'}],
        phone: [{required: true, message: '手机号不能为空'}],
      }
    }
  },
  created() {
    this.getAddress()
  },
  methods: {
    getOneAddress(id) {
      userAddress.getOneAddress(id)
        .then(re => {
          this.address = re.data.userAddress
          this.dialogVisible = true
        })
    },
    // 关闭后清空里面的表单
    handleClose() {
      this.address = {}
      this.dialogVisible = false
    },
    //删除地址
    delAddress(id) {
      this.$confirm('此操作将删除该地址, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        userAddress.delAddress(id)
          .then(re => {
            this.$message.success("删除成功")
            this.getAddress()
          })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    //改变默认地址
    updateDefault(id) {
      userAddress.updateDefault(id)
        .then(re => {
          this.getAddress()
        })
    },
    //获取该用户的全部地址
    getAddress() {
      userAddress.getAddress()
        .then(re => {
          this.addressList = re.data.addressList
        })
    },
    onSubmit() {
      if (this.address.id) {
        userAddress.updateAddress(this.address)
          .then(re => {
            if (re.success) {
              this.$message.success("修改成功")
              this.handleClose() //清空菜单并关闭弹窗
              this.getAddress()
            }
          })
      } else {
        userAddress.addAddress(this.address)
          .then(re => {
            if(re.success){
              this.$message.success("添加成功")
            }
            this.handleClose() //清空菜单并关闭弹窗
            this.getAddress()
          })
      }
    }
  }
}
</script>

<style scoped>

</style>
