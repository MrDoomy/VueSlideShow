<template>
  <section id="third-demo">
    <div v-html="getDemo" />
  </section>
</template>

<script>
import marked from 'marked';

const DEMO = `
  # Demo 3.0

  ## Counter
  
  Components
  
  ### Code SandBox

  [https://codesandbox.io/](https://codesandbox.io/s/demo-iii-zrwp3)

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
