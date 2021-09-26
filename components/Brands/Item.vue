<template>
  <div
    class="lists__item"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <b-img-lazy
      v-if="!isHover"
      src="/images/452693_bae88af79c.jpeg"
      alt=""
      width="380"
      fluid
      lazy
    />

    <div v-if="isHover" class="lists__hover">
      <b-img-lazy class="mb-2" :src="item.logo" width="100" />

      <p class="text-center">{{ item.description }}</p>

      <button>
        READ MORE

        <span class="ml-1"><i class="fa fa-long-arrow-right"></i></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {
          cover: '',
          logo: '',
          description: ''
        }
      }
    },
  },

  data() {
    return {
      isHover: false
    }
  },
}
</script>

<style lang="sass" scoped>
.lists__hover
  // width: 360px
  // height: 260px
  display: flex
  flex-direction: column
  justify-content: space-between
  align-items: center
  padding: 2em 1.8em
  background-color: gray

  button
    max-width: 176px
    max-height: 60px
    color: #FFFFFF
    font-size: 0.8rem
    background-color: transparent
    border: none
    padding: 0.8rem 1.8rem
</style>
