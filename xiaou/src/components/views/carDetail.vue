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
        <!-- 确认订单 -->
        <main>
            <!-- 收货地址 -->
            <section class="address clearfix">
                <div class="left">
                    <a href="#">
                        <p class="name">
                            收货人：{{addressList.user}} <span>{{addressList.num}}</span>
                        </p>
                        <p class="adr clearfix"><span>收货地址</span>：{{addressList.address}}</p>
                    </a>
                </div>
                <img :src="addressList.img" alt="">
            </section>
            <!-- 商品价格，数量，配送方式 -->
            <section class="goods">
                <div class="pic clearfix">
                    <a href="#">
                        <div class="left">
                            <img :src="goodsList.img" alt="">
                            <p class="name">{{goodsList.name}}</p>
                            <p class="weight">
                                规格：{{goodsList.weight}}
                            </p>
                        </div>
                        <div class="right">
                            ￥<span>{{goodsList.price | toPrice}}</span>
                        </div>
                    </a>
                </div>
                <div class="count clearfix">
                    <span>购买数量：</span>
                    <div class="count-right">
                        <a class="a1" href="#"><i>-</i></a>
                        <input type="text" placeholder="1">
                        <a class="a2" href="#"><i>+</i></a>
                    </div>
                </div>
                <div class="send">
                    <a href="#"> 配送方式<span>XX快递</span></a>
                </div>
            </section>
            <!-- 优惠券，使用积分 -->
            <section class="num">
                <p>
                    <a href="#">优惠券 <span>无可用</span></a> 
                </p>
                <p>
                    使用积分
                    <input type="text" placeholder="输入积分">
                    <input type="submit" value="使用">
                    <i>可用<b>50</b>积分</i>
                </p>
            </section>
            <!-- 商品金额运费、提交订单等 -->
            <div class="money">
                <ul class="add">
                    <li class="clearfix">
                        <span>商品金额</span>
                        <i>￥68.00</i>
                    </li>
                    <li class="clearfix">
                        <span>运费</span>
                        <i>+￥0.00</i>
                    </li>
                    <li class="clearfix">
                        <span>优惠券</span>
                        <i>-￥0.00</i>
                    </li>
                    <li class="clearfix">
                        <span>会员优惠</span>
                        <i>-￥0.00</i>
                    </li>
                    <li class="clearfix">
                        <span>积分抵扣</span>
                        <i>-￥0.00</i>
                    </li>
                </ul>
                <div class="sum">
                    <span>实付金额：<i>￥68.00</i></span>
                    <input type="submit" name="submit" value="提交订单">
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    data(){
        return{
            headList:{
                img:require('../../assets/images/public/arrow.jpg'),
                tit:'确认订单'
            },
            addressList:{
                user:'YouSu ',
                num:'10000000000',
                address:'北京市海淀区隐泉路清林苑6号楼中公优就业总部3层',
                img:require('../../assets/images/order/arrow.jpg'),
            },
            goodsList:{
                img:require('../../assets/images//order/shop.jpg'),
                name:'雅诗兰黛护肤霜',
                weight:'50g',
                price:120
            }
        }
    }
}
</script>

<style lang="" scoped>
    @import '../../assets/css/public.css';
    @import '../../assets/css/order.css'
</style>