import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  isSidebarMenuOpen: false,
  showCreateWorkspaceModal: false,
  showDeleteWorkspaceModal: false,
  showAddMemberModal: false
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  // isSidebarMenuOpen: state => state.isSidebarMenuOpen
}

export const mutations: MutationTree<RootState> = {
  TOGGLE_SIDEBAR_MENU: (state, status) => {
    state.isSidebarMenuOpen = status !== undefined ? status : !state.isSidebarMenuOpen
  },
  TOGGLE_CREATE_WORKSPACE_MODAL: (state, status) => {
    state.showCreateWorkspaceModal = status !== undefined ? status : !state.showCreateWorkspaceModal
  },
  TOGGLE_DELETE_WORKSPACE_MODAL: (state, status) => {
    state.showDeleteWorkspaceModal = status !== undefined ? status : !state.showDeleteWorkspaceModal
  },
  TOGGLE_ADD_MEMBER_MODAL: (state, status) => {
    state.showAddMemberModal = status !== undefined ? status : !state.showAddMemberModal
  }
}

export const actions: ActionTree<RootState, RootState> = {
}
