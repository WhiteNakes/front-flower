import request from '@/utils/request'

export default {
  addAddress(address) {
    return request({
      url: `/flower/address/addAddress`,
      method: 'post',
      data: address
    })
  },

  getOneAddress(id) {
    return request({
      url: `/flower/address/getOneAddress/`+id,
      method: 'get',
    })
  },
  updateAddress(address) {
    return request({
      url: `/flower/address/updateAddress`,
      method: 'post',
      data: address
    })
  },
  updateDefault(id) {
    return request({
      url: `/flower/address/updateDefault/` + id,
      method: 'get',
    })
  },
  getAddress() {
    return request({
      url: `/flower/address/getAddress/`,
      method: 'get',
    })
  },
  delAddress(id) {
    return request({
      url: `/flower/address/delAddress/` + id,
      method: 'delete',
    })
  },
}
