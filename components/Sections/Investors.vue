<template>
  <b-container class="h-100" fluid>
    <div class="investors">
      <div class="investors__header">
        <Content>
          <template>
            <Block
              title="INVESTORS' CORNER"
              sub-title="Join Our Shareholder Community"
            />
          </template>
        </Content>
      </div>

      <div class="investors__set">
        <div class="investors__announcement">
          <div class="announcement__items announcement__items--left">
            <div class="set">
              <h1 class="title text-black">SET:RJK</h1>
              <h2 class="subtitle text-black">
                15.48 THB <small class="text-info">^</small>
                <small> 12.56(+12.08)</small>
              </h2>

              <hr class="border-red" />

              <span class="date">
                <i class="fa fa-clock-o fa-2x mr-3"></i> 12 OCT 2019, 14.00
              </span>

              <ReadMore />
            </div>
          </div>

          <div class="announcement__items announcement__items--right">
            <Announcement />

            <Article />
          </div>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import Block from '~/components/Elements/Block'
import Content from '~/components/Elements/Content'
import Announcement from '~/components/Investors/Announcements/Items'
import Article from '~/components/Investors/Article/Items'
import ReadMore from '~/components/Elements/Buttom/ReadMore'

export default {
  components: {
    Block,
    Content,
    Announcement,
    Article,
    ReadMore
  },
}
</script>

<style lang="sass" scoped>
.investors
  width: 100%
  height: 100%
  display: flex
  flex-direction: column
  justify-content: flex-start
  position: relative

  .investors__header
    height: auto
    position: inherit

  .investors__set
    height: 100%
    position: inherit

    .investors__announcement
      position: inherit
      height: 100%
      display: flex
      flex-direction: row
      justify-content: flex-start

      .announcement__items
        position: inherit
        height: 100%
        // padding: 2rem 4rem

        .set
          width: 100%
          height: 100%
          padding: 2rem 4rem

          .title
            font-weight: 400
            font-size: 1.8rem
            margin-bottom: 0.8rem

          .subtitle
            font-weight: 300
            font-size: 2.4rem
            display: flex
            align-items: center

            small
              margin-left: 0.8rem
              font-size: 1rem
              font-weight: 100
              letter-spacing: 0.1em

          span.date
            display: flex
            align-items: center
            margin-bottom: 8rem

      .announcement__items--left
        width: 40%

      .announcement__items--right
        width: 60%

.text-black
  color: #47484A

hr.border-red
  border: 1.5px solid red
  max-width: 15%
  margin: 1em 0px 0.8em
</style>
