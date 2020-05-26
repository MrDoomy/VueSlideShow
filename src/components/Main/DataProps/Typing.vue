<template>
  <section id="typing">
    <h2>Typage</h2>
    <p>
      Définir le type des propriétés
      <br />
      Imposer des valeurs par défaut
    </p>
    <pre>
      <code class="html" contenteditable>{{ getCode }}</code>
    </pre>
  </section>
</template>

<script>
const SNIPPET = `
  <template>
    <div>
      <span>{{ counter }}</span>
      <button @click="increment">+1</button>
    </div>
  </template>

  <script>
  export default {
    name: 'Counter',
    props: {
      counter: {
        type: Number,
        default: 0
      },
      increment: {
        type: Function,
        required: true
      }
    }
  };
  <\/script>
  `;

export default {
  computed: {
    getCode() {
      return SNIPPET;
    }
  }
};
</script>
