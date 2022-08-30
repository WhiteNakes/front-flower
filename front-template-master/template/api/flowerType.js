import request from '@/utils/request'

export default {
  getFlowerTypeList() {
    return request({
      url: `/flower/type/getNotEmptyType`,
      method: 'get',
    })
  },

}
