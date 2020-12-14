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
                <el-menu-item index="/Until">
                    <i class="el-icon-menu"></i>
                    <span slot="title">设置管理</span>
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