export default {
  title: 'Core/Backgrounds',
};

const backgroundsHTML = `
<!-- 1. Pure CSS Mesh Gradient Background (Nordic Example) -->
<div class="citruss-bg-pure-nordic" style="position: relative; width: 100%; min-height: 350px; border-radius: 16px; overflow: hidden; display: flex; align-items: center; justify-content: center; border: 1px solid var(--citruss-glass-border);">
  <!-- Inner Glass Panel -->
  <div class="citruss-card" style="width: 80%; max-width: 400px;">
    <div class="card-content" style="text-align: center;">
      <h3 style="margin-bottom: 8px; color: var(--citruss-text-main);">Glassmorphism Match</h3>
      <p style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 0;">Perfect harmony on Nordic Ice background.</p>
    </div>
  </div>
</div>

<!-- 2. Dynamic Floating Orb Background (Nebula Example) -->
<div class="citruss-bg-wrapper theme-nebula" style="min-height: 400px;">
  <!-- Orbs (Animated) -->
  <div class="citruss-orb orb-lg orb-nebula animate-float-slow-1" style="top: 10%; left: 15%;"></div>
  <div class="citruss-orb orb-md orb-magenta animate-float-bounce" style="bottom: 5%; right: 10%;"></div>
  
  <!-- Technical Grid Overlay -->
  <div class="citruss-tech-grid"></div>

  <!-- Content Container -->
  <div class="citruss-bg-content">
    <div class="citruss-card" style="width: 100%; max-width: 450px;">
      <div class="card-content" style="text-align: center;">
        <h3 style="margin-bottom: 12px; color: var(--citruss-text-main); font-weight: 700;">Dynamic Mesh & Tech Grid</h3>
        <p style="color: var(--citruss-text-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
          Absolute glowing orbs float organically behind the glass panel, adapting automatically to light/dark themes.
        </p>
      </div>
    </div>
  </div>
</div>
`.trim();

