<template>
    <div>
        <el-table
            ref="multipleTable"
            :data="list"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange"
        >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column label="商品" width="120">
                <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="name" label="价格" width="120"></el-table-column>
            <el-table-column prop="address" label="数量"></el-table-column>
            <el-table-column prop="address" label="操作"></el-table-column>
        </el-table>


    </div>
</template>

<script>
export default {
    data() {
        return {
            list: this.$store.state.shop,
        };
    },
    methods: {
        handleSelectionChange(){

        }
    },
};
</script>

<style lang="scss">
    .footer{
        height: 10vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
        
    }
</style>