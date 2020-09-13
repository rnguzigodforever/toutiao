<template>
<div>
  123
    <van-cell class="article-item">
<div slot="title">{{article.title}}</div>
<div slot="label">
  <div>
  <span>{{article.aut_name}}</span>
  <span>{{article.comm_count}}</span>
  <span>{{article.pubdate}}</span>
  </div>
  </div>
    </van-cell>

<!-- {{this.article}} -->
</div>
</template>

<script >
export default {
  props: ['article'],
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang='less' scoped>

</style>
