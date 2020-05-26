<template>
  <section id="props">
    <h2>Props</h2>
    <p>
      Les propriétés sont immutables
      <br />
      N'importe quelle valeur
      <small>(listes, objets, fonctions, booléens... )</small>
      <br />
      Données transmises d'un composant parent à un enfant
      <br />
      Passer des propriétés comme des attributs d'un élement HTML
    </p>
    <div class="left">
      <h3>Enfant</h3>
      <pre>
        <code class="html" contenteditable>{{ getCodeLeft }}</code>
      </pre>
    </div>
    <div class="fragment right">
      <h3>Parent</h3>
      <pre>
        <code class="html" contenteditable>{{ getCodeRight }}</code>
      </pre>
    </div>
  </section>
</template>

<script>
const SNIPPET_LEFT = `
  <template>
    <div>
      <h3>{{ label }}<h3>
      <span>{{ counter }}</span>
    </div>
  </template>

  <script>
  export default {
    name: 'Child',
    props: [
      'label',
      'counter'
    ]
  };
  <\/script>
  `;

const SNIPPET_RIGHT = `
  <template>
    <Child label="Compteur" :counter="counter" />
  </template>

  <script>
  import Child from './Child.vue';

  export default {
    name: 'Parent',
    components: {
      Child
    },
    data() {
      return {
        counter: 42
      }
    }
  };
  <\/script>
  `;

export default {
  computed: {
    getCodeLeft() {
      return SNIPPET_LEFT;
    },
    getCodeRight() {
      return SNIPPET_RIGHT;
    }
  }
};
</script>
