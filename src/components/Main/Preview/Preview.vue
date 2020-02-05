<template>
  <section>
    <Syntax />
    <SingleFile />
  </section>
</template>

<script>
import Syntax from './Syntax';
import SingleFile from './SingleFile';

export default {
  components: {
    Syntax,
    SingleFile
  }
};
</script>
