<template>
  <div :class="{ box: true, 'box--border': isBorder }">
    <p class="box__title">{{ title }}</p>
    <span class="box__date">{{ date }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },

    date: {
      type: String,
      default: ''
    },

    isBorder: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="sass" scoped>
.box
  display: flex
  flex-direction: column
  justify-content: space-around

  p.box__title
    font-weight: 300

  span.box__date
    font-weight: 500
    margin: 1.2rem 0

.box--border
  border-bottom: 1px solid #80808038
</style>
