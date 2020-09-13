<template>
  <div class="layout-container">
    <img src="~@/assets/state1.png" class="back">
    <!-- 子路由出口 -->
    <router-view />
    <!-- /子路由出口 -->

    <!-- 标签导航栏 -->
    <!--
      route: 开启路由模式
     -->
    <van-tabbar class="layout-tabbar" route>
      <van-tabbar-item to="/" swipeable>
        <i slot="icon" class="font_family icon-shouye"></i>
        <span class="text">首页</span>
      </van-tabbar-item>
      <van-tabbar-item to="/qa" swipeable>
        <i slot="icon" class="font_family icon-wenda"></i>
        <span class="text">问答</span>
      </van-tabbar-item>
      <van-tabbar-item to="/video" swipeable>
        <i slot="icon" class="font_family icon-shipin"></i>
        <span class="text">视频</span>
      </van-tabbar-item>
      <van-tabbar-item to="/my" swipeable>
        <i slot="icon" class="font_family icon-wode"></i>
        <span class="text" >{{this.$store.state.user? "我的":"未登录"}}</span>
      </van-tabbar-item>
    </van-tabbar>
    <!-- /标签导航栏 -->
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  components: {},
  props: {},
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less">
.layout-container {
  width: 100vw;
  height: 100vh;
  .back{
      opacity: 0.3;
  position: fixed;
 width: 100%;
 height: 100%;
  }
  .layout-tabbar {
    i.toutiao {
      font-size: 40px;
    }
    span.text {
      font-size: 20px;
    }
  }
}
</style>
