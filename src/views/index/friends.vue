<template>
    <div class="gray-background">

        <div>
            
            <van-cell-group inset>
                <div class="van-ellipsis location_div" style="">
                    <van-icon name="location" />
                    <span>    爱的佳苑三七啊水水水水</span>
                </div>

            </van-cell-group>
<!-- 
            <van-cell-group inset>
                <van-search placeholder="请输入搜索关键词" />

            </van-cell-group> -->

            <van-cell-group inset>
                <!-- <p style="padding-left: 10px; margin-top: 10px; margin-bottom: 5px; font-style: normal; font-size: small; font-weight: 600;">我的足迹</p> -->

                <div class="my_trace" style="padding: 10px 10px 10px 10px;">


                    <van-badge style="margin-right: 10px;" :content="5" color="#1989fa">
                        <div class="child" /> 
                        <div class="van-ellipsis" style="width: 70px; font-size: small;">申城间爱哈哈哈搜索</div> 

                    </van-badge>

                    <van-badge style="margin-right: 10px;" :content="5" color="#1989fa">
                        <div class="child" /> 
                        <div class="van-ellipsis" style="width: 70px; font-size: small;">申城间爱哈哈哈搜索</div> 

                    </van-badge>

                    <van-badge style="margin-right: 10px;" :content="5" color="#1989fa">
                        <div class="child" /> 
                        <div class="van-ellipsis" style="width: 70px; font-size: small;">申城间爱哈哈哈搜索</div> 

                    </van-badge>

                    <van-badge style="margin-right: 10px;" :content="5" color="#1989fa">
                        <div class="child" /> 
                        <div class="van-ellipsis" style="width: 70px; font-size: small;">申城间爱哈哈哈搜索</div> 

                    </van-badge>

                    <van-badge style="margin-right: 10px;" :content="5" color="#1989fa">
                        <div class="child" /> 
                        <div class="van-ellipsis" style="width: 70px; font-size: small;">申城间爱哈哈哈搜索</div> 

                    </van-badge>

                </div>

        

            </van-cell-group>
            
        </div>

        <van-divider :style="{ padding: '0px 0px 0px 0px' }" ></van-divider>

        <div>
            <van-cell-group inset>
                <van-cell>
                    <PostsItem v-for="item in groupList" :key="item.uuid" :item="item"></PostsItem>
                </van-cell>
                <van-cell>
                    <PostsItem v-for="item in groupList" :key="item.uuid" :item="item"></PostsItem>
                </van-cell>
                <van-cell>
                    <PostsItem v-for="item in groupList" :key="item.uuid" :item="item"></PostsItem>
                </van-cell>
            </van-cell-group>
        </div>

    </div>
</template>

<script>

    import {get_list} from '@/api/group'
    import PostsItem from '@/components/postsItem.vue'

    export default {
        components: { PostsItem },
        name: 'Friends',
        data() {
            return {
                groupList: []
            };
        },
        async created() {
            const pageData = await get_list()
            this.groupList = pageData['data']
            console.log(pageData)
            console.log(this.groupList)
        },
        methods: {
        }
    }
</script>

<style>
.child {
    width: 70px;
    height:70px;
    background: #f2f3f5;
    border-radius: 10px;
  }

    .my_trace {
        margin-top: 10px;
        height: 100px;
        overflow-y: hidden;
        overflow-x: auto;
        white-space: nowrap; 
    }


    .location_div{
        height: 30px; width: 300px; line-height: 30px; font-size: 12px; padding-left: 10px;
        font-weight: 300;
    }
</style>