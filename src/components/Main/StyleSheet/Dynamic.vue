<template>
  <section id="dynamic">
    <h2>Dynamique</h2>
    <p>
      Utilisation de la directive
      <code>v-bind</code>
    </p>
    <pre>
      <code class="html" contenteditable>{{ getCode }}</code>
    </pre>
  </section>
</template>

<script>
const CODE = `
  <template>
    <p :style="{ textDecoration }">Hey ! What's Up !?</p>
    <p :style="getStyle">Nothin' Bro !</p>
  </template>

  <script>
  export default {
    data() {
      return {
        textDecoration: 'underline'
      }
    },
    computed: {
      getStyle() {
        return {
          textDecoration: this.textDecoration
        };
      }
    }
  };
  <\/script>
  `;

export default {
  computed: {
    getCode() {
      return CODE;
    }
  }
};
</script>
