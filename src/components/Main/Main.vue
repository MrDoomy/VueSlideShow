<template>
  <section id="vue" data-background-color="#42b884">
    <img :data-src="getImgVue" alt="Vue">
    <h2>
      <span class="white">Vue</span>
    </h2>
  </section>
</template>

<script>
import imgVue from '@/assets/img/vue.png';

export default {
  computed: {
    getImgVue() {
      return imgVue;
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  &#vue {
    img {
      background: rgba(255, 255, 255, 0);
    }
  }
}
</style>
