import request from '@/utils/request'

export default {
  getShopCartAll() {
    return request({
      url: `/flower/cart/getShopCartAll`,
      method: 'get',
    })
  },
  addShopCart(shopCart){
    return request({
      url: `/flower/cart/addShopCart`,
      method: 'post',
      data:shopCart
    })
  },
  updateNum(shopCartId,num) {
    return request({
      url: `/flower/cart/updateNum/${shopCartId}/${num}`,
      method: 'get',
    })
  },
  delShopCart(id) {
    return request({
      url: `/flower/cart/${id}`,
      method: 'delete',
    })
  },
}
