<template>
  <section id="engine">
    <img :data-src="getImgNode" alt="NodeJS" />
    <img :data-src="getImgNpm" alt="NPM" />
    <p>
      1<small>er</small> version en 2009
      <br />
      Environnement <strong>JavaScript</strong>
      <br />
      Basé sur le moteur <strong>Chrome V8</strong>
      <br />
      Utilisé en tant que plateforme logicielle
      <br />
      Contient nativement un serveur Web
      <br />
      Dernière version <strong>LTS</strong> : 12.14.x
      <br />
      Gestionnaire de paquets <small>(officiel)</small>
    </p>
  </section>
</template>

<script>
import imgNode from '@/assets/img/node.png';
import imgNpm from '@/assets/img/npm.png';

export default {
  computed: {
    getImgNode() {
      return imgNode;
    },
    getImgNpm() {
      return imgNpm;
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  &#engine {
    img {
      height: 160px;
    }
  }
}
</style>