export const DynamicOrbs = () => {
  return `
    <div style="padding: 40px; max-width: 1100px; margin: 0 auto; font-family: var(--citruss-font-body);">
      <div style="margin-bottom: 40px;">
        <h1 style="color: var(--citruss-text-main); font-family: var(--citruss-font-display); font-weight: 800; font-size: 2.2rem; margin-bottom: 12px;">
          ✨ Glassmorphism-Ready Backgrounds
        </h1>
        <p style="color: var(--citruss-text-muted); font-size: 1.1rem; max-width: 800px; line-height: 1.6; margin-bottom: 0;">
          Glassmorphism requires a contrast-rich, colorful, or structured background to showcase the frosted glass blur and border effects. Here is a curated collection of dynamic animated float orbs with custom wrappers.
        </p>
      </div>

      <!-- Theme 1: Citrus Glow -->
      <div style="margin-bottom: 48px;">
        <h2 style="color: var(--citruss-orange); font-family: var(--citruss-font-display); font-size: 1.5rem; font-weight: 700; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
          <span>🍊</span> Citrus Glow (Dynamic Orbs)
        </h2>
        <div class="citruss-bg-wrapper theme-citrus" style="min-height: 380px;">
          <!-- Floating Orbs -->
          <div class="citruss-orb orb-md orb-orange animate-float-slow-1" style="top: -10%; left: 10%;"></div>
          <div class="citruss-orb orb-lg orb-tangerine animate-float-bounce" style="bottom: -20%; right: 5%;"></div>
          <div class="citruss-orb orb-md orb-lemon animate-float-orbit" style="top: 20%; right: 40%;"></div>
          <div class="citruss-orb orb-sm orb-lime animate-float-slow-2" style="bottom: 10%; left: 30%;"></div>
          
          <div class="citruss-tech-grid"></div>
          <div class="citruss-tech-dots"></div>

          <div class="citruss-bg-content">
            <div class="citruss-card" style="max-width: 480px;">
              <div class="card-content" style="text-align: center;">
                <span style="font-size: 0.8rem; font-weight: 800; color: var(--citruss-orange); letter-spacing: 0.1em; text-transform: uppercase;">Premium Showcase</span>
                <h3 style="margin: 8px 0 12px 0; color: var(--citruss-text-main); font-weight: 800;">Tangerine & Lemon Orbit</h3>
                <p style="color: var(--citruss-text-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                  Warm, organic citrus colors float gracefully to enhance frosted card panels. Highly optimized for light & dark landing pages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Theme 2: Cyberpunk & Neon Glow -->
      <div style="margin-bottom: 48px;">
        <h2 style="color: var(--citruss-info); font-family: var(--citruss-font-display); font-size: 1.5rem; font-weight: 700; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
          <span>👾</span> Cyberpunk & Neon Glow
        </h2>
        <div class="citruss-bg-wrapper theme-cyberpunk" style="min-height: 380px;">
          <!-- Floating Orbs -->
          <div class="citruss-orb orb-lg orb-cyan animate-float-slow-1" style="top: -15%; right: 10%;"></div>
          <div class="citruss-orb orb-md orb-magenta animate-float-bounce" style="bottom: -10%; left: 5%;"></div>
          <div class="citruss-orb orb-lg orb-purple animate-float-orbit" style="top: 20%; left: 30%;"></div>
          
          <div class="citruss-tech-grid"></div>

          <div class="citruss-bg-content">
            <div class="citruss-card" style="max-width: 480px;">
              <div class="card-content" style="text-align: center;">
                <span style="font-size: 0.8rem; font-weight: 800; color: var(--citruss-info); letter-spacing: 0.1em; text-transform: uppercase;">Cyberpunk Vibe</span>
                <h3 style="margin: 8px 0 12px 0; color: var(--citruss-text-main); font-weight: 800;">Electric Indigo & Cyan</h3>
                <p style="color: var(--citruss-text-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                  Cyan and magenta gas-cloud styles make the frosted container look futuristic, energetic, and high-tech.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Theme 3: Oceanic Earth Currents -->
      <div style="margin-bottom: 48px;">
        <h2 style="color: #1dd1a1; font-family: var(--citruss-font-display); font-size: 1.5rem; font-weight: 700; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
          <span>🌐</span> Oceanic & Earth Currents
        </h2>
        <div class="citruss-bg-wrapper theme-oceanic" style="min-height: 380px;">
          <!-- Floating Orbs -->
          <div class="citruss-orb orb-lg orb-lime animate-float-slow-1" style="top: -10%; left: -10%;"></div>
          <div class="citruss-orb orb-md orb-cyan animate-float-slow-2" style="bottom: 10%; right: 10%;"></div>
          <div class="citruss-orb orb-sm orb-oceanic animate-float-orbit" style="top: 40%; left: 40%;"></div>
          
          <div class="citruss-tech-dots"></div>

          <div class="citruss-bg-content">
            <div class="citruss-card" style="max-width: 480px;">
              <div class="card-content" style="text-align: center;">
                <span style="font-size: 0.8rem; font-weight: 800; color: #1dd1a1; letter-spacing: 0.1em; text-transform: uppercase;">Oceanic Breeze</span>
                <h3 style="margin: 8px 0 12px 0; color: var(--citruss-text-main); font-weight: 800;">Mint Lime & Turquoise</h3>
                <p style="color: var(--citruss-text-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                  Deep water current flows and turquoise-lime highlights. Perfect for ecological, digital-twin, or global platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Theme 4: Cosmic Nebula -->
      <div style="margin-bottom: 48px;">
        <h2 style="color: #8a2be2; font-family: var(--citruss-font-display); font-size: 1.5rem; font-weight: 700; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
          <span>🌌</span> Cosmic Nebula (Galaxy Deep Space)
        </h2>
        <div class="citruss-bg-wrapper theme-nebula" style="min-height: 380px;">
          <!-- Floating Orbs -->
          <div class="citruss-orb orb-lg orb-nebula animate-float-slow-1" style="top: -10%; right: -10%;"></div>
          <div class="citruss-orb orb-md orb-magenta animate-float-bounce" style="bottom: 10%; left: 10%;"></div>
          <div class="citruss-orb orb-sm orb-purple animate-float-orbit" style="top: 40%; left: 30%;"></div>
          
          <div class="citruss-tech-grid"></div>

          <div class="citruss-bg-content">
            <div class="citruss-card" style="max-width: 480px;">
              <div class="card-content" style="text-align: center;">
                <span style="font-size: 0.8rem; font-weight: 800; color: #a18cd1; letter-spacing: 0.1em; text-transform: uppercase;">Space Voyage</span>
                <h3 style="margin: 8px 0 12px 0; color: var(--citruss-text-main); font-weight: 800;">Deep Galaxy Nebula</h3>
                <p style="color: var(--citruss-text-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                  Deep violet stardust and magenta gas cloud structures. A breathtaking astronomical aesthetic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Theme 5: Liquid Glass -->
      <div style="margin-bottom: 48px;">
        <h2 style="color: #4b6584; font-family: var(--citruss-font-display); font-size: 1.5rem; font-weight: 700; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
          <span>💿</span> Liquid Glass (Cupertino Silk)
        </h2>
        <div class="citruss-bg-wrapper theme-glassy" style="min-height: 380px;">
          <!-- Floating Orbs -->
          <div class="citruss-orb orb-lg orb-glassy animate-float-slow-1" style="top: -20%; left: 20%;"></div>
          <div class="citruss-orb orb-md orb-purple animate-float-bounce" style="bottom: -10%; right: 10%;"></div>
          
          <div class="citruss-tech-dots"></div>

          <div class="citruss-bg-content">
            <div class="citruss-card" style="max-width: 480px;">
              <div class="card-content" style="text-align: center;">
                <span style="font-size: 0.8rem; font-weight: 800; color: #778ca3; letter-spacing: 0.1em; text-transform: uppercase;">Minimalist Apple Vibe</span>
                <h3 style="margin: 8px 0 12px 0; color: var(--citruss-text-main); font-weight: 800;">Liquid Metallic Silk</h3>
                <p style="color: var(--citruss-text-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                  Extremely clean and premium silver reflections, pearlescent gradient mesh. Perfect for WWDC glassmorphism.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Theme 6: Nordic Frost -->
      <div style="margin-bottom: 48px;">
        <h2 style="color: #0fbcf9; font-family: var(--citruss-font-display); font-size: 1.5rem; font-weight: 700; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
          <span>❄️</span> Nordic Frost & Glaciers
        </h2>
        <div class="citruss-bg-wrapper theme-nordic" style="min-height: 380px;">
          <!-- Floating Orbs -->
          <div class="citruss-orb orb-lg orb-nordic animate-float-slow-1" style="top: -10%; left: -10%;"></div>
          <div class="citruss-orb orb-md orb-cyan animate-float-slow-2" style="bottom: 10%; right: 10%;"></div>
          <div class="citruss-orb orb-sm orb-glassy animate-float-orbit" style="top: 30%; right: 30%;"></div>
          
          <div class="citruss-tech-grid"></div>

          <div class="citruss-bg-content">
            <div class="citruss-card" style="max-width: 480px;">
              <div class="card-content" style="text-align: center;">
                <span style="font-size: 0.8rem; font-weight: 800; color: #0fbcf9; letter-spacing: 0.1em; text-transform: uppercase;">Arctic Freshness</span>
                <h3 style="margin: 8px 0 12px 0; color: var(--citruss-text-main); font-weight: 800;">Icy Glacier & Lavender</h3>
                <p style="color: var(--citruss-text-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
                  Pristine arctic icy blue and cool lavender highlights. A clean minimalist design choice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="margin-top: 32px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.95rem; user-select: none; outline: none;">
          💻 View Background HTML & CSS Structuring Example
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto;">
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">${backgroundsHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
        </div>
      </details>
    </div>
  `;
};

