import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | number-is-even', function(hooks) {
  setupRenderingTest(hooks);

  test('can find even number', async function(assert) {
    await render(hbs`{{number-is-even 2}}`);
    assert.equal(this.element.textContent.trim(), 'true');

    await render(hbs`{{number-is-even 202}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can find odd number', async function(assert) {
    await render(hbs`{{number-is-even 1}}`);
    assert.equal(this.element.textContent.trim(), 'false');

    await render(hbs`{{number-is-even 101}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });
});
