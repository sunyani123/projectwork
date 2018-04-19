<template>
  <div id="app">
    <el-container style="height: 100%; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <!-- 在element-ui上加路由跳转效果要在el-menu上加router属性,
          在el-menu-item上面的index属性上的属性值复制为路由的path -->
          <el-menu :default-openeds="['2']" router>
            <!-- :default-openeds="['2']"为默认展开 -->
            <el-menu-item index="/NewAdvertisement">
              <i class="el-icon-message"></i>
              新建广告
            </el-menu-item>
            <el-menu-item index="/index">
              <i class="el-icon-message"></i>
              首页概览
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-menu"></i>广告管理</template>
              <el-menu-item-group>
                <el-menu-item index="/AdvertisingDesign">广告设计</el-menu-item>
                <el-menu-item index="2-2">广告单元</el-menu-item>
                <el-menu-item index="2-2">广告创意</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="/DataCenter">
              <i class="el-icon-setting"></i>
              数据中心
            </el-menu-item>
            <el-menu-item index="/">
              <i class="el-icon-setting"></i>
              工具箱
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-header style="text-align: right; font-size: 12px">
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span>{{username}}</span>
          </el-header>
          
          <el-main>
            <router-view/>
          </el-main>
        </el-container>
  </el-container>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'App',
  data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    },
    computed:{
      ...mapState(['username'])
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size:.16rem;
  position: absolute;
  width:100%;
  top:0;
  bottom:0;
  background:#fff;
  display:-webkit-flex;
}
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}
  
.el-aside {
  color: #333;
}
</style>
