import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  workspaceList: [] as object[],
  current: {
    members: []
  }
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  currentMembersCount: state => state.current.members.length
}

export const mutations: MutationTree<RootState> = {
  SET_WORKSPACE_LIST: (state, payload) => {
    state.workspaceList = payload
  },

  SET_CURRENT: (state, payload) => {
    state.current = payload
  },

  ADD_WORKSPACE: (state, workspace: object) => {
    state.workspaceList.push(workspace)
  },

  REMOVE_WORKSPACE: (state, id) => {
    const index = state.workspaceList.findIndex((ws: any) => ws.id === id)
    state.workspaceList.splice(index, 1)
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchList ({ commit }) {
    const workspaceList = await this.$axios.$get('/users/workspaces')
    commit('SET_WORKSPACE_LIST', workspaceList)
  },

  async fetch ({ commit }, id) {
    const workspace = await this.$axios.$get(`/workspaces/${id}`)
    commit('SET_CURRENT', workspace)
  },

  async fetchPersonal ({ commit }) {
    const workspace = await this.$axios.$get('/users/workspace')
    commit('SET_CURRENT', workspace)
  },

  async create ({ commit }, data) {
    const workspace = await this.$axios.$post('/workspaces', data)
    commit('ADD_WORKSPACE', workspace)
    commit('SET_CURRENT', workspace)
  },

  async delete ({ commit, dispatch }, id) {
    await this.$axios.$delete(`/workspaces/${id}`)
    commit('REMOVE_WORKSPACE', id)
    dispatch('fetchPersonal')
  }
}
