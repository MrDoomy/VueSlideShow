<template>
  <section id="describe-store">
    <h2>Tester Avec <strong>Testing Library</strong></h2>
    <p>Création d'une suite de tests unitaires <code>App.spec.js</code> :</p>
    <pre>
      <code class="javascript" contenteditable>{{ getCode }}</code>
    </pre>
  </section>
</template>

<script>
const CODE = `
  import { render, fireEvent } from '@testing-library/react';
  import App from '../App';

  describe('<App />', () => {
    it('Should Component Renders Itself', () => {
      const { container } = render(App);
      expect(container).toBeDefined();
    });

    it('Should SnapShot Be Stabilised', () => {
      const { container } = render(App);
      expect(container).toMatchSnapshot();
    });

    it('Should Render Contains Text', () => {
      const { queryByText } = render(App, {
        props: { content: 'Hello World' }
      });
      expect(queryByText('Hello World')).toBeInTheDocument(); // Enhanced API
    });

    it('Should Click Trigger Works Well', async () => {
      const { getByRole, emitted } = render(App);
      await fireEvent.click(getByRole('button'));
      expect(emitted()).toHaveProperty('click');
    });
  });
  `;

export default {
  computed: {
    getCode() {
      return CODE;
    }
  }
};
</script>
