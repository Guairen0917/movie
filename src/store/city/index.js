const state = {
  name: window.localStorage.getItem('nowname') || '广州',
  id: window.localStorage.getItem('nowid') || 440100
}

const actions = {
  
}

const mutations = {
  CITY_INFO(state, payload) {
    state.name = payload.name
    state.id = payload.id
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}