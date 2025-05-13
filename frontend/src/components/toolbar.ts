import { html, css, LitElement } from 'lit';
import { state, customElement } from 'lit/decorators.js';

@customElement('toolbar-element')
class Toolbar extends LitElement {
  static styles = css`
    :host {}
  `;

  async connectedCallback() {
    super.connectedCallback();
  }


  render() {
    return html`
        <nav>
            <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    `;
  }
}