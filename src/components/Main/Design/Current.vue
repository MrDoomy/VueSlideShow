<template>
  <section id="current">
    <h2>Modèle Courant</h2>
    <p>
      Mise à jour des <code>props</code> d'un composant en passant
      <small>(implicitement)</small> par le parent
    </p>
    <div class="left">
      <h3>Parent</h3>
      <pre>
        <code class="html" contenteditable>{{ getCodeLeft }}</code>
      </pre>
    </div>
    <div class="fragment right">
      <h3>Enfant</h3>
      <pre>
        <code class="html" contenteditable>{{ getCodeRight }}</code>
      </pre>
    </div>
  </section>
</template>

<script>
const CODE_LEFT = `
  <template>
    <Child
      :counter="counter"
      @increment="counter++" />
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
        counter: 0
      }
    }
  };
  <\/script>
  `;

const CODE_RIGHT = `
  <template>
    <div>
      <h1>{{ counter }}</h1>
      <button @click="$emit('increment')">
        +1
      </button>
    </div>
  </template>

  <script>
  export default {
    name: 'Child',
    props: ['counter']
  };
  <\/script>
  `;

export default {
  computed: {
    getCodeLeft() {
      return CODE_LEFT;
    },
    getCodeRight() {
      return CODE_RIGHT;
    }
  }
};
</script>
