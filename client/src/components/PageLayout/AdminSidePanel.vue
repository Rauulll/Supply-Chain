<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- Sidebar -->
        <div class="sidebar">
            <!-- Sidebar user panel (optional) -->
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="info text-lg text-bold">
                <a href="#" class="d-block">BLOCKPHARMA</a>
            </div>
            </div>
            <!-- SidebarSearch Form -->
            <div class="form-inline">
            <!-- <div class="input-group" data-widget="sidebar-search">
                <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
                <div class="input-group-append">
                <button class="btn btn-sidebar">
                    <i class="fas fa-search fa-fw"></i>
                </button>
                </div>
            </div> -->
            </div>
            <!-- Sidebar Menu -->
            <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <!-- Add icons to the links using the .nav-icon class
                    with font-awesome or any other icon font library -->
                <li>
                <a href="#" class="">
                    <i class=""></i>
                    <p>
                    Welcome Admin!
                    </p>
                </a>
                </li>
                <li>
                <a href="/" class="nav-link active">
                    <i class="nav-icon fas fa-tachometer-alt"></i>
                    <p>
                    Dashboard
                    </p>
                </a>
                </li>
                <li class="mb-4">
                <a href="#" class="nav-link">
                    <i class="nav icon ion ion-building"></i>
                    <p>
                    Company profile
                    </p>
                </a>
                </li>
                <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="nav-icon fas fa-globe"></i>
                    <p>
                    Users
                    <i class="fas fa-angle-left right"></i>
                    <span class="badge badge-info right"></span>
                    </p>
                </a>
                <ul class="nav nav-treeview">
                    <li class="nav-item">
                    <a href="/manufacturer" class="nav-link">
                        <i class="ion ion-person nav-icon"></i>
                        <p>Manufacturer</p>
                    </a>
                    </li>
                    <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="ion ion-person nav-icon"></i>
                        <p>Distributor</p>
                    </a>
                    </li>
                    <li class="nav-item">
                    <a href="/retailer" class="nav-link" @click="retailer">
                        <i class="ion ion-person nav-icon"></i>
                        <p>Retailer</p>
                    </a>
                    </li>
                </ul>
                </li>
                <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="nav-icon fas fa-list"></i>
                    <p>
                    Illegitimate Drug Reports
                    </p>
                </a>
                </li>
                <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="nav-icon fas fa-list"></i>
                    <p>
                    Transaction Log
                    </p>
                </a>
                </li>
            </ul>
            </nav>
            <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
    </aside>
</template>

<script setup>

</script>
