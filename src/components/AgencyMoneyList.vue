<template>
  <div>
    <sticky>
      <x-header>下属代理充值列表</x-header>
    </sticky>
    <search :auto-fixed="false" placeholder="请输入玩家ID" v-model="search"></search>
    <x-table>
      <thead>
      <tr>
        <td>代理ID</td>
        <td>名称</td>
        <td>代理等级</td>
        <td>金额</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in result">
        <td>{{user.id}}</td>
        <td>{{user.nickName}}</td>
        <td>{{user.level}}</td>
        <td>{{user.money}} <x-button type="primary" mini link="/agency_player_money_list">明细</x-button></td>
      </tr>
      </tbody>
    </x-table>
    <flexbox style="margin:10px 0;">
      <flexbox-item style="text-align: center;">
        <x-button mini>上一页</x-button>
      </flexbox-item>
      <flexbox-item style="text-align: center;">
        <x-button mini>下一页</x-button>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
  import {Group, Cell, XHeader, XInput, XButton, Search, XTable, LoadMore, Scroller, Sticky, Flexbox, FlexboxItem} from 'vux'

  export default {
    name: 'password',
    components: {Group, Cell, XHeader, XInput, XButton, Search, XTable, LoadMore, Scroller, Sticky, Flexbox, FlexboxItem},
    data () {
      return {
        search: '',
        page:{
            pre:'上一页',
            next:'下一页'
        },
        result: [
          {
            id: 12346,
            nickName: '清风溪流',
            level: 2,
            money: 5.00
          },
          {
            id: 12346,
            nickName: '清风溪流',
            level: 2,
            money: 5.00
          },
          {
            id: 12346,
            nickName: '清风溪流',
            level: 2,
            money: 5.00
          },
          {
            id: 12346,
            nickName: '清风溪流',
            level: 2,
            money: 5.00
          },{
            id: 12346,
            nickName: '清风溪流',
            level: 2,
            money: 5.00
          },
          {
            id: 12346,
            nickName: '清风溪流',
            level: 2,
            money: 5.00
          },{
            id: 12346,
            nickName: '清风溪流',
            level: 2,
            money: 5.00
          },
          {
            id: 12346,
            nickName: '清风溪流',
            level: 2,
            money: 5.00
          },{
            id: 12346,
            nickName: '清风溪流',
            level: 2,
            money: 5.00
          },
          {
            id: 12346,
            nickName: '清风溪流',
            level: 2,
            money: 5.00
          }
        ]
      }
    },
    methods: {
      onScrollBottom () {
        if (this.onFetching) {
          // do nothing
        } else {
          this.onFetching = true
          setTimeout(() => {
            this.bottomCount += 10
            this.$nextTick(() => {
              this.$refs.scrollerBottom.reset()
            })
            this.onFetching = false
          }, 2000)
        }
      },
    }
  }
</script>

<style>
</style>
