<template>
  <section>
    <section id="frameworks" data-background-color="#42b884">
      <h1>
        <span class="white">Frameworks</span>
      </h1>
    </section>
    <Angular />
    <React />
    <Svelte />
  </section>
</template>

<script>
import Angular from './Angular';
import React from './React';
import Svelte from './Svelte';

export default {
  components: {
    Angular,
    React,
    Svelte
  }
};
</script>
