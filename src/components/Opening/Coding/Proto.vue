<template>
  <section id="proto">
    <h2>Prototype</h2>
    <p>
      Manière de faire de l'héritage en <strong>Javascript</strong>
      <br>
      C'est l'équivalent d'une classe en POO
      <br>
      Une sorte de patron qu'un objet peut utiliser
    </p>
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
  var Cat = function(name, color, length = 0) {
    Animal.call(this, name, color);
    this.length = length;
  }

  Cat.prototype.meow = function() {
    for (var i = 0; i < this.length; i++) {
      console.log('Meow!');
    }
  }

  var myCat = new Cat('Mocha', 'B&W', 5);

  myCat.toString();

  // Affichage 'Meow!' x5 dans la console
  myCat.meow();
  `;

const SNIPPET_RIGHT = `
  class Cat extends Animal {
    constructor(name, color, length = 0) {
      super(name, color);
      this.length = length;
    }

    meow() {
      for (let i = 0; i < this.length; i++) {
        console.log('Meow!');
      }
    }
  }

  const myCat = new Cat('Mocha', 'B&W', 5);

  myCat.toString();

  // Affichage 'Meow!' x5 dans la console
  myCat.meow();
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
