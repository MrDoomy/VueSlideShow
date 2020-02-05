<template>
  <section>
    <Content />
    <Each />
    <SecondDemo v-if="!hidden" />
  </section>
</template>

<script>
import Content from './Content';
import Each from './Each';
import SecondDemo from './SecondDemo';

export default {
  components: {
    Content,
    Each,
    SecondDemo
  },
  props: {
    hidden: {
      type: Boolean,
      default: false
    }
  }
};
</script>
