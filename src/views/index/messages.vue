<template>
    <div class="gray-background">
        <div>
            <van-swipe-cell>
                    <van-cell>
                    <MessageItem v-for="item in groupList" :key="item.uuid" :item="item"></MessageItem>
                    </van-cell>
                    <template #right>
                    <van-button square text="删除" type="danger" style="height: 100%;" />
                    </template>
                </van-swipe-cell>
                <van-swipe-cell>
                    <van-cell>
                    <MessageItem v-for="item in groupList" :key="item.uuid" :item="item"></MessageItem>
                    </van-cell>
                    <template #right>
                    <van-button square text="删除" type="danger" style="height: 100%;" />
                    </template>
                </van-swipe-cell>
                <van-swipe-cell>
                    <van-cell>
                    <MessageItem v-for="item in groupList" :key="item.uuid" :item="item"></MessageItem>
                    </van-cell>
                    <template #right>
                    <van-button square text="删除" type="danger" style="height: 100%;" />
                    </template>
                </van-swipe-cell>
        </div>
        
    </div>
</template>

<script>
    import {get_list} from '@/api/group'
    import MessageItem from '@/components/messageItem'

    export default {
        name: 'Messages',
        components: { MessageItem },
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

</style>