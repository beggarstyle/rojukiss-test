<template>
  <div class="main">
    <Header />

    <div class="wrapper">
      <Aside />

      <main>
        <Nuxt />
      </main>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Layouts/Header'
import Aside from '~/components/Layouts/Aside'

export default {
  components: {
    Header,
    Aside
  },

  data() {
    return {
      prevScroll: 0,
      curScroll: '',
      direction: 0,
      prevDirection: 0,
    }
  },
}
</script>

<style lang="sass" scoped>
.wrapper
  display: flex
  flex-direction: row
  justify-content: flex-start
  width: 100vw
  height: 100vh

  main
    width: 100%
    height: 100%
</style>
