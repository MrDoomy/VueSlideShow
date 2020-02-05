<template>
  <section id="virtual-dom">
    <h1>DOM Virtuel</h1>
    <p>
      Le <strong>Virtual DOM</strong>, la vraie révolution portée par
      <strong>React</strong> qui rend <strong>jQuery</strong> obsolète
    </p>
    <img :data-src="getImgVirtualDom" alt="VirtualDOM" />
  </section>
</template>

<script>
import imgVirtualDom from '@/assets/img/virtual-dom.png';

export default {
  computed: {
    getImgVirtualDom() {
      return imgVirtualDom;
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  &#virtual-dom {
    img {
      height: 720px;
    }
  }
}
</style>
