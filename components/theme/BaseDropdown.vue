<template>
  <div
    v-click-outside="clickOutside"
    class="relative inline-block text-left "
  >
    <!--------------------------------------->
    <!-- Dropdown button -->
    <!--------------------------------------->
    <div @click="toggle">
      <slot name="button" />
    </div>

    <!--------------------------------------->
    <!-- Dropdown content -->
    <!--------------------------------------->
    <transition name="fade">
      <div
        v-if="show"
        class="origin-top-right absolute left-0 md:left-auto right-auto md:right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
      >
        <slot name="content" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    toggle () {
      this.show = !this.show
    },
    clickOutside () {
      this.show = false
    }
  }
}
</script>
