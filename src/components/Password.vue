<template>
  <div>
    <x-header >修改密码</x-header>
    <group>
      <x-input title="旧密码" type="password" required v-model="password"></x-input>
      <x-input title="新密码" type="password" required v-model="newPassword"></x-input>
      <x-input title="确认密码" type="password" required v-model="reNewPassword"></x-input>
    </group>
    <group>
      <x-button type="primary" link="/home">确定修改</x-button>
    </group>
  </div>
</template>

<script>
  import {Group, Cell, XHeader, XInput, XButton} from 'vux'

  export default {
    name: 'password',
    components: {
      Group,
      Cell,
      XHeader,
      XInput,
      XButton
    },
    data () {
      return {
        password: '',
        newPassword: '',
        reNewPassword: ''
      }
    }
  }
</script>

<style>
  .header{
    width: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 100;
  }
</style>
