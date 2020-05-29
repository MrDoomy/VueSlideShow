<template>
  <section id="directives">
    <h2>Directives</h2>
    <div class="beautify-table custom">
      <div class="beautify-table-head">
        <table>
          <thead>
            <tr class="head" v-for="({ label, explanation }, idx) in getHeaders" :key="idx">
              <th class="column1">{{ label }}</th>
              <th class="column2 fill">{{ explanation }}</th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="beautify-table-body">
        <table>
          <tbody>
            <tr class="body" v-for="({ label, explanation }, idx) in getRows" :key="idx">
              <td class="column1">
                <span v-html="label"></span>
              </td>
              <td class="column2 fill">{{ explanation }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
const HEADERS = [
  {
    label: 'Directive',
    explanation: 'Description'
  }
];

const ROWS = [
  {
    label: '<code>v-text</code>',
    explanation: "Alternative à l'interpolation"
  },
  {
    label: '<code>v-once</code>',
    explanation: "Permet de bloquer la mise à jour d'une valeur dynamique dans le template"
  },
  {
    label: '<code>v-html</code>',
    explanation: "Permet d'intepréter du code HTML de manière dynamique"
  },
  {
    label: '<code>v-model</code>',
    explanation: "Indique que toute modification de ce champ doit être répercutée sur le modèle"
  },
  {
    label: '<code>v-show</code>',
    explanation: "Permet d'afficher un élement du DOM en fonction de la valeur d'un paramètre"
  },
  {
    label: '<code>v-if</code> || <code>v-else-if</code> || <code>v-else</code>',
    explanation: "Permet de créer un élement du DOM en fonction de la valeur d'un paramètre"
  },
  {
    label: '<code>v-for</code>',
    explanation: "Permet d'itérer sur une liste"
  }
];

export default {
  computed: {
    getHeaders() {
      return HEADERS;
    },
    getRows() {
      return ROWS;
    }
  }
};
</script>
