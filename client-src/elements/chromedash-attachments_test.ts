import {html} from 'lit';
import {assert, fixture} from '@open-wc/testing';
import {ChromedashAttachments} from './chromedash-attachments';
import {ChromedashTextarea} from './chromedash-textarea.js';

describe('chromedash-attachments', () => {
  it('renders with no data', async () => {
    const component = await fixture(
      html`<chromedash-attachments></chromedash-attachments>`
    );
    assert.exists(component);
    assert.instanceOf(component, ChromedashAttachments);
    const textareaElement = component.renderRoot.querySelector(
      'chromedash-textarea');
    assert.exists(textareaElement);
    assert.instanceOf(textareaElement, ChromedashTextarea);
  });

  it('renders with a URL', async () => {
    const url = 'https://chromestatus.com/static/img/chrome_logo.svg';
    const component: ChromedashAttachments = await fixture(
      html`<chromedash-attachments
      value=${url}
      ></chromedash-attachments>`
    );
    assert.exists(component);
    await component.updateComplete;
    const textareaElement: ChromedashTextarea | null =
      component.renderRoot.querySelector('chromedash-textarea');
    assert.exists(textareaElement);
    assert.equal(textareaElement.checkValidity(), true);
    assert.equal(textareaElement.value, url);
    const imgElement: HTMLElement | null =
      component.renderRoot.querySelector('img');
    assert.exists(imgElement);
    assert.equal(imgElement.getAttribute('src'), url);
  });

});
