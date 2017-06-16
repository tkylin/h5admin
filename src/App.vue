<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
.content{
  position: relative;
  height: 100%;
}
.header{
  width: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 100;
}
.header-bottom{
  padding-top: 46px;
}
</style>
