<template>
  <section id="bundler">
    <img :data-src="getImgWebPack" alt="WebPack">
    <h2>Bundler</h2>
    <p>
      Fonctionnement par modules
      <br>
      Intéropérabilité des fichiers
      <br>
      Appel
      <span class="grey strike">
        de fichiers
      </span>
      de modules
      <br>
      Découpage par responsabilité
      <br>
      Fini les casses têtes liés aux ressources
      <small>(<code>.js</code>, <code>.json</code>, <code>.jsx</code>)</small>
    </p>
  </section>
</template>

<script>
import imgWebPack from '@/assets/img/webpack.png';

export default {
  computed: {
    getImgWebPack() {
      return imgWebPack;
    }
  }
};
</script>

<style lang="scss" scoped>
.strike {
  text-decoration: line-through;
}
</style>
