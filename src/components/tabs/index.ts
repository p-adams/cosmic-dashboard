import "./style.css";

import { render } from "../../utils";

export function setupTabs<T extends HTMLElement>(element: T) {
  renderTabs({});
  function renderTabs(state: any) {
    const tabsHtml = `<div class="tabs">
        <div class="tab-item">
            <input type="radio" id="tab1" name="tab-group" checked>
            <label for="tab1">Tab 1</label>
        </div>
        <div class="tab-item">
            <input type="radio" id="tab2" name="tab-group">
            <label for="tab2">Tab 2</label>
        </div>
        <div class="tab-item">
            <input type="radio" id="tab3" name="tab-group">
            <label for="tab3">Tab 3</label>
        </div>
    </div>`;
    render(element, tabsHtml);
  }
}