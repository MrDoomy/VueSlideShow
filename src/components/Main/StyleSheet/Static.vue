<template>
  <section id="static">
    <h2>Statique</h2>
    <p>Utilisation du template HTML</p>
    <pre>
      <code class="html" contenteditable>{{ getCode }}</code>
    </pre>
  </section>
</template>

<script>
const SNIPPET = `
  <template>
    <p style="text-decoration: underline;">Hey ! What's Up !?</p>
  </template>
  `;

export default {
  computed: {
    getCode() {
      return SNIPPET;
    }
  }
};
</script>
