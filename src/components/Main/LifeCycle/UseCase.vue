<template>
  <section id="use-case">
    <h2>Cas d'Usage</h2>
    <p>Appel d'une API lorsque le composant est monté dans le DOM</p>
    <pre>
      <code class="html" contenteditable>{{ getSnippet }}</code>
    </pre>
  </section>
</template>

<script>
const SNIPPET = `
  <template>
    <!-- ... -->
  </template>

  <script>
  import axios from 'axios';

  export default {
    name: 'HelloWorld',
    mounted() {
      console.log('Mounted !');

      axios.get('/api/hello-world').then(response => {
        console.log(response.data);
      });
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
