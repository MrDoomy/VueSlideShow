<template>
  <section id="mixins">
    <h2>Mixins</h2>
    <p>Factoriser vos comportements grâce aux <strong>Mixins</strong></p>
    <div class="left">
      <pre>
        <code class="javascript" contenteditable>{{ getCodeLeft }}</code>
      </pre>
    </div>
    <div class="fragment right">
      <pre>
        <code class="html" contenteditable>{{ getCodeRight }}</code>
      </pre>
    </div>
  </section>
</template>

<script>
const CODE_LEFT = `
  export const mixinCounter = {
    data() {
      return {
        value: 0
      }
    },
    methods: {
      increment() {
        this.value = this.value++;
      },
      decrement(val) {
        this.value = this.value - val;
      }
    }
  };
  `;

const CODE_RIGHT = `
  <template>
    <div>
      <h1>Compteur</h1>
      <button @click="increment">
        {{ value }} +1
      </button>
      <button @click="() => decrement(2)">
        {{ value }} -2
      </button>
    </div>
  </template>

  <script>
  import { mixinCounter } from '@/mixins';

  export default {
    name: 'Counter',
    mixins: [mixinCounter]
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
