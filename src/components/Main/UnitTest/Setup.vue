<template>
  <section id="setup">
    <h2>Configuration</h2>
    <p>Récupération des librairies utilitaires :</p>
    <pre>
      <code class="shell" contenteditable>{{ getSnippetTop }}</code>
    </pre>
    <div class="fragment">
      <p>
        Initialisation du fichier <code>setupTests.js</code> :
      </p>
      <pre>
        <code class="javascript" contenteditable>{{ getSnippetBottom }}</code>
      </pre>
    </div>
  </section>
</template>

<script>
const SNIPPET_TOP = `
  npm install --save-dev @testing-library/vue @testing-library/jest-dom
  `;

const SNIPPET_BOTTOM = `
  import '@testing-library/jest-dom/extend-expect';
  `;

export default {
  computed: {
    getSnippetTop() {
      return SNIPPET_TOP;
    },
    getSnippetBottom() {
      return SNIPPET_BOTTOM;
    }
  }
};
</script>
