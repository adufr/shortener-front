<template>
  <div class="relative w-full">
    <!-------------------->
    <!-- button -->
    <button
      type="button"
      class="relative w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none sm:text-sm"
      @click="open = !open"
    >
      <span class="flex items-center">
        <span class="block truncate dark:text-white">
          {{ current }}
        </span>

      </span>
      <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <!-- Heroicon name: solid/selector -->
        <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </span>
    </button>

    <!-------------------->
    <!-- menu -->
    <transition name="fade" :duration="100">
      <div v-if="open" class="absolute mt-1 w-full rounded-md bg-white dark:bg-gray-800 shadow-lg">
        <ul class="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          <!-- General -->
          <li
            v-for="(option, index) in options"
            :key="index"
            class="z-10 relative py-2 pl-3 pr-9 rounded"
            :class="current === option ? 'text-white bg-indigo-600': 'text-gray-900 dark:text-white bg-white dark:bg-gray-800'"
            @click="$emit('toggle', option), open = false"
          >
            <div class="flex items-center">
              <span class="truncate" :class="current === 'general' ? 'font-semibold': 'font-normal'">
                {{ option }}
              </span>
            </div>

            <span v-if="current === option" class="absolute inset-y-0 right-0 flex items-center pr-4" :class="current === option ? 'text-white': 'text-indigo-600'">
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </span>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type: [String, Number],
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      open: false
    }
  }
}
</script>
