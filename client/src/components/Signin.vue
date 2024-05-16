<template>
  <body class="hold-transition login-page">
    <div class="login-box">
      <div class="login-logo">
        <p>Sign In</p>
      </div>
      <!-- /.login-logo -->
      <div class="card">
        <div class="card-body login-card-body">
          <p class="login-box-msg">Sign in to start your session</p>
          <form action="#" method="post">
            <div class="input-group mb-3">
              <input type="email" class="form-control" v-model="email" placeholder="Email">
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input type="password" class="form-control" v-model="password" placeholder="Password">
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-8">
                <div class="icheck-primary">
                  <input type="checkbox" id="remember">
                  <label for="remember">
                    Remember Me
                  </label>
                </div>
              </div>
              <!-- /.col -->
              <div class="col-4">
                <button type="button" class="btn btn-primary btn-block" @click="signIn">Sign In</button>
              </div>
              <!-- /.col -->
            </div>
          </form>
          <!-- <div class="social-auth-links text-center mb-3">
            <p>- OR -</p>
            <a href="#" class="btn btn-block btn-primary">
              <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
            </a>
            <a href="#" class="btn btn-block btn-danger">
              <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
            </a>
          </div> -->
          <!-- /.social-auth-links -->
          <!-- <p class="mb-1">
            <a href="#">I forgot my password</a>
          </p> -->
          <p class="mb-0">
            <router-link to="/signup" class="text-center">Register for an Account</router-link>
          </p>
        </div>
        <!-- /.login-card-body -->
      </div>
    </div>
  </body>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      errorMessage: null
    }
  },
  methods: {
    async signIn () {
      await AuthenticationService.signIn({
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
