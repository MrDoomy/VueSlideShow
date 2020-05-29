<template>
  <section id="methods">
    <h2>Methods</h2>
    <p>Réagir aux événements qui se produisent dans le DOM</p>
    <pre>
      <code class="html" contenteditable>{{ getSnippet }}</code>
    </pre>
  </section>
</template>

<script>
const SNIPPET = `
  <template>
    <button @click="handleClick()">Say Hello</button>
  </template>

  <script>
  export default {
    data() { 
      return {
        firstName: 'Rick',
        lastName: 'Sanchez'
      };
    },
    methods: {
      handleClick() {
        alert(\`Hello ! I'm $\{this.firstName} $\{this.lastName}\`);
      }
    }
  };
  <\/script>
  `;

export default {
  computed: {
    getSnippet() {
      return SNIPPET;
    }
  }
};
</script>
