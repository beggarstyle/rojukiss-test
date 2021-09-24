<template>
  <div class="announcement__item">
    <p>{{ title }}</p>

    <hr />

    <h6>{{ date }}</h6>
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
    }
  }
}
</script>

<style lang="sass" scoped>
.announcement__item
  margin-bottom: 1.4rem

  hr
    margin: 1.4rem 0
</style>