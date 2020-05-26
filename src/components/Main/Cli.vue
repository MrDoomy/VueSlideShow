<template>
  <section id="cli">
    <h1>Command Line Interface</h1>
    <p>
      L'indispensable <code>@vue/cli</code>
      <br />
      Outil CLI <strong>Vue</strong> <small>(officiel)</small>
      <br />
      Projet prêt à l'emploi grâce à <code>vue-cli-service</code>
      <br />
      Support de <strong>TypeScript</strong>, <strong>PostCSS</strong>, <strong>Pug</strong>...
      <br />
      Autorise la surcharge pour la personnalisation Webpack
    </p>
    <pre>
      <code class="shell">{{ getCode }}</code>
    </pre>
  </section>
</template>

<script>
const SNIPPET = `
  npm i -g @vue/cli
  vue create my-project
  `;

export default {
  computed: {
    getCode() {
      return SNIPPET;
    }
  }
};
</script>
