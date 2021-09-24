<template>
  <div :class="{ card: true, 'borderless': isBorderless }">
    <div class="card-body">
      <h6 class="card-title mb-4 text-danger">{{ title }}</h6>
      <h1 class="card-subtitle mb-4">{{ subTitle }}</h1>
      <p class="card-text">{{ text }}</p>

      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true,
      default: '',
    },
    subTitle: {
      type: String,
      require: false,
      default: '',
    },

    text: {
      type: String,
      require: false,
      default: '',
    },

    isBorderless: {
      type: Boolean,
      default: false
    },
  }
}
</script>

<style lang="sass" scoped>
.card
  width: 100%
  height: 100%

.borderless
  border: 0px
</style>
