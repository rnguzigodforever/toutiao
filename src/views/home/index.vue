<template>
<div>
<van-nav-bar
class="page-nav-bar"
  left-arrow
>
<van-button slot="title" type="info" round size="mini" icon="search">
  搜索
</van-button>
</van-nav-bar >
<van-tabs v-model="active" animated swipeable fixed >
  <van-tab v-for="(item, index) in channels" :key="index" :title="item.name">
    <!-- 文章列表组件 -->
<channelContent :channels="item"></channelContent>
<rainbowBtn>
  hcy
</rainbowBtn>
  </van-tab>
 <div slot="nav-right" class="placeholder">111</div>
      <div
        slot="nav-right"
        class="hamburger-btn"
      >
        <i class="font_family icon-gengduo"></i>
      </div>
</van-tabs>
</div>
</template>

<script >
import { getUserChannels } from '@/api/user.js'
import channelContent from './components/channelContent'
import rainbowBtn from '../../components/btn'
export default {
  data () {
    return {
      active: 0,
      channels: []
    }
  },
  components: {
    channelContent: channelContent,
    rainbowBtn: rainbowBtn
  },
  created () {
    this.getChannels()
  },

  methods: {
    async getChannels () {
      try {
        const { data } = await getUserChannels()
        console.log(data)
        this.channels = data.data.channels
      } catch (error) {
        console.log(error)
        this.$toast('获取用户频道失败')
      }
    }
  }
}
</script>

<style lang='less' scoped>
.van-tabs__wrap{
  position: fixed;
  top: 92px;
  z-index: 1;
  left: 0;
  right: 0;
  height: 82px;
}
.van-button--mini{
background-color: rgba(255  , 255, 255, .3);
width: 443px;
height: 64px;
}
.van-icon-search::before{
  color: #fff;
}
/deep/.van-tab{
  min-width: 200px;
  border-right: 1px solid #edeff3;
  font-size: 30px;
  color: #777777;
}
.van-tab-active{
  color: #333333;
}
.van-tabs__line{
  width: 31px !important;
  height: 6px;
  background-color: #3296fa;
}
.van-tabs__nav{
  padding-bottom: 0;
}
    .hamburger-btn {
      position: fixed;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 66px;
      height: 82px;
      background-color: #fff;
      background-color: rgba(255, 255, 255, 0.902);
      i.toutiao {
        font-size: 33px;
      }
      &:before {
        content: "";
        position: absolute;
        left: 0;
        width: 1px;
        height: 58px;
        background-image: url(~@/assets/gradient-gray-line.png);
        background-size: contain;
      }
    }
</style>
