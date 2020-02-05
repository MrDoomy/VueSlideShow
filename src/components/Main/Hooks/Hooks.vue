<template>
  <section>
    <section id="hooks" data-background-color="#42b884">
      <h1>
        <span class="white">
          Methods,
          <br />
          Computed &
          <br />
          Watch
        </span>
      </h1>
    </section>
    <Methods />
    <Computed />
    <Watch />
    <ThirdDemo v-if="!hidden" />
  </section>
</template>

<script>
import Methods from './Methods';
import Computed from './Computed';
import Watch from './Watch';
import ThirdDemo from './ThirdDemo';

export default {
  components: {
    Methods,
    Computed,
    Watch,
    ThirdDemo
  },
  props: {
    hidden: {
      type: Boolean,
      default: false
    }
  }
};
</script>
