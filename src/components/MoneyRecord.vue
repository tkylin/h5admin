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
      <flexbox class="flexbox_diy">
        <flexbox-item :span="5">
          <div class="flex_left">直接玩家充值:</div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex_right"><span>150000.00</span>元
            <x-button type="primary" mini link="/player_money_list">明细</x-button>
          </div>
        </flexbox-item>
      </flexbox>
      <flexbox  class="flexbox_diy">
        <flexbox-item :span="5">
          <div class="flex_left">代理玩家充值:</div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex_right"><span>207800.00</span>元
            <x-button type="primary" mini link="/agency_money_list">明细</x-button>
          </div>
        </flexbox-item>
      </flexbox>
      <flexbox class="flexbox_diy">
        <flexbox-item :span="5">
          <div class="flex_left">总充值:</div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex_right"><span>3507800.00</span>元</div>
        </flexbox-item>
      </flexbox>
      <flexbox class="flexbox_diy">
        <flexbox-item :span="5">
          <div class="flex_left">总业绩:</div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex_right"><span>22280.00</span>元</div>
        </flexbox-item>
      </flexbox>
      <flexbox class="flexbox_diy">
        <flexbox-item :span="5">
          <div class="flex_left">可提现金额:</div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex_right"><span>22280.00</span>元
            <x-button type="primary" mini>提现</x-button>
          </div>
        </flexbox-item>
      </flexbox>
      <flexbox class="flexbox_diy">
        <flexbox-item :span="5">
          <div class="flex_left">当前点位:</div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex_right"><span>7.8</span>
            <x-button type="primary" mini>提现记录</x-button>
          </div>
        </flexbox-item>
      </flexbox>
      <flexbox class="flexbox_diy">
        <flexbox-item :span="5">
          <div class="flex_left">提现说明:</div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex_right">每周二可提现上周业绩</div>
        </flexbox-item>
      </flexbox>
    </group>
  </div>
</template>

<script>
  import {Group, Cell, XHeader, XInput, XButton, Datetime, Flexbox, FlexboxItem} from 'vux'

  export default {
    name: 'password',
    components: {
      Group,
      Cell,
      XHeader,
      XInput,
      XButton,
      Datetime, Flexbox, FlexboxItem
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
  .flexbox_diy{
    border-bottom:1px solid #ccc;
    padding:5px 0;
  }
  .flexbox_diy *{
    vertical-align: middle;
  }
  .flex_left {
    text-align: right;
  }

  .flex_right span {
    background-color: red;
    color: white;
  }


</style>
