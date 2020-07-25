<template>
    <div>
<<<<<<< HEAD
        <el-table :data="mList" border style="width: 100%">
            <el-table-column prop="uid" label="用户编号"></el-table-column>
            <el-table-column prop="nickname" label="昵称"></el-table-column>
            <el-table-column prop="phone" label="手机号"></el-table-column>
=======
        <el-table
            :data="getStateMenuList"
            border
            style="width: 100%"
            row-key="id"
            :tree-props="{children: 'children'}"
        >
            <el-table-column prop="id" label="用户编号"></el-table-column>
            <el-table-column prop="title" label="昵称"></el-table-column>
            <el-table-column prop="pid" label="手机号"></el-table-column>
>>>>>>> e690d598025a76903db44d1bd40be9cb7c928883
            <el-table-column prop="status" label="状态">
                <template slot-scope="item">
                    <el-tag v-if="item.row.status==1" type="success">启动</el-tag>
                    <el-tag v-if="item.row.status==2" type="danger">禁用</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="180">
                <template slot-scope="item">
<<<<<<< HEAD
                    <el-button size="small" type="primary" @click="update(item.row.uid)">编辑</el-button>
=======
                    <el-button size="small" type="primary" @click="update(item.row.id)">编辑</el-button>
                    <el-button size="small" type="danger" @click="del(item.row.id)">删除</el-button>
>>>>>>> e690d598025a76903db44d1bd40be9cb7c928883
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
<<<<<<< HEAD
//引入用户接口
import { getmemberList } from '../../util/axios'
export default {
    data() {
        return {
            mList:[]
        }
    },
    mounted() {
        //组件一加载就调取会员接口
        this.getList()
    },
    methods: {
        //封装一个获取会员列表事件
        getList() {
            getmemberList().then((res) => {
                console.log(res, '会员列表')
                if(res.data.code==200){
                    this.mList = res.data.list
                }
            })
        },

        //点击添加按钮修改父组件数据
        update(id) {
            this.$emit('edit', {
                isAdd: false,
                dialogIsShow: true,
                id
            })
        },
    },
=======
//引入菜单接口
import { getMenuDelete } from '../../util/axios'
//调取辅助性函数
import { mapActions, mapGetters } from 'vuex'
export default {
    computed: {
        //计算属性
        ...mapGetters(['getStateMenuList'])
    },
    mounted() {
        //组件一加载就调取菜单接口
        //触发才调取vuex中的菜单列表
        this.getActionMenuList()
    },
    methods: {
        //封装一个获取菜单列表事件
        ...mapActions(['getActionMenuList']),
        //点击添加按钮修改父组件数据
        update(id){
            this.$emit('edit',{
                isAdd:false,
                dialogIsShow:true,
                id
            })
        },
        //删除事件
        del(id) {
            this.$confirm('你确定要删除这条数据吗', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
                .then(() => {
                    //调取删除逻辑
                    getMenuDelete({ id }).then(res => {
                        if (res.data.code == 200) {
                            //重新调取接口列表
                            this.getActionMenuList()
                            this.$message.success(res.data.msg)
                        } else {
                            this.$message.error(res.data.msg)
                        }
                    })
                })
                .catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    })
                })
        }
    }
>>>>>>> e690d598025a76903db44d1bd40be9cb7c928883
}
</script>

<style  lang="" scoped>
</style>
