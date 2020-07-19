<template>
    <div>
        <el-container>
            <el-header>xxx后台管理系统</el-header>
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
        return {

        };
    },
    components:{
        vNav
    }
};
</script>

<style  lang="stylus" scoped>
@import '../../stylus/index.styl';
    .el-header
        background-color $bgColor
        color #fff
        line-height 60px
        font-size 18px
</style>
