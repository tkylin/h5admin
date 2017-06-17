<template>
  <div>
    <sticky>
      <x-header>直接玩家充值记录</x-header>
    </sticky>
    <search :auto-fixed="false" placeholder="请输入玩家ID" v-model="search"></search>
    <x-table>
      <thead>
      <tr>
        <td>头像</td>
        <td>ID</td>
        <td>昵称</td>
        <td>金额</td>
        <td>时间</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in result">
        <td><img :src="user.icon" style="width:60px;"/></td>
        <td>{{user.id}}</td>
        <td>{{user.nickName}}</td>
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
        search: '',
        pullupConfig: {
          content: '上拉加载更多',
          downContent: '松开进行加载',
          upContent: '上拉加载更多',
          loadingContent: '加载中...'
        },
        page:{
            pre:'上一页',
            next:'下一页'
        },
        result: [
          {
            icon: 'http://dynamic-image.yesky.com/600x-/uploadImages/upload/20141120/c4k2ie0whkpjpg.jpg',
            id: 12346,
            nickName: '清风溪流',
            money: 5.00,
            date: '04-21 14:08'
          },
          {
            icon: 'http://dynamic-image.yesky.com/600x-/uploadImages/upload/20141120/ai4gjet4l4tjpg.jpg',
            id: 12345,
            nickName: '清风可可',
            money: 8.00,
            date: '04-21 16:08'
          },
          {
            icon: 'http://dynamic-image.yesky.com/600x-/uploadImages/upload/20141120/c4k2ie0whkpjpg.jpg',
            id: 12346,
            nickName: '清风溪流',
            money: 5.00,
            date: '04-21 14:08'
          },
          {
            icon: 'http://dynamic-image.yesky.com/600x-/uploadImages/upload/20141120/ai4gjet4l4tjpg.jpg',
            id: 12345,
            nickName: '清风可可',
            money: 8.00,
            date: '04-21 16:08'
          },{
            icon: 'http://dynamic-image.yesky.com/600x-/uploadImages/upload/20141120/c4k2ie0whkpjpg.jpg',
            id: 12346,
            nickName: '清风溪流',
            money: 5.00,
            date: '04-21 14:08'
          },
          {
            icon: 'http://dynamic-image.yesky.com/600x-/uploadImages/upload/20141120/ai4gjet4l4tjpg.jpg',
            id: 12345,
            nickName: '清风可可',
            money: 8.00,
            date: '04-21 16:08'
          },{
            icon: 'http://dynamic-image.yesky.com/600x-/uploadImages/upload/20141120/c4k2ie0whkpjpg.jpg',
            id: 12346,
            nickName: '清风溪流',
            money: 5.00,
            date: '04-21 14:08'
          },
          {
            icon: 'http://dynamic-image.yesky.com/600x-/uploadImages/upload/20141120/ai4gjet4l4tjpg.jpg',
            id: 12345,
            nickName: '清风可可',
            money: 8.00,
            date: '04-21 16:08'
          },{
            icon: 'http://dynamic-image.yesky.com/600x-/uploadImages/upload/20141120/c4k2ie0whkpjpg.jpg',
            id: 12346,
            nickName: '清风溪流',
            money: 5.00,
            date: '04-21 14:08'
          },
          {
            icon: 'http://dynamic-image.yesky.com/600x-/uploadImages/upload/20141120/ai4gjet4l4tjpg.jpg',
            id: 12345,
            nickName: '清风可可',
            money: 8.00,
            date: '04-21 16:08'
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
