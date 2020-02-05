<template>
  <section>
    <Mounting />
    <Source />
    <FirstDemo v-if="!hidden" />
  </section>
</template>

<script>
import Mounting from './Mounting';
import Source from './Source';
import FirstDemo from './FirstDemo';

export default {
  components: {
    Mounting,
    Source,
    FirstDemo
  },
  props: {
    hidden: {
      type: Boolean,
      default: false
    }
  }
};
</script>
