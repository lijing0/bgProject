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
        <!-- 商品详情 -->
        <main>
            <!-- 商品标题与价格 -->
            <section class="section01">
                <img class="pic1" :src="goodsList.img1" alt="">
                <img class="pic2" :src="goodsList.img2" alt="">
                <p class="tit">{{goodsList.tit}}</p>
                <p class="price">￥{{goodsList.price | toPrice}} <span>(此价格不与套装优惠同时享受)</span> </p>
            </section>
            <!-- 商品数量及属性 -->
            <section class="section02">
                <p class="sale">
                    促销：<span>满减</span>{{goodsList.sale}}<img :src="goodsList.aimg" alt="arrow">
                </p>
                <p class="count">
                    购买数量
                    <span>
                        <a class="a1" href="#">-</a><input type="text" placeholder="1"><a class="a2" href="#">+</a>
                    </span>
                </p>
                <div class="weight">
                    <p>商品属性<img :src="goodsList.aimg" alt="arrow"></p>
                    <div>规格<a href="#" class="first active">{{goodsList.weight1}}</a><a href="#">{{goodsList.weight2}}</a></div>
                </div>
            </section>
            <!-- 商品详情 -->
            <section class="section03">
                <h3>商品详情</h3>
                <img class="pic3" :src="goodsList.img3" alt="">
                <img class="pic4" :src="goodsList.img4" alt="">
                <img class="pic3" :src="goodsList.img5" alt="">
                <img class="pic3" :src="goodsList.img6" alt="">
                <img class="pic3" :src="goodsList.img7" alt="">
            </section>
            <!-- 商品评价 -->
            <section class="section04">
                <div class="assess">
                    <h3>{{goodsList.title}}</h3>
                    <p class="num">{{goodsList.num}}</p>
                    <p class="nice">{{goodsList.nice}}</p>
                    <ul class="list clearfix">
                        <li v-for="item in picList" :key='item.id'><img :src="item.img" alt=""></li>
                    </ul>
                    <time>{{goodsList.time}}</time>
                    <p class="more">
                        共1000+条评论<span>查看更多<i></i></span>
                    </p>
                </div>
            </section>
            <!-- 加购商品 -->
            <section class="section05 clearfix">
                <div class="left">
                    <img :src='cimg' alt="">
                    <p>购物车</p>
                </div> 
                <div class="right">
                    <input type="button" value="加入购物车" name="add">
                    <input type="submit" value="立即购买" name="buy">
                </div>
            </section>
        </main>
    </div>
</template>

<script>
export default {
    data(){
        return{
            headList:{
                img:require('../../assets/images/public/arrow.jpg'),
                tit:'商品详情'
            },
            goodsList:{
                img1:require('../../assets/images/detail_images/pic_1.jpg'),
                img2:require('../../assets/images/detail_images/pic_2.jpg'),
                tit:'娅芝贵妇素颜霜 贵妇膏神仙膏补水保湿懒人霜遮瑕珍珠膏',
                price:123,
                sale:'满2件9折；3件8折',
                aimg:require('../../assets/images/detail_images/arrow.jpg'),
                weight1:'30g',
                weight2:'5g',
                img3:require('../../assets/images/detail_images/pic_3.jpg'),
                img4:require('../../assets/images/detail_images/pic_4.jpg'),
                img5:require('../../assets/images/detail_images/pic_5.jpg'),
                img6:require('../../assets/images/detail_images/pic_6.jpg'),
                img7:require('../../assets/images/detail_images/pic_7.jpg'),
                title:'商品评价',
                num:'12454212',
                nice:'效果很好，物流到位，下次继续来！',
                time:'2020-01-13',
            },
            picList:[
                {
                    img:require('../../assets/images/detail_images/pic_8.jpg'),
                },
                {
                    img:require('../../assets/images/detail_images/pic_9.jpg'),
                },
                {
                    img:require('../../assets/images/detail_images/pic_10.jpg'),
                }
            ],
            cimg:require('../../assets/images/detail_images/shopcar.jpg'),
        }
    }
}
</script>

<style lang="" scoped>
    @import '../../assets/css/public.css';
    @import '../../assets/css/detail.css';
</style>