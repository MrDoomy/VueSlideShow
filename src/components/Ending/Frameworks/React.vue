<template>
  <section id="react">
    <img :data-src="getImgReact" alt="React">
    <h2>React</h2>
    <p>
      Créé en 2013 par <strong>Facebook</strong>
      <br>
      Utilisation massive du langage JSX
      <br>
      Idéal pour les projets <em>Front-End</em> volumineux
      <br>
      Implémentation de l'architecture <strong>Flux</strong>
      <br>
      Initialement publié sous licence BSD
      <br>
      <strong>React Native</strong> pour développer sur mobile
    </p>
  </section>
</template>

<script>
import imgReact from '@/assets/img/react.png';

export default {
  computed: {
    getImgReact() {
      return imgReact;
    }
  }
};
</script>
