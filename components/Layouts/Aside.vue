<template>
<div>
  <aside :class="{ menus: true, 'menus--active': isActive }">
    <div class="menus__logo">
      <b-img-lazy
        v-if="!isActive"
        v-bind="logoProps"
        src="/images/logo.png"
        width="40"
        height="40"
      />
    </div>

    <div class="menus__content">
      <a
        href="javascript:;"
        @mouseover="onHoverMenu = true"
        @mouseleave="onHoverMenu = false"
        @click="isActive = !isActive"
      >
        <span v-if="!isActive">
          <i
            :class="{
              fa: true,
              'fa-bars': true,
              'fa-2x': !onHoverMenu,
              'fa-3x': onHoverMenu
            }"
          ></i>
        </span>

        <span v-else>
          <i class="fa fa-times fa-3x"></i>
        </span>

        MENU
      </a>
    </div>

    <div class="menus__contact">
      <span>BRAND</span>

      <span class="circle">TH</span>

      <span class="text-danger">
        <i class="fa fa-phone fa-2x"></i>
      </span>
    </div>
  </aside>

  <div

    :class="{
      menus__container: true,
      fadeIn: isActive,
      fadeOut: false
    }"
  >
    <div class="menus__header">
      <b-img-lazy src="/images/full_logo.png" />
    </div>

    <div class="menus__content">
      <ul>
        <li>
          <!-- About Us -->
          <a href="">
            About Us
          </a>
        </li>
        <li>
          <!-- Brands -->
          <a href="" class="dropdown--toggle">
            Brands
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      isReady: false,
      logoProps: { width: 75, height: 75 },
      isActive: false,
      onHoverMenu: false,
    }
  },

  mounted() {
    this.isReady = true
  }
}
</script>

<style lang="sass" scoped>
@-webkit-keyframes fadeIn
  0%
    left: -350px

  100%
    left: 75px

@-webkit-keyframes fadeOut
  0%
    left: 75px

  100%
    left: -350px

// .fadeIn
//   display: flex
//   animation: fadeIn 2s
//   left: 75px

.menus__container.fadeOut
  // display: none
  animation: fadeOut 1.5s
  left: -350px

.menus__container.fadeIn
  left: 75px
  animation: fadeIn 1.5s

.menus__container
  width: 350px
  height: 100vh
  position: absolute
  top: 0
  // left:
  left: -350px
  // left: 75px
  // left: -350px
  // display: none
  display: flex
  flex-direction: column
  border-right: 1px solid #A3A3A32E
  z-index: 9999
  background-color: white

  .menus__header
    margin: 6rem 0 4rem

  .menus__content
    ul
      list-style-type: none
      padding: 0

      li
        width: 100%
        height: 100%
        padding: 1rem 4rem

        a
          width: 100%
          height: 100%
          position: relative
          display: block
          color: #A3A3A3
          text-decoration: none

        a:hover
          color: red
          font-weight: 500


        a.dropdown--toggle::after
          display: block
          position: absolute
          top: 0
          right: 0
          content: "\003E"

      li:hover
        background-color: rgba(163, 163, 163, 0.18039)

      li.is-active
        color: red
        background-color: gray


aside.menus
  width: 100px
  max-width: 75px
  height: calc(100% - 56px)

  display: flex
  flex-direction: column
  justify-content: space-between
  align-items: center
  border-right: 1px solid #A3A3A32E

  .menus__logo
    padding: 1.2em

  .menus__content
    width: 100%
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center

    a
      width: 100%
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      color: #47484A

    a:hover
      text-decoration: none

  .menus__contact
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center

    span
      margin: 0.8em 0

    span.brand
      color: #000000
      font-size: 12px
      font-weight: 500
      letter-spacing: 1.2px

    span.circle
      padding: 0.8em
      color: #A3A3A3
      border: 1px solid #A3A3A3
      border-radius: 50%
</style>
