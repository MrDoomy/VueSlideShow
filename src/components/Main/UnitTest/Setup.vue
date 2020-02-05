<template>
  <section id="jest">
    <h2>Configuration</h2>
    <p>Récupération des librairies utilitaires :</p>
    <pre>
      <code class="shell" contenteditable>{{ getCodeTop }}</code>
    </pre>
    <div class="fragment">
      <p>
        Initialisation du fichier <code>setupTests.js</code> :
      </p>
      <pre>
        <code class="javascript" contenteditable>{{ getCodeBottom }}</code>
      </pre>
    </div>
  </section>
</template>

<script>
const CODE_TOP = `
  npm install --save-dev @testing-library/vue @testing-library/jest-dom
  `;

const CODE_BOTTOM = `
  import '@testing-library/jest-dom/extend-expect';
  `;

export default {
  computed: {
    getCodeTop() {
      return CODE_TOP;
    },
    getCodeBottom() {
      return CODE_BOTTOM;
    }
  }
};
</script>
