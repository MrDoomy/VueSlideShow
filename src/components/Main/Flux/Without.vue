<template>
  <section id="without">
    <h2>Sans Vuex</h2>
    <img :data-src="getImgWithoutFlux" alt="Without Vuex" />
  </section>
</template>

<script>
import imgWithoutFlux from '@/assets/img/without-flux.png';

export default {
  computed: {
    getImgWithoutFlux() {
      return imgWithoutFlux;
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  &#without {
    img {
      height: 530px;
    }
  }
}
</style>
