<template>
  <div class="lists">
    <div class="lists__container">
      <div
        v-for="(chunk, chunkIndex) in this.sliceIntoChunks(2)"
        :key="chunkIndex"
        :class="{ lists__items: true }"
      >
        <Item v-for="item in chunk" :key="item.id" :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Item from '~/components/Brands/Item'

export default {
  props: {
    items: {
      type: Array,
      default() {
        return []
      }
    },
  },

  components: {
    Item
  },

  methods: {
    sliceIntoChunks(chunkSize) {
      const response = []
      for (let i = 0; i < this.items.length; i += chunkSize) {
        const chunk = this.items.slice(i, i + chunkSize)
        response.push(chunk)
      }

      return response
    }
  }
}
</script>

<style lang="sass" scoped>
.lists
  width: 100%
  height: 100%
  display: flex
  flex-direction: row
  flex-wrap: wrap
  justify-content: flex-start

  .lists__container
    display: flex

    .lists__items
      .lists__item
        max-width: 360px
        padding: 1.2rem

    .lists__items:nth-child(even)
      margin-top: 2rem
</style>