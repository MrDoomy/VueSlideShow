<template>
  <section id="mapping">
    <h2>Mapping</h2>
    <p>
      Définition des chemins pour chaques composants de l'application
      <br>
      <strong>Vue</strong> gère nativement le découpage dynamique
    </p>
    <pre>
      <code class="javascript" contenteditable>{{ getSnippet }}</code>
    </pre>
  </section>
</template>

<script>
const SNIPPET = `
  import Vue from 'vue';
  import Router from 'vue-router';
  import Home from '@/components/Home.vue';
  import Login from '@/components/Login.vue';
  
  // Code Splitting
  const Contact = () => import('@/components/Contact.vue');

  Vue.use(Router);

  const router = {
    mode: 'history',
    routes: [
      { path: '/', component: Home },
      { path: '/login', name: 'login', component: Login },
      { path: '/contact/:userName', name: 'contact', component: Contact, props: true }
    ]
  };

  export default new Router(router);
  `;

export default {
  computed: {
    getSnippet() {
      return SNIPPET;
    }
  }
};
</script>
