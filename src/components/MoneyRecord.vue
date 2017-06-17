<template>
  <div>
    <x-header>充值记录</x-header>
    <group>
      <datetime v-model="beginDate" title="开始时间:" confirm-text="完成" cancel-text="取消"></datetime>
      <datetime v-model="endDate" title="结束时间:" confirm-text="完成" cancel-text="取消"></datetime>
    </group>
    <group>
      <x-button type="primary">查 询</x-button>
    </group>
    <group>
      <cell>直接玩家充值：<span>150000.00</span>元
        <x-button type="primary" mini link="/player_money_list">明细</x-button>
      </cell>
      <cell>代理的玩家充值：<span>207800.00</span>元
        <x-button type="primary" mini link="/agency_money_list">明细</x-button>
      </cell>
      <cell>总充值：<span>3507800.00</span>元</cell>
      <cell>总业绩：<span>22280.00</span>元</cell>
      <cell>可提现金额：<span>22280.00</span>元
        <x-button type="primary" mini>提现</x-button>
      </cell>
      <cell>提现说明：每周二可提现上周业绩</cell>
    </group>
  </div>
</template>

<script>
  import {Group, Cell, XHeader, XInput, XButton, Datetime} from 'vux'

  export default {
    name: 'password',
    components: {
      Group,
      Cell,
      XHeader,
      XInput,
      XButton,
      Datetime
    },
    data () {
      return {
        beginDate: '',
        endDate: '',
        ReNewPassword: ''
      }
    }
  }
</script>

<style>
  .weui-cell__ft span {
    background-color: red;
    color: white;
  }
</style>
