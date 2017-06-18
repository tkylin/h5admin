<template>
  <div>
    <sticky>
      <x-header>下属玩家</x-header>
    </sticky>
    <search :auto-fixed="false" placeholder="请输入玩家ID" v-model="search"></search>
    <x-table>
      <thead>
      <tr>
        <td>ID</td>
        <td>昵称</td>
        <td>头像</td>
        <td>操作</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in result">
        <td>{{user.id}}</td>
        <td>{{user.nickName}}</td>
        <td><img :src="user.icon" style="width:60px;"/></td>
        <td width="73">
          <x-button type="primary" mini>充值</x-button>
          <x-button type="primary" mini>授权</x-button>
        </td>
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
            id: 12345,
            nickName: '清风可可',
            icon: 'http://dynamic-image.yesky.com/600x-/uploadImages/upload/20141120/ai4gjet4l4tjpg.jpg',
            level: 3,
            levelName: '分部',
            hasAgency: true,
            hasPlayer: true
          },
          {
            id: 12346,
            nickName: '清风溪流',
            icon: 'http://dynamic-image.yesky.com/600x-/uploadImages/upload/20141120/c4k2ie0whkpjpg.jpg',
            level: 3,
            levelName: '分部',
            hasAgency: true,
            hasPlayer: true
          },
          {
            id: 12347,
            nickName: '清风可可',
            icon: 'http://dynamic-image.yesky.com/600x-/uploadImages/upload/20141120/ai4gjet4l4tjpg.jpg',
            level: 3,
            levelName: '分部',
            hasAgency: true,
            hasPlayer: false
          },
          {
            id: 12348,
            nickName: '清风溪流',
            icon: 'http://dynamic-image.yesky.com/600x-/uploadImages/upload/20141120/c4k2ie0whkpjpg.jpg',
            level: 3,
            levelName: '分部',
            hasAgency: false,
            hasPlayer: true
          },
          {
            id: 12348,
            nickName: '清风溪流',
            icon: 'http://dynamic-image.yesky.com/600x-/uploadImages/upload/20141120/c4k2ie0whkpjpg.jpg',
            level: 3,
            levelName: '分部',
            hasAgency: false,
            hasPlayer: true
          },
          {
            id: 12348,
            nickName: '清风溪流',
            icon: 'http://dynamic-image.yesky.com/600x-/uploadImages/upload/20141120/c4k2ie0whkpjpg.jpg',
            level: 3,
            levelName: '分部',
            hasAgency: false,
            hasPlayer: true
          },
          {
            id: 12348,
            nickName: '清风溪流',
            icon: 'http://dynamic-image.yesky.com/600x-/uploadImages/upload/20141120/c4k2ie0whkpjpg.jpg',
            level: 3,
            levelName: '分部',
            hasAgency: false,
            hasPlayer: true
          },
          {
            id: 12348,
            nickName: '清风溪流',
            icon: 'http://dynamic-image.yesky.com/600x-/uploadImages/upload/20141120/c4k2ie0whkpjpg.jpg',
            level: 3,
            levelName: '分部',
            hasAgency: false,
            hasPlayer: true
          },
          {
            id: 12348,
            nickName: '清风溪流',
            icon: 'http://dynamic-image.yesky.com/600x-/uploadImages/upload/20141120/c4k2ie0whkpjpg.jpg',
            level: 3,
            levelName: '分部',
            hasAgency: false,
            hasPlayer: true
          },
          {
            id: 12348,
            nickName: '清风溪流',
            icon: 'http://dynamic-image.yesky.com/600x-/uploadImages/upload/20141120/c4k2ie0whkpjpg.jpg',
            level: 3,
            levelName: '分部',
            hasAgency: false,
            hasPlayer: true
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
