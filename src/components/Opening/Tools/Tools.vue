<template>
  <section>
    <section id="tools" data-background-color="#42b884">
      <h1>
        <span class="white">Outils</span>
      </h1>
    </section>
    <Runtime />
    <Editors />
    <VersionManager />
    <DepManager />
    <Linter />
    <Design />
    <Bundler />
    <Bundle />
    <Testing />
  </section>
</template>

<script>
import Runtime from './Runtime';
import Editors from './Editors';
import VersionManager from './VersionManager';
import DepManager from './DepManager';
import Linter from './Linter';
import Design from './Design';
import Bundler from './Bundler';
import Bundle from './Bundle';
import Testing from './Testing';

export default {
  components: {
    Runtime,
    Editors,
    VersionManager,
    DepManager,
    Linter,
    Design,
    Bundler,
    Bundle,
    Testing
  }
};
</script>
