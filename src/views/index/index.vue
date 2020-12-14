<template>
    <el-container>
        <el-aside width="200px">
            <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                router
            >
                <el-menu-item index="/home">
                    <i class="el-icon-menu"></i>
                    <span slot="title">后台首页</span>
                </el-menu-item>
                <el-menu-item index="/home/photo">
                    <i class="el-icon-document"></i>
                    <span slot="title">相册管理</span>
                </el-menu-item>
                <el-menu-item index="/home/shoplist">
                    <i class="el-icon-setting"></i>
                    <span slot="title">商品列表</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>
