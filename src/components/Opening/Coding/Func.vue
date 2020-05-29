<template>
  <section id="func">
    <h2>Fonctions</h2>
    <p>Voici comment déclarer une fonction en <strong>JavaScript</strong> :</p>
    <div class="left">
      <h3>ES5</h3>
      <pre>
        <code class="javascript" contenteditable>{{ getSnippetLeft }}</code>
      </pre>
    </div>
    <div class="right fragment">
      <h3>ES6+</h3>
      <pre>
        <code class="javascript" contenteditable>{{ getSnippetRight }}</code>
      </pre>
    </div>
  </section>
</template>

<script>
const SNIPPET_LEFT = `
  var tab = [3, 5, 7, 9];

  /* Assignation */
  var isSumEven = function(array) {
    var sum = 0;

    for (var i = 0; i < array.length; i++) {
      sum = sum + array[i];
    }

    return sum % 2 === 0;
  }

  var result = isSumEven(tab);

  /* Déclaration */
  function log(obj) {
    console.log('Result: ' + obj);
  };

  log(result); /* Result: true */
  `;

const SNIPPET_RIGHT = `
  const tab = [3, 5, 7, 9];

  /* Assignation */
  const isSumEven = array => {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }

    return sum % 2 === 0;
  };

  const result = isSumEven(tab);

  /* Déclaration */
  function log(obj) {
    console.log(\`Result: \${obj}\`);
  };

  log(tab); /* Result: true */
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
