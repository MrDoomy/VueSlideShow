<template>
  <section id="merge">
    <h2>Frameworks</h2>
    <h3>
      <span class="light-green">Besoin</span> des employeurs Vs.
      <span class="light-blue">Connaissances</span> des développeurs
    </h3>
    <canvas id="merge-chart" style="display: block; height: 720px; width: 1920px;"></canvas>
  </section>
</template>

<script>
import Chart from 'chart.js';
import { hexToRgba, configureBar, getRatio } from '@/utils';

const frameworks = [
  'React',
  'AngularJS',
  'Spring',
  'VueJS',
  '.NETCore',
  'Django',
  'ExpressJS',
  'Ruby On Rails',
  'ASP',
  'Spark',
  'BackboneJS',
  'Struts',
  'Cocoa',
  'JSF',
  'Ember'
];
const employers = [38.4, 38.2, 21.8, 18.5, 17.5, 17.4, 16.1, 10.5, 9.2, 7, 4.2, 3.1, 3.2, 2.6, 2.1];
const developers = [25.8, 33.5, 25.9, 10.3, 15.7, 18.1, 19.9, 10.7, 18.6, 6, 6.1, 8.1, 3.8, 7.9, 2.4];

const mergeChart = {
  type: 'bar',
  data: {
    labels: frameworks,
    datasets: [
      {
        label: 'Employeurs',
        data: employers,
        backgroundColor: hexToRgba('#8bc34a', 0.5),
        borderColor: hexToRgba('#8bc34a', 1),
        borderWidth: 1
      },
      {
        label: 'Développeurs',
        data: developers,
        backgroundColor: hexToRgba('#03a9f4', 0.5),
        borderColor: hexToRgba('#03a9f4', 1),
        borderWidth: 1
      },
      {
        type: 'line',
        label: 'Opportunités',
        data: getRatio(employers, developers),
        backgroundColor: hexToRgba('#009688', 0.2),
        borderColor: hexToRgba('#009688', 0.8),
        borderWidth: 2,
        hidden: true
      }
    ]
  },
  options: configureBar(true)
};

export default {
  computed: {
    getMergeChart() {
      return mergeChart;
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
    this.createChart('merge-chart', this.getMergeChart);
  }
};
</script>
