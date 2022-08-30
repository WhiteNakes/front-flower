import request from '@/utils/request'

export default {
  addOrder(addressId) {
    return request({
      url: `/flower/order/addOrder/` + addressId,
      method: 'get',
    })
  },
  addOneOrder(flowerId,addressId,num){
    return request({
      url: `/flower/order/addOneOrder/${flowerId}/${addressId}/${num}`,
      method: 'get',
    })
  },
  getOrderPageAll(orderPage,curr,pageSize){
    return request({
      url: `/flower/order/getOrderPageAllByUser/${curr}/${pageSize}`,
      method: 'post',
      data:orderPage
    })
  },
}
