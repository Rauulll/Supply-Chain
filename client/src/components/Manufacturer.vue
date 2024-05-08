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
                <a href="#">Dashboard/Products/<b>Create Product</b></a>
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
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="productRegCode" class="col-sm-2 col-form-label"
                  >Product Registration Code</label
                >
                <div class="col-sm-10">
                  <input type="interger" class="form-control" id="productRegCode" />
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
                  />
                </div>
              </div>
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
              <button type="submit" class="btn btn-info">Save</button>
              <button type="submit" class="btn btn-default float-right">Cancel</button>
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

<script setup></script>
