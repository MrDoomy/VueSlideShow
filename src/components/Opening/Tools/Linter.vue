<template>
  <section id="linter">
    <img :data-src="getImgEsLint" alt="ESLint">
    <h2>ESLint</h2>
    <p>
      <span class="clearfix">
        Optimisation de
        <span class="deep-purple">
          <code>code</code>
        </span>
      </span>
      <br>
      Analyse statique du
      <span class="deep-purple">
        <code>code</code>
      </span>
      source
      <br>
      Contrôle l'écriture du
      <span class="deep-purple">
        <code>code</code>
      </span>
      <strong> JavaScript</strong>
      <br>
      Basé sur la convention de
      <span class="deep-purple">
        <code>code</code>
      </span>
      d'EcmaScript
    </p>
  </section>
</template>

<script>
import imgEsLint from '@/assets/img/eslint.png';

export default {
  computed: {
    getImgEsLint() {
      return imgEsLint;
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  &#linter {
    .clearfix {
      margin-left: -1rem;
    }
  }
}
</style>
