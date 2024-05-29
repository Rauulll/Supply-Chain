import Api from './Api'

export default {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  },
  createProduct (product) {
    return Api().post('manufacturer', product)
  }
}
