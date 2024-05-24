<template>
    <div>
      <!-- <van-card :desc="item.signature" :title="item.name" :thumb="getImage(item.avatar.fileUuid)"/> -->
        <div class="photo">
          <img :src="getImage(item.avatar.fileUuid)">
          <!-- <van-image width="50" height="50" :src="getImage(item.avatar.fileUuid)"/> -->
        </div>
        <div class="posts_text">
            <div class="van-ellipsis title">这是一段最多显示一行的文字，多余的内容会被省略</div>
            <div class="van-multi-ellipsis--l2 content">{{item.signature}}{{item.signature}}{{item.signature}}</div>
        </div>
        <div class="van-ellipsis location">这是一段最多显示一行的文字，多余的内容会被省略</div>

    </div>
</template>

<script>

import getImage from '@/utils/file'

export default {
  name: 'PostsItem',
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {
      getImage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

  .photo{
    width:50px;
    height:50px;
    margin-right: 10px;
    margin-top: 10px;
    float: left;
    background-color: aquamarine;
  }

  .posts_text{
    width: 250px;
    height: 80px;
    float: left;
    // background-color: red;
  }

  .title{
    font-size: 13px;
    margin-top: 5px;
    margin-bottom: 5px;
    font-weight: 500;
  }

  .content{
    font-size: 12px;
    line-height:15px;
  }

  .location{
    margin-top: 5px;
    float: left;
    font-size: 9px;
  }
</style>
