import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | number-parse-int', function(hooks) {
  setupRenderingTest(hooks);

  test('can parse integer', async function(assert) {
    await render(hbs`{{number-parse-int '3'}}`);
    assert.equal(this.element.textContent.trim(), '3');
  });
});
