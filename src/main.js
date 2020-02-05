import Vue from 'vue';
import App from './components/App';

// RevealJS
import 'reveal.js/css/reveal.css';
import 'reveal.js/css/theme/solarized.css';

// HighLightJS
import 'highlight.js/styles/darkula.css';

// StyleSheet
import './assets/css/index.css';

Vue.config.productionTip = false;

new Vue({
  render: h =>
    h(App, {
      props: {
        width: 1920,
        height: 1080,
        slideNumber: true,
        history: true
      }
    })
}).$mount('#root');
