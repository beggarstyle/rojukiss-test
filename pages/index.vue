<template>
  <full-page
    id="fullpage"
    ref="fullpage"
    :options="options"
    :style="{ position: 'inherit' }"
  >
    <FullPagesItem anchor="sectionBanners">
      <Page>
        <SectionBanner />
      </Page>
    </FullPagesItem>

    <FullPagesItem anchor="sectionWhoWeAre">
      <Page>
        <SectionWhoWeAre />
      </Page>
    </FullPagesItem>

    <FullPagesItem anchor="sectionOurBrand">
      <Page>
        <SectionOurBrand />
      </Page>
    </FullPagesItem>

    <FullPagesItem anchor="sectionInnovation">
      <Page>
        <SectionInnovation />
      </Page>
    </FullPagesItem>

    <FullPagesItem anchor="sectionNews">
      <Page>
        <SectionNews />
      </Page>
    </FullPagesItem>

    <FullPagesItem anchor="sectionInvestors">
      <Page>
        <SectionInvestors />
      </Page>
    </FullPagesItem>

    <FullPagesItem anchor="sectionWorkWithUs">
      <Page>
        <SectionWorkWithUs />
      </Page>
    </FullPagesItem>
  </full-page>
</template>

<script>
import { mapActions } from 'vuex'
import FullPagesItem from '~/components/Layouts/FullPages/Item'
import Page from '~/components/Layouts/Page'
import SectionBanner from '~/components/Sections/Banners'
import SectionWhoWeAre from '~/components/Sections/WhoWeAre'
import SectionOurBrand from '~/components/Sections/OurBrand'
import SectionInnovation from '~/components/Sections/Innovation'
import SectionNews from '~/components/Sections/News'
import SectionInvestors from '~/components/Sections/Investors'
import SectionWorkWithUs from '~/components/Sections/WorkWithUs'

export default {
  components: {
    FullPagesItem,
    Page,
    SectionBanner,
    SectionWhoWeAre,
    SectionOurBrand,
    SectionInnovation,
    SectionNews,
    SectionInvestors,
    SectionWorkWithUs
  },

  data() {
    return {
      isPresentationLoad: false,
      options: {
        licenseKey: 'rojukiss',
        anchors: [
          'sectionBanners',
          'sectionWhoWeAre',
          'sectionOurBrand',
          'sectionInnovation',
          'sectionNews',
          'sectionInvestors',
          'sectionWorkWithUs',
        ],
        scrollingSpeed: 1000,
        lockAnchors: false,
        slidesNavPosition: 'bottom',
        sectionSelector: '.fullpages',
        paddingTop: '0',
        paddingBottom: '0',
        // responsiveSlides: true,
        afterLoad: this.afterLoad,
        onLeave: this.onLeave,
      },
    }
  },

  methods: {
    sectionAnchor(params) {
      if (params.anchor === 'sectionBanners') {
        this.isActiveMenu({ isActive: true })
      } else {
        this.isActiveMenu({ isActive: false })
      }
    },

    afterLoad(origin, destination) {
      console.log('afterLoad')
      this.sectionAnchor({ anchor: destination.anchor })
    },

    onLeave(origin, destination) {
      console.log('onLeave')
      this.sectionAnchor({ anchor: destination.anchor })
    },

    ...mapActions({
      isActiveMenu: 'menus/isActive',
    }),
  }
}
</script>

<style lang="sass">
  .container-fluid.h-100
    max-height: calc(100% - 80px) !important
    padding: 0
</style>
