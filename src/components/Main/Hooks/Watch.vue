<template>
  <section id="watch">
    <h2>Watch</h2>
    <p>Effectuer des actions lorsque les propriétés d'une donnée changent</p>
    <pre>
      <code class="html" contenteditable>{{ getSnippet }}</code>
    </pre>
    <div class="fragment">
      <span class="blue-grey">
        <em>
          Ici, la bonne pratique est d'utiliser la directive
          <strong>v-model</strong>
        </em>
      </span>
    </div>
  </section>
</template>

<script>
const SNIPPET = `
  <template>
    <input @change="handleChange()" :value="userName">
  </template>

  <script>
  export default {
    data() {
      return {
        userName: 'Morty'
      };
    },
    methods: {
      handleChange(event) {
        this.userName = event.target.value;
      }
    },
    watch: {
      userName() {
        console.log(this.userName);
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
