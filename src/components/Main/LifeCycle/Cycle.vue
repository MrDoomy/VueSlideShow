<template>
  <section id="cycle" :data-background="getImgLifeCycle" />
</template>

<script>
import imgLifeCycle from '@/assets/img/lifecycle.png';

export default {
  computed: {
    getImgLifeCycle() {
      return imgLifeCycle;
    }
  }
};
</script>
