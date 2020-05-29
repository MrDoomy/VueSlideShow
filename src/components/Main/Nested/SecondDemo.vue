<template>
  <section id="second-demo">
    <div v-html="getDemo"></div>
  </section>
</template>

<script>
import marked from 'marked';

const DEMO = `
  # Demo 2.0

  ## Counter
  
  Add 1 / Del 1 / Reset
  
  ### Code SandBox

  [https://codesandbox.io/](https://codesandbox.io/s/demo-ii-t47bl)

  _App 4 ConfJS Made With **Vue** & <3_
`;

export default {
  computed: {
    getDemo() {
      return marked(DEMO);
    }
  }
};
</script>
