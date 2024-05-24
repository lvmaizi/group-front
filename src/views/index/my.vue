<template>
    <div style="height: 1000px;" class="gray-background">


        <van-cell is-link  style="height: 200px; padding-top: 70px;">
                <van-image class="my_photo" width="70" height="70" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
            <div class="my_name">我的名字</div>
            <div class="my_descript">我的签名</div>
            </van-cell>

            <div style="height: 10px;"></div>



            <van-cell title="足迹" is-link />

            <van-cell title="我的贴子" is-link />
            <van-cell title="圈子" is-link />
            <van-cell title="单元格" is-link />
            <van-cell title="设置" is-link />
    </div>
</template>

<script>
    export default {
        name: 'My'
    }
</script>

<style>

.gray-background {
  background-color: #fafafa; 
}


    .my_head{
        height: 100px;
 
    }
    .my_photo{
        float: left;
    }
    .my_name{
        width: 200px;
        padding-left: 20px;
        float: left;
        font-size: 14px;
        font-weight: 500;
    }
    .my_descript{
        width: 200px;
        font-size: 12px;
        font-weight: 300;
        padding-left: 20px;
        float: left;
    }

</style>