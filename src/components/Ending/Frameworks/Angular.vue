<template>
  <section id="angular">
    <img :data-src="getImgAngular" alt="Angular" />
    <h2>Angular</h2>
    <p>
      Développé depuis 2014 par <strong>Google</strong>
      <br />
      Apparition du langage <strong>TypeScript</strong>
      <small>(By Microsoft)</small>
      <br />
      Utilisation massive des décorateurs
      <br />
      Courbe d'apprentissage abrupt
      <br />
      Processus de développement plus rapide
      <br />
      Fonctionnalités de test avancées
    </p>
  </section>
</template>

<script>
import imgAngular from '@/assets/img/angular.png';

export default {
  computed: {
    getImgAngular() {
      return imgAngular;
    }
  }
};
</script>
