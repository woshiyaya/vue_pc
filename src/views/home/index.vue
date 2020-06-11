<template>
 <el-container class="container-home">
  <el-aside :width="isOpen?'200px':'64px'" class="my-aside">
      <div class="logo" :class="{minLogo:!isOpen}"></div>
      <!-- 导航菜单 -->
       <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#002233"
      style="border-right:none"
      :collapse="!isOpen"
      :collapse-transition="false"
      text-color="#fff"
      active-text-color="#ffd04b"
      router>
        <el-menu-item index="/">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/article">
        <i class="el-icon-document"></i>
        <span slot="title">内容管理</span>
      </el-menu-item>
      <el-menu-item index="/image">
        <i class="el-icon-s-marketing"></i>
        <span slot="title">素材管理</span>
      </el-menu-item>
      <el-menu-item index="/comment">
        <i class="el-icon-position"></i>
        <span slot="title">发布文章</span>
      </el-menu-item>
      <el-menu-item index="/publish">
        <i class="el-icon-chat-dot-square"></i>
        <span slot="title">评论管路</span>
      </el-menu-item>
      <el-menu-item index="/fans">
        <i class="el-icon-present"></i>
        <span slot="title">粉色管理</span>
      </el-menu-item>
      <el-menu-item index="/setting">
        <i class="el-icon-setting"></i>
        <span slot="title">个人设置</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
  <el-container>
    <el-header class="my-header">
        <!-- 左边内容 -->
        <span class="icon el-icon-s-fold" @click="toggle()"></span>
        <span>网站后台管理系统</span>
        <!-- 右边内容 -->
        <el-dropdown>
        <span class="el-dropdown-link">
            <img :src="photo" alt="" class="head">
            <strong class="name">{{name}}</strong>
            <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="$router.push('/setting')">个人设置</el-dropdown-item>
            <el-dropdown-item @click.native="layout()">退出登录</el-dropdown-item>
        </el-dropdown-menu>
        </el-dropdown>
    </el-header>
    <el-main>
        <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import auth from '../../utils/auth'
export default {
  name: 'app-home',
  data () {
    return {
      isOpen: true,
      name: '',
      photo: ''
    }
  },
  created () {
    const user = auth.getUser()
    this.name = user.name
    this.photo = user.photo
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    },
    layout () {
      auth.delUser()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.container-home{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    .my-aside{
        background-color: #002233;
        .logo{
            width: 100%;
            height: 60px;
            background: #002244 url(../../assets/logo_admin.png) no-repeat center / 140px auto;
        }
        .minLogo{
            background: url(../../assets/logo_admin_01.png) no-repeat center / 40px auto;
        }
    }
    .my-header{
        border-bottom: 1px solid #ddd;
        line-height: 60px;
        .icon{
          margin-right: 10px;
          font-size: 20px;
        }
        .el-dropdown{
          float: right;
          .head{
              width: 30px;
              height: 30px;
              vertical-align: middle;
              padding-right: 10px;
          }
        }
    }
}
</style>
