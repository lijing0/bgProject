<template>
    <div>
        <el-container>
<<<<<<< HEAD
            <el-header>XXX大型后台管理项目</el-header>
=======
            <el-header>XXX大型后台管理系统项目</el-header>
>>>>>>> 5381473cc76cca9831e679cea40f9d7c7759a7e7
            <el-container>
                <el-aside width="200px">
                    <v-nav></v-nav>
                </el-aside>
                <el-main>
                    <!-- 二级路由出口 -->
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import vNav from '../common/nav'
export default {
    data() {
        return {}
    },
    components:{
        vNav
    }
}
</script>

<style  lang="stylus" scoped>
@import '../../stylus/index.styl';

.el-header {
    background-color: $bgColor;
    color: #333;
    line-height 60px
    color  #fff
}

</style>
