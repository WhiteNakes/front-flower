import request from '@/utils/requestPass'

export default {
  getNewFlowerInfo() {
    return request({
      url: `/flower/flowerInfo/getNewFlowerInfo`,
      method: 'get',
    })
  },
}
