<template>
  <section id="item">
    <h2>Objets</h2>
    <p>Voici comment déclarer un objet en <strong>JavaScript</strong> :</p>
    <pre>
      <code class="javascript" contenteditable>{{ getCode }}</code>
    </pre>
  </section>
</template>

<script>
const SNIPPET = `
  let album = {};

  album = {
    id: 6,
    title: 'Migration',
    artist: 'Bonobo',
    released: new Date(2017, 0, 13),
    length: 62,
    genre: 'Downtempo',
    label: 'Ninja Tune',
    tracks: 12
  };

  delete album.genre;

  album.genre = ['Electronic', 'Downtempo', 'Experimental'];

  console.log(album['genre'][0]); // Affiche 'Electronic' dans la console
  `;

export default {
  computed: {
    getCode() {
      return SNIPPET;
    }
  }
};
</script>
