<template>
    <div>
        <van-notice-bar left-icon="volume-o" text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"/>


    </div>
</template>

<script>

    import {get_list} from '@/api/group'

    export default {
        name: 'Friends',
        created() {
            console.log('sssss')
            this.getll()
        },
        methods: {
            async getll() {
                await get_list()
            }
        }
    }
</script>

<style>

</style>