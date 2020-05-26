<template>
  <section id="computed">
    <h2>Computed</h2>
    <p>Définir de nouvelles données à partir de données déjà existantes</p>
    <pre>
      <code class="html" contenteditable>{{ getCode }}</code>
    </pre>
  </section>
</template>

<script>
const SNIPPET = `
  <template>
    <span>{{ fullName }}</span>
  </template>

  <script>
  export default {
    data() { 
      return {
        firstName: 'Rick',
        lastName: 'Sanchez'
      };
    },
    computed: {
      fullName() {
        return this.firstName + ' ' + this.lastName;
      },
      now: () => Date.now()
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
