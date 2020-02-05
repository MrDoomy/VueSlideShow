<template>
  <section id="syntax">
    <h1>Syntaxe</h1>
    <p>
      Ci-dessous un exemple de code <strong>Vue</strong> avec le fichier
      <code>index.html</code> :
    </p>
    <pre>
      <code class="html" contenteditable>{{ getCode }}</code>
    </pre>
  </section>
</template>

<script>
const CODE = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Vue</title>
    </head>

    <body>
      <div id="root">
        <hello-world userName="Rick"></hello-world>
      </div>
      
      <script src="https://unpkg.com/vue"><\/script>
      <script>
        Vue.component('hello-world', {
          props: ['userName'],
          template: '<span style="color: #42b884;">Hi {{ userName }} !</span>'
        });

        new Vue({
          el: '#root'
        });
      <\/script>
    </body>
  </html>
  `;

export default {
  computed: {
    getCode() {
      return CODE;
    }
  }
};
</script>
