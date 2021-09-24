<template>
  <div class="article__item">
    <p class="article__title">{{ title }}</p>
    <a :href="link" class="download">
      <span>
        <i class="fa fa-arrow-down fa-sm"></i>
      </span>
    </a>

    <hr />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="sass" scoped>
.article__item
  display: flex
  flex-direction: row
  justify-content: flex-start
  border-bottom: 1px solid white
  border-bottom-style: dashed
  margin: 1.2rem 0

  p.article__title
    font-size: 16px
    width: 90%

  .download
    display: flex
    justify-content: center
    align-items: center
    width: 35px
    height: 35px
    background-color: white
    border-radius: 50%
    padding: 0.8em

    span
      i.fa-arrow-down
        color: white
        background-color: black
        padding: 0.2em
        font-size: 0.8em

    // .circle
    //   display: flex
    //   justify-content: center
    //   align-items: center
    //   background-color: white
    //   border-radius: 50%
    //   padding: 0.6em

    //   i.fa.fa-arrow-down
    //     color: white
    //     background-color: black
    //     padding: 0.2em

  hr
    border: 1px solid white

.article__item:last-child
  border-bottom: 0px
</style>
