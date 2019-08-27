import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | number-is-nan', function(hooks) {
  setupRenderingTest(hooks);

  test('can determine nan', async function(assert) {
    const value = 0 / 0;
    this.set('value', value);
    await render(hbs`{{number-is-nan value}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can determine not nan', async function(assert) {
    await render(hbs`{{number-is-nan 1}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });
});
