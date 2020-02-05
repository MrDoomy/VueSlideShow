<template>
  <section>
    <section id="lifecycle" data-background-color="#42b884">
      <h1>
        <span class="white">Cycle De Vie</span>
      </h1>
    </section>
    <Cycle />
    <UseCase />
  </section>
</template>

<script>
import Cycle from './Cycle';
import UseCase from './UseCase';

export default {
  components: {
    Cycle,
    UseCase
  }
};
</script>
