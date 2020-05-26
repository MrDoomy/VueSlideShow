<template>
  <section id="functional">
    <h1>Functional Components</h1>
    <p>
      Les composants n'incluant que la fonction <code>render()</code> peuvent s'écrirent autrement
      <br />
      Contient quelques <code>data</code> et / ou <code>props</code>
    </p>
    <div class="left">
      <h3>ES6+</h3>
      <pre>
        <code class="javascript" contenteditable>{{ getCodeLeft }}</code>
      </pre>
    </div>
    <div class="fragment right">
      <h3>JSX</h3>
      <pre>
        <code class="javascript" contenteditable>{{ getCodeRight }}</code>
      </pre>
    </div>
  </section>
</template>

<script>
const SNIPPET_LEFT = `
  Vue.component('greeting', {
    functional: true,
    props: ['userName'],
    render: function(createElement, context) {
      createElement(
        'span',
        { style: { color: '#2a2c2e' }},
        \`Hi $\{context.props.userName} !\`
      );
    }
  });
  `;

const SNIPPET_RIGHT = `
  export default {
    name: 'Greeting',
    functional: true,
    props: ['userName'],
    render: function(h, { props }) {
      return (
        <span style={{ color: '#2a2c2e' }}>
          Hi {userName} !
        </span>
      );
    }
  };
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
