import{C as l}from"./iframe-D55dljvC.js";import"./preload-helper-C1FmrZbK.js";const m={title:"Interactive/Theme Toggle",parameters:{layout:"centered"}},i=`
<!-- CitruSS Premium Glassmorphic Theme Toggle Component -->
<div class="citruss-theme-toggle" id="theme-switcher">
  <button class="toggle-btn" data-theme-value="light" aria-label="Switch to Light Theme">
    <!-- SVG Light Icon -->
    Light
  </button>
  <button class="toggle-btn" data-theme-value="dark" aria-label="Switch to Dark Theme">
    <!-- SVG Dark Icon -->
    Dark
  </button>
</div>
`.trim(),n=`
// Instantiate Javascript switch engine
const el = document.getElementById('theme-switcher');
if (el) {
  new CitruSS.ThemeToggle(el);
}
`.trim(),e={render:()=>{const t="citruss-toggle-demo";return setTimeout(()=>{const s=document.getElementById(t);s&&new l(s)},100),`
      <div style="text-align: center; font-family: var(--citruss-font-display); padding: 40px; max-width: 600px;">
        <h3 style="color: var(--citruss-text-main); margin-bottom: 24px; font-weight: 800;">
          Interactive Glassmorphic Theme Switcher
        </h3>
        <p style="color: var(--citruss-text-muted); max-width: 400px; margin: 0 auto 30px auto; font-size: 0.95rem;">
          An ultra-premium, zero-dependency theme toggle control that handles saving user choices, document attribute switching, and smooth CSS transitions.
        </p>

        <!-- Premium CitruSS Theme Toggle Component -->
        <div class="citruss-theme-toggle" id="${t}" style="margin: 0 auto 32px auto;">
          <button class="toggle-btn" data-theme-value="light" aria-label="Switch to Light Theme">
            <svg viewBox="0 0 24 24">
              <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
            </svg>
            Light
          </button>
          <button class="toggle-btn" data-theme-value="dark" aria-label="Switch to Dark Theme">
            <svg viewBox="0 0 24 24">
              <path d="M12.3 22h-.1c-5.5 0-10-4.5-10-10 0-4.8 3.5-8.9 8.2-9.8.6-.1 1.2.3 1.3.9.1.6-.2 1.2-.8 1.4-3.1 1.1-5.3 4-5.3 7.5 0 4.4 3.6 8 8 8 3.5 0 6.4-2.2 7.5-5.3.2-.6.8-.9 1.4-.8.6.1 1 .7.9 1.3C21.9 17.5 17.5 22 12.3 22z"/>
            </svg>
            Dark
          </button>
        </div>

        <!-- Code Example Block -->
        <details class="citruss-code-wrapper" style="text-align: left; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden; font-family: 'Outfit', sans-serif;">
          <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
            💻 View HTML & JS Code Examples
          </summary>
          <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto; display: flex; flex-direction: column; gap: 16px;">
            <div>
              <h5 style="color: var(--citruss-lime); margin: 0 0 8px 0; font-size: 0.85rem;">Theme Toggle HTML:</h5>
              <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.8rem; line-height: 1.5;">${i.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>
            </div>
            <div>
              <h5 style="color: var(--citruss-orange); margin: 0 0 8px 0; font-size: 0.85rem;">Initialization JS:</h5>
              <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.8rem; line-height: 1.5;">${n.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>
            </div>
          </div>
        </details>
      </div>
    `}};e.parameters={docs:{source:{code:`${i}

/* Javascript */
${n}`}}};var r,o,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    // Generate unique ID for binding
    const toggleId = 'citruss-toggle-demo';
    setTimeout(() => {
      const el = document.getElementById(toggleId);
      if (el) {
        new CitruSSThemeToggle(el);
      }
    }, 100);
    return \`
      <div style="text-align: center; font-family: var(--citruss-font-display); padding: 40px; max-width: 600px;">
        <h3 style="color: var(--citruss-text-main); margin-bottom: 24px; font-weight: 800;">
          Interactive Glassmorphic Theme Switcher
        </h3>
        <p style="color: var(--citruss-text-muted); max-width: 400px; margin: 0 auto 30px auto; font-size: 0.95rem;">
          An ultra-premium, zero-dependency theme toggle control that handles saving user choices, document attribute switching, and smooth CSS transitions.
        </p>

        <!-- Premium CitruSS Theme Toggle Component -->
        <div class="citruss-theme-toggle" id="\${toggleId}" style="margin: 0 auto 32px auto;">
          <button class="toggle-btn" data-theme-value="light" aria-label="Switch to Light Theme">
            <svg viewBox="0 0 24 24">
              <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
            </svg>
            Light
          </button>
          <button class="toggle-btn" data-theme-value="dark" aria-label="Switch to Dark Theme">
            <svg viewBox="0 0 24 24">
              <path d="M12.3 22h-.1c-5.5 0-10-4.5-10-10 0-4.8 3.5-8.9 8.2-9.8.6-.1 1.2.3 1.3.9.1.6-.2 1.2-.8 1.4-3.1 1.1-5.3 4-5.3 7.5 0 4.4 3.6 8 8 8 3.5 0 6.4-2.2 7.5-5.3.2-.6.8-.9 1.4-.8.6.1 1 .7.9 1.3C21.9 17.5 17.5 22 12.3 22z"/>
            </svg>
            Dark
          </button>
        </div>

        <!-- Code Example Block -->
        <details class="citruss-code-wrapper" style="text-align: left; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden; font-family: 'Outfit', sans-serif;">
          <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
            💻 View HTML & JS Code Examples
          </summary>
          <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto; display: flex; flex-direction: column; gap: 16px;">
            <div>
              <h5 style="color: var(--citruss-lime); margin: 0 0 8px 0; font-size: 0.85rem;">Theme Toggle HTML:</h5>
              <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.8rem; line-height: 1.5;">\${toggleHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
            </div>
            <div>
              <h5 style="color: var(--citruss-orange); margin: 0 0 8px 0; font-size: 0.85rem;">Initialization JS:</h5>
              <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.8rem; line-height: 1.5;">\${toggleJS.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
            </div>
          </div>
        </details>
      </div>
    \`;
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const d=["Default"];export{e as Default,d as __namedExportsOrder,m as default};
