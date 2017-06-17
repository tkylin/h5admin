<template>
  <div class="home">
    <x-header :left-options="{showBack: false}">友趣棋牌代理后台</x-header>
    <x-img class="icon" :src="user.icon"></x-img>
    <flexbox>
      <flexbox-item>
        <div class="flex-demo">{{user.nickName}}</div>
      </flexbox-item>
    </flexbox>
    <flexbox>
      <flexbox-item>
        <div class="flex-demo">ID：{{user.id}}&nbsp;&nbsp;&nbsp;&nbsp; 邀请码：{{user.code}}</div>
      </flexbox-item>
    </flexbox>
    <flexbox>
      <flexbox-item>
        <div class="flex-demo">加入时间：{{user.joinDate}}</div>
      </flexbox-item>
    </flexbox>
    <flexbox>
      <flexbox-item>
        <div class="flex-demo">房卡数：{{user.cardNum}} <x-button mini link="/card_change_record">明细</x-button></div>
      </flexbox-item>
    </flexbox>
    <grid class="grid">
      <grid-item class="grid-item" v-for="menu in gridMenu" :link="{path:menu.url}" :label="menu.title">
      </grid-item>
    </grid>
  </div>
</template>

<script>
  import icon from '../assets/icon.jpg';
  import {Group, Cell, XHeader, XInput, XButton, XImg, Flexbox, FlexboxItem,Grid, GridItem} from 'vux'
  export default {
    components: {Group, Cell, XHeader, XInput, XButton, XImg, Flexbox, FlexboxItem,Grid, GridItem},
    data () {
      return {
        user: {
          icon: icon,
          nickName: '清风',
          id: 12345,
          code: 12345,
          joinDate: '2017-06-16 00:18',
          cardNum:200
        },
        gridMenu:[
          {title:'修改密码',url:'/password'},
          {title:'下属代理',url:'/agency'},
          {title:'下属玩家',url:'/player'},
          {title:'充值记录',url:'/money_record'},
          {title:'授权代理',url:'/authorize'},
          {title:'退出登录',url:'/'},
        ]
      }
    }
  }
</script>

<style>
  .home {
    text-align: center;
  }
  .home .icon {
    margin: 10px auto;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    -moz-border-radius: 100%;
    -webkit-border-radius: 100%;
    border: 2px solid rgba(255, 255, 255, 0.8);
    vertical-align: middle;
  }

  .flex-demo {
    text-align: center;
  }

  .grid{
    margin-top: 10px;
  }
  .grid-item{
    padding: 20px 0 18px;
  }
</style>
