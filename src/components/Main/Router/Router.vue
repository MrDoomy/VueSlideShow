<template>
  <section>
    <section id="router" data-background-color="#42b884">
      <img :data-src="getImgVueRouter" alt="Vue Router">
      <h2>
        <span class="white">Vue Router</span>
      </h2>
    </section>
    <Explanation />
    <Mapping />
    <Implementation />
    <Nav />
  </section>
</template>

<script>
import Explanation from './Explanation';
import Mapping from './Mapping';
import Implementation from './Implementation';
import Nav from './Nav';
import imgVueRouter from '@/assets/img/vue-router.png';

export default {
  name: 'Router',
  components: {
    Explanation,
    Mapping,
    Implementation,
    Nav
  },
  computed: {
    getImgVueRouter() {
      return imgVueRouter;
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  &#router {
    img {
      background: rgba(255, 255, 255, 0);
    }
  }
}
</style>
