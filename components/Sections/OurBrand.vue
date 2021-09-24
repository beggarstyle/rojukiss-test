<template>
  <b-container class="h-100" fluid>
    <div class="brands">
      <div class="brands__header">
        <Block title="Our Brands" sub-title="Qulity Beaty & health Product" />
      </div>

      <div class="brands__container">
        <Brands :items="items" />
      </div>
    </div>
  </b-container>
</template>

<script>
import Block from '~/components/Elements/Block'
import Brands from '~/components/Brands/Brands'

export default {
  components: {
    Block,
    Brands
  },

  data() {
    return {
      items: [
        {
          cover: '/images/452693_bae88af79c.jpeg',
          logo: '/images/brands/phderma.png',
          description: 'Lorem ipsum dolor sit amet, consec are tetur adipiscing elitsed do eiusmod tempor incididunt'
        },
        {
          cover: '/images/452693_bae88af79c.jpeg',
          logo: '/images/brands/phderma.png',
          description: 'Lorem ipsum dolor sit amet, consec are tetur adipiscing elitsed do eiusmod tempor incididunt'
        },
        {
          cover: '/images/452693_bae88af79c.jpeg',
          logo: '/images/brands/phderma.png',
          description: 'Lorem ipsum dolor sit amet, consec are tetur adipiscing elitsed do eiusmod tempor incididunt'
        },
        {
          cover: '/images/452693_bae88af79c.jpeg',
          logo: '/images/brands/phderma.png',
          description: 'Lorem ipsum dolor sit amet, consec are tetur adipiscing elitsed do eiusmod tempor incididunt'
        }
      ]
    }
  },
}
</script>

<style lang="sass" scoped>
.brands
  width: 100%
  height: 100%
  padding: 2rem 4rem

  .brands__container
    display: flex
    flex-direction: row
    justify-content: flex-start
    flex-wrap: wrap

    .brands__items
      display: flex
      flex-direction: row
      justify-content: flex-start
      flex-wrap: wrap

      .brands__item
        padding: 1.2rem
</style>
