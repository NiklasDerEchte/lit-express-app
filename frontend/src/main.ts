import { html, css, LitElement } from 'lit';
import { state } from 'lit/decorators.js';

class RootElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
    }
  `;

  @state()
  private _data: any = null;
  @state()
  private _loading: boolean = true;

  async connectedCallback() {
    super.connectedCallback();
    await this.loadData();
  }

  async loadData() {
    try {
      const response = await fetch('http://localhost:3000/api');
      if (response.ok) {
        this._data = await response.json();
      } else {
        throw new Error('Error loading data');
      }
    } catch (error) {
      this._data = `Error: ${error instanceof Error ? error.message : 'Unknown error'}`;
    } finally {
      this._loading = false;
    }
  }

  render() {
    return html`
      <h1>Hello from Lit!</h1>
      <p>Welcome to the Lit-based app with Express backend.</p>

      ${this._loading
        ? html`<p>Loading...</p>`
        : html`<pre>${JSON.stringify(this._data, null, 2)}</pre>`}
    `;
  }
}

customElements.define('root-element', RootElement);
