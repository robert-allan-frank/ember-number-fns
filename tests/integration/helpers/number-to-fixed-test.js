import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | number-to-fixed', function(hooks) {
  setupRenderingTest(hooks);

  test('can fix decimals to 2', async function(assert) {
    await render(hbs`{{number-to-fixed 3.1415 2}}`);
    assert.equal(this.element.textContent.trim(), '3.14');
  });

  test('can fix decimals to 1', async function(assert) {
    await render(hbs`{{number-to-fixed 3.1415 1}}`);
    assert.equal(this.element.textContent.trim(), '3.1');
  });

  test('can fix decimals to 0', async function(assert) {
    await render(hbs`{{number-to-fixed 3.1415 0}}`);
    assert.equal(this.element.textContent.trim(), '3');
  });
});
