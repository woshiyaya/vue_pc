<template>
  <div class="container-login">
      <el-card>
          <img src="../../assets/logo_index.png" alt="">
          <el-form ref="loginRef" :model="loginForm" :rules="rulesForm" status-icon>
              <el-form-item prop="mobile">
                  <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
              </el-form-item>
              <el-form-item prop="code">
                  <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:240px;margin-right:8px"></el-input>
                  <el-button>发送验证码</el-button>
              </el-form-item>
              <el-form-item>
                  <el-checkbox v-model="checked">我已阅读并同意该条款</el-checkbox>
              </el-form-item>
              <el-form-item>
                  <el-button @click="login()" type="primary" style="width:100%">登录</el-button>
              </el-form-item>
          </el-form>
      </el-card>
  </div>
</template>

<script>
import auth from '../../utils/auth'
export default {
  name: 'app-login',
  data () {
    const checkMobile = (rule, value, callback) => {
      if (!/^1[3-9]\d{9}$/.test(value)) {
        callback(new Error('手机号错误'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        mobile: '13911111111',
        code: '246810'
      },
      rulesForm: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '验证码6个字符', trigger: 'blur' }
        ]
      },
      checked: true
    }
  },
  methods: {
    login () {
      this.$refs.loginRef.validate(async valid => {
        if (valid) {
          // 进行跳转
          // this.$http.post(
          //   'authorizations', this.loginForm
          // ).then(res => {
          //   // 存储用户信息
          //   auth.setUser(res.data.data)
          //   this.$router.push('/')
          // }).catch(() => {
          //   this.$message.error('手机号或验证码错误')
          // })
          // 使用async，await,正常情况，await获取的就是promise中then中的数据
          // 捕获异常，使用try catch
          try {
            // 1.发请求捕获数据
            const res = await this.$http.post('authorizations', this.loginForm)
            // 2.存储用户信息
            auth.setUser(res.data.data)
            // 3.跳转到首页
            this.$router.push('/')
          } catch (e) {
            this.$message.error('手机号或验证码错误')
          }
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.container-login{
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: url(../../assets/login_bg.jpg);
    // 让背景图等比例缩放，去铺满容器
    background-size: cover;
    .el-card{
        width: 400px;
        height: 350px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        img{
            widows: 200px;
            display: block;
            margin: 0 auto 20px;
        }
    }
}
</style>
