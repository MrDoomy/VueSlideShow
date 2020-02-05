<template>
  <section>
    <Verbatim />
    <Directives />
    <ShortHand />
  </section>
</template>

<script>
import Verbatim from './Verbatim';
import Directives from './Directives';
import ShortHand from './ShortHand';

export default {
  components: {
    Verbatim,
    Directives,
    ShortHand
  }
};
</script>
