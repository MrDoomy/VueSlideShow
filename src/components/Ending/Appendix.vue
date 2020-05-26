<template>
  <section id="appendix">
    <h2>Annexes</h2>
    <div class="beautify-table custom">
      <div class="beautify-table-head">
        <table>
          <thead>
            <tr class="head" v-for="({ source, link }, idx) in getHeaders" :key="idx">
              <th class="column1">{{ source }}</th>
              <th class="column2 fill">{{ link }}</th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="beautify-table-body">
        <table>
          <tbody>
            <tr class="body" v-for="({ source, link }, idx) in getRows" :key="idx">
              <td class="column1">{{ source }}</td>
              <td class="column2 fill">
                <a :href="link" target="_blank" rel="noopener noreferrer">
                  {{ link }}
                </a>
              </td>
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
    source: 'Source',
    link: 'Lien'
  }
];

const ROWS = [
  {
    source: 'Vue',
    link: 'https://vuejs.org/'
  },
  {
    source: 'Vue Router',
    link: 'https://router.vuejs.org/'
  },
  {
    source: 'Vuex',
    link: 'https://vuex.vuejs.org/'
  },
  {
    source: 'Dev Community 👩‍💻👨‍💻',
    link: 'https://dev.to/'
  },
  {
    source: 'HackerRank',
    link: 'https://research.hackerrank.com/developer-skills/2019/'
  },
  {
    source: 'MDN',
    link: 'https://developer.mozilla.org/'
  },
  {
    source: 'MrDoomy',
    link: 'https://www.mrdoomy.xyz/'
  },
  {
    source: 'RevealJS',
    link: 'https://revealjs.com/'
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
