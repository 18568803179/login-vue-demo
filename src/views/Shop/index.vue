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
                <el-menu-item index="/Shop">
                    <i class="el-icon-menu"></i>
                    <span slot="title">商品列表</span>
                </el-menu-item>
                <el-menu-item index="/Shop/type">
                    <i class="el-icon-document"></i>
                    <span slot="title">分类列表</span>
                </el-menu-item>
                <el-menu-item index="/Shop/detail">
                    <i class="el-icon-setting"></i>
                    <span slot="title">商品详情</span>
                </el-menu-item>
                <el-menu-item index="/Shop/price">
                    <i class="el-icon-setting"></i>
                    <span slot="title">商品价格</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
export default {};
</script>