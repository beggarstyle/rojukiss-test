<template>
  <div :class="{ 'w-100': true, 'h-100': true, overflow__hidden: true }">
    <div
      v-if="previous && isMoving"
      :class="{ bg__img: true, bg__moving: isMoving }"
      :style="{ 'background-image': 'url(' + previous.src + ')' }"
    />

    <div
      :class="{ bg__img: true }"
      :style="{ 'background-image': 'url(' + currentItem.src + ')' }"
    />
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default() {
        return []
      }
    },

    index: {
      type: Number,
      default: 0
    },
  },

  data() {
    return {
      isMoving: false,
      previous: ''
    }
  },

  computed: {
    currentItem() {
      return this.items.at(this.index)
    },

    nextItem() {
      return this.items.at(this.index + 1)
    }
  },

  watch: {
    isMoving() {
      if (this.isMoving) {
        setTimeout(() => {
          this.isMoving = false
        }, 1000);
      }
    },

    currentItem(current, previous) {
      this.previous = previous
      this.isMoving = true
    },
  },
}
</script>

<style lang="sass" scoped>
.bg__img
  position: relative
  width: 100%
  height: 100%
  background-repeat: no-repeat
  background-size: cover
  z-index: 9
  overflow: hidden

.bg__moving
  position: absolute
  top: 0
  right: 100%
  animation: moveOut 1s
  z-index: 99

.overflow__hidden
  position: relative
  overflow: hidden

@-webkit-keyframes moveOut
  0%
    right: 0%

  100%
    right: 100%
</style>
