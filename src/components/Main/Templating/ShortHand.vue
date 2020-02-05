<template>
  <section id="short-hand">
    <h2>Abréviations</h2>
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
            <tr :class="['body', { 'alt': idx % 2 !== 0 }]" v-for="({ label, explanation }, idx) in getRows" :key="idx">
              <td class="column1">
                <span v-html="label" />
              </td>
              <td class="column2 fill">
                <span v-html="explanation" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="fragment">
      <br />
      <span class="blue-grey">
        <em>
          Il est aussi possible de définir ses propres directives dans l'instance de <strong>Vue</strong>
        </em>
      </span>
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
    label: '<code>v-bind</code><br /><code>:</code>',
    explanation: `
      Permet de 'binder' une donnée dynamique et / ou d'évaluer du code :
      <br />
      <code>v-bind:title="myTitle + ' !'"</code>
    `
  },
  {
    label: '<code>v-on</code><br /><code>@</code>',
    explanation: `
      Permet de 'binder' une donnée dynamique et / ou d'évaluer du code :
      <br />
      <code>v-bind:title="myTitle + ' !'"</code>
    `
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
