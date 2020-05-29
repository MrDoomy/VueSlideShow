<template>
  <section id="actions">
    <h2>Actions</h2>
    <p>
      Mise à jour du <strong>store</strong> uniquement via les
      <code>mutations</code> appelés par des <em>actions</em>
      <br>
      La comparaison de l'état permet d'identifier le changement
      <br>
      Les <em>constantes</em> sont les références utilisées par les
      <code>mutations</code>
    </p>
    <pre>
      <code class="javascript" contenteditable>{{ getSnippet }}</code>
    </pre>
  </section>
</template>

<script>
const SNIPPET = `
  // Constants
  export const CREATE_TASK = 'TASKS/CREATE_TASK';
  export const COMPLETE_TASK = 'TASKS/COMPLETE_TASK';
  export const CLEAR_TASK = 'TASKS/CLEAR_TASK';

  export const actions = {
    createTask({ commit }, task) {
      commit(CREATE_TASK, { task });
    },
    completeTask({ commit }, id) {
      commit(COMPLETE_TASK, { id });
    },
    clearTask({ commit }, id) {
      commit(CLEAR_TASK, { id });
    }
  };
  `;

export default {
  computed: {
    getSnippet() {
      return SNIPPET;
    }
  }
};
</script>
