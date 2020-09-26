<template>
  <div class="login-wrapper">
    <div class="login-block">
      <div class="login-logo">
        <a-icon type="codepen-circle" theme="filled" />
      </div>
      <div class="login-form">
        <div class="login-form-title">
          <p>饕餮</p>
          <p>静态资源管理库</p>
        </div>
        <div class="login-form-account">
          <a-form-model ref="loginForm" :rules="rules" :model="formData">
            <a-form-model-item prop="userName">
              <a-input v-model="formData.userName" placeholder="用户名">
                <template v-slot:prefix>
                  <a-icon type="user" />
                </template>
              </a-input>
            </a-form-model-item>
            <a-form-model-item prop="password">
              <a-input-password v-model="formData.password" placeholder="密码">
                <template v-slot:prefix>
                  <a-icon type="lock" />
                </template>
              </a-input-password>
            </a-form-model-item>
            <a-button type="primary" block @click="signIn">登录</a-button>
          </a-form-model>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      formData: {
        userName: '',
        password: ''
      },
      rules: {
        userName: [
          {
            required: true,
            message: '用户名不能为空',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    signIn() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$message.success('登录成功', 1).then(() => {
            this.$router.replace({ path: '/main/images' })
          })
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.login-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  .login-block {
    width: 400px;
    height: 350px;
    padding: 40px 0px 16px;
    background-color: #fff;
    border: 1px solid #e9e9e9;
    box-sizing: content-box;
    border-radius: 4px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-200px, -175px);
    .login-logo {
      width: 100%;
      text-align: center;
    }
    .login-form {
      width: 320px;
      margin: auto;
      .login-form-title {
        width: 100%;
        text-align: center;
        color: #262626;
        p:first-child {
          font-size: 32px;
          font-weight: bold;
        }
        p:last-child {
          font-size: 18px;
          margin-top: 8px;
        }
      }
      .login-form-account {
        width: 100%;
        margin-top: 32px;
      }
    }
  }
}
</style>
