<template>
  <section id="initialize">
    <h2>Initialisation</h2>
    <p>
      Chargement du <strong>store</strong> dans l'instance principale de
      <strong>Vue</strong> : <code>main.js</code>
    </p>
    <pre>
      <code class="javascript" contenteditable>{{ getCode }}</code>
    </pre>
  </section>
</template>

<script>
const CODE = `
  import Vue from 'vue';
  import App from '@/components/App.vue';
  import store from './store';

  Vue.config.productionTip = false;

  new Vue({
    store,
    render: (h) => h(App)
  }).$mount('#root');
  `;

export default {
  computed: {
    getCode() {
      return CODE;
    }
  }
};
</script>
