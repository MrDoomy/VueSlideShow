<template>
  <section id="implementation">
    <h2>Intégration</h2>
    <p>Ajout du mapping dans l'instance principale de <strong>Vue</strong></p>
    <pre>
      <code class="javascript" contenteditable>{{ getSnippet }}</code>
    </pre>
  </section>
</template>

<script>
const SNIPPET = `
  import Vue from 'vue';
  import App from '@/components/App.vue';
  import router from 'router';

  Vue.config.productionTip = false;

  new Vue({
    router,
    render: (h) => h(App)
  }).$mount('#root');
  `;

export default {
  computed: {
    getSnippet() {
      return SNIPPET;
    }
  }
};
</script>
