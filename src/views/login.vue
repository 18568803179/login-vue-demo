<template>
    <div class="foot">
        <el-form ref="form" :model="form" label-width="80px">
            <h2>UNI-ADMIN</h2>
            <el-form-item label="用户名">
                <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.pwd" placeholder="请输入密码"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit" class="btn">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: "admin",
                pwd: "admin",
            },
        };
    },
    methods: {
        onSubmit() {
            this.$axios
                .post("http://ceshi5.dishait.cn/admin/login", {
                    username: this.form.name,
                    password: this.form.pwd,
                })
                .then((res) => {
                    //弹窗
                    this.$message({message:'登录成功',type:'success',showClose: true})
                    // console.log(res.data.data.token);

                    //当前登录时间
                    var date = new Date();
                    console.log((date.getTime())/1000);//换成秒
                    var time=(date.getTime())/1000
                    localStorage.setItem("token", res.data.data.token); //存token
                    localStorage.setItem('time',time)
                    //跳转home
                    this.$router.push("/home");
                }).catch(err=>{
                    this.$message('账号或密码错误')
                });
        },
    },
};
</script>

<style lang="scss">
.foot {
    margin: 100px auto;
    width: 420px;
    border: 1px solid gray;
    h2 {
        width: 100%;
        text-align: center;
        height: 50px;
        line-height: 50px;
    }
    .el-input {
        width: 88% !important;
    }
    .btn {
        width: 100%;
        margin-left: -80px !important;
    }
}
</style>