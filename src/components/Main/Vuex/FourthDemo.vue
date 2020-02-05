<template>
  <section id="fourth-demo">
    <div v-html="getDemo" />
  </section>
</template>

<script>
import marked from 'marked';

const DEMO = `
  # Demo 4.0

  ## Counter
  
  State Management
  
  ### Code SandBox

  [https://codesandbox.io/](https://codesandbox.io/s/demo-iv-w4z14)

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
