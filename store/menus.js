export const state = () => ({
  isActive: false
})

export const getters = {
  isActive(state) {
    return state.isActive
  },
}

export const mutations = {
  isActive(state, params) {
    state.isActive = params.isActive
  },
}

export const actions = {
  isActive(context, params) {
    context.commit('isActive', params)
  },
}
