<template>
    <div>
        <el-dialog
            :title="isAdd ? '添加商品分类':'编辑商品分类'"
            :visible.sync="dialogIsShow"
            center
            :before-close="cancel"
        >
            <el-form :model="cateInfo" :rules="rules" ref="cateInfo">
                <el-form-item label="标题" :label-width="formLabelWidth" prop="catename">
                    <el-input v-model="cateInfo.catename"></el-input>
                </el-form-item>
                <el-form-item label="图片：" :label-width="formLabelWidth">
                    <!-- 
                        上传图片
                        auto-upload	是否在选取文件后立即进行上传
                        action	必选参数，上传的地址
                    -->
                    <el-upload
                        action="#"
                        list-type="picture-card"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :file-list="fileList"
                        :auto-upload="false"
                        :on-change="changeInfo"
                        :limit='1'
                        :on-exceed="handleExceed"
                    >
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt />
                    </el-dialog>
                </el-form-item>
                <el-form-item label="状态：" :label-width="formLabelWidth">
                    <el-radio v-model="cateInfo.status" label="1">启用</el-radio>
                    <el-radio v-model="cateInfo.status" label="2">禁用</el-radio>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="cancel">取 消</el-button>
                <el-button v-if="isAdd" type="primary" @click="subInfo('cateInfo')">新 增</el-button>
                <el-button v-else type="primary" @click="subInfo('cateInfo')">更 新</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
//引入菜单接口
import { getMenuAdd, getMenuEdit, getMenuInfo } from '../../util/axios'
//调取辅助性函数
import { mapActions, mapGetters } from 'vuex'
export default {
    props: ['addInfo'],
    data() {
        return {
            formLabelWidth: '100px', //label宽度
            menuInfo: {
                pid: 0, //上级分类编号
                title: '', //菜单名称
                icon: '', //图标
                url: '', //菜单地址
                type: '1', //类型1目录2菜单
                status: '1'
            },
            rules: {
                title: [
                    {
                        required: true,
                        message: '请输入菜单名称',
                        trigger: 'blur'
                    },
                    {
                        min: 2,
                        max: 6,
                        message: '长度在 2 到 6 个字符',
                        trigger: 'blur'
                    }
                ],
                pid: [
                    {
                        required: true,
                        message: '请选择菜单',
                        trigger: 'blur'
                    }
                ]
            }
        }
    },
    computed: {
        //计算属性
        ...mapGetters(['getStateMenuList'])
    },
    methods: {
        //封装一个获取菜单列表事件
        ...mapActions(['getActionMenuList']),
        //关闭弹框事件
        cancel() {
            this.reset()
            this.$emit('cancel', false)
        },
        //重置输入内容
        reset() {
            this.menuInfo = {
                pid: 0, //上级分类编号
                title: '', //菜单名称
                icon: '', //图标
                url: '', //菜单地址
                type: '1', //类型1目录2菜单
                status: '1' //1是启用 2是禁用
            }
        },
        //点击编辑按钮出现弹框并携带数据
        update(id) {
            //给编辑id赋值
            this.editId = id
            //调取菜单查询一条数据
            getMenuInfo({ id }).then(res => {
                if (res.data.code == 200) {
                    console.log(res)
                    this.menuInfo = res.data.list
                    this.menuInfo.type = this.menuInfo.type.toString()
                    this.menuInfo.status = this.menuInfo.status.toString()
                }
            })
        },
        //确定添加或者更新事件
        subInfo(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    //根据isAdd状态去判断执行接口
                    if (this.addInfo.isAdd) {
                        //调取添加接口
                        getMenuAdd(this.menuInfo).then(res => {
                            if (res.data.code == 200) {
                                //关闭弹框 清空输入框
                                this.cancel()
                                //添加成功重新查询列表
                                this.getActionMenuList()
                                this.$message.success(res.data.msg)
                            } else if (res.data.code == 500) {
                                this.$message.warning(res.data.msg)
                            } else {
                                this.$message.error(res.data.msg)
                            }
                        })
                    } else {
                        let data = this.menuInfo
                        data.id = this.editId
                        //调取更新接口
                        getMenuEdit(data).then(res => {
                            if (res.data.code == 200) {
                                //关闭弹框 清空输入框
                                this.cancel()
                                //添加成功重新查询列表
                                this.getActionMenuList()
                                this.$message.success(res.data.msg)
                            } else if (res.data.code == 500) {
                                this.$message.warning(res.data.msg)
                            } else {
                                this.$message.error(res.data.msg)
                            }
                        })
                    }
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        }
    }
}
</script>

<style  lang="" scoped>
</style>
