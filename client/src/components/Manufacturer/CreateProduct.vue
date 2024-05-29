<template>
  <div class="content-wrapper">
    <section class="content">
      <div class="content-header">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Create Product</h1>
          </div>
          <!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <router-link to="/">Dashboard</router-link>/
                <!-- <router-link to="/products">Products</router-link> -->
              </li>
            </ol>
          </div>
          <!-- /.col -->
        </div>
      </div>
      <!-- /content-header-->
      <div class="container-fluid">
        <div class="card card-info">
          <!-- from start -->
          <form class="form-horizontal">
            <!-- card start -->
            <div class="card-body">
              <div class="form-group row">
                <label for="productName" class="col-sm-2 col-form-label">Product Name</label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="productName"
                    placeholder="Product Name"
                    v-model="productName"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="productRegCode" class="col-sm-2 col-form-label"
                  >Product Registration Code</label
                >
                <div class="col-sm-10">
                  <input type="interger" class="form-control" id="productRegCode" v-model="productRegCode"/>
                </div>
              </div>
              <div class="form-group row">
                <label for="productInformation" class="col-sm-2 col-form-label"
                  >Product Information</label
                >
                <div class="col-sm-10">
                  <input
                    type="interger"
                    class="form-control"
                    id="productInformation"
                    placeholder="Product Information"
                    v-model="productInformation"
                  />
                </div>
              </div>
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
              <button type="button" class="btn btn-info" @click="createProduct">Save</button>
              <button type="button" class="btn btn-default float-right">Cancel</button>
            </div>
            <!-- /.card-footer -->
          </form>
          <!-- /.form-end -->
        </div>
      </div>
      <!-- /.container-fluid -->
    </section>
  </div>
</template>

<script>
import ManufacturerService from '../../services/ManufacturerService.js'
export default {
  data () {
    return {
      productName: '',
      productRegCode: '',
      productInformation: ''
    }
  },
  methods: {
    async createProduct () {
      try {
        await ManufacturerService.createProduct({
          productName: this.productName,
          productRegCode: this.productRegCode,
          productInformation: this.productInformation
        })
        this.$router.push({ name: 'products' })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>

</style>
