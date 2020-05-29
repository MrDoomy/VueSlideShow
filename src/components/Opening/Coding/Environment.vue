<template>
  <section id="environment">
    <img :data-src="getImgChrome" alt="Chrome">
    <img :data-src="getImgEdge" alt="Edge">
    <img :data-src="getImgFirefox" alt="Firefox">
    <img :data-src="getImgOpera" alt="Opera">
    <img :data-src="getImgSafari" alt="Safari">
    <h2>Environnement</h2>
    <p>
      Préférez le mode <code>strict</code> lors de l'exécution pour la remontée d'erreurs
    </p>
    <pre>
      <code class="javascript">{{ getSnippet }}</code>
    </pre>
  </section>
</template>

<script>
import imgChrome from '@/assets/img/chrome.png';
import imgEdge from '@/assets/img/edge.png';
import imgFirefox from '@/assets/img/firefox.png';
import imgOpera from '@/assets/img/opera.png';
import imgSafari from '@/assets/img/safari.png';

const SNIPPET = `
  (function() {
    'use strict';

    /* ... */
  })();
  `;

export default {
  computed: {
    getImgChrome() {
      return imgChrome;
    },
    getImgEdge() {
      return imgEdge;
    },
    getImgFirefox() {
      return imgFirefox;
    },
    getImgOpera() {
      return imgOpera;
    },
    getImgSafari() {
      return imgSafari;
    },
    getSnippet() {
      return SNIPPET;
    }
  }
};
</script>

<style lang="scss" scoped>
#environment {
  img {
    height: 220px;
  }
}
</style>
