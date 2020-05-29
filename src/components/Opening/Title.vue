<template>
  <section id="title" data-background-color="#42b884">
    <img :data-src="getImgSlideShow" alt="SlideShow">
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
// import imgVue from '@/assets/img/vue.png';
import imgSlideShow from '@/assets/img/slideshow.png';

export default {
  computed: {
    getImgSlideShow() {
      return imgSlideShow;
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
