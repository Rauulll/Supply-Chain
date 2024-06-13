import Api from './Api'

export default {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  },
  createProduct (product) {
    return Api().post('manufacturer', product)
  },
  async getProduct () {
    return await Api().get('products')
      .then(response => {
        console.log(response)
        return response
      })
      .catch(error => {
        console.log(error)
      })
  }
}
