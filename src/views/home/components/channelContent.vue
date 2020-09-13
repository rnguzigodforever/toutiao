/* eslint-disable vue/valid-v-for */
<template>
<div class="articleList">
<!-- 内容组件 -->
<!-- {{channels.id}} -->
<van-pull-refresh v-model="refreshing" @refresh="onRefresh"
      success-text="刷新成功"
 style="margin-bottom:45px">
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
  <articleItem
  v-for="(article,index) in list" :key="index"   :article='article'
  />
  </van-list>
</van-pull-refresh>
</div>
</template>

<script >
import { artList } from '@/api/article.js'
import articleItem from '../../../components/articleItem/index'

export default {
  props: ['channels'],
  components: {
    articleItem
  },
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      isLoading: false,
      refreshing: false,
      id: this.channels.id,
      timestamp: null
    }
  },

  created () {
    // this.getArticleList(this.id)
  },
  methods: {
    async onLoad () {
      try {
        const { data } = await artList({ channel_id: this.channels.id, timestamp: Date.now(), with_top: 1 })
        const { results } = data.data
        this.list.push(...results)
        this.loading = false
        if (results.length) {
          this.timestamp = data.data.pre_timestamp
        } else {
          this.finished = true
        }
        console.log(results)
      } catch (error) {
        console.log(error)
      }
    },
    async onRefresh () {
      try {
        const { data } = await artList({ channel_id: this.channels.id, timestamp: Date.now(), with_top: 1 })
        const { results } = data.data
        this.list.unshift(...results)
        this.refreshing = false
        this.loading = false
      } catch (error) {
        console.log(error)
      }
    }
    // async getArticleList (id) {
    //   try {
    //     const { data } = await artList({ channel_id: id, timestamp: this.timestamp || Date.now(), with_top: 1 })
    //     const { results } = data.data
    //     this.list.push(...results)
    //     this.loading = false
    //     if (results.length) {
    //       this.timestamp = data.data.pre_timestamp
    //     } else {
    //       this.finished = true
    //     }
    //     console.log(results)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
  }
}
</script>

<style lang='less' scoped>
/deep/.van-tabs__nav{
    background-color: rgba(255, 255, 255, 0.5);
}
.van-pull-refresh{
/deep/   .van-cell{
       background: none;
   }
}
.articleList{
height: 79vh;
overflow-y:auto ;
}
</style>
