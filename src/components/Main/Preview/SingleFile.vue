<template>
  <section id="single-file">
    <h1>Single File Component</h1>
    <p>
      Préférez la syntaxe <strong>Vue</strong> <small>2</small>, exemple avec le fichier
      <code>HelloWorld.vue</code> :
    </p>
    <pre>
      <code class="html" contenteditable>{{ getCode }}</code>
    </pre>
    <div class="fragment">
      <span class="blue-grey">
        <em>Les fichiers <strong>Vue</strong> doivent être transpilés</em>
      </span>
    </div>
  </section>
</template>

<script>
const SNIPPET = `
  <template>
    <span class="green">Hi {{ userName }} !</span>
  </template>

  <script>
  export default {
    name: 'hello-world',
    props: ['userName']
  };
  <\/script>

  <style scoped>
  .green {
    color: #42b884;
  }
  </style>
  `;

export default {
  computed: {
    getCode() {
      return SNIPPET;
    }
  }
};
</script>
