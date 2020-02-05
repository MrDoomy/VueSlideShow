<template>
  <section id="mounting">
    <h1>Initialisation</h1>
    <ul>
      <li>
        <span class="grey strike">
          1<small>er</small> Étape : Écrire son composant
        </span>
      </li>
      <li>
        2<small>ème</small> Étape : Monter son composant dans le DOM
      </li>
    </ul>
    <h3>HTML</h3>
    <pre>
      <code class="javscript" contenteditable>{{ getCode }}</code>
    </pre>
  </section>
</template>

<script>
const CODE = `
  <!DOCTYPE html>
  <html>
    <head></head>
    <body>

      <!-- Built Files Will Be Auto Injected -->
      <div id="root"></div>
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

<style lang="scss" scoped>
.strike {
  text-decoration: line-through;
}

section {
  &#mounting {
    ul {
      list-style-type: none;
    }
  }
}
</style>
