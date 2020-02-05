<template>
  <section id="javascript">
    <img :data-src="getImgJavaScript" alt="JavaScript" />
    <h2>JavaScript</h2>
    <p>
      Créé part <strong>Brendan Eich</strong> en 1995
      <br />
      Alliance entre <strong>Sun</strong> et <strong>Netscape</strong>
      <br />
      Langage faiblemment typé
      <br />
      Programmation fonctionnelle
      <br />
      Volonté d'un Web plus dynamique
      <br />
      Version 10 depuis Juin 2019
    </p>
  </section>
</template>

<script>
import imgJavaScript from '@/assets/img/javascript.png';

export default {
  computed: {
    getImgJavaScript() {
      return imgJavaScript;
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  &#javascript {
    img {
      padding: 0px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    }
  }
}
</style>
