<template>
  <section id="concept">
    <h2>Concept</h2>
    <div class="fragment shrink">
      <p>
        Architecture pour les flux de données unidirectionnels
        <br>
        Il existe plusieurs implémentations de <strong>Flux</strong> en
        <strong>JavaScript</strong> :
      </p>
      <ul>
        <li>Flux</li>
        <li>Fluxxor</li>
        <li>MobX</li>
        <li>NgRx</li>
        <li>Overmind</li>
        <li>Redux</li>
        <li>
          <strong>Vuex</strong>
        </li>
        <li class="clearfix">...</li>
      </ul>
    </div>

    <svg fill="none" :width="1250" :height="100" viewBox="0 0 1250 100">
      <g class="fragment">
        <path d="M300 0v100l50-50-50-50zM0 0h300v100H0z" fill="#F44336" :fill-opacity="0.75"></path>
        <text :x="100" :y="60" text-anchor="start" fill="#FDF6E3" :font-size="30">
          Action
        </text>
      </g>
      <g class="fragment">
        <path d="M600 0v100l50-50-50-50zM300 0h300v100H300z" fill="#FF5722" :fill-opacity="0.75"></path>
        <text :x="400" :y="60" text-anchor="start" fill="#FDF6E3" :font-size="30">
          Dispatcher
        </text>
      </g>
      <g class="fragment">
        <path d="M900 0v100l50-50-50-50zM600 0h300v100H600z" fill="#FF9800" :fill-opacity="0.75"></path>
        <text :x="700" :y="60" text-anchor="start" fill="#FDF6E3" :font-size="30">
          Store
        </text>
      </g>
      <g class="fragment">
        <path d="M1200 0v100l50-50-50-50zM900 0h300v100H900z" fill="#FFC107" :fill-opacity="0.75"></path>
        <text :x="1000" :y="60" text-anchor="start" fill="#586E75" :font-size="30">
          View
        </text>
      </g>
    </svg>
  </section>
</template>

<style lang="scss" scoped>
section {
  &#concept {
    .clearfix {
      list-style-type: none;
    }
  }
}
</style>
