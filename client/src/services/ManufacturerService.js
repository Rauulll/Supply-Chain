import Api from './Api'

export default {
  createProduct (product) {
    return Api().post('manufacturer', product)
  }
}
