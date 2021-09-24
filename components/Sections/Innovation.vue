<template>
  <b-container class="h-100" fluid>
    <div class="innovation">
      <div class="innovation__title">
        <div class="block">
          <h1 class="title text-white">INNOVATION</h1>
          <h2 class="subtitle text-white">
            Science-Driven Skincare, Made Simple
          </h2>
        </div>
      </div>
      <div class="innovation__ingredients">
        <div class="block">
          <div class="block__items">
            <b-img src="/images/Ingredients.jpeg" width="65" height="65" />
            Clean Ingredients
          </div>

          <div class="block__items">
            <b-img src="/images/cruelty_free.png" width="65" height="65" />
            Cruelty Free
          </div>

          <div class="block__items">
            <b-img src="/images/humidity.jpeg" width="65" height="65" />
            Height Humidity
          </div>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
// import Block from '~/components/Elements/Block'

export default {
  components: {
    // Block
  },
}
</script>

<style lang="sass" scoped>
.innovation
  height: 100%
  width: 100%

  display: flex
  flex-direction: row
  justify-content: center

  // background-color: red

  .innovation__title
    width: 40%
    display: flex
    justify-content: center
    padding: 4rem

    background-image: url('/images/shutterstock_453365275.jpg')
    background-repeat: no-repeat
    background-size: cover
    background-position: bottom

    .block
      .title
        font-size: 20px
        margin-bottom: 2rem
        // background-color: pink

  .innovation__ingredients
    height: 100%
    width: 60%
    display: flex
    flex-direction: column
    justify-content: flex-end
    background-image: url('/images/shutterstock_1494018380.jpg')
    background-repeat: no-repeat
    background-size: cover
    background-position: right

    .block
      display: flex
      flex-direction: row
      justify-content: space-around
      background: linear-gradient(0deg, rgba(255,255,255,1) 70%, rgba(255,255,255,0) 100%)
      padding-top: 8rem

      .block__items
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center

// .content
//   padding: 2rem 4rem

//   h1.title
//   h2.subtitle

.block
  padding: 2rem 4rem
</style>