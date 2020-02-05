<template>
  <section id="transition" :data-background="getImgBundle" />
</template>

<script>
import imgBundle from '@/assets/img/bundle.png';

export default {
  computed: {
    getImgBundle() {
      return imgBundle;
    }
  }
};
</script>
