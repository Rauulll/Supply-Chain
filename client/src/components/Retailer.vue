<template>
    <div class="content-wrapper">
        <section class="content">
            <div class="content-header">
                <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                    <h1 class="m-0">Create Retailer</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <router-link to="/">Dashboard</router-link>/
                            <router-link to="/retailer">Retailer</router-link>
                        </li>
                    </ol>
                    </div><!-- /.col -->
                </div><!-- /.row -->
                </div><!-- /.container-fluid -->
            </div>
            <div class="container-fluid">
                <!-- Horizontal Form -->
                <div class="card card-info">
                    <!-- <div class="card-header">
                    <h3 class="card-title">Horizontal Form</h3>
                    </div> -->
                    <!-- /.card-header -->
                    <!-- form start -->
                    <form class="form-horizontal">
                    <div class="card-body">
                        <div class="form-group row">
                        <label for="firstName" class="col-sm-2 col-form-label">First Name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="firstName" placeholder="First Name">
                        </div>
                        </div>
                        <div class="form-group row">
                        <label for="lastName" class="col-sm-2 col-form-label">Last Name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="lastName" placeholder="Last Name">
                        </div>
                        </div>
                        <div class="form-group row">
                        <label for="userName" class="col-sm-2 col-form-label">User Name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="userName" placeholder="User Name">
                        </div>
                        </div>
                        <div class="form-group row">
                        <label for="companyEmail" class="col-sm-2 col-form-label">Company Email</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" id="companyEmail" placeholder="Comapany Email">
                        </div>
                        </div>
                        <div class="form-group row">
                        <label for="password" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="password" placeholder="Password">
                        </div>
                        </div>
                        <div class="form-group row">
                        <label for="confirmPassword" class="col-sm-2 col-form-label">Confirm Password</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="confirmPassword" placeholder="Confirm Password">
                        </div>
                        </div>
                        <div class="form-group row">
                        <label for="contactNumber" class="col-sm-2 col-form-label">Contact No:</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="contactNumber" placeholder="Contact Number">
                        </div>
                        </div>
                        <div class="form-group row">
                        <label for="address" class="col-sm-2 col-form-label">Address</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="address" placeholder="Address">
                        </div>
                        </div>
                        <div class="form-group row">
                        <label for="profileImage" class="col-sm-2 col-form-label">Profile Image(PNG, JPEG, JPG)</label>
                        <div class="col-sm-10">
                            <input type="file" ref="profileInput" acceptedTypes="image/png,image/jpeg" @fileSelected="handleProfileImage" />
                        </div>
                        </div>
                        <div class="form-group row">
                        <label for="identityProof" class="col-sm-2 col-form-label">Identity Proof</label>
                        <div class="col-sm-10">
                            <input type="file" ref="identityProof" acceptedTypes="application/pdf" @fileSelected="handleIdentityProof" />
                        </div>
                        </div>
                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer">
                        <button type="submit" class="btn btn-default float-right">Back</button>
                        <button type="submit" class="btn btn-info">Save</button>
                    </div>
                    <!-- /.card-footer -->
                    </form>
                </div>
              <!-- /.card -->
            </div>
        </section>
    </div>
</template>
<script>

</script>
