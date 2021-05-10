import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | format-timestamp', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('inputDate', '02-14-1990 ');

    await render(hbs`{{format-timestamp inputDate}}`);

    assert.equal(this.element.textContent.trim(), 'Feb 14, 1990 00:00.00 AM');
  });
});
