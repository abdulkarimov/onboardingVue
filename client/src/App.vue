<template>
  <div>
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar/Navbar.vue'
import Footer from './components/layout/Footer/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
@import "./styles/colors/Colors.scss";

body {
  background-color: $bg-main-color;
  color: $white;
}
</style>