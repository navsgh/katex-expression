import { newSpecPage } from '@stencil/core/testing';
import { KatexExpression } from './katex-expression';

describe('katex-expression', () => {

  // Test missing expression/empty case. Is there a solution to the katex
  // quirks mode issue?
  it('renders', async () => {

      const page = await newSpecPage({
          components: [KatexExpression],
          html: `<katex-expression></katex-expression>`,
      });
      expect(page.root).toEqualHtml(`
          <katex-expression><span></span></katex-expression>
     `);

  });

  // TODO: Test expression property. Is there a solution to the katex quirks
  // mode issue?
  it('renders changes to the expression data', async () => {

  });

});