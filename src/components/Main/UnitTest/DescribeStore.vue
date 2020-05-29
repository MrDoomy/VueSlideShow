<template>
  <section id="describe-store">
    <h2>Tester Avec <strong>Jest</strong></h2>
    <p>Création d'une suite de tests unitaires <code>tasks.spec.js</code> :</p>
    <pre>
      <code class="javascript" contenteditable>{{ getSnippet }}</code>
    </pre>
  </section>
</template>

<script>
const SNIPPET = `
  import { actions } from '../actions';
  import { getters } from '../getters';
  import { mutations } from '../mutations';

  describe('Tasks', () => {
    it("Should 'createTask' Returns 'type' & 'payload'", () => {
      const commit = jest.fn();
      const task = { id: 42, label: 'Lorem Ipsum' };
      actions.createTask({ commit }, task);
      expect(commit).toHaveBeenCalledWith('TASKS/CREATE_TASK', task);
    });

    it("Should 'getTasks' Returns State", () => {
      const state = { tasks: [{ id: 42, label: 'Lorem Ipsum' }] };
      expect(getters.getTasks(state)).toHaveLength(1);
    });

    it("Should 'TASKS/CREATE_TASK' Case Returns State", () => {
      const initialState = [];
      const task = { id: 42, label: 'Lorem Ipsum' };
      mutations['TASKS/CREATE_TASK']({ pizzas: [ ...initialState ] }, task);
      expect(state.pizzas).toEqual([
        ...initialState,
        task
      ]);
    });
  });
  `;

export default {
  computed: {
    getSnippet() {
      return SNIPPET;
    }
  }
};
</script>
