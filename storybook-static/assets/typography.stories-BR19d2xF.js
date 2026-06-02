const a={title:"Style Guide/Typography"},r=`
<!-- Heading Styles -->
<h1 class="citruss-h1">H1 Heading - Outfit 800</h1>
<h2 class="citruss-h2">H2 Heading - Outfit 800</h2>
<h3 class="citruss-h3">H3 Heading - Outfit 700</h3>

<!-- Subtitles & Lead Paragraph -->
<p class="citruss-subtitle">This is a Display Subtitle</p>
<p class="citruss-lead">This is a lead body paragraph using the Inter typeface.</p>

<!-- Gradient Text -->
<span class="citruss-text-gradient">Orange Citrus Gradient</span>
<span class="citruss-text-gradient gradient-lime">Lime Citrus Gradient</span>

<!-- Glowing Text -->
<span class="citruss-text-glow">Vibrant Orange Glow</span>
<span class="citruss-text-glow glow-lime">Refreshing Lime Glow</span>

<!-- Underline Highlight -->
<span class="citruss-text-highlight">Glass Underline Highlight</span>
<span class="citruss-text-highlight highlight-lime">Lime Underline Highlight</span>
`.trim(),t=()=>`
    <div style="padding: 30px; max-width: 900px; font-family: var(--citruss-font-family);">
      <!-- Section Title -->
      <h3 style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 800; margin-bottom: 8px; font-size: 1.8rem; display: flex; align-items: center; gap: 8px;">
        🍊 Typography System
      </h3>
      <p style="color: var(--citruss-text-muted); font-size: 0.95rem; margin-bottom: 30px; line-height: 1.5;">
        CitruSS UI comes with two beautifully curated typefaces: <strong style="color: var(--citruss-text-main);">Outfit</strong> for display-oriented elements and <strong style="color: var(--citruss-text-main);">Inter</strong> for standard UI body copying, coupled with modern fluid scaling, rich gradient backgrounds, and subtle retro-modern text glows.
      </p>

      <div style="display: flex; flex-direction: column; gap: 40px;">
        
        <!-- Font Family Cards -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
          <div class="citruss-card" style="padding: 24px;">
            <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--citruss-orange); margin-bottom: 8px;">Display Typeface</div>
            <div style="font-family: 'Outfit', sans-serif; font-size: 2.2rem; font-weight: 800; color: var(--citruss-text-main);">Outfit</div>
            <p style="color: var(--citruss-text-muted); font-size: 0.85rem; margin-top: 8px; line-height: 1.4;">
              Geometric, elegant, and playful. Used exclusively for headings, cards, and prominent hero elements to create a premium visual weight.
            </p>
          </div>
          
          <div class="citruss-card" style="padding: 24px;">
            <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--citruss-lime); margin-bottom: 8px;">Body & System Typeface</div>
            <div style="font-family: 'Inter', sans-serif; font-size: 2.2rem; font-weight: 700; color: var(--citruss-text-main);">Inter</div>
            <p style="color: var(--citruss-text-muted); font-size: 0.85rem; margin-top: 8px; line-height: 1.4;">
              Highly readable, perfectly proportioned, and neutral. Used for dense body text, form elements, buttons, and system controls.
            </p>
          </div>
        </div>

        <!-- Heading Scale -->
        <div>
          <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 20px; border-bottom: 1px solid var(--citruss-glass-border); padding-bottom: 8px; text-transform: uppercase; font-weight: 700;">
            1. Scale & Headings
          </h4>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div>
              <span style="font-size: 0.75rem; color: var(--citruss-text-muted); font-family: monospace;">.citruss-h1 (40px / 2.5rem)</span>
              <h1 class="citruss-h1" style="margin: 4px 0 0 0;">Interactive Dashboard</h1>
            </div>
            <div>
              <span style="font-size: 0.75rem; color: var(--citruss-text-muted); font-family: monospace;">.citruss-h2 (32px / 2rem)</span>
              <h2 class="citruss-h2" style="margin: 4px 0 0 0;">Frosted Glass Layouts</h2>
            </div>
            <div>
              <span style="font-size: 0.75rem; color: var(--citruss-text-muted); font-family: monospace;">.citruss-h3 (28px / 1.75rem)</span>
              <h3 class="citruss-h3" style="margin: 4px 0 0 0;">Creative Typography Scale</h3>
            </div>
            <div>
              <span style="font-size: 0.75rem; color: var(--citruss-text-muted); font-family: monospace;">.citruss-h4 (24px / 1.5rem)</span>
              <h4 class="citruss-h4" style="margin: 4px 0 0 0;">Component Configurations</h4>
            </div>
            <div>
              <span style="font-size: 0.75rem; color: var(--citruss-text-muted); font-family: monospace;">.citruss-h5 (20px / 1.25rem)</span>
              <h5 class="citruss-h5" style="margin: 4px 0 0 0;">Secondary UI Sub-headers</h5>
            </div>
            <div>
              <span style="font-size: 0.75rem; color: var(--citruss-text-muted); font-family: monospace;">.citruss-h6 (16px / 1rem)</span>
              <h6 class="citruss-h6" style="margin: 4px 0 0 0;">Category or Meta Tags</h6>
            </div>
          </div>
        </div>

        <!-- Special Stylings & Utilities -->
        <div>
          <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 20px; border-bottom: 1px solid var(--citruss-glass-border); padding-bottom: 8px; text-transform: uppercase; font-weight: 700;">
            2. Special Stylings & Utilities
          </h4>
          
          <div style="display: flex; flex-direction: column; gap: 24px;">
            <!-- Subtitle & Lead -->
            <div>
              <span style="font-size: 0.75rem; color: var(--citruss-text-muted); font-family: monospace; display: block; margin-bottom: 4px;">.citruss-subtitle</span>
              <p class="citruss-subtitle" style="margin: 0;">Designed to beautifully pair directly underneath display-style titles and headings.</p>
            </div>
            
            <div>
              <span style="font-size: 0.75rem; color: var(--citruss-text-muted); font-family: monospace; display: block; margin-bottom: 4px;">.citruss-lead</span>
              <p class="citruss-lead" style="margin: 0;">This is a lead intro paragraph designed to feel extremely premium, light, and modern.</p>
            </div>

            <!-- Gradient Typography -->
            <div>
              <span style="font-size: 0.75rem; color: var(--citruss-text-muted); font-family: monospace; display: block; margin-bottom: 6px;">.citruss-text-gradient / .gradient-lime</span>
              <div style="display: flex; gap: 20px; flex-wrap: wrap;">
                <h2 class="citruss-h2 citruss-text-gradient" style="margin: 0;">CitruSS Premium Orange</h2>
                <h2 class="citruss-h2 citruss-text-gradient gradient-lime" style="margin: 0;">Vibrant Citrus Lime</h2>
              </div>
            </div>

            <!-- Glow Typography -->
            <div>
              <span style="font-size: 0.75rem; color: var(--citruss-text-muted); font-family: monospace; display: block; margin-bottom: 6px;">.citruss-text-glow / .glow-lime</span>
              <div style="display: flex; gap: 24px; flex-wrap: wrap; background: rgba(0,0,0,0.3); padding: 16px; border-radius: 12px;">
                <span class="citruss-text-glow" style="font-size: 1.25rem; font-weight: 700;">Orange Ambient Glow</span>
                <span class="citruss-text-glow glow-lime" style="font-size: 1.25rem; font-weight: 700;">Lime Ambient Glow</span>
              </div>
            </div>

            <!-- Highlight Typography -->
            <div>
              <span style="font-size: 0.75rem; color: var(--citruss-text-muted); font-family: monospace; display: block; margin-bottom: 6px;">.citruss-text-highlight / .highlight-lime</span>
              <div style="display: flex; gap: 20px; flex-wrap: wrap;">
                <p style="color: var(--citruss-text-main); margin: 0; font-size: 1.1rem;">
                  We design with <span class="citruss-text-highlight">frosted glass highlights</span> that capture the focus of your users instantly.
                </p>
                <p style="color: var(--citruss-text-main); margin: 0; font-size: 1.1rem;">
                  Everything is customizable down to <span class="citruss-text-highlight highlight-lime">lime gradient outlines</span>.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Font Weights & Scale Helper Grid -->
        <div>
          <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 20px; border-bottom: 1px solid var(--citruss-glass-border); padding-bottom: 8px; text-transform: uppercase; font-weight: 700;">
            3. Auxiliary Classes (Weights & Sizes)
          </h4>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
            <div>
              <div style="font-size: 0.8rem; color: var(--citruss-text-muted); margin-bottom: 8px;">Font Weights:</div>
              <div style="display: flex; flex-direction: column; gap: 6px; color: var(--citruss-text-main);">
                <div class="fw-light">Light (.fw-light - 300)</div>
                <div class="fw-normal">Normal (.fw-normal - 400)</div>
                <div class="fw-medium">Medium (.fw-medium - 500)</div>
                <div class="fw-semibold">Semibold (.fw-semibold - 600)</div>
                <div class="fw-bold">Bold (.fw-bold - 700)</div>
                <div class="fw-extrabold">Extrabold (.fw-extrabold - 800)</div>
                <div class="fw-black">Black (.fw-black - 900)</div>
              </div>
            </div>
            
            <div>
              <div style="font-size: 0.8rem; color: var(--citruss-text-muted); margin-bottom: 8px;">Font Sizes:</div>
              <div style="display: flex; flex-direction: column; gap: 6px; color: var(--citruss-text-main);">
                <div class="fs-xs">Extra Small (.fs-xs)</div>
                <div class="fs-sm">Small (.fs-sm)</div>
                <div class="fs-base">Base (.fs-base)</div>
                <div class="fs-lg">Large (.fs-lg)</div>
                <div class="fs-xl">Extra Large (.fs-xl)</div>
                <div class="fs-2xl">Double Extra Large (.fs-2xl)</div>
                <div class="fs-3xl">Triple Extra Large (.fs-3xl)</div>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="margin-top: 40px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden; font-family: 'Outfit', sans-serif;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML Code Example
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto;">
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">${r.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>
        </div>
      </details>
    </div>
  `;t.parameters={docs:{source:{code:r}}};var s,e,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return \`
    <div style="padding: 30px; max-width: 900px; font-family: var(--citruss-font-family);">
      <!-- Section Title -->
      <h3 style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 800; margin-bottom: 8px; font-size: 1.8rem; display: flex; align-items: center; gap: 8px;">
        🍊 Typography System
      </h3>
      <p style="color: var(--citruss-text-muted); font-size: 0.95rem; margin-bottom: 30px; line-height: 1.5;">
        CitruSS UI comes with two beautifully curated typefaces: <strong style="color: var(--citruss-text-main);">Outfit</strong> for display-oriented elements and <strong style="color: var(--citruss-text-main);">Inter</strong> for standard UI body copying, coupled with modern fluid scaling, rich gradient backgrounds, and subtle retro-modern text glows.
      </p>

      <div style="display: flex; flex-direction: column; gap: 40px;">
        
        <!-- Font Family Cards -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
          <div class="citruss-card" style="padding: 24px;">
            <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--citruss-orange); margin-bottom: 8px;">Display Typeface</div>
            <div style="font-family: 'Outfit', sans-serif; font-size: 2.2rem; font-weight: 800; color: var(--citruss-text-main);">Outfit</div>
            <p style="color: var(--citruss-text-muted); font-size: 0.85rem; margin-top: 8px; line-height: 1.4;">
              Geometric, elegant, and playful. Used exclusively for headings, cards, and prominent hero elements to create a premium visual weight.
            </p>
          </div>
          
          <div class="citruss-card" style="padding: 24px;">
            <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--citruss-lime); margin-bottom: 8px;">Body & System Typeface</div>
            <div style="font-family: 'Inter', sans-serif; font-size: 2.2rem; font-weight: 700; color: var(--citruss-text-main);">Inter</div>
            <p style="color: var(--citruss-text-muted); font-size: 0.85rem; margin-top: 8px; line-height: 1.4;">
              Highly readable, perfectly proportioned, and neutral. Used for dense body text, form elements, buttons, and system controls.
            </p>
          </div>
        </div>

        <!-- Heading Scale -->
        <div>
          <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 20px; border-bottom: 1px solid var(--citruss-glass-border); padding-bottom: 8px; text-transform: uppercase; font-weight: 700;">
            1. Scale & Headings
          </h4>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div>
              <span style="font-size: 0.75rem; color: var(--citruss-text-muted); font-family: monospace;">.citruss-h1 (40px / 2.5rem)</span>
              <h1 class="citruss-h1" style="margin: 4px 0 0 0;">Interactive Dashboard</h1>
            </div>
            <div>
              <span style="font-size: 0.75rem; color: var(--citruss-text-muted); font-family: monospace;">.citruss-h2 (32px / 2rem)</span>
              <h2 class="citruss-h2" style="margin: 4px 0 0 0;">Frosted Glass Layouts</h2>
            </div>
            <div>
              <span style="font-size: 0.75rem; color: var(--citruss-text-muted); font-family: monospace;">.citruss-h3 (28px / 1.75rem)</span>
              <h3 class="citruss-h3" style="margin: 4px 0 0 0;">Creative Typography Scale</h3>
            </div>
            <div>
              <span style="font-size: 0.75rem; color: var(--citruss-text-muted); font-family: monospace;">.citruss-h4 (24px / 1.5rem)</span>
              <h4 class="citruss-h4" style="margin: 4px 0 0 0;">Component Configurations</h4>
            </div>
            <div>
              <span style="font-size: 0.75rem; color: var(--citruss-text-muted); font-family: monospace;">.citruss-h5 (20px / 1.25rem)</span>
              <h5 class="citruss-h5" style="margin: 4px 0 0 0;">Secondary UI Sub-headers</h5>
            </div>
            <div>
              <span style="font-size: 0.75rem; color: var(--citruss-text-muted); font-family: monospace;">.citruss-h6 (16px / 1rem)</span>
              <h6 class="citruss-h6" style="margin: 4px 0 0 0;">Category or Meta Tags</h6>
            </div>
          </div>
        </div>

        <!-- Special Stylings & Utilities -->
        <div>
          <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 20px; border-bottom: 1px solid var(--citruss-glass-border); padding-bottom: 8px; text-transform: uppercase; font-weight: 700;">
            2. Special Stylings & Utilities
          </h4>
          
          <div style="display: flex; flex-direction: column; gap: 24px;">
            <!-- Subtitle & Lead -->
            <div>
              <span style="font-size: 0.75rem; color: var(--citruss-text-muted); font-family: monospace; display: block; margin-bottom: 4px;">.citruss-subtitle</span>
              <p class="citruss-subtitle" style="margin: 0;">Designed to beautifully pair directly underneath display-style titles and headings.</p>
            </div>
            
            <div>
              <span style="font-size: 0.75rem; color: var(--citruss-text-muted); font-family: monospace; display: block; margin-bottom: 4px;">.citruss-lead</span>
              <p class="citruss-lead" style="margin: 0;">This is a lead intro paragraph designed to feel extremely premium, light, and modern.</p>
            </div>

            <!-- Gradient Typography -->
            <div>
              <span style="font-size: 0.75rem; color: var(--citruss-text-muted); font-family: monospace; display: block; margin-bottom: 6px;">.citruss-text-gradient / .gradient-lime</span>
              <div style="display: flex; gap: 20px; flex-wrap: wrap;">
                <h2 class="citruss-h2 citruss-text-gradient" style="margin: 0;">CitruSS Premium Orange</h2>
                <h2 class="citruss-h2 citruss-text-gradient gradient-lime" style="margin: 0;">Vibrant Citrus Lime</h2>
              </div>
            </div>

            <!-- Glow Typography -->
            <div>
              <span style="font-size: 0.75rem; color: var(--citruss-text-muted); font-family: monospace; display: block; margin-bottom: 6px;">.citruss-text-glow / .glow-lime</span>
              <div style="display: flex; gap: 24px; flex-wrap: wrap; background: rgba(0,0,0,0.3); padding: 16px; border-radius: 12px;">
                <span class="citruss-text-glow" style="font-size: 1.25rem; font-weight: 700;">Orange Ambient Glow</span>
                <span class="citruss-text-glow glow-lime" style="font-size: 1.25rem; font-weight: 700;">Lime Ambient Glow</span>
              </div>
            </div>

            <!-- Highlight Typography -->
            <div>
              <span style="font-size: 0.75rem; color: var(--citruss-text-muted); font-family: monospace; display: block; margin-bottom: 6px;">.citruss-text-highlight / .highlight-lime</span>
              <div style="display: flex; gap: 20px; flex-wrap: wrap;">
                <p style="color: var(--citruss-text-main); margin: 0; font-size: 1.1rem;">
                  We design with <span class="citruss-text-highlight">frosted glass highlights</span> that capture the focus of your users instantly.
                </p>
                <p style="color: var(--citruss-text-main); margin: 0; font-size: 1.1rem;">
                  Everything is customizable down to <span class="citruss-text-highlight highlight-lime">lime gradient outlines</span>.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Font Weights & Scale Helper Grid -->
        <div>
          <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 20px; border-bottom: 1px solid var(--citruss-glass-border); padding-bottom: 8px; text-transform: uppercase; font-weight: 700;">
            3. Auxiliary Classes (Weights & Sizes)
          </h4>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
            <div>
              <div style="font-size: 0.8rem; color: var(--citruss-text-muted); margin-bottom: 8px;">Font Weights:</div>
              <div style="display: flex; flex-direction: column; gap: 6px; color: var(--citruss-text-main);">
                <div class="fw-light">Light (.fw-light - 300)</div>
                <div class="fw-normal">Normal (.fw-normal - 400)</div>
                <div class="fw-medium">Medium (.fw-medium - 500)</div>
                <div class="fw-semibold">Semibold (.fw-semibold - 600)</div>
                <div class="fw-bold">Bold (.fw-bold - 700)</div>
                <div class="fw-extrabold">Extrabold (.fw-extrabold - 800)</div>
                <div class="fw-black">Black (.fw-black - 900)</div>
              </div>
            </div>
            
            <div>
              <div style="font-size: 0.8rem; color: var(--citruss-text-muted); margin-bottom: 8px;">Font Sizes:</div>
              <div style="display: flex; flex-direction: column; gap: 6px; color: var(--citruss-text-main);">
                <div class="fs-xs">Extra Small (.fs-xs)</div>
                <div class="fs-sm">Small (.fs-sm)</div>
                <div class="fs-base">Base (.fs-base)</div>
                <div class="fs-lg">Large (.fs-lg)</div>
                <div class="fs-xl">Extra Large (.fs-xl)</div>
                <div class="fs-2xl">Double Extra Large (.fs-2xl)</div>
                <div class="fs-3xl">Triple Extra Large (.fs-3xl)</div>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="margin-top: 40px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden; font-family: 'Outfit', sans-serif;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML Code Example
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto;">
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">\${typographyHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
        </div>
      </details>
    </div>
  \`;
}`,...(i=(e=t.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const n=["TypographyShowcase"];export{t as TypographyShowcase,n as __namedExportsOrder,a as default};
