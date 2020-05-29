<template>
  <section id="editors">
    <img :data-src="getImgAtom" alt="Atom">
    <img :data-src="getImgSublimeText" alt="Sublime Text">
    <img :data-src="getImgVsCode" alt="Visual Studio Code">
    <img :data-src="getImgWebStorm" alt="WebStorm">
    <h2>Éditeurs</h2>
    <div class="beautify-table custom">
      <div class="beautify-table-head">
        <table>
          <thead>
            <tr class="head" v-for="({ editor, pros, cons }, idx) in getHeaders" :key="idx">
              <th class="column1">{{ editor }}</th>
              <th class="column2">{{ pros }}</th>
              <th class="column3">{{ cons }}</th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="beautify-table-body">
        <table>
          <tbody>
            <tr class="body" v-for="({ editor, pros, cons }, idx) in getRows" :key="idx">
              <td class="column1">
                <strong>{{ editor }}</strong>
              </td>
              <td class="column2">
                <div v-html="pros"></div>
              </td>
              <td class="column3">
                <div v-html="cons"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import imgAtom from '@/assets/img/atom.png';
import imgSublimeText from '@/assets/img/sublime-text.png';
import imgVsCode from '@/assets/img/vscode.png';
import imgWebStorm from '@/assets/img/webstorm.png';

const HEADERS = [
  {
    editor: 'Éditeur',
    pros: 'Avantages',
    cons: 'Inconvénients'
  }
];

const ROWS = [
  {
    editor: 'Atom',
    pros: 'Outil entièrement personnalisable et puissant',
    cons: 'Quelques problèmes de performance sur la durée'
  },
  {
    editor: 'Sublime Text',
    pros: 'Flexible et rapide idéal pour le développement Web',
    cons: 'Licence payante pour les fonctionnalités avancées'
  },
  {
    editor: 'Visual Studio Code',
    pros: "Prêt à l'emploi avec le débogueur et Git par défault",
    cons: `
      <span style="text-decoration: line-through;">
        Pas autant de fonctionnalités qu'un IDE
      </span>
    `
  },
  {
    editor: 'WebStorm',
    pros: `Fonctionnalités inédites avec notamment le <em>Running Coverage</em>`,
    cons: 'Modèle économique payant dégressif'
  }
];

export default {
  computed: {
    getImgAtom() {
      return imgAtom;
    },
    getImgSublimeText() {
      return imgSublimeText;
    },
    getImgVsCode() {
      return imgVsCode;
    },
    getImgWebStorm() {
      return imgWebStorm;
    },
    getHeaders() {
      return HEADERS;
    },
    getRows() {
      return ROWS;
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  &#editors {
    img {
      height: 200px;
    }
  }
}
</style>
