import {
  getMenuList,
  getroleList,
  getuserList,
  getcateList,
  getspecsList,
<<<<<<< HEAD
  getgoodsList,
  getseckList,
  getbannerList
=======
  getgoodsList
>>>>>>> e690d598025a76903db44d1bd40be9cb7c928883
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
    getuserList(pageInfo)
      .then(res => {
        if (res.data.code == 200) {
          //针对返回的结果进行转化，目的就是转化null
          let list = []
          list = res.data.list == null ? [] : res.data.list
          commit('reqUserList', list)
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
<<<<<<< HEAD
    //封装一个获取秒杀列表
    getActionSeckList({
        commit
      }) {
        getseckList()
          .then(res => {
            if (res.data.code == 200) {
              commit('reqSeckList', res.data.list)
            }
          })
      },
       //封装一个获取轮播图列表
       getActionBannerList({
         commit
       }) {
         getbannerList()
           .then(res => {
             if (res.data.code == 200) {
               commit('reqBannerList', res.data.list)
             }
           })
       },
=======
>>>>>>> e690d598025a76903db44d1bd40be9cb7c928883
}
