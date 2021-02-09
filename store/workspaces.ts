import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  workspaces: [],
  current: {
    members: []
  }
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  currentMembersCount: state => state.current.members.length
}

export const mutations: MutationTree<RootState> = {
  SET_WORKSPACES: (state, workspaces) => {
    state.workspaces = workspaces
  },
  ADD_WORKSPACE: (state, workspace) => {
    // @ts-ignore
    state.workspaces.push(workspace)
  },
  SET_CURRENT: (state, workspace) => {
    state.current = workspace
  },
  REMOVE_WORKSPACE: (state, workspaceId) => {
    // @ts-ignore
    const index = state.workspaces.findIndex(ws => ws.id === workspaceId)
    state.workspaces.splice(index, 1)
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async fetch ({ commit }) {
    const workspaces = await this.$axios.$get('/users/workspaces')
    commit('SET_WORKSPACES', workspaces)
    commit('SET_CURRENT', workspaces[0])
  },

  async create ({ commit }, data) {
    const workspace = await this.$axios.$post('/workspaces', data)
    commit('ADD_WORKSPACE', workspace)
    commit('SET_CURRENT', workspace)
  }
}
