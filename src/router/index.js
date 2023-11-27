import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '@/views/Register.vue'
import LoginView from '@/views/Login.vue'
import IndexView from '@/views/Index.vue'
import MovieDetail from '@/views/MovieDetail.vue'
import SearchResult from '@/views/SearchResult.vue'
import UserCenter from '@/views/UserCenter.vue'
import UserInfo from '@/views/user/UserInfo.vue'
import BrowsingHistory from '@/views/user/BrowsingHistory.vue'
import ChangePassword from '@/views/user/ChangePassword.vue'
import EditMessage from '@/views/user/EditMessage.vue'
import Statistic from "../views/user/Statistic.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/index',
      name: 'index',
      component: IndexView
    },
    {
      path: '/moviedetail/:id',
      name: 'moviedetail',
      component: MovieDetail
    },
    {
      path: '/searchresult',
      name: 'searchresult',
      component: SearchResult
    },
    {
      path: '/usercenter',
      name: 'usercenter',
      component: UserCenter,
      children:[
        {
          path: 'userinfo',
          name: 'userinfo',
          component: UserInfo
        },
        {
          path: 'browsinghistory',
          name: 'browsinghistory',
          component: BrowsingHistory
        },
        {
          path: 'statistics',
          name: 'statistics',
          component: Statistic
        },
        {
          path: 'changepassword',
          name: 'changepassword',
          component: ChangePassword
        },
        {
          path: 'editmessage',
          name: 'editmessage',
          component: EditMessage
        }
      ]
    },
  //   {
  //     name: "UserInfo",
  //     path: "/UserInfo",
  //     children:[
  //   {   path:"/EditMessage",
  //       name:"EditMessage",
  //       component:EditMessage,
  //   },
  //   {
  //       path:"/ChangePassword",
  //       name:"ChangePassword",
  //       component:ChangePassword,
  //   },
  //   {    path:"/EditMessage",
  //       name:"EditMessage",
  //       component:EditMessage,
  //   },
  //     ],
  //     component: UserInfo,
  // },

  // {
  //     name: "BrowsingHistory",
  //     path: "/BrowsingHistory",
  //     component: BrowsingHistory
  // },
  ]
})

export default router
