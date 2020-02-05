<template>
  <section id="who-am-i">
    <h1>Présentation</h1>
    <h3>Damien Chazoule</h3>
    <p>
      <em>FullStack</em> JS Developer
      <br />
      <strong>VueJS</strong> Lover <small>(<strong>React</strong> Too)</small>
    </p>
    <img :data-src="getGitHub" alt="GitHub" />
    <img :data-src="getGitLab" alt="GitLab" />
    <p>
      <span class="black">@Mr</span>
      <span class="deep-orange">Doomy</span>
    </p>
  </section>
</template>

<script>
import imgGitHub from '@/assets/img/github.png';
import imgGitLab from '@/assets/img/gitlab.png';

export default {
  computed: {
    getGitHub() {
      return imgGitHub;
    },
    getGitLab() {
      return imgGitLab;
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  &#who-am-i {
    height: 100px;
  }
}
</style>
