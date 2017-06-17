<template>
  <div>
    <sticky>
      <x-header>房卡变更记录</x-header>
    </sticky>
    <x-table>
      <thead>
      <tr>
        <td>充值人ID</td>
        <td>被充值人ID</td>
        <td>房卡数</td>
        <td>时间</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in result">
        <td>{{user.fromId}}</td>
        <td>{{user.toId}}</td>
        <td>{{user.money}}</td>
        <td>{{user.date}}</td>
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
        page:{
            pre:'上一页',
            next:'下一页'
        },
        result: [
          {
            fromId: 12346,
            toId: 12345,
            money: 5.00,
            date: '04-21 14:08'
          },
          {
            fromId: 12346,
            toId: 12345,
            money: 5.00,
            date: '04-21 14:08'
          },
          {
            fromId: 12346,
            toId: 12345,
            money: 5.00,
            date: '04-21 14:08'
          },
          {
            fromId: 12346,
            toId: 12345,
            money: 5.00,
            date: '04-21 14:08'
          },{
            fromId: 12346,
            toId: 12345,
            money: 5.00,
            date: '04-21 14:08'
          },
          {
            fromId: 12346,
            toId: 12345,
            money: 5.00,
            date: '04-21 14:08'
          },{
            fromId: 12346,
            toId: 12345,
            money: 5.00,
            date: '04-21 14:08'
          },
          {
            fromId: 12346,
            toId: 12345,
            money: 5.00,
            date: '04-21 14:08'
          },{
            fromId: 12346,
            toId: 12345,
            money: 5.00,
            date: '04-21 14:08'
          },
          {
            fromId: 12346,
            toId: 12345,
            money: 5.00,
            date: '04-21 14:08'
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
