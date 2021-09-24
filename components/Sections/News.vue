<template>
  <b-container class="h-100" fluid>
    <div class="news">
      <div class="news__header">
        <Block
          title="RJK NEWS"
          sub-title="Update and Insight About Us"
        >
          <template #subtitle>
            <ReadmoreButton />
          </template>
        </Block>
      </div>

      <div class="news__container">
        <div ref="swiperNews" v-swiper:swiperNews="options" class="swiper-container">
          <div class="swiper-wrapper">
            <div v-for="i in [1, 2, 3, 4, 5]" :key="i" class="swiper-slide">
              <b-card
                :img-src="`/images/${randomImageSrc(i)}`" img-alt="Card image"
                img-left
                border-variant="light"
              >
                <b-card-text>
                  <ContentWithDate
                    title="Lorem ipsum dolor sit amet, consec are tetur adipiscing elitsed do eiusmod tempor incididunt"
                    date="24 OCT 2019"
                  />
                </b-card-text>
              </b-card>
            </div>
          </div>
        </div>
      </div>

      <div class="news__footer">
        <ReadmoreButton />
      </div>
    </div>
  </b-container>
</template>

<script>
import Block from '~/components/Elements/Block'
import ContentWithDate from '~/components/Elements/Box/ContentWithDate'
import ReadmoreButton from '~/components/Elements/Buttom/ReadMore'

export default {
  components: {
    Block,
    ReadmoreButton,
    ContentWithDate
  },

  data() {
    return {
      options: {
        // autoplay: false,
        // init: true,
        // loop: false,
        // followFinger: false,
        slidesPerView: 'auto',
        // breakpoints: {
        //   1023: { slidesPerView: 5 },
        //   768: { slidesPerView: 3 },
        // },
        // on: {
        //   slideChange: this.slideChange,
        //   touchStart: this.touchStart,
        //   touchEnd: this.touchEnd,
        // },
      },
    }
  },

  methods: {
    randomImageSrc(index) {
      return index % 2 ? 'shutterstock_716948296.jpg' : 'shutterstock_666406564.jpg'
    }
  }
}
</script>


<style lang="sass" scoped>
.news
  height: 100%
  display: flex
  flex-direction: column
  padding: 2rem 4rem

  .news__container
    margin: 2rem 0
  //   height: 100%

.swiper-slide
  width: 40vw
</style>
