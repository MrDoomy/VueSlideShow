<template>
  <section id="frame-learn">
    <h2>Quels frameworks les développeurs prévoient-ils d'apprendre ?</h2>
    <canvas id="frame-learn-chart" style="display: block; height: 720px; width: 1920px;"></canvas>
  </section>
</template>

<script>
import Chart from 'chart.js';
import { generateColors, configureBar } from '@/utils';

const frameworks = [
  'AngularJS',
  'Spring',
  'React',
  'ExpressJS',
  'ASP',
  'Django',
  '.NETCore',
  'Ruby On Rails',
  'VueJS',
  'Struts',
  'JSF',
  'BackboneJS',
  'Cocoa',
  'Meteor',
  'Ember'
];
const year2k19 = [26.9, 15.4, 32.6, 13.7, 8.6, 23.5, 12.8, 17.7, 24.7, 9.1, 8.3, 12.2, 9.7, 10, 9.9];

const frameLearnChart = {
  type: 'bar',
  data: {
    labels: frameworks,
    datasets: [
      {
        label: 'Frameworks',
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
    getFrameLearnChart() {
      return frameLearnChart;
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
    this.createChart('frame-learn-chart', this.getFrameLearnChart);
  }
};
</script>
