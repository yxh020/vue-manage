import { login } from '@/api/index'
import { collectRoutes } from '@/utils/permission'

const state = {
    sidebar:[],
}

const mutations = {
    SET_SIDEBAR: (state, value) => {
        state.sidebar = value
    },
}

const actions = {
    login(content, data) {
        return new Promise((resolve, reject) => {
            login(data).then(response => {
                collectRoutes(response.data.role)
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}