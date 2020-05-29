<template>
  <section id="style">
    <h2>Style</h2>
    <p>Utilisation de la portion réservée aux styles</p>
    <pre>
      <code class="html" contenteditable>{{ getSnippet }}</code>
    </pre>
  </section>
</template>

<script>
const SNIPPET = `
  <template>
    <p class="underline">Nothin' Bro !</p>
  </template>

  <style lang="scss" scoped>
  p {
    .underline {
      text-decoration: underline;
    }
  }
  <style>
  `;

export default {
  computed: {
    getSnippet() {
      return SNIPPET;
    }
  }
};
</script>
