import {
  getMenuList,
  getroleList,
  getuserList,
<<<<<<< HEAD
  getcateList,
  getspecsList,
  getgoodsList
=======
  getcateList
>>>>>>> 5381473cc76cca9831e679cea40f9d7c7759a7e7
} from '../util/axios'

export default {
  //封装一个获取菜单列表
  getActionMenuList({
    commit
  }) {
    getMenuList({
        istree: 1
      })
      .then(res => {
        if (res.data.code == 200) {
          commit('reqMenuList', res.data.list)
        }
      })
  },
  //封装一个获取角色列表
  getActionRoleList({
    commit
  }) {
    getroleList()
      .then(res => {
        if (res.data.code == 200) {
          commit('reqRoleList', res.data.list)
        }
      })
  },
  //封装一个获取管理员列表
  getActionUserList({
    commit
  }, pageInfo) {
<<<<<<< HEAD
    getuserList(pageInfo)
      .then(res => {
=======
    // console.log(pageInfo, '分页信息')
    getuserList(pageInfo)
      .then(res => {
        // console.log(pageInfo, 'pageInfo')
        // console.log(res, '响应数据')
>>>>>>> 5381473cc76cca9831e679cea40f9d7c7759a7e7
        if (res.data.code == 200) {
          //针对返回的结果进行转化，目的就是转化null
          let list = []
          list = res.data.list == null ? [] : res.data.list
<<<<<<< HEAD
          commit('reqUserList', list)
=======
          commit('reqUserList', res.data.list)
>>>>>>> 5381473cc76cca9831e679cea40f9d7c7759a7e7
        }
      })
  },
  //封装一个获取商品分类列表
  getActionCateList({
    commit
  }) {
    getcateList({istree:1})
      .then(res => {
        if (res.data.code == 200) {
          commit('reqCateList', res.data.list)
        }
      })
  },
<<<<<<< HEAD
  //封装一个获取商品规格列表
  getActionSpecsList({
    commit
  }, pageInfo) {
    getspecsList(pageInfo)
      .then(res => {
        if (res.data.code == 200) {
          //针对返回的结果进行转化，目的就是转化null
          let list = []
          list = res.data.list == null ? [] : res.data.list
          commit('reqSpecsList', list)
        }
      })
  },
  //封装一个获取商品管理列表
  getActionGoodsList({
    commit
  }, pageInfo) {
    getgoodsList(pageInfo)
      .then(res => {
        if (res.data.code == 200) {
          //针对返回的结果进行转化，目的就是转化null
          let list = []
          list = res.data.list == null ? [] : res.data.list
          commit('reqGoodsList', list)
        }
      })
  },
=======
>>>>>>> 5381473cc76cca9831e679cea40f9d7c7759a7e7
}
