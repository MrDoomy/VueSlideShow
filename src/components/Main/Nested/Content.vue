<template>
  <section id="slot">
    <h2>Imbrication</h2>
    <p>
      <code>&lt;slot&gt;&lt;/slot&gt;</code> permet d'accéder aux élements imbriqués
      <br>
      Il est possible de nommer les <code>&lt;slot&gt;&lt;/slot&gt;</code>
    </p>
    <div class="left">
      <h3>Parent</h3>
      <pre>
        <code class="html" contenteditable>{{ getSnippetLeft }}</code>
      </pre>
    </div>
    <div class="right fragment">
      <h3>Enfant</h3>
      <pre>
        <code class="html" contenteditable>{{ getSnippetRight }}</code>
      </pre>
    </div>
  </section>
</template>

<script>
const SNIPPET_LEFT = `
  <template>
    <Child>
      <span>World</span>
    </Child>
  </template>

  <script>
  import Child from './Child.vue';

  export default {
    name: 'Parent',
    components: {
      Child
    }
  };
  <\/script>
  `;

const SNIPPET_RIGHT = `
  <template>
    <div>
      <h1>Hello</h1>
      <slot></slot>
    </div>
  </template>

  <script>
  export default {
    name: 'Child'
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
