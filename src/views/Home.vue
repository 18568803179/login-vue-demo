<template>
    <div class="home">
        <el-container>
            <!-- 头部 -->
            <el-header>
                <el-menu
                    :default-active="activeIndex"
                    class="el-menu-demo"
                    mode="horizontal"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    router
                >
                    <div class="left">UNI-ADMIN</div>
                    <el-menu-item index="/home">首页</el-menu-item>

                    <el-menu-item index="/Shop">商品</el-menu-item>
                    <el-menu-item index="/Buy">订单</el-menu-item>
                    <el-menu-item index="/Good">会员</el-menu-item>
                    <el-menu-item index="/Until">设置</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">admin</template>
                        <el-menu-item>修改密码</el-menu-item>
                        <el-menu-item @click="exit">退出登录</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-header>
            <router-view></router-view>
        </el-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: "",
        };
    },
    methods: {
        exit() {
            this.$message('退出登录')
            localStorage.removeItem("token");
            this.$router.push("/");

            // let token=localStorage.getItem('token')
            // this.$http('http://ceshi5.dishait.cn/admin/logout','post',{},{}).then(res=>{
            //     console.log(res);
            // })
        },
    },
};
</script>
<style lang="scss">
.left {
    width: 50%;
    height: 8vh;
    float: left;
    line-height: 8vh;
    font-size: 23px;
    text-align: left;
    color: white;
    padding-left: 30px;
}
.el-header {
    padding: 0;
}
</style>
