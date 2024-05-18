<template>
    <div>
        <router-view></router-view>
        <van-tabbar route >
            <van-tabbar-item to="/friends" icon="friends-o">朋友圈</van-tabbar-item>
            <van-tabbar-item to="/messages" icon="chat-o">消息</van-tabbar-item>
            <van-tabbar-item to="/my" icon="user-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        name: 'Index'
    }
</script>

<style>

</style>