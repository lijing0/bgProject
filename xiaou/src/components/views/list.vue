<template>
    <div>
        <!-- 头部小U商城 -->
        <header class="header">
            <img class="pic1" @click='$router.go(-1)' :src="headList.img1" alt="right">
            <img class="pic2" :src="headList.img2" alt="logo">
                <span class="more">
                    <i></i>
                    <i></i>
                    <i></i>
                </span>
        </header>
        <!-- 搜索商品 -->
        <div class="search">
            <input type="text" placeholder="搜索商品"><img :src="searchimg" alt="">
        </div>
        <!-- 商品列表 -->
        <main class="main">
            <ul class="main-list">
                <li v-for="item in goodsList" :key='item.id'>
                    <a class="clearfix" href="#">
                        <img :src="item.img" alt="">
                        <div class="right">
                            <p class="tit">{{item.tit}}</p>
                            <p class="price">
                                ￥<span>{{item.price | toPrice}}</span>
                            </p>
                            <p class="discuss">{{item.discuss}}条评论</p>
                        </div>
                    </a>
                </li>
            </ul>
        </main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            headList:{
                img1:require('../../assets/images/list_images/arrow.jpg'),
                img2:require('../../assets/images/list_images/logo.jpg'),
            },
            searchimg:require('../../assets/images/list_images/search.jpg'),
            goodsList:[
                {
                    id:1,
                    img:require('../../assets/images/list_images/pic1.jpg'),
                    tit:'阿道夫修护滋养洗发香乳 洗发水 持久留香520ml*2瓶 旗舰店正品焕新升级款',
                    price:123,
                    discuss:'3625'
                },
                {
                    id:2,
                    img:require('../../assets/images/list_images/pic.jpg'),
                    tit:'滋源修护滋养洗发香乳 520ml*2瓶 ',
                    price:255,
                    discuss:'3625'
                },
                {
                    id:3,
                    img:require('../../assets/images/list_images/pic2.jpg'),
                    tit:'施华蔻修护滋养洗发香乳 洗发水 持久留香520ml*2瓶 旗舰店正品焕新升级款',
                    price:123,
                    discuss:'3625'
                },
                {
                    id:4,
                    img:require('../../assets/images/list_images/pic3.jpg'),
                    tit:'资生堂修护滋养洗发香乳 ',
                    price:223,
                    discuss:'3625'
                },
            ]
        };
    },
};
</script>

<style  lang="" scoped>
    @import '../../assets/css/public.css';
    @import '../../assets/css/list.css';
</style>
