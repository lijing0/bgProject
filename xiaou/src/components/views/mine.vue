<template>
    <div>
        <!-- 公共头部商品分类 -->
    <header class="header-pub">
        <go-back></go-back>
        <span class="tit">{{headList.tit}}</span>
        <span class="more">
            <i></i>
            <i></i>
            <i></i>
        </span>
    </header>  
    <main>
    <!-- 页面顶部我的头像及每日签到 -->
        <section class="msg clearfix">
            <div class="pic"></div>
            <div class="mine-msg">
                <p class="name">{{userList.name}}</p>
                <p class="num">{{userList.num}}</p>
            </div>
            <a href="#" class="right">
                每日签到
            </a>
        </section>
        <!--全部订单，待付款，待收货  -->
        <ul class="pro-list">
            <li v-for='item in proList' :key='item.id'>
                <a href="#">
                    <img :src="item.img" alt="">
                    <p>{{item.tit}}</p>
                </a>
            </li>
        </ul>
        <!-- 我的列表（地址、钱包、优惠券、二维码。。。） -->
        <ul class="list">
            <li v-for='item in list' :key='item.id' class="clearfix">
                <a href="#">
                    <img class="pic-icon" :src="item.img1" alt="">
                    <span>{{item.tit}}</span>
                    <i>{{item.more}}</i>
                    <img class="pic-right" :src="item.img2" alt="">
                </a>
            </li>
        </ul>
    </main>
    </div>
</template>

<script>
export default {
    data(){
        return{
            headList:{
                img:require('../../assets/images/public/arrow.jpg'),
                tit:'我的订单'
            },
            userList:{
                name:'悠溯',
                num:'V1'
            },
            proList:[
                {
                    id:1,
                    img:require('../../assets/images/mine_images/icon_1.jpg'),
                    tit:'全部订单'
                },
                {
                    id:2,
                    img:require('../../assets/images/mine_images/icon_2.jpg'),
                    tit:'待付款'
                },
                {
                    id:3,
                    img:require('../../assets/images/mine_images/icon_3.jpg'),
                    tit:'待收货'
                }
            ],
            list:[
                {
                    id:1,
                    img1:require('../../assets/images/mine_images/icon_4.jpg'),
                    tit:'地址管理',
                    img2:require('../../assets/images/public/right.jpg')
                },
                {
                    id:2,
                    img1:require('../../assets/images/mine_images/icon_5.jpg'),
                    tit:'我的钱包',
                    more:'200余额',
                    img2:require('../../assets/images/public/right.jpg')
                },
                {
                    id:3,
                    img1:require('../../assets/images/mine_images/icon_6.jpg'),
                    tit:'我的优惠劵',
                    img2:require('../../assets/images/public/right.jpg')
                },
                {
                    id:4,
                    img1:require('../../assets/images/mine_images/icon_7.jpg'),
                    tit:'我的二维码',
                    img2:require('../../assets/images/public/right.jpg')
                },
                {
                    id:5,
                    img1:require('../../assets/images/mine_images/icon_8.jpg'),
                    tit:'我的小伙伴',
                    img2:require('../../assets/images/public/right.jpg')
                },
            ]
        }
    }
}
</script>

<style lang="" scoped>
    @import '../../assets/css/mine.css';
</style>