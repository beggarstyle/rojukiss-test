<template>
  <div :class="{ fullpages: true, active: isActive }" :data-anchor="anchor">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    anchor: {
      type: String,
      default() {
        return 'SectionBanner'
      },
    },

    isActive: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
}
</script>

<style lang="sass" scoped>
// .fullpages
//   max-height: calc(100vh - 65px)
</style>
