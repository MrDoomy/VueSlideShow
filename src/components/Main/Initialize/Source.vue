<template>
  <section id="source">
    <h2>Main.JS</h2>
    <p>
      Au début de l'application, dans l'instance principale...
      <br />
      On appelle <strong>Vue</strong> afin de rendre le composant dans le DOM !
    </p>
    <pre>
      <code class="javascript" contenteditable>{{ getCode }}</code>
    </pre>
  </section>
</template>

<script>
const CODE = `
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
    getCode() {
      return CODE;
    }
  }
};
</script>
