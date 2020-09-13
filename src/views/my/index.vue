<template>
<div class="my-container">
    <div class="header" v-if="!user">
    <!-- <img  src="~@/assets/state.jpg" class="back"> -->
      <img
        class="mobile-img"
        src="~@/assets/mobile.png"
        @click="$router.push('/login')"
      >
      <div>登录/注册</div>
    </div>
     <div class="grid-nav" v-else>
<!-- 已登录 -->
<div class="userInfo header">
  <!-- 基本信息 -->
  <div class="base">
    <div class="left">
      <van-image
                 fit="cover"
                 :src="userList.photo"
                 class="avatar"
                 round
                 />
      <span class="name">{{userList.name}}</span>
    </div>
    <div class="right">
      <van-button type="default" size="mini" round >编辑资料</van-button>
    </div>
  </div>
  <!-- 粉丝、关注 -->
<div class="data">
<div class="item">
  <span>{{userList.art_count}}</span>
  <span>头条</span>
</div>
<div class="item">
  <span>{{userList.follow_count}}</span>
  <span>关注</span>
</div>
<div class="item">
  <span>{{userList.fans_count}}</span>
  <span>粉丝</span>
</div>
<div class="item">
  <span>{{userList.like_count}}</span>
  <span>获赞</span>
</div>
</div>
</div>
     </div>
     <van-grid :column-num="2">
  <van-grid-item  text="收藏" >
        <i slot="icon" class="font_family icon-shoucang"></i>
    <span class="text" slot="text">收藏</span>
    </van-grid-item>
  <van-grid-item  text="历史" >
            <i slot="icon" class="font_family icon-lishi"></i>
    <span class="text" slot="text">历史</span>
      </van-grid-item>
</van-grid>
    <van-cell title="消息通知" is-link url="" />
    <van-cell title="实名认证" is-link url="" />
    <van-cell title="用户反馈" is-link url="" />
    <van-cell title="小智同学" is-link url="" />
    <van-cell title="系统设置" is-link url="" />
    <van-button type="warning" block style="margin-bottom:111px" @click="quitLogin" v-show="user">退出登录</van-button>
</div>
</template>

<script >
import { mapState, mapMutations } from 'vuex'
import { getUserInfo } from '@/api/user.js'
export default {
  data () {
    return {
      userList: {}
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    ...mapMutations(['saveUser']),
    quitLogin () {
      this.$dialog.confirm({
        message: '确认退出?'
      })
        .then(() => {
          this.saveUser(null)
          // on confirm
        })
        .catch(() => {
          // on cancel
        })
    },
    async getInfo () {
      try {
        const { data } = await getUserInfo()
        console.log(data.data)
        this.userList = data.data
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style lang='less' scoped>
.my-container {
  .mobile-img{
    opacity: 0.3;
    z-index: 99999999;
  }
 /deep/ .van-grid-item__content {
    background: none
  }
 /deep/ .van-cell{
     background: none
  }
  /deep/ .van-grid{
    font-size: 30px;
  }
  > .header {
    height: 361px;
    // background: url("~@/assets/banner.png") no-repeat;
    // background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .mobile-img {
      width: 132px;
      height: 132px;
    }
  }
  .grid-nav{
    color: lightcoral;
    // background: url("~@/assets/state.jpg") no-repeat;
    background-size: cover;
    // position: absolute;
    z-index: 11111111;
    .base{
      display: flex;
      justify-content: space-between;
        align-items: center;

      .left{
        display: flex;
        align-items: center;
        .right{
         /deep/ .van-button--mini{
            right: 20px !important;
          }
        }
        .name{
          font-size: 30px;
        }
        .avatar{
          margin-right: 23px;
          width: 132px;
          height: 132px;
        }
      }
    }
.data{
  margin-top: 20px;
  font-size: 30px;
  line-height: 50px;
  color: coral;
  display: flex;
  .item{
    display: flex;
    align-items: center;
    flex-direction:column;
    height: 131px;
    flex: 1;
  }
}
  }
}
</style>
