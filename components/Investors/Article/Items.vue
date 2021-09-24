<template>
  <div class="article">
    <div class="article__items">
      <Item title="Financial Statements Q3/2019" link="" />

      <Item title="Financial Statements Q3/2019" link="" />

      <Item title="Financial Statements Q3/2019" link="" />
    </div>
  </div>
</template>

<script>
import Item from '~/components/Investors/Article/Item'

export default {
  components: {
    Item
  }
}
</script>

<style lang="sass" scoped>
.article
  position: absolute
  top: 20%
  left: -17%
  width: 35%
  background-color: gray

  .article__items
    padding: 1.4rem 1.6rem
</style>
