<template>
    <div>
        <!-- 二级路由出口 -->
        <router-view></router-view>
        <!-- 路由导航 -->
        <div class="fixed-menu">
            <div class="con">
                <nav class="nav">
                    <router-link activeClass='active' to="/home"><i class="i1"></i>首页</router-link>
                    <router-link activeClass='active' to="/car"><i class="i2"></i>购物车</router-link>
                    <router-link activeClass='active' to="/mine"><i class="i3"></i>我的</router-link>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
 
}
</script>

<style lang="" scoped>
@import '../../assets/css/public.css';
</style>