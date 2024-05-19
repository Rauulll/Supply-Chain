import Api from './Api'

export default {
  register (credentials) {
    return Api().post('signup', credentials)
  },
  signIn (credentials) {
    return Api().post('signin', credentials)
  }
}
