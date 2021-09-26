<template>
  <button :class="{ button: true }" @click="onClick"></button>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      default: () => {
        return ''
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.button
  width: 50px
  height: 50px
  position: absolute
  bottom: 15%
  right: -25px
  z-index: 999
  background-image: url('/images/icons/button.svg')
  background-color: transparent
  border: none
</style>