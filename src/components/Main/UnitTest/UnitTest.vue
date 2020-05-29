<template>
  <section>
    <section id="unit-test" data-background-color="#2a2c2e">
      <img :data-src="getImgJest" alt="Jest">
      <img :data-src="getImgTestingLib" alt="Testing Library">
      <h2>
        <span class="white">Jest & Testing Library</span>
      </h2>
    </section>
    <Setup />
    <DescribeComponent />
    <DescribeStore />
  </section>
</template>

<script>
import Setup from './Setup';
import DescribeComponent from './DescribeComponent';
import DescribeStore from './DescribeStore';
import imgJest from '../../../assets/img/jest.png';
import imgTestingLib from '../../../assets/img/testing-lib.png';

export default {
  components: {
    Setup,
    DescribeComponent,
    DescribeStore
  },
  computed: {
    getImgJest() {
      return imgJest;
    },
    getImgTestingLib() {
      return imgTestingLib;
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  &#unit-test {
    img {
      background: rgba(255, 255, 255, 0);
    }
  }
}
</style>
