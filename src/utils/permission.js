import router,{asyncRoutes} from '@/router'
import store from "@/store"
import { getRole } from '@/utils/auth'


export function collectRoutes(role){
    if(!role && !getRole()){
        return
    }else{
        role = getRole()
    }
    const routes = filterRoute(role,asyncRoutes)
    addRoutes(router.addRoute,'layout',routes)
    // 存储到vuex
    const mainContainer = router.options.routes.find(v => v.name === 'layout')
    const children = JSON.parse(JSON.stringify(mainContainer.children))
    children.push(...routes)
    store.commit('permission/SET_SIDEBAR',children)
}

/**
 * 
 * @param {String} role 身份角色
 * @param {Array} asyncRoutes 所有异步路由
 * @returns {Array} realRoutes 过滤之后符合条件的路由
 */

export function filterRoute(role,asyncRoutes){
    const realRoutes = asyncRoutes
    return realRoutes;
}


/**
 * @param {Function} addRoute addRoute函数
 * @param {String} parentName 应该被加入到的父级路由记录
 * @param {Array} routers 将要添加的所有路由
 */
export function addRoutes(addRoute,parentName,routers) {
    routers.forEach(v => {
        addRoute(parentName,v)
    })
}