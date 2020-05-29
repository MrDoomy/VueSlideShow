<template>
  <section id="mixins">
    <h2>Mixins</h2>
    <p>Factoriser vos comportements grâce aux <strong>Mixins</strong></p>
    <div class="left">
      <pre>
        <code class="javascript" contenteditable>{{ getSnippetLeft }}</code>
      </pre>
    </div>
    <div class="right fragment">
      <pre>
        <code class="html" contenteditable>{{ getSnippetRight }}</code>
      </pre>
    </div>
  </section>
</template>

<script>
const SNIPPET_LEFT = `
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

const SNIPPET_RIGHT = `
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
    getSnippetLeft() {
      return SNIPPET_LEFT;
    },
    getSnippetRight() {
      return SNIPPET_RIGHT;
    }
  }
};
</script>
