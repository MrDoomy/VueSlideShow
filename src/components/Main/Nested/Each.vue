<template>
  <section id="slot">
    <h2>For Each</h2>
    <p>Construction dynamique de noeud DOM</p>
    <pre>
      <code class="html" contenteditable>{{ getCode }}</code>
    </pre>
    <div class="fragment">
      <span class="blue-grey">
        <em>Ne pas oublier d'identifier chaque élément lors d'un rendu dynamique grâce à</em>
        <strong>key</strong>
      </span>
    </div>
  </section>
</template>

<script>
const SNIPPET = `
  <template>
    <ul>
      <li v-for="(item, idx) in myList" :key="idx">
        {{ item }}
      </li>
    </ul>
  </template>

  <script>
  export default {
    name: 'Listing',
    props: {
      myList: {
        type: Array,
        default: () => ['Awesome', 'Vue', 'Course']
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
