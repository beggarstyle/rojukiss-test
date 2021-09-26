<template>
  <div class="banners">
    <div :class="{ banners__align: true, 'banners__align--logo': true }">
      <div
        :class="{ banners__items: true }"
      >
        <Item :items="items" :index="0" />
      </div>

      <RightArrowButtom :on-click="nextItems" />
    </div>

    <div :class="{ banners__align: true, 'banners__align--column': true }">
      <div :class="{ banners__items: true, 'banners__items--hd': true }">
        <div class="row justify-content-center align-items-center w-100 h-100">
            <h1>{{ items.at(0).title }}</h1>
          </div>
      </div>

      <div :class="{ banners__items: true, banners__bg: false }">
        <Item :items="items" :index="1" />
      </div>

      <div :class="{ banners__items: true, banners__bg: false }">
        <Item :items="items" :index="2" />
      </div>
    </div>
  </div>
</template>

<script>
import Item from '~/components/Elements/Image'
import RightArrowButtom from '~/components/Elements/Buttom/RightArrow'

export default {
  components: {
    Item,
    RightArrowButtom
  },

  data() {
    return {
      items: [
        { id: 1, title: 'Leading In Asia Beauty', src: '/images/shutterstock_1331485058.jpg' },
        { id: 2, title: 'Professional Team cosmetic', src: '/images/shutterstock_410125207.jpg' },
        { id: 3, title: 'Better Making The Best', src: '/images/shutterstock_641593066.jpg' },
      ]
    }
  },

  methods: {
    nextItems() {
      const shift = this.items.shift()
      this.items.push(shift)
    }
  }
}
</script>

<style lang="sass" scoped>
.banners
  width: 100%
  height: 100%
  max-height: calc(100% - 80px) !important
  display: flex
  flex-direction: row
  position: relative
  align-items: stretch

  .banners__align--logo
    .banners__items
      width: 100%
      height: 100%
      flex-basis: 50%

  .banners__align--column
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: flex-start

    .banners__items
      height: 40%
      flex-basis: 50%

    .banners__items--hd
      height: 60%
      flex-basis: 100%

  .banners__align
    height: 80%
    flex-basis: 50%
    position: relative
</style>
