<template>
  <div class="reveal">
    <div class="slides">
      <Title />
      <WhoAreYou />
      <WhoAmI />
      <Summary />
      <Reminders />
      <JavaScript />
      <EcmaScript />
      <TypeScript />
      <Tools />
      <Coding />
      <Main />
      <Intro />
      <Cli />
      <Preview />
      <Initialize hidden />
      <DataProps />
      <Nested hidden />
      <Design />
      <LifeCycle />
      <Templating />
      <StyleSheet />
      <Hooks hidden />
      <Functional />
      <Router />
      <Flux />
      <Vuex hidden />
      <VirtualDom />
      <UnitTest />
      <Overview />
      <Frameworks />
      <Infography />
      <DevWay />
      <Quote />
      <Thank />
      <Appendix />
    </div>
  </div>
</template>

<script>
// RevealJS
import { initialize } from 'reveal.js/js/reveal';

// HighLightJS
import { initHighlightingOnLoad as initializeOnLoad } from 'highlight.js/lib';

// Slides
import {
  Title,
  WhoAreYou,
  WhoAmI,
  Summary,
  Reminders,
  JavaScript,
  EcmaScript,
  TypeScript,
  Tools,
  Coding
} from './Opening';

import {
  Main,
  Intro,
  Cli,
  Preview,
  Initialize,
  DataProps,
  Nested,
  Design,
  LifeCycle,
  Templating,
  StyleSheet,
  Hooks,
  Functional,
  Router,
  Flux,
  Vuex,
  VirtualDom,
  UnitTest
} from './Main';

import {
  Overview,
  Frameworks,
  Infography,
  DevWay,
  Quote,
  Thank,
  Appendix
} from './Ending';

export default {
  components: {
    Title,
    WhoAreYou,
    WhoAmI,
    Summary,
    Reminders,
    JavaScript,
    EcmaScript,
    TypeScript,
    Tools,
    Coding,
    Main,
    Intro,
    Cli,
    Preview,
    Initialize,
    DataProps,
    Nested,
    Design,
    LifeCycle,
    Templating,
    StyleSheet,
    Hooks,
    Functional,
    Router,
    Flux,
    Vuex,
    VirtualDom,
    UnitTest,
    Overview,
    Frameworks,
    Infography,
    DevWay,
    Quote,
    Thank,
    Appendix
  },
  props: {
    width: {
      type: Number,
      default: 1280
    },
    height: {
      type: Number,
      default: 720
    },
    margin: {
      type: Number,
      default: 0.05
    },
    controls: {
      type: Boolean,
      default: false
    },
    slideNumber: {
      type: Boolean,
      default: false
    },
    history: {
      type: Boolean,
      default: false
    },
    mouseWheel: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    initialize({
      width: this.width,
      height: this.height,
      margin: this.margin,
      controls: this.controls,
      slideNumber: this.slideNumber,
      history: this.history,
      mouseWheel: this.mouseWheel,
      transition: 'slide'
    });

    initializeOnLoad();
  }
};
</script>
