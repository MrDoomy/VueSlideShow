<template>
  <section id="mutations">
    <h2>Mutations</h2>
    <p>
      L'<em>action</em> trace le changement dans le <strong>store</strong>
      <br />
      La <code>mutation</code> se charge d'effectuer la modification
    </p>
    <pre>
      <code class="javascript" contenteditable>{{ getCode }}</code>
    </pre>
  </section>
</template>

<script>
const SNIPPET = `
  import { CREATE_TASK, COMPLETE_TASK, CLEAR_TASK } from './actions';

  export const mutations = {
    [CREATE_TASK](state, payload) {
      const { task } = payload;
      state.tasks.push(task);
    },
    [COMPLETE_TASK](state, payload) {
      const { id } = payload;
      state.tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
    },
    [CLEAR_TASK](state, payload) {
      const { id } = payload;
      state.tasks.filter(task => task.id !== id);
    }
  };
  `;

export default {
  computed: {
    getCode() {
      return SNIPPET;
    }
  }
};
</script>
