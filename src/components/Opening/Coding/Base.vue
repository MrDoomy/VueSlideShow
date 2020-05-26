<template>
  <section id="base">
    <h2>Variables</h2>
    <p>
      Les types primitifs en <strong>JavaScript</strong> sont :<br />
      <code>
        <span class="orange">boolean</span>
      </code>
      ,
      <code>
        <span class="blue">number</span>
      </code>
      ,
      <code>
        <span class="red">string</span>
      </code>
      ,
      <code>
        <span class="green">undefined</span>
      </code>
      et
      <code>
        <span class="pink">null</span>
      </code>
    </p>
    <div class="left">
      <h3>ES5</h3>
      <pre>
        <code class="javascript" contenteditable>{{ getCodeLeft }}</code>
      </pre>
    </div>
    <div class="fragment right">
      <h3>ES6+</h3>
      <pre>
        <code class="javascript" contenteditable>{{ getCodeRight }}</code>
      </pre>
    </div>
  </section>
</template>

<script>
const SNIPPET_LEFT = `
  var myVar;

  var fourtyTwo = 42;

  var helloWorld = 'Hello World';

  var truthy = true;

  console.log(typeof myVar); // undefined

  alert(helloWorld + ' !'); // Hello World !

  console.log(truthy && 'It Works'); // It Works
  `;

const SNIPPET_RIGHT = `
  let myVar;
  myVar = null;

  const fourtyTwo = 42;

  const helloWorld = 'Hello World';
  helloWorld = 'Hey'; // TypeError !

  const truthy = true;

  alert(\`$\{helloWorld} !\`); // Hello World !

  console.log(truthy && 'It Works'); // It Works
  `;

export default {
  computed: {
    getCodeLeft() {
      return SNIPPET_LEFT;
    },
    getCodeRight() {
      return SNIPPET_RIGHT;
    }
  }
};
</script>
