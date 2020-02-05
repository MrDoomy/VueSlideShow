<template>
  <section id="design">
    <img class="clearfix" :data-src="getImgLess" alt="Less" />
    <img :data-src="getImgSass" alt="Sass" />
    <img :data-src="getImgStylus" alt="Stylus" />
    <h2>CSS</h2>
    <p>
      Des feuilles qui ont du style
      <br />
      Du <em>design</em> pour vôtre application
      <br />
      Choisir entre le
      <span class="less">
        <strong>Less</strong>
      </span>
      , le
      <span class="sass">
        <strong>Sass</strong>
      </span>
      ou le
      <span class="stylus">
        <strong>Stylus</strong>
      </span>
    </p>
  </section>
</template>

<script>
import imgLess from '@/assets/img/less.png';
import imgSass from '@/assets/img/sass.png';
import imgStylus from '@/assets/img/stylus.png';

export default {
  computed: {
    getImgLess() {
      return imgLess;
    },
    getImgSass() {
      return imgSass;
    },
    getImgStylus() {
      return imgStylus;
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  &#design {
    .clearfix {
      height: 180px;
      margin-bottom: 30px;
    }
  }
}
</style>
