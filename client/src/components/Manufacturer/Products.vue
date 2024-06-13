<template>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Products</h1>
          </div>
          <!-- <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">DataTables</li>
            </ol>
          </div> -->
        </div>
      </div><!-- /.container-fluid -->
    </section>
    <section class="contenr">
      <div class="container-flui">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">List of all Products</h3>
                <div class="card-body">
                  <table id="table2" class="table table-bordered tabele-hover">
                    <thead>
                      <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Product Description</th>
                        <th>Production Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="product in products" :key="product.id">
                        <td>{{product.Product_Id}}</td>
                        <td>{{product.Product_Name}}</td>
                        <td>{{product.Product_Information}}</td>
                        <td>{{product.created}}</td>
                        <td>
                          <button type="button" class="btn btn-primary action-btns">Edit</button>
                          <button type="button" class="btn btn-danger action-btns">Delete</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ManufacturerService from '../../services/ManufacturerService'
export default {
  data () {
    return {
      products: ''
    }
  },
  mounted () {
    this.getProducts()
  },
  methods: {
    async getProducts () {
      await ManufacturerService.getProduct()
        .then(response => {
          this.products = response.data
          console.log(this.products)
        })
    }
  }
}
</script>

<style scoped>
.action-btns {
  margin: 5px;
}
</style>
