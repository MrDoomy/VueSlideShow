<template>
  <section>
    <section id="data-props" data-background-color="#42b884">
      <h1>
        <span class="white">Data & Props</span>
      </h1>
      <h3>
        <em>
          <span class="white">
            Gérer les données et les exposer dans le <strong>DOM</strong>
          </span>
        </em>
      </h3>
    </section>
    <Data />
    <Props />
    <Typing />
  </section>
</template>

<script>
import Data from './Data';
import Props from './Props';
import Typing from './Typing';

export default {
  components: {
    Data,
    Props,
    Typing
  }
};
</script>
