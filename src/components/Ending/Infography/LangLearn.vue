<template>
  <section id="lang-learn">
    <h2>Quels langages les développeurs prévoient-ils d'apprendre ?</h2>
    <canvas id="lang-learn-chart" style="display: block; height: 720px; width: 1920px;"></canvas>
  </section>
</template>

<script>
import Chart from 'chart.js';
import { generateColors, configureBar } from '@/utils';

const languages = [
  'JavaScript',
  'Java',
  'C',
  'Python',
  'C++',
  'PHP',
  'C#',
  'TypeScript',
  'Pascal',
  'Ruby',
  'R',
  'Perl',
  'Go',
  'Swift',
  'Scala',
  'Kotlin',
  'Haskell',
  'Clojure',
  'Rust'
];
const year2k19 = [11.1, 7.9, 6, 26.1, 10.3, 8.1, 12.5, 21.6, 7.6, 17.8, 21.4, 10.4, 37.2, 20.7, 20.9, 26.5, 15.6, 11.1, 13.2, 17.9];

const langLearnChart = {
  type: 'bar',
  data: {
    labels: languages,
    datasets: [
      {
        label: 'Langages',
        data: year2k19,
        backgroundColor: generateColors(0.5),
        borderColor: generateColors(1),
        borderWidth: 1
      }
    ]
  },
  options: configureBar(false)
};

export default {
  computed: {
    getLangLearnChart() {
      return langLearnChart;
    }
  },
  methods: {
    createChart(chartId, chartData) {
      const { type, data, options } = chartData;
      const ctx = document.getElementById(chartId);
      return new Chart(ctx, {
        type,
        data,
        options
      });
    }
  },
  mounted() {
    this.createChart('lang-learn-chart', this.getLangLearnChart);
  }
};
</script>
