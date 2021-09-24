<template>
  <section :class="{ pages: true }">
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    isPadding: {
      type: Boolean,
      default: () => false,
    },
  },
}
</script>

<style lang="sass" scoped>
section.pages
  width: 100%
  height: 100%
  // max-height: calc(100vh - 65px)
</style>
