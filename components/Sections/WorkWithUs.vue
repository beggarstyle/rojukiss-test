<template>
  <div class="withUs">
    <div class="withUs__content">
      <div class="withUs__items">
        <Box />
      </div>

      <div class="withUs__items">
        <Block
          title="Work With Us"
          sub-title="Career At Rojukiss"
          is-title-center
        >
          <template>
            <div class="conteiner--center">
              <ReadmoreButtom />
            </div>
          </template>
        </Block>
      </div>

      <div class="withUs__items">
        <Box />
      </div>
    </div>

    <div class="withUs__footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Block from '~/components/Elements/Block'
import Box from '~/components/WorkWithUs/Box'
import Footer from '~/components/Layouts/Footer'
import ReadmoreButtom from '~/components/Elements/Buttom/ReadMore'

export default {
  components: {
    Footer,
    Block,
    Box,
    ReadmoreButtom
  }
}
</script>

<style lang="sass" scoped>
.withUs
  width: 100%
  height: 100%
  display: flex
  flex-direction: column
  justify-content: flex-start

  .withUs__content
    height: 60%
    display: flex
    flex-direction: row
    justify-content: flex-start

    .withUs__items
      width: 33%
      display: flex
      justify-content: center
      align-items: center

  .withUs__footer
    height: auto

.conteiner--center
  display: flex
  justify-content: center
</style>
