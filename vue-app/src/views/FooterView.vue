<template>
    <footer class="footer" :class="[this.$theme]">
      <div class="container">
          <div class="row">
              <div class="col-lg-12">
                  <div class="footer__copyright__text" :class="[this.$theme]">
                      <p>Copyright &copy; 2023 All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>
                  </div>
              </div>
          </div>
      </div>
    </footer>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'FooterView',
  computed: {
    ...mapState('Theme', ['$theme'])
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.footer__copyright__text p {
    margin-bottom: 0;
}

.footer__copyright__text i {
    color: #ca1515;
}

.footer__copyright__text a:hover {
    color: #ca1515;
}
</style>
