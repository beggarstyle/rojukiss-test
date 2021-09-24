<template>
  <div class="announcement">
    <div class="announcement__container">
      <h1 class="title text-center">Set Announcement</h1>

      <div
        v-for="i in [0, 1, 2]"
        :key="i"
        class="announcement__items"
      >
        <ContentWithDateBox
          title="Lorem ipsum dolor sit amet, consec are tetur adipiscing elitsed do eiusmod tempor incididunt"
          date="24 OCT 2019"
          is-border
        />
      </div>
    </div>
  </div>
</template>

<script>
// import Item from '~/components/Investors/Announcements/Item'
import ContentWithDateBox from '~/components/Elements/Box/ContentWithDate'

export default {
  components: {
    // Item,
    ContentWithDateBox
  }
}
</script>

<style lang="sass" scoped>
.announcement
  height: 100%
  width: 100%
  background-color: #F9F9F9

  .announcement__container
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center

    h1.title
      font-size: 1.2rem
      margin: 1.2rem 0rem

    .announcement__items
      width: 60%
      display: flex
      flex-direction: column
      justify-content: center
      margin-bottom: 1.2rem
</style>
