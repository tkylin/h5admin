<template>
  <div class="login">
    <x-header :left-options="{showBack: false}">移动端管理后台</x-header>
    <group>
      <x-input title="账号" type="number" required v-model="account"></x-input>
      <x-input title="密码" type="password" required v-model="password"></x-input>
    </group>
    <group>
      <x-button type="primary" link="/home">立即登录</x-button>
    </group>
  </div>
</template>

<script>
  import {Group, Cell, XHeader, XInput, XButton} from 'vux'

  export default {
      name:'login',
    components: {
      Group,
      Cell,
      XHeader,
      XInput,
      XButton
    },
    data () {
      return {
        account: '',
        password: ''
      }
    }
  }
</script>

<style>
  .login {

  }
</style>
