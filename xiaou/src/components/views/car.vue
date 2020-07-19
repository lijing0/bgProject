<template>
    <div>
         <!-- .toFixed(2)  数值的方法 添加小数点位数 number.toFixed(n) -->
            <!-- 公共头部商品分类 -->
        <header class="header-pub">
            <go-back></go-back>
            <span class="tit">{{arrowList.tit}}</span>
            <span class="more">
                <i></i>
                <i></i>
                <i></i>
            </span>
        </header> 
        <!-- 购物车商品列表 -->
        <ul class="list">
            <li class="select clearfix">
                <a href="#">
                    <div class="left">
                        <i></i>
                        <img :src="carList[0].img1" alt="">
                    </div> 
                    <div class="center">
                        <p class="name">{{carList[0].name}}</p>
                        <p class="weight">
                            规格：{{carList[0].weight}}
                        </p>
                        <p class="price">
                            ￥{{carList[0].price | toPrice}}
                        </p>
                    </div>
                    <div class="right">
                        <a class="a1" href="#"><b>-</b></a>
                        <input type="text" placeholder="1" name="num">
                        <a class="a2" href="#"><b>+</b></a>
                    </div>
                    <div class="delate">
                        <a href="#">删除</a>
                    </div>
                </a>
            </li>
            <li class="del clearfix">
                <a href="#">
                    <div class="left">
                        <i></i>
                        <img :src="carList[1].img2" alt="">
                    </div> 
                    <div class="center">
                        <p class="name">{{carList[1].name}}</p>
                        <p class="weight">
                            规格：{{carList[1].weight}}
                        </p>
                        <p class="price">
                            ￥{{carList[1].price | toPrice}}
                        </p>
                    </div>
                    <div class="right">
                        <a class="a1" href="#"><b>-</b></a>
                        <input type="text" placeholder="1" name="num">
                        <a class="a2" href="#"><b>+</b></a>
                    </div>
                    <div class="delate">
                        <a href="#">删除</a>
                    </div>
                </a>
            </li>
            <li class="clearfix">
                <a href="#">
                    <div class="left">
                        <i></i>
                        <img :src="carList[2].img3" alt="">
                    </div> 
                    <div class="center">
                        <p class="name">{{carList[2].name}}</p>
                        <p class="weight">
                            规格：{{carList[2].weight}}
                        </p>
                        <p class="price">
                            ￥{{carList[2].price | toPrice}}
                        </p>
                    </div>
                    <div class="right">
                        <a class="a1" href="#"><b>-</b></a>
                        <input type="text" placeholder="1" name="num">
                        <a class="a2" href="#"><b>+</b></a>
                    </div>
                    <div class="delate">
                        <a href="#">删除</a>
                    </div>
                </a>
            </li>
        
        </ul>
        <div class="con-center">
            <ul class="list last-list">
                <li class="last select clearfix">
                    <div class="left">
                        <i></i>全选
                    </div> 
                    <div class="last-center">
                        <p class="sum">总计：<span>163.00</span></p>
                        <p class="tit">不含运费，已优惠￥0.00</p>
                    </div>
                    <div class="last-right">
                        <router-link to='/carDetail'>去结算（2件）</router-link> 
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            arrowList:{
                img:require('../../assets/images/public/arrow.jpg'),
                tit:'购物车'
            },
            carList:[
                {
                img1:require('../../assets/images/shoping_car_images/shop1.jpg'),
                name:'欧莱雅面霜',
                weight:'50g',
                price:123
                },
                {
                img2:require('../../assets/images/shoping_car_images/shop2.jpg'),
                name:'雅诗兰黛护手霜',
                weight:'50g',
                price:26
                },
                {
                img3:require('../../assets/images/shoping_car_images/shop3.jpg'),
                name:'雅诗兰黛素颜霜',
                weight:'50g',
                price:226
                },
            ]
        }
    },
    
}
</script>

<style lang="" scoped>
    @import '../../assets/css/shopping-car.css'
</style>