<template>
  <section id="dispatching">
    <h2>Utilisation</h2>
    <p>
      <strong>Vuex</strong> permet de mapper le
      <strong>store</strong> dans un composant
      <br>
      Ce mapping est nécessaire pour pouvoir dispatcher des
      <em>actions</em>
    </p>
    <div class="left">
      <pre>
        <code class="html" contenteditable>{{ getSnippetLeft }}</code>
      </pre>
    </div>
    <div class="right fragment">
      <pre>
        <code class="html" contenteditable>{{ getSnippetRight }}</code>
      </pre>
    </div>
  </section>
</template>

<script>
const SNIPPET_LEFT = `
  <template>
    <ul v-for="(task, idx) in tasks">
      <li :key="idx">
        {{ task.label }}
        <button @click="updateTask(task.id)">
          Update
        </button>
      </li>
    </ul>
  </template>

  <script>
  export default {
    computed: {
      tasks() {
        return this.$store.getters.getTasks;
      }
    },
    methods: {
      updateTask(id) {
        this.$store.dispatch('completeTask', id);
      }
    }
  };
  <\/script>
  `;

const SNIPPET_RIGHT = `
  <template>
    <div>
      <h2>{{ task.label }}</h2>
      <button @click="clearTask(task.id)">
        Remove
      </button>
    </div>
  </template>

  <script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters({
        taskWithId: 'getTaskById'
      }),
      task() {
        return this.taskWithId(42);
      }
    },
    methods: {
      ...mapActions([
        'clearTask'
      ])
    }
  };
  <\/script>
  `;

export default {
  computed: {
    getSnippetLeft() {
      return SNIPPET_LEFT;
    },
    getSnippetRight() {
      return SNIPPET_RIGHT;
    }
  }
};
</script>
