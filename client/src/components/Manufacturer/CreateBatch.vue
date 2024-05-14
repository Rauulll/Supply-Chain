<template>
  <div class="content-wrapper">
    <section class="content">
      <div class="content-header">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Create Batch</h1>
          </div>
          <!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <router-link to="/">Dashboard</router-link>/Create Batch
              </li>
            </ol>
          </div>
          <!-- /.col -->
        </div>
      </div>
      <!-- /content-header-->
      <div class="container-fluid">
        <div class="card card-info">
          <div class="form-horizantal">
            <div class="card card-info">
              <div class="card-header">
                <h3 class="card-title">Product Details</h3>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-3">
                    <input type="text" class="form-control" placeholder="PRODUCT ID">
                  </div>
                  <div class="col-4">
                    <input type="text" class="form-control" placeholder="PRODUCT NAME">
                  </div>
                  <div class="col-5">
                    <input type="text" class="form-control" placeholder="PRODUCT REGISTRATION CODE">
                  </div>
                </div>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="card card-info">
          <!-- from start -->
          <form class="form-horizontal">
            <!-- card start -->
            <div class="card-body">
              <div class="form-group row">
                <label for="selectProduct" class="col-sm-2 col-form-label">Select Product</label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="selectProduct"
                    placeholder="Select Product"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="selectManufacturer" class="col-sm-2 col-form-label"
                  >Select Manufacturer</label
                >
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="selectManufacturer"
                    placeholder="Select Manufacturer"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="batchExpiry" class="col-sm-2 col-form-label"
                  >Batch Expiry Date</label
                >
                <div class="col-sm-10">
                  <input
                    type="date"
                    class="form-control"
                    id="batchExpiry"
                    placeholder="Batch Expiry Date"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="batchQuantity" class="col-sm-2 col-form-label"
                  >Batch Quantity</label
                >
                <div class="col-sm-10">
                  <input
                    type="number"
                    class="form-control"
                    id="batchQuantity"
                    placeholder="Batch Quantity"
                  />
                </div>
              </div>
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
              <button type="submit" class="btn btn-info">Save</button>
              <button type="submit" class="btn btn-default float-right">Back</button>
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

</script>
