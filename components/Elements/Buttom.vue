<template>
  <button class="button">
    {{ title }}
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    }
  },
}
</script>

<style lang="sass" scoped>

</style>