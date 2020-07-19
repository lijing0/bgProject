<template>
    <div class="container">
        <!-- 商品分类  头部商品分类 -->
        <div class="header">
            <div class="wrap">
                <a href="#"><go-back></go-back></a>
                <h2>{{headList.tit}}</h2>
                <div class="points">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    <!-- 商品分类详情 -->
        <main class="main clearfix">
            <ul class="nav">
                <!-- <li class="first active"><a href="#">施华蔻</a></li> -->
                <li v-for='item in navList' :key='item.id'><a href="#">{{item.tit}}</a></li>
            </ul>
            <div class="goods">
                <h2 class="firsth">{{titleList1.tit}}<a href="#">更多<img :src="titleList1.img" alt=""></a></h2>
                <ul class="pro-list1">
                    <li v-for="item in prolist1" :key='item.id'>
                        <a href="#">
                            <img :src="item.img" alt="">
                            <p>{{item.tit}}</p>
                        </a>
                    </li>
                </ul>
                <h2>{{titleList2.tit}}<a href="#">更多<img :src="titleList2.img" alt=""></a></h2>
                <ul class="pro-list2">
                    <li v-for='item in prolist2' :key='item.id'>
                        <a href="#">
                            <img :src="item.img" alt="">
                            <p>{{item.tit}}</p>
                        </a>
                    </li>
                </ul>
            </div>
        </main>
   </div>
</template>

<script>
export default {
    data() {
        return {
            headList:{
                img:require('../../assets/images/public/arrow.jpg'),
                tit:'商品分类'
            },
            navList:[
                {
                    id:1,
                    tit:'施华蔻'
                },
                {
                    id:2,
                    tit:'沙宣'
                },
                {
                    id:3,
                    tit:'欧莱雅'
                },
                {
                    id:4,
                    tit:'潘婷'
                },
                {
                    id:5,
                    tit:'资生堂'
                },
                {
                    id:6,
                    tit:'阿道夫'
                },
                {
                    id:7,
                    tit:'卡诗'
                },
                {
                    id:8,
                    tit:'海飞丝'
                },
                {
                    id:9,
                    tit:'资生堂'
                },
            ],
            titleList1:{
                    tit:'洗发类',
                    img:require('../../assets/images/public/right.jpg')
                },
            titleList2:    {
                    tit:'染发类',
                    img:require('../../assets/images/public/right.jpg')
                },
            prolist1:[
                {
                    id:1,
                    img:require('../../assets/images/classify/shop_1.jpg'),
                    tit:'护亮泽洗发水'
                },
                {
                    id:2,
                    img:require('../../assets/images/classify/shop_3.jpg'),
                    tit:'滋养洗发水'
                },
                {
                    id:3,
                    img:require('../../assets/images/classify/shop_4.jpg'),
                    tit:'柔顺洗发露'
                },
                {
                    id:4,
                    img:require('../../assets/images/classify/shop_5.jpg'),
                    tit:'去屑洗发水'
                },
                {
                    id:5,
                    img:require('../../assets/images/classify/shop_6.jpg'),
                    tit:'柔顺洗发露'
                },
                {
                    id:6,
                    img:require('../../assets/images/classify/shop_7.jpg'),
                    tit:'焕彩洗发水'
                },
            ],
            prolist2:[
                {
                    id:1,
                    img:require('../../assets/images/classify/shop_2.jpg'),
                    tit:'护亮泽洗发水'
                },
                {
                    id:2,
                    img:require('../../assets/images/classify/shop_8.jpg'),
                    tit:'滋养洗发水'
                },
                {
                    id:3,
                    img:require('../../assets/images/classify/shop_9.jpg'),
                    tit:'柔顺洗发露'
                },
            ]
        };
    },
};
</script>

<style  lang="" scoped>
    @import '../../assets/css/public.css';
    @import '../../assets/css/classify.css'
</style>