export const PureCSSMeshGradients = () => {
  return `
    <div style="padding: 40px; max-width: 1100px; margin: 0 auto; font-family: var(--citruss-font-body);">
      <div style="margin-bottom: 40px;">
        <h1 style="color: var(--citruss-text-main); font-family: var(--citruss-font-display); font-weight: 800; font-size: 2.2rem; margin-bottom: 12px;">
          🎨 Pure CSS Mesh Gradients
        </h1>
        <p style="color: var(--citruss-text-muted); font-size: 1.1rem; max-width: 800px; line-height: 1.6; margin-bottom: 0;">
          These backgrounds are lightweight, high-performance, single-element backgrounds that don't require floating child nodes. Perfect for static pages, headers, and quick backdrops.
        </p>
      </div>

      <div class="citruss-row">
        <!-- citrus -->
        <div class="citruss-col-12 citruss-col-md-6 citruss-mb-lg" style="margin-bottom: 24px;">
          <h3 style="color: var(--citruss-orange); margin-bottom: 12px; font-weight: 700;">🍊 Citrus Punch</h3>
          <div class="citruss-bg-pure-citrus" style="height: 250px; border-radius: 16px; display: flex; align-items: center; justify-content: center; border: 1px solid var(--citruss-glass-border); overflow: hidden; position: relative;">
            <div class="citruss-tech-grid"></div>
            <div class="citruss-card" style="width: 80%;">
              <div class="card-content" style="text-align: center; padding: 12px;">
                <h4 style="color: var(--citruss-text-main); margin-bottom: 4px;">Citrus Panel</h4>
                <p style="color: var(--citruss-text-muted); font-size: 0.85rem; margin: 0;">.citruss-bg-pure-citrus</p>
              </div>
            </div>
          </div>
        </div>

        <!-- cyberpunk -->
        <div class="citruss-col-12 citruss-col-md-6 citruss-mb-lg" style="margin-bottom: 24px;">
          <h3 style="color: var(--citruss-info); margin-bottom: 12px; font-weight: 700;">👾 Cyberpunk Glow</h3>
          <div class="citruss-bg-pure-cyberpunk" style="height: 250px; border-radius: 16px; display: flex; align-items: center; justify-content: center; border: 1px solid var(--citruss-glass-border); overflow: hidden; position: relative;">
            <div class="citruss-tech-grid"></div>
            <div class="citruss-card" style="width: 80%;">
              <div class="card-content" style="text-align: center; padding: 12px;">
                <h4 style="color: var(--citruss-text-main); margin-bottom: 4px;">Cyber Panel</h4>
                <p style="color: var(--citruss-text-muted); font-size: 0.85rem; margin: 0;">.citruss-bg-pure-cyberpunk</p>
              </div>
            </div>
          </div>
        </div>

        <!-- oceanic -->
        <div class="citruss-col-12 citruss-col-md-6 citruss-mb-lg" style="margin-bottom: 24px;">
          <h3 style="color: #1dd1a1; margin-bottom: 12px; font-weight: 700;">🌐 Oceanic Earth</h3>
          <div class="citruss-bg-pure-oceanic" style="height: 250px; border-radius: 16px; display: flex; align-items: center; justify-content: center; border: 1px solid var(--citruss-glass-border); overflow: hidden; position: relative;">
            <div class="citruss-tech-grid"></div>
            <div class="citruss-card" style="width: 80%;">
              <div class="card-content" style="text-align: center; padding: 12px;">
                <h4 style="color: var(--citruss-text-main); margin-bottom: 4px;">Oceanic Panel</h4>
                <p style="color: var(--citruss-text-muted); font-size: 0.85rem; margin: 0;">.citruss-bg-pure-oceanic</p>
              </div>
            </div>
          </div>
        </div>

        <!-- nebula -->
        <div class="citruss-col-12 citruss-col-md-6 citruss-mb-lg" style="margin-bottom: 24px;">
          <h3 style="color: #8a2be2; margin-bottom: 12px; font-weight: 700;">🌌 Cosmic Nebula</h3>
          <div class="citruss-bg-pure-nebula" style="height: 250px; border-radius: 16px; display: flex; align-items: center; justify-content: center; border: 1px solid var(--citruss-glass-border); overflow: hidden; position: relative;">
            <div class="citruss-tech-grid"></div>
            <div class="citruss-card" style="width: 80%;">
              <div class="card-content" style="text-align: center; padding: 12px;">
                <h4 style="color: var(--citruss-text-main); margin-bottom: 4px;">Nebula Panel</h4>
                <p style="color: var(--citruss-text-muted); font-size: 0.85rem; margin: 0;">.citruss-bg-pure-nebula</p>
              </div>
            </div>
          </div>
        </div>

        <!-- glassy -->
        <div class="citruss-col-12 citruss-col-md-6 citruss-mb-lg" style="margin-bottom: 24px;">
          <h3 style="color: #778ca3; margin-bottom: 12px; font-weight: 700;">💿 Liquid Glass</h3>
          <div class="citruss-bg-pure-glassy" style="height: 250px; border-radius: 16px; display: flex; align-items: center; justify-content: center; border: 1px solid var(--citruss-glass-border); overflow: hidden; position: relative;">
            <div class="citruss-tech-grid"></div>
            <div class="citruss-card" style="width: 80%;">
              <div class="card-content" style="text-align: center; padding: 12px;">
                <h4 style="color: var(--citruss-text-main); margin-bottom: 4px;">Glassy Panel</h4>
                <p style="color: var(--citruss-text-muted); font-size: 0.85rem; margin: 0;">.citruss-bg-pure-glassy</p>
              </div>
            </div>
          </div>
        </div>

        <!-- nordic -->
        <div class="citruss-col-12 citruss-col-md-6 citruss-mb-lg" style="margin-bottom: 24px;">
          <h3 style="color: #0fbcf9; margin-bottom: 12px; font-weight: 700;">❄️ Nordic Frost</h3>
          <div class="citruss-bg-pure-nordic" style="height: 250px; border-radius: 16px; display: flex; align-items: center; justify-content: center; border: 1px solid var(--citruss-glass-border); overflow: hidden; position: relative;">
            <div class="citruss-tech-grid"></div>
            <div class="citruss-card" style="width: 80%;">
              <div class="card-content" style="text-align: center; padding: 12px;">
                <h4 style="color: var(--citruss-text-main); margin-bottom: 4px;">Nordic Panel</h4>
                <p style="color: var(--citruss-text-muted); font-size: 0.85rem; margin: 0;">.citruss-bg-pure-nordic</p>
              </div>
            </div>
          </div>
        </div>

        <!-- dusk -->
        <div class="citruss-col-12 citruss-col-md-6 citruss-mb-lg" style="margin-bottom: 24px;">
          <h3 style="color: #fc5c9c; margin-bottom: 12px; font-weight: 700;">🌇 Tokyo Dusk</h3>
          <div class="citruss-bg-pure-dusk" style="height: 250px; border-radius: 16px; display: flex; align-items: center; justify-content: center; border: 1px solid var(--citruss-glass-border); overflow: hidden; position: relative;">
            <div class="citruss-tech-grid"></div>
            <div class="citruss-card" style="width: 80%;">
              <div class="card-content" style="text-align: center; padding: 12px;">
                <h4 style="color: var(--citruss-text-main); margin-bottom: 4px;">Dusk Panel</h4>
                <p style="color: var(--citruss-text-muted); font-size: 0.85rem; margin: 0;">.citruss-bg-pure-dusk</p>
              </div>
            </div>
          </div>
        </div>

        <!-- aurora -->
        <div class="citruss-col-12 citruss-col-md-6 citruss-mb-lg" style="margin-bottom: 24px;">
          <h3 style="color: var(--citruss-success); margin-bottom: 12px; font-weight: 700;">🌌 Aurora Borealis</h3>
          <div class="citruss-bg-pure-aurora" style="height: 250px; border-radius: 16px; display: flex; align-items: center; justify-content: center; border: 1px solid var(--citruss-glass-border); overflow: hidden; position: relative;">
            <div class="citruss-tech-grid"></div>
            <div class="citruss-card" style="width: 80%;">
              <div class="card-content" style="text-align: center; padding: 12px;">
                <h4 style="color: var(--citruss-text-main); margin-bottom: 4px;">Aurora Panel</h4>
                <p style="color: var(--citruss-text-muted); font-size: 0.85rem; margin: 0;">.citruss-bg-pure-aurora</p>
              </div>
            </div>
          </div>
        </div>

        <!-- sunset -->
        <div class="citruss-col-12 citruss-col-md-6 citruss-mb-lg" style="margin-bottom: 24px;">
          <h3 style="color: var(--citruss-danger); margin-bottom: 12px; font-weight: 700;">🌅 Deep Sunset</h3>
          <div class="citruss-bg-pure-sunset" style="height: 250px; border-radius: 16px; display: flex; align-items: center; justify-content: center; border: 1px solid var(--citruss-glass-border); overflow: hidden; position: relative;">
            <div class="citruss-tech-grid"></div>
            <div class="citruss-card" style="width: 80%;">
              <div class="card-content" style="text-align: center; padding: 12px;">
                <h4 style="color: var(--citruss-text-main); margin-bottom: 4px;">Sunset Panel</h4>
                <p style="color: var(--citruss-text-muted); font-size: 0.85rem; margin: 0;">.citruss-bg-pure-sunset</p>
              </div>
            </div>
          </div>
        </div>

        <!-- forest -->
        <div class="citruss-col-12 citruss-col-md-6 citruss-mb-lg" style="margin-bottom: 24px;">
          <h3 style="color: #20bf6b; margin-bottom: 12px; font-weight: 700;">🌿 Mystic Forest</h3>
          <div class="citruss-bg-pure-forest" style="height: 250px; border-radius: 16px; display: flex; align-items: center; justify-content: center; border: 1px solid var(--citruss-glass-border); overflow: hidden; position: relative;">
            <div class="citruss-tech-grid"></div>
            <div class="citruss-card" style="width: 80%;">
              <div class="card-content" style="text-align: center; padding: 12px;">
                <h4 style="color: var(--citruss-text-main); margin-bottom: 4px;">Forest Panel</h4>
                <p style="color: var(--citruss-text-muted); font-size: 0.85rem; margin: 0;">.citruss-bg-pure-forest</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};

DynamicOrbs.parameters = {
  docs: {
    source: {
      code: backgroundsHTML,
    },
  },
};
