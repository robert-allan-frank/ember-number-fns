import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | number-parse-float', function(hooks) {
  setupRenderingTest(hooks);

  test('can parse float', async function(assert) {
    await render(hbs`{{number-parse-float '3.14'}}`);
    assert.equal(this.element.textContent.trim(), '3.14');
  });
});
