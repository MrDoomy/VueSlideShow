<template>
  <section id="data">
    <h2>Data</h2>
    <p>
      Les données sont mutables
      <br />
      Données locales au composant
      <br />
      Gestion de l'état grâce aux <code>methods</code>
    </p>
    <pre>
      <code class="html" contenteditable>{{ getCode }}</code>
    </pre>
  </section>
</template>

<script>
const CODE = `
  <template>
    <div>
      <span>{{ counter }}</span>
      <button @click="increment">+1</button>
    </div>
  </template>

  <script>
  export default {
    name: 'Counter',
    data() {
      return {
        counter: 0
      }
    },
    methods: {
      increment() {
        this.counter = this.counter++;
      }
    }
  };
  <\/script>
  `;

export default {
  computed: {
    getCode() {
      return CODE;
    }
  }
};
</script>
