<template>
  <section>
    <section id="summary" data-background-color="#42b884">
      <h1>
        <span class="white">Sommaire</span>
      </h1>
    </section>
    <Opening />
    <Topic />
    <Ending />
  </section>
</template>

<script>
import Opening from './Opening';
import Topic from './Topic';
import Ending from './Ending';

export default {
  components: {
    Opening,
    Topic,
    Ending
  }
};
</script>
