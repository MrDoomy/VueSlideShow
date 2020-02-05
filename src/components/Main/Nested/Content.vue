<template>
  <section id="slot">
    <h2>Imbrication</h2>
    <p>
      <code>&lt;slot&gt;&lt;/slot&gt;</code> permet d'accéder aux élements imbriqués
      <br />
      Il est possible de nommer les <code>&lt;slot&gt;&lt;/slot&gt;</code>
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

const CODE_RIGHT = `
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
    getCodeLeft() {
      return CODE_LEFT;
    },
    getCodeRight() {
      return CODE_RIGHT;
    }
  }
};
</script>
