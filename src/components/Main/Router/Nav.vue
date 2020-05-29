<template>
  <section id="nav">
    <h2>Navigation</h2>
    <p>La navigation par URL peut ensuite se faire de deux manières :</p>
    <ol>
      <li>
        Grâce au composant <strong>router-link</strong> au sein du template
      </li>
      <li>
        Dynamiquement via la donnée <code>$history</code> étendue par l'instance de
        <strong>Vue</strong>
      </li>
    </ol>
    <div class="fragment">
      <pre>
        <code class="html" contenteditable>{{ getSnippet }}</code>
      </pre>
    </div>
  </section>
</template>

<script>
const SNIPPET = `
  <template>
    <div>
      <nav>
        <router-link to="/login">Login</router-link>
        <button @click="goToContact('morty')">
          Contact
        </button>
      </nav>
      <router-view></router-view>
    </div>
  </template>

  <script>
  export default {
    name: 'NavBar',
    methods: {
      goToContact: function(userName) {
        this.$router.push({ name: 'contact', params: { userName } });
      }
    }
  };
  <\/script>
  `;

export default {
  computed: {
    getSnippet() {
      return SNIPPET;
    }
  }
};
</script>
