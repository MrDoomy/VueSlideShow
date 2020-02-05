<template>
  <section id="download">
    <h2>Téléchargements NPM*</h2>
    <h3>
      <span class="red">Angular</span> Vs.
      <span class="cyan">React</span> Vs.
      <span class="green">Vue</span>
    </h3>
    <canvas id="download-chart" style="height: 60vh; width: 100vw;" />
    <div class="fragment">
      <br />
      <span class="blue-grey">
        <em>
          <small>* 19 Janvier 2020</small>
        </em>
      </span>
    </div>
  </section>
</template>

<script>
import Chart from 'chart.js';
import { hexToRgba, configurePie } from '@/utils';

const downloadChart = {
  type: 'doughnut',
  data: {
    labels: ['Angular', 'React', 'Vue'],
    datasets: [
      {
        data: [1328940, 6485855, 1317185],
        backgroundColor: [
          hexToRgba('#f44336', 0.5),
          hexToRgba('#00bcd4', 0.5),
          hexToRgba('#4caf50', 0.5)
        ],
        borderColor: [
          hexToRgba('#f44336', 1),
          hexToRgba('#00bcd4', 1),
          hexToRgba('#4caf50', 1)
        ]
      }
    ]
  },
  options: configurePie()
};

export default {
  computed: {
    getDownloadChart() {
      return downloadChart;
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
    this.createChart('download-chart', this.getDownloadChart);
  }
};
</script>
