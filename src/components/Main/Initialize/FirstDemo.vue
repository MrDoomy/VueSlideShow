<template>
  <section id="first-demo">
    <div v-html="getDemo"></div>
  </section>
</template>

<script>
import marked from 'marked';

const DEMO = `
  # Demo 1.0

  ## Counter
  
  Hello World
  
  ### Code SandBox

  [https://codesandbox.io/](https://codesandbox.io/s/demo-i-h23jk)

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
