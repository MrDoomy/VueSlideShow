<template>
  <section id="hoisting">
    <h2>Fonctionnement</h2>
    <p>
      Le code <strong>JavaScript</strong> mêle à la fois du code exécuté et du code déclaratif
      <br>
      La pile d'exécution <small>(Call Stack)</small> compile le code puis l'exécute
      <br>
      Ainsi, le code <strong>JavaScript</strong> est synchrone
    </p>
    <div class="left">
      <pre>
        <code class="javascript" contenteditable>{{ getSnippetLeft }}</code>
      </pre>
    </div>
    <div class="right fragment">
      <pre>
        <code class="javascript" contenteditable>{{ getSnippetRight }}</code>
      </pre>
    </div>
  </section>
</template>

<script>
const SNIPPET_LEFT = `
  'use strict';
  console.log('i:', i);

  var i = 1;
  execute('Hey');

  function execute(message) {
    console.log(message);
  }

  execute('Hey);
  `;

const SNIPPET_RIGHT = `
  // Compile
  var i;
  function execute(message) {
    console.log(message);
  }

  // Execute
  console.log('i:' i);
  i = 1;
  execute('Hey');
  execute('Hey');
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
