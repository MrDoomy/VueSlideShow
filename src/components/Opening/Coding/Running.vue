<template>
  <section id="running">
    <h2>Interprétation</h2>
    <p>
      Quel est le résultat de cette fonction <strong>JavaScript</strong> :
      <br>
      <span class="orange">
        <code>1</code>
      </span>
      ,
      <span class="blue">
        <code>10</code>
      </span>
      ,
      <span class="red">
        <code>undefined</code>
      </span>
      ou
      <span class="green">
        <code>ReferenceError</code>
      </span>
      ?
    </p>
    <div class="left">
      <h3>Pré-Compilation</h3>
      <pre>
        <code class="javascript" contenteditable>{{ getSnippetLeft }}</code>
      </pre>
    </div>
    <div class="right fragment">
      <h3>Post-Compilation</h3>
      <pre>
        <code class="javascript" contenteditable>{{ getSnippetRight }}</code>
      </pre>
    </div>
  </section>
</template>

<script>
const SNIPPET_LEFT = `
  var foo = 1;
    
  function bar() {
    if (!foo) {
      var foo = 10;
    }

    console.log(foo);
  }
    
  bar();
  `;

const SNIPPET_RIGHT = `
  var foo = 1;

  function bar() {
    var foo;

    if (!foo) {
      foo = 10;
    }

    console.log(foo);
  }

  bar(); // 10
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
