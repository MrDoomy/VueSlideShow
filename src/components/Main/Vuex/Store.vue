<template>
  <section id="store">
    <h2>Store</h2>
    <p>
      Composer votre <strong>store</strong> afin d'avoir accès aux
      <code>actions</code>, <code>getters</code> (et <code>mutations</code>)
    </p>
    <pre>
      <code class="javascript" contenteditable>{{ getSnippet }}</code>
    </pre>
  </section>
</template>

<script>
const SNIPPET = `
  import Vue from 'vue';
  import { Store } from 'vuex';
  import { actions } from './actions';
  import { getters } from './getters';
  import { mutations } from './mutations';

  Vue.use(Vuex);

  const store = {
    state: {
      tasks: []
    },
    actions,
    getters,
    mutations
  };

  export default new Store(store);
  `;

export default {
  computed: {
    getSnippet() {
      return SNIPPET;
    }
  }
};
</script>
