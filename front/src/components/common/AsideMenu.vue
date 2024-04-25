<template>
  <transition name="aside">
    <div class="aside-wrap" v-if="isOpenAside">
    <!-- <div class="aside-wrap"> -->
      <div class="aside-body">
        <div class="aside-inner">
          <nav class="aside-nav">
            <ul>
              <li><router-link to="/main">Home</router-link></li>
              <li><router-link to="/work">Work</router-link></li>
              <li>
                <router-link to="/about">About us</router-link>
                <ul class="aside-nav-sub right">
                  <li><router-link to="/who-we-are">Who we are</router-link></li>
                  <li><router-link to="/contact-us">Contact us</router-link></li>
                </ul>
              </li>
              <li>
                <router-link to="/culture">Culture</router-link>
                <ul class="aside-nav-sub left">
                  <li><router-link to="/culture">Hello! the fifty one</router-link></li>
                  <li><router-link to="/insight">Insight</router-link></li>
                </ul>
              </li>
              <li><router-link to="/recruit">Recruit</router-link></li>
            </ul>
          </nav>

          <SnsLink site="aside"></SnsLink>

          <div class="aside-copy">© 2019 the Fiftyone Corp.</div>
        </div>
      </div>
      <div class="aisde-dimmed"></div>
    </div>
  </transition>
</template>

<script>
import SnsLink from '@/components/common/SnsLink.vue'
import { mapGetters } from 'vuex';

export default {
  components: {
    SnsLink,
  },
  computed: {
    ...mapGetters(['isOpenAside']),
  },
}
</script>