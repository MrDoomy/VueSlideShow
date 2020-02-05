<template>
  <section>
    <section id="vuex" data-background-color="#42b884">
      <img :data-src="getImgVuex" alt="Vuex" />
      <h2>
        <span class="white">Vuex</span>
      </h2>
    </section>
    <Principle />
    <Actions />
    <Mutations />
    <Getters />
    <Store />
    <Initialize />
    <Dispatching />
    <FourthDemo v-if="!hidden" />
  </section>
</template>

<script>
import Principle from './Principle';
import Actions from './Actions';
import Mutations from './Mutations';
import Getters from './Getters';
import Store from './Store';
import Initialize from './Initialize';
import Dispatching from './Dispatching';
import FourthDemo from './FourthDemo';
import imgVuex from '@/assets/img/vuex.png';

export default {
  components: {
    Principle,
    Actions,
    Mutations,
    Getters,
    Store,
    Initialize,
    Dispatching,
    FourthDemo
  },
  props: {
    hidden: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getImgVuex() {
      return imgVuex;
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  &#vuex {
    img {
      background: rgba(255, 255, 255, 0);
    }
  }
}
</style>
