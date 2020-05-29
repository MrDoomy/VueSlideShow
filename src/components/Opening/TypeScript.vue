<template>
  <section id="typescript">
    <img :data-src="getImgTypeScript" alt="TypeScript">
    <h2>TypeScript</h2>
    <p>
      Créé par <strong>Microsoft</strong> en 2012
      <br>
      Langage de programmation libre et <em>Open Source</em>
      <br>
      Sur-ensemble <strong>JavaScript</strong> fortement typé
      <br>
      Support des spécifications <strong>EcmaScript</strong>
      <br>
      Multiparadigme
      <small>(<em>Client-Side</em> / <em>Server-Side</em>)</small>
      <br>
      Version 3 depuis Juillet 2018
    </p>
  </section>
</template>

<script>
import imgTypeScript from '@/assets/img/typescript.png';

export default {
  computed: {
    getImgTypeScript() {
      return imgTypeScript;
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  &#typescript {
    img {
      padding: 0px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    }
  }
}
</style>
