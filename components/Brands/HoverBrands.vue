<template>
  <div class="brand__hover">
    <b-img
      :src="logo"
      width="100"
    />

    <p>{{ description }}</p>

    <!-- <ReadMore /> -->
  </div>
</template>

<script>
export default {
  props: {
    logo: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    }
  }
}
</script>

<style lang="sass" scoped>
.brand__hover

</style>