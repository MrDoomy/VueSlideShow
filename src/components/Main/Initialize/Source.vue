<template>
  <section id="source">
    <h2>Main.JS</h2>
    <p>
      Au début de l'application, dans l'instance principale...
      <br>
      On appelle <strong>Vue</strong> afin de rendre le composant dans le DOM !
    </p>
    <pre>
      <code class="javascript" contenteditable>{{ getSnippet }}</code>
    </pre>
  </section>
</template>

<script>
const SNIPPET = `
  import Vue from 'vue';
  import HelloWorld from './path/to/HelloWorld.vue';

  Vue.config.productionTip = false;

  new Vue({
    el: '#root',
    components: {
      HelloWorld
    },
    template: '<hello-world></hello-world>'
  });
  `;

export default {
  computed: {
    getSnippet() {
      return SNIPPET;
    }
  }
};
</script>
