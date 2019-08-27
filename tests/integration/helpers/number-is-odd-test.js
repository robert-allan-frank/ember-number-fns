import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | number-is-odd', function(hooks) {
  setupRenderingTest(hooks);

  test('can find odd number', async function(assert) {
    await render(hbs`{{number-is-odd 2}}`);
    assert.equal(this.element.textContent.trim(), 'false');

    await render(hbs`{{number-is-odd 202}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('can find even number', async function(assert) {
    await render(hbs`{{number-is-odd 1}}`);
    assert.equal(this.element.textContent.trim(), 'true');

    await render(hbs`{{number-is-odd 101}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });
});
