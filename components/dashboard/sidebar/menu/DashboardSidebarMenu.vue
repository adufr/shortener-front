<template>
  <div class="fixed h-screen ml-16 w-64 bg-gray-100 dark:bg-gray-800">
    <div class="h-full flex flex-col items-center justify-between overflow-y-auto hide-scrollbar">
      <div class="w-full px-5">
        <!----------------------------->
        <!-- logo -->
        <div class="h-16 flex justify-between lg:justify-center items-center border-b border-gray-200 dark:border-gray-700">
          <img v-if="$colorMode.preference === 'dark'" class="h-8 w-auto" src="@/assets/images/svg/logo-white-text.svg" alt="Workflow">
          <img v-if="$colorMode.preference === 'light'" class="h-8 w-auto" src="@/assets/images/svg/logo-black-text.svg" alt="Workflow">

          <div @click="toggleSidebarMenu()">
            <font-awesome-icon icon="bars" class="block lg:hidden text-gray-500" />
          </div>
        </div>

        <!----------------------------->
        <!-- new link -->
        <div class="mt-5">
          <button
            class="w-full text-white font-medium py-2 rounded-lg focus:outline-none shadow-xs bg-indigo-500 hover:bg-indigo-600 transition duration-150 "
            @click="$store.commit('layout/TOGGLE_CREATE_LINK_SLIDEOVER', true)"
          >
            New link
          </button>
        </div>

        <!----------------------------->
        <!-- main menu -->
        <div class="mt-10">
          <dashboard-sidebar-menu-category
            title="MAIN MENU"
          />

          <dashboard-sidebar-menu-item
            title="Dashboard"
            icon="home"
            to="/dashboard"
          />

          <dashboard-sidebar-menu-item
            title="Manage links"
            icon="list"
            to="/dashboard/manage-links"
          />

          <dashboard-sidebar-menu-item
            title="Links statistics"
            icon="chart-line"
            to="/dashboard/links-statistics"
          />

          <dashboard-sidebar-menu-item
            title="Workspace"
            icon="home"
            to="/dashboard/workspace"
          />
        </div>

        <!----------------------------->
        <!-- account -->
        <div class="mt-10">
          <dashboard-sidebar-menu-category
            title="ACCOUNT"
          />

          <dashboard-sidebar-menu-item
            title="My profile"
            icon="user"
            to="/dashboard/account"
          />

          <dashboard-sidebar-menu-item
            title="Settings"
            icon="cog"
            to="/dashboard/account/settings"
          />
        </div>
      </div>

      <!-- logout -->
      <div class="w-full px-5 h-16 flex items-center" @click="logout()">
        <div class="w-full flex items-center text-sm text-gray-500 font-semibold py-2 rounded-md hover:bg-gray-200 dark-hover:bg-gray-700 transition duration-150">
          <font-awesome-icon icon="sign-out-alt" class="mx-4" />
          <p class="font-medium text-gray-500">
            Logout
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleSidebarMenu () {
      this.$store.commit('layout/TOGGLE_SIDEBAR_MENU')
    },
    logout () {
      this.$auth.logout()
        .then(() => {
          this.$toast.global.success({ message: 'You have been signed-out!' })
          this.$router.push('/')
        })
        .catch(() => {
          this.$toast.global.error({ message: 'An error has occured...' })
        })
    }
  }
}
</script>
