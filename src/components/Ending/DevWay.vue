<template>
  <section id="dev-way">
    <h2>
      The Way Of
      <span class="grey strike">Jedi</span>
      Dev
    </h2>
    <svg fill="none" :width="750" :height="750" viewBox="0 0 600 600">
      <g>
        <circle :cx="300" :cy="300" :r="100" fill="#FFC106" :fill-opacity="0.75"></circle>
        <text x="50%" :y="310" text-anchor="middle" fill="#586E75" :font-size="30">
          Frameworks
        </text>
      </g>
      <g class="fragment">
        <circle :cx="300" :cy="300" :r="150" stroke="#FF9800" :stroke-width="100" :stroke-opacity="0.75"></circle>
        <text x="50%" :y="175" text-anchor="middle" fill="#FDF6E3" :font-size="30">
          Langages
        </text>
        <text x="50%" :y="450" text-anchor="middle" fill="#FDF6E3" :font-size="30">
          Environnements
        </text>
      </g>
      <g class="fragment">
        <circle :cx="300" :cy="300" :r="250" stroke="#FF5722" :stroke-width="100" :stroke-opacity="0.75"></circle>
        <text x="50%" :y="75" text-anchor="middle" fill="#FDF6E3" :font-size="30">
          Algorithmes
        </text>
        <text x="50%" :y="550" text-anchor="middle" fill="#FDF6E3" :font-size="30">
          Structures De Données
        </text>
      </g>
    </svg>
  </section>
</template>

<style lang="scss" scoped>
.strike {
  text-decoration: line-through;
}
</style>
