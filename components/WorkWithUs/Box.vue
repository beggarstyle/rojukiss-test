<template>
  <div class="box">
    <div
      v-for="(i, index) in data"
      :key="index"
      class="box__items"
      :style="{ 'background-image': 'url(/images/box/' + i + ')' }"
    >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        'shutterstock_1009501216.jpg',
        'shutterstock_1029008776.jpg',
        'shutterstock_1348312496.jpg',
        'shutterstock_1466568629.jpg',
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.box
  width: 100%
  height: 100%
  display: flex
  flex-direction: row
  justify-content: flex-start
  flex-wrap: wrap

  .box__items
    width: 50%
    height: 50%
    // border: 1px solid red
    // background-image: url('/images/box/shutterstock_1009501216.jpg')
    background-position: center
    background-repeat: no-repeat

    img
      width: 100%
      height: auto

    .fill
      display: flex
      justify-content: center
      align-items: center
      overflow: hidden

      img
        flex-shrink: 0
        min-width: 50%
        min-height: 50%

    // img
    //   max-width: 100%

    // figure
    //   width: 1
    //   img

// .image
//   display: block
//   position: relative

//   img
//     display: block
//     height: auto
//     width: 100%
    // padding-top: 100%
</style>
