<template>
  <section id="title" data-background-color="#42b884">
    <img :data-src="getImgVue" alt="Vue" />
    <h2>
      <span class="white">Vue <small>2.6.10</small></span>
    </h2>
    <h3>
      <span class="white">
        The Progressive <strong>JavaScript</strong> Framework
      </span>
    </h3>
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
  &#title {
    img {
      background: rgba(255, 255, 255, 0);
    }
  }
}
</style>
