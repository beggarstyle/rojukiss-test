export const state = () => ({
  anchor: [
    'sectionBanners',
    'sectionWhoWeAre',
    'sectionOurBrand',
    'sectionInnovation',
    'sectionNews',
    'sectionInvestors',
    'sectionWorkWithUs',
  ],
  currentAnchor: 'sectionBanners'
})

export const getters = {
  anchor(state) {
    return state.anchor
  },

  currentAnchor(state) {
    return state.currentAnchor
  },
}

export const mutations = {
  anchor(state, params) {
    state.anchor = params.anchor
  },

  currentAnchor(state, params) {
    state.currentAnchor = params.currentAnchor
  },
}

export const actions = {
  anchor(context, params) {
    context.commit('anchor', params)
  },

  currentAnchor(context, params) {
    context.commit('currentAnchor', params)
  },
}
