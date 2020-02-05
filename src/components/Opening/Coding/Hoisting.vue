<template>
  <section id="hoisting">
    <h2>Fonctionnement</h2>
    <p>
      Le code <strong>JavaScript</strong> mêle à la fois du code exécuté et du code déclaratif
      <br />
      La pile d'exécution <small>(Call Stack)</small> compile le code puis l'exécute
      <br />
      Ainsi, le code <strong>JavaScript</strong> est synchrone
    </p>
    <div class="left">
      <pre>
        <code class="javascript" contenteditable>{{ getCodeLeft }}</code>
      </pre>
    </div>
    <div class="fragment right">
      <pre>
        <code class="javascript" contenteditable>{{ getCodeRight }}</code>
      </pre>
    </div>
  </section>
</template>

<script>
const CODE_LEFT = `
  'use strict';
  console.log('i:', i);

  var i = 1;
  execute('Hey');

  function execute(message) {
    console.log(message);
  }

  execute('Hey);
  `;

const CODE_RIGHT = `
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
    getCodeLeft() {
      return CODE_LEFT;
    },
    getCodeRight() {
      return CODE_RIGHT;
    }
  }
};
</script>
