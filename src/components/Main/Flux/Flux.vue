<template>
  <section>
    <section id="flux" data-background-color="#42b884">
      <h1>
        <span class="white">Flux</span>
      </h1>
    </section>
    <Concept />
    <Philosophy />
    <Without />
    <With />
  </section>
</template>

<script>
import Concept from './Concept';
import Philosophy from './Philosophy';
import Without from './Without';
import With from './With';

export default {
  components: {
    Concept,
    Philosophy,
    Without,
    With
  }
};
</script>
