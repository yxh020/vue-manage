import router from './index'
import { getRole } from '@/utils/auth'
import { message } from 'ant-design-vue'

router.beforeEach((to,from,next) =>{
    const role = getRole()
    if(!role){
        // 未登录，去登录
        if(to.name != 'login'){
            message.warning('未登录，请先登录！');
            next({path:'login'})
        }else{
            next()
        }
    }else{
        // 已经登录， 路由的访问权限
        if(to.name != 'login'){
            next()
        }else{
            next(from.fullPath)
        }
    }
})