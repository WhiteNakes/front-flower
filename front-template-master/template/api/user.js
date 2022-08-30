import request from '@/utils/request'

export default {
  addMoney(money){
    return request({
      url: `/flower/user/addMoney/`+money,
      method: 'get',
    })
  },
  getUserInfo(){
    return request({
      url: `/flower/user/getUserInfo`,
      method: 'get',
    })
  },
  updatePassWord(newPassWord,code){
    return request({
      url: `/flower/user/updatePassWord/${newPassWord}/${code}`,
      method: 'get',
    })
  },
  updateUser(userInfo){
    return request({
      url: `/flower/user/updateUser`,
      method: 'post',
      data:userInfo
    })
  },
  addNewEmail(email,code) {
    return request({
      url: `/flower/user/addNewEmail/${email}/${code}`,
      method: 'get',
    })
  },
  checkOldEmail(code) {
    return request({
      url: `/flower/user/checkOldEmail/${code}`,
      method: 'get',
    })
  },
  sendCode(email) {
    return request({
      url: `/flower/user/sendCode/` + email,
      method: 'get',
    })
  }
}
