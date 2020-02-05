<template>
  <section>
    <section id="stylesheet" data-background-color="#42b884">
      <h1>
        <span class="white">StyleSheet</span>
      </h1>
      <h3>
        <em>
          <span class="white">
            Customiser son composant avec <strong>PostCSS</strong>
          </span>
        </em>
      </h3>
    </section>
    <Static />
    <Dynamic />
    <Style />
  </section>
</template>

<script>
import Static from './Static';
import Dynamic from './Dynamic';
import Style from './Style';

export default {
  components: {
    Static,
    Dynamic,
    Style
  }
};
</script>
