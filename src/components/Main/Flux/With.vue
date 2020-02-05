<template>
  <section id="with">
    <h2>Avec Vuex</h2>
    <img :data-src="getImgWithFlux" alt="With Vuex" />
  </section>
</template>

<script>
import imgWithFlux from '@/assets/img/with-flux.png';

export default {
  computed: {
    getImgWithFlux() {
      return imgWithFlux;
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  &#with {
    img {
      height: 560px;
      margin-right: 80px;
    }
  }
}
</style>
