<template>
  <section id="mutations">
    <h2>Getters</h2>
    <p>
      Les <code>getters</code> permettent de récupérer l'état d'une donnée dans le
      <strong>store</strong>
      <br />
      Il est possible de passer des paramètres aux <code>getters</code>
    </p>
    <pre>
      <code class="javascript" contenteditable>{{ getCode }}</code>
    </pre>
  </section>
</template>

<script>
const SNIPPET = `
  export const getters = {
    getTasks(state) {
      return state.tasks | [];
    },
    getTaskById: (state, getters) => id => {
      return getters.getTasks.find(task => task.id === id);
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
