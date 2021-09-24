<template>
  <div class="block">
    <div class="block__container">
      <h1 :class="{ title: true, 'text-center': isTitleCenter }">{{ title }}</h1>
      <h2 v-if="!hasSubTitleSlot" class="subtitle">{{ subTitle }}</h2>

      <div v-if="hasSubTitleSlot" class="justify--between">
        <h2 class="subtitle">{{ subTitle }}</h2>

        <slot v-if="hasSubTitleSlot" name="subtitle"></slot>
      </div>

      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true,
      default: '',
    },
    subTitle: {
      type: String,
      require: false,
      default: '',
    },

    isTitleCenter: {
      type: Boolean,
      default: false,
    }
  },

  computed: {
    hasDefaultSlot () {
      return !!this.$slots.default
    },

    hasSubTitleSlot () {
      return !!this.$slots.subtitle
    }
  }
}
</script>

<style lang="sass" scoped>
.block
  .block__container
    h1.title
      font-size: 20px
      color: #D02027
      margin-bottom: 1.2rem
      font-weight: 500

    h2.subtitle
      font-size: 48px
      font-weight: 300
      margin-bottom: 2rem
      color: #47484A

.justify--between
  display: flex
  justify-content: space-between
</style>
