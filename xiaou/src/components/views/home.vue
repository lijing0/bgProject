<template>
    <div class="container">
        <!-- 头部 -->
        <div class="header">
            <!-- 小U商城头部搜索 -->
            <header class="header">
                <div class="wrap">
                    <h1>
                        <a href="#"><img :src="headerList.img" alt=""></a>
                    </h1>
                    <input type="text" placeholder="寻找商品">
                    <div class="points clearfix">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </header>
            <!-- 头部导航栏 -->
            <nav class="nav">
                <div class="wrap">
                    <ul>
                        <li v-for="item in navList " :key='item.id'>
                            <router-link to='/list'> {{item.msg}}</router-link>
                        </li>
                    </ul>
                    <span class="arrow">
                        <img :src="img1" alt="">
                    </span>
                </div>
            </nav>
            <!-- 头部广告图 -->
            <div class="banner">
                <a href="#">
                    <img :src="img2" alt="">
                </a>
            </div>
            <!-- 分类导航栏 -->
            <div class="icon-nav">
                <div v-for="item in iconList" :key="item.id"  class="item">
                    <a href="#">
                        <img :src="item.img" alt="">
                        <p>{{item.txt}}</p>
                    </a>
                </div>
            </div>
        </div>
        <div class="sale">
            <div class="left">
                <a href="#">
                    <h3><img :src="timeList.Timeimg" alt="">{{timeList.txt}}</h3>
                    <p class="des">{{timeList.des}}</p>
                    <p class="time"><span>19</span>:<span>30</span>:<span>29</span>
                    <i>{{timeList.i}}</i></p>
                    <img class="pic" :src="timeList.cimg" alt="">
                    <div class="price">￥<span>{{timeList.price}}</span></div>
                </a>
            </div>
            <div class="right">
                <div class="top">
                    <div class="top-left">
                        <h3>{{topList.title}}<span>折</span></h3>
                        <p class="des">{{topList.des}}</p>
                        <a href="#"><img :src="topList.img" alt=""></a>
                    </div>
                    <a href="#"><img class="top-right" :src="topList.img1" alt=""></a>
                </div>
                <div class="bottom clearfix">
                    <div class="left">
                        <h3>{{botLeft.tit}}</h3>
                        <p class="des">{{botLeft.des}}</p>
                        <a href="#"><img :src="botLeft.img" alt=""></a>
                    </div>
                    <div class="right">
                        <h3>{{botRight.tit}}</h3>
                        <p class="des">{{botRight.des}}</p>
                        <a href="#"><img :src="botRight.img" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="bar">
            <img :src="img" alt="">
        </div>
        <div class="recommend">
            <div class="wrap">
                <ul class="rec-nav">
                    <!-- 点击tab时，当前索引值等于标识位的值时，设为active -->
                    <li @click='select(id)' :class="[id==num?'active':'']" v-for='(item,id) in tabList' :key='item.id'><span href="#">{{item.title}}</span>
                    </li>
                </ul>
                <!-- 使点击的tab的内容显示，当标识位与索引值相同时，说明它是点击状态，让其对应内容显示 -->
                <div v-show='id==num' v-for='(item,id) in goodsList' :key='item.id' class="content">
                    <div v-for='list in item.detailList' :key='list.id' class="goods">
                        <router-link to='/goodsDetail' class="clearfix" href="#">
                            <img :src="list.img" alt="">
                            <div class="txt-right">
                                <p class="txt">{{list.txt}}</p>
                                <p class="price">￥<span>{{list.price}}</span></p>
                                <p class="sell">已售{{list.count}}件</p>
                                <p class="buy">立即抢购</p>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            headerList:{
                img:require('../../assets/images/index_images/logo.jpg'),
            },
            img1:require('../../assets/images/index_images/arrow.jpg'),
            img2:require('../../assets/images/index_images/banner.jpg'),
            navList:[
                {
                    id:1,
                    msg:'推荐'
                },
                {
                    id:2,
                    msg:'女装'
                },
                {
                    id:3,
                    msg:'鞋包'
                },
                {
                    id:4,
                    msg:'居家'
                },
                {
                    id:5,
                    msg:'母婴儿童'
                },
                {
                    id:6,
                    msg:'美食'
                },
                {
                    id:7,
                    msg:'箱包'
                },
                {
                    id:8,
                    msg:'日化'
                },
            ],
            iconList:[
                {
                    id:1,
                    img:require('../../assets/images/index_images/icon_1.jpg'),
                    txt:'限时抢购'
                },
                {
                    id:2,
                    img:require('../../assets/images/index_images/icon_2.jpg'),
                    txt:'积分商城'
                },
                {
                    id:3,
                    img:require('../../assets/images/index_images/icon_3.jpg'),
                    txt:'联系我们'
                },{
                    id:4,
                    img:require('../../assets/images/index_images/icon_4.jpg'),
                    txt:'商品分类'
                }
            ],
            timeList:{
                Timeimg:require('../../assets/images/index_images/timer.jpg'),
                txt:'限时秒杀',
                des:'每天零点场 好货秒不停',
                i:'秒杀',
                cimg:require('../../assets/images/index_images/shop_5.jpg'),
                price:'14.8'
            },
            topList:{
                title:'品牌上新',
                des:'每天9点 抢大牌',
                img:require('../../assets/images/index_images/brand.jpg'),
                img1:require('../../assets/images/index_images/shop_1.jpg'),
            },
            botLeft:{
                tit:'每日十件',
                des:'只为你选好货',
                img:require('../../assets/images/index_images/shop_2.jpg')
            },
            botRight:{
                tit:'拼啊',
                des:'超级好价拼团',
                img:require('../../assets/images/index_images/shop_3.jpg')
            },
            img:require('../../assets/images/index_images/bar.jpg'),
             num:0,//设置初始tab值为0
                tabList:[
                    {
                        id:1,
                        title:'热门推荐'
                    },
                    {
                        id:2,
                        title:'发现好货',
                    },
                    {
                        id:3,
                        title:'只看专场',
                    },
                    {
                        id:4,
                        title:'只看商品',
                    }
                ],
                goodsList:[
                    {
                        detailList:[
                                {
                                    img:require('../../assets/images/index_images/shop_4.jpg'),
                                    txt:'雅诗兰黛染发膏60ml',
                                    price:'123.00',
                                    count:800
                                },
                                {
                                    img:require('../../assets/images/index_images/shop_6.jpg'),
                                    txt:'雅诗兰黛染发膏60ml',
                                    price:'123.00',
                                    count:800
                                },
                                {
                                    img:require('../../assets/images/index_images/shop_7.jpg'),
                                    txt:'雅诗兰黛染发膏60ml',
                                    price:'123.00',
                                    count:800
                                }
                            ]
                    },
                    {
                        detailList:[
                                {
                                    img:require('../../assets/images/index_images/shop_4.jpg'),
                                    txt:'雅诗兰黛染发膏60ml',
                                    price:'123.00',
                                    count:800
                                },
                                {
                                    img:require('../../assets/images/index_images/shop_4.jpg'),
                                    txt:'雅诗兰黛染发膏60ml',
                                    price:'123.00',
                                    count:800
                                },
                                {
                                    img:require('../../assets/images/index_images/shop_4.jpg'),
                                    txt:'雅诗兰黛染发膏60ml',
                                    price:'123.00',
                                    count:800
                                }
                            ]
                    },
                    {
                        detailList:[
                                {
                                    img:require('../../assets/images/index_images/shop_6.jpg'),
                                    txt:'雅诗兰黛染发膏60ml',
                                    price:'123.00',
                                    count:800
                                },
                                {
                                    img:require('../../assets/images/index_images/shop_6.jpg'),
                                    txt:'雅诗兰黛染发膏60ml',
                                    price:'123.00',
                                    count:800
                                },
                                {
                                    img:require('../../assets/images/index_images/shop_6.jpg'),
                                    txt:'雅诗兰黛染发膏60ml',
                                    price:'123.00',
                                    count:800
                                }
                            ]
                    },
                    {
                        detailList:[
                                {
                                    img:require('../../assets/images/index_images/shop_7.jpg'),
                                    txt:'雅诗兰黛染发膏60ml',
                                    price:'123.00',
                                    count:800
                                },
                                {
                                    img:require('../../assets/images/index_images/shop_7.jpg'),
                                    txt:'雅诗兰黛染发膏60ml',
                                    price:'123.00',
                                    count:800
                                },
                                {
                                    img:require('../../assets/images/index_images/shop_7.jpg'),
                                    txt:'雅诗兰黛染发膏60ml',
                                    price:'123.00',
                                    count:800
                                }
                            ]
                    },
            ] ,

        }
    },
     methods:{
                // 点击事件
                select(id){
                    //点击的时候把索引传递给标识位num
                    this.num = id;
                }
            }
}
</script>

<style lang="" scoped>
    @import '../../assets/css/public.css';
    @import '../../assets/css/index.css';

</style>