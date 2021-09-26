<template>
  <b-container class="h-100" fluid>
    <b-row class="h-100" align-v="center">
      <b-col>
        <Content>
          <template>
            <Block title="Who Are We" sub-title="Time to Great Change">
              <template>
                <p>We believe that our key to success is tied up to Expertise, Sincerity and Commitment that we have on our duties, our staff, our partners and our customers.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliquaenim ad minim venia.</p>

                <div class="mt-5">
                  <ReadmoreButton />
                </div>
              </template>
            </Block>
          </template>
        </Content>
      </b-col>

      <b-col class="h-100">
        <figure class="w-100 h-100 pa-4">
          <b-img-lazy
            class="w-100 h-100"
            src="/images/shutterstock_314852606.png"
            width="540"
          />
        </figure>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Content from '~/components/Elements/Content'
import Block from '~/components/Elements/Block'
import ReadmoreButton from '~/components/Elements/Buttom/ReadMore'

export default {
  components: {
    Content,
    Block,
    ReadmoreButton
  },
}
</script>
