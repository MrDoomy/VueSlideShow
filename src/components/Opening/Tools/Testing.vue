<template>
  <section id="testing">
    <img :data-src="getImgJest" alt="Jest">
    <img :data-src="getImgTestingLib" alt="Testing Library">
    <h2>Tests Unitaires</h2>
    <p>
      La base de la programmation
      <br>
      Technique liée à l'approche <strong>Agile</strong>
      <br>
      Tester les méthodes, les composants, les services...
      <br>
      Gagner du temps dans vos développements
    </p>
    <p>
      <span class="grey strike">
        <em>Tester c'est douter !</em>
      </span>
    </p>
  </section>
</template>

<script>
import imgJest from '@/assets/img/jest.png';
import imgTestingLib from '@/assets/img/testing-lib.png';

export default {
  computed: {
    getImgJest() {
      return imgJest;
    },
    getImgTestingLib() {
      return imgTestingLib;
    }
  }
};
</script>

<style lang="scss" scoped>
.strike {
  text-decoration: line-through;
}
</style>
