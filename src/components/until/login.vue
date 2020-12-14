<template>
    <div class="login">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="账号">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.pwd"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">登录</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form:{
                name:"",
                pwd:""
            }
        };
    },
    methods: {
        onSubmit(){

        }
    },
};
</script>

<style lang="scss">
    .login{
        width: 230px;
    }
</style>