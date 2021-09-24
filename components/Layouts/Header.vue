<template>
  <nav
    :class="{
      navbar: isActive,
      'navbar-expand-lg': true,
      'navbar-light': true,
      'is-active': isActive
    }"
  >
    <a class="navbar-brand" href="#"></a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav w-100 justify-content-center">
        <li class="nav-item active">
          <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
          <a href="javascript:;" class="nav-link">
            <b-img src="/images/full_logo.png" fluid-grow />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      isActive: 'menus/isActive',
    }),
  },
}
</script>


<style lang="sass" scoped>
nav
  display: none

nav.is-active
  display: flex !important
</style>
