<template>
    <div :class="'NewAdvertisement'">
        <el-container style="height: 100%; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu :default-openeds="['1', '2','3']"  router>
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>新建广告计划</template>
                    <el-menu-item index="/NewAdvertisement/Changeplan">选择计划</el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-menu"></i>广告单元</template>
                    <el-menu-item index="2-2">基本信息</el-menu-item>
                    <el-menu-item index="2-2">定向</el-menu-item>
                    <el-menu-item index="2-2">广告位</el-menu-item>
                    <el-menu-item index="2-2">出价</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title"><i class="el-icon-setting"></i>广告创意</template>
                    <el-menu-item index="3-3">落地页</el-menu-item>
                    <el-menu-item index="3-3">上传创意</el-menu-item>
                </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        name:'NewAdvertisement'
    }
</script>

<style scoped>
.NewAdvertisement{
    position: absolute;
    width:100%;
    top:0;
    bottom:0;
    background:#fff;
}
</style>