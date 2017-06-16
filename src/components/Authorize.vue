<template>
  <div>
    <x-header>授权代理</x-header>
    <group>
      <search @on-submit="onSubmit" placeholder="请输入玩家ID" v-model="value" @on-focus="onFocus" @on-cancel="onCancel"></search>
    </group>
    <group>
      <x-table>
        <tbody>
        <tr v-for="item in userItems">
          <td>{{item.label}}</td>
          <td v-if="item.isIcon"><img :src="item.value" class="icon"/></td>
          <td v-else>{{item.value}}</td>
        </tr>
        </tbody>
      </x-table>
      <x-input title="密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码" placeholder="代理登录密码(6~16位)" :min="6" :max="16" type="password"
               required v-model="agencyForm.password" label-width="85px"></x-input>
      <x-input title="确认密码" placeholder="确认密码" :min="6" :max="16" type="password"
               required v-model="agencyForm.rePassword" label-width="85px"></x-input>
      <x-input title="邀&nbsp;&nbsp;请&nbsp;&nbsp;码" placeholder="代理唯一识别码" :min="6" :max="16" type="number"
               required v-model="agencyForm.inviteCode" label-width="85px"></x-input>
    </group>
    <group>
      <x-button type="primary" link="/home">确定授权</x-button>
    </group>
  </div>
</template>

<script>
  import {Group, Cell, XHeader, XInput, XButton, Search, XTable} from 'vux'

  export default {
    name: 'password',
    components: {Group, Cell, XHeader, XInput, XButton, Search, XTable},
    data () {
      return {
        results: [],
        value: '12345',
        userItems: [
          {label: '头像', isIcon: true, value: 'http://dynamic-image.yesky.com/600x-/uploadImages/upload/20141120/wyq4zppetlmjpg.jpg'},
          {label: 'ID', value: '123456'},
          {label: '昵称', value: '清风鱼鱼'},
          {label: '注册时间', value: '2016-11-28 15:53'}
        ],
        agencyForm: {
          inviteCode: '123456',
          password: '',
          rePassword: ''
        }
      }
    },
    methods: {
      resultClick (item) {
        window.alert('you click the result item: ' + JSON.stringify(item))
      },
      getResult (val) {
        this.results = val ? getResult(this.value) : []
      },
      onSubmit (val) {
        window.alert('on submit' + val)
      },
      onCancel () {
        console.log('on cancel')
      },
      onFocus () {
        console.log('on focus')
      }
    }
  }
</script>

<style>

  .icon {
    width: 104px;
  }
</style>
