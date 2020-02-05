<template>
  <section>
    <section id="infography" data-background-color="#42b884">
      <h1>
        <span class="white">Infographie</span>
      </h1>
    </section>
    <LangKnown />
    <LangLearn />
    <FrameKnown />
    <FrameLearn />
    <Merge />
    <Download />
    <Misc />
  </section>
</template>

<script>
import LangKnown from './LangKnown';
import LangLearn from './LangLearn';
import FrameKnown from './FrameKnown';
import FrameLearn from './FrameLearn';
import Merge from './Merge';
import Download from './Download';
import Misc from './Misc';

export default {
  components: {
    LangKnown,
    LangLearn,
    FrameKnown,
    FrameLearn,
    Merge,
    Download,
    Misc
  }
};
</script>
