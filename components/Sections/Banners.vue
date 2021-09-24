<template>
  <div class="banners">
    <div class="banners__align">
      <figure class="pa-4">
        <b-img
          class="w-100 h-100"
          src="/images/shutterstock_314852606.png"
          width="540"
        />
      </figure>
    </div>
    <div class="banners__align">
      <div class="block">
        <div class="block__items">
          <div class="row justify-content-center align-items-center w-100 h-100">
            <h1>Leading In Asia Beauty</h1>
          </div>
        </div>
        <div class="block__items">
          <figure class="pa-4">
            1
            <!-- <b-img
              class="w-100 h-100"
              src="/images/shutterstock_314852606.png"
              width="120"
            /> -->
          </figure>
        </div>
        <div class="block__items">
          <figure class="pa-4">
            2
            <!-- <b-img
              class="w-100 h-100"
              src="/images/shutterstock_314852606.png"
              width="120"
            /> -->
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: '/images/shutterstock_314852606.png', src: 'Leading In Asia Beauty' },
        { title: '/images/shutterstock_314852606.png', src: 'Professional Team cosmetic' },
        { title: '/images/shutterstock_314852606.png', src: 'Better Making The Best' },
      ]
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
  // align-items: stretch

  .banners__align
    flex-basis: 50%

    .block
      width: 100%
      height: 100%
      display: flex
      flex-direction: row
      flex-wrap: wrap
      justify-content: flex-start

      .block__items
        flex-basis: 50%
        // height: 100%
        border: 1px solid red

      .block__items:first-child
        // height: 60%
        flex-basis: 100%
</style>
