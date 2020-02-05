<template>
  <section>
    <section id="coding" data-background-color="#42b884">
      <h1>
        <span class="white">Let's Code</span>
      </h1>
    </section>
    <Environment />
    <Base />
    <Tab />
    <Item />
    <Func />
    <Hoisting />
    <Running />
    <Proto />
  </section>
</template>

<script>
import Environment from './Environment';
import Base from './Base';
import Tab from './Tab';
import Item from './Item';
import Func from './Func';
import Hoisting from './Hoisting';
import Running from './Running';
import Proto from './Proto';

export default {
  components: {
    Environment,
    Base,
    Tab,
    Item,
    Func,
    Hoisting,
    Running,
    Proto
  }
};
</script>
