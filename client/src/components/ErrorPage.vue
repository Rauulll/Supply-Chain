<template>
<div class="errorPage">
  <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>401 Unauthorized Page</h1>
          </div>
          <!-- <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">401 Error Page</li>
            </ol>
          </div> -->
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="error-page">
        <h2 class="headline text-danger">401</h2>

        <div class="error-content">
          <h3><i class="fas fa-exclamation-triangle text-danger"></i> Oops! Something went wrong.</h3>
          <div style="margin-top: 50px;">
            <h5>
              <i class="fas fa-person-circle-exclamation"></i>Kindly Contact Admin for permissions
            </h5>
          </div>

          <!-- <form class="search-form">
            <div class="input-group">
              <input type="text" name="search" class="form-control" placeholder="Search">

              <div class="input-group-append">
                <button type="submit" name="submit" class="btn btn-danger"><i class="fas fa-search"></i>
                </button>
              </div>
            </div>
          </form> -->
          <!-- /.input-group -->
        </div>
      </div>
      <!-- /.error-page -->

    </section>
    <!-- /.content -->
  </div>
</div>

</template>

<script>
export default {

}
</script>

<style>
.errorPage {
  width: 100%;
}
</style>
