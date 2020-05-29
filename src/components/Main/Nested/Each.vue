<template>
  <section id="each">
    <h2>For Each</h2>
    <p>Construction dynamique de nœud DOM</p>
    <pre>
      <code class="html" contenteditable>{{ getSnippet }}</code>
    </pre>
    <div class="fragment">
      <span class="blue-grey">
        <em>Ne pas oublier d'identifier chaque élément lors d'un rendu dynamique grâce à <strong>key</strong></em>
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
    getSnippet() {
      return SNIPPET;
    }
  }
};
</script>
