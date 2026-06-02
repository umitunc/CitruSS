const{useEffect:u}=__STORYBOOK_MODULE_PREVIEW_API__,v={title:"Interactive/Segmented Control"},s=()=>(u(()=>{document.querySelectorAll(".citruss-segmented-control").forEach(a=>{const n=a.querySelectorAll(".segmented-item"),e=a.querySelector(".segmented-indicator-glass"),r=n.length,l=t=>{const i=100/r;e.style.left=`calc(${i*t}% + 3px)`,e.style.width=`calc(${i}% - 3px)`};n.forEach((t,i)=>{t.addEventListener("click",()=>{t.classList.contains("active")||(n.forEach(m=>m.classList.remove("active")),t.classList.add("active"),e.classList.add("active"),e.classList.add("morphing"),l(i),setTimeout(()=>{e.classList.remove("active"),e.classList.remove("morphing")},400))})})})},[]),`
    <div style="padding: 80px 40px; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 420px; gap: 48px; position: relative;">
      
      <!-- SVG Liquid Lens Filter -->
      <svg style="position: absolute; width: 0; height: 0; pointer-events: none;" aria-hidden="true">
        <defs>
          <filter id="mini-liquid-lens">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix in="blur" mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div style="text-align: center;">
        <h3 style="margin: 0 0 6px; font-family: -apple-system, 'SF Pro Display', 'Outfit', sans-serif; font-weight: 700; font-size: 1.4rem; color: var(--citruss-text-main); letter-spacing: -0.02em;">
          Segmented Control
        </h3>
        <p style="margin: 0; color: var(--citruss-text-muted); font-size: 0.85rem; font-family: -apple-system, 'SF Pro Text', 'Inter', sans-serif; max-width: 420px;">
          Solid indicator pill at rest. Switching tabs morphs it into translucent Liquid Glass before it settles back.
        </p>
      </div>

      <!-- 2-segment example -->
      <div class="citruss-segmented-control-wrapper">
        <div class="citruss-segmented-control">
          <button class="segmented-item active">For You</button>
          <button class="segmented-item">Library</button>
          <div class="segmented-indicator-glass">
            <div class="segmented-indicator-filter"></div>
            <div class="segmented-indicator-overlay"></div>
            <div class="segmented-indicator-specular"></div>
          </div>
        </div>
      </div>

      <!-- 3-segment example -->
      <div class="citruss-segmented-control-wrapper">
        <div class="citruss-segmented-control">
          <button class="segmented-item active">All</button>
          <button class="segmented-item">Music</button>
          <button class="segmented-item">Podcasts</button>
          <div class="segmented-indicator-glass">
            <div class="segmented-indicator-filter"></div>
            <div class="segmented-indicator-overlay"></div>
            <div class="segmented-indicator-specular"></div>
          </div>
        </div>
      </div>

      <!-- 4-segment example -->
      <div class="citruss-segmented-control-wrapper">
        <div class="citruss-segmented-control">
          <button class="segmented-item active">Day</button>
          <button class="segmented-item">Week</button>
          <button class="segmented-item">Month</button>
          <button class="segmented-item">Year</button>
          <div class="segmented-indicator-glass">
            <div class="segmented-indicator-filter"></div>
            <div class="segmented-indicator-overlay"></div>
            <div class="segmented-indicator-specular"></div>
          </div>
        </div>
      </div>
    </div>
  `);s.parameters={docs:{source:{code:`
<!-- 2-segment -->
<div class="citruss-segmented-control">
  <button class="segmented-item active">For You</button>
  <button class="segmented-item">Library</button>
  <div class="segmented-indicator-glass">
    <div class="segmented-indicator-filter"></div>
    <div class="segmented-indicator-overlay"></div>
    <div class="segmented-indicator-specular"></div>
  </div>
</div>

<!-- 3-segment -->
<div class="citruss-segmented-control">
  <button class="segmented-item active">All</button>
  <button class="segmented-item">Music</button>
  <button class="segmented-item">Podcasts</button>
  <div class="segmented-indicator-glass">...</div>
</div>`.trim()}}};var o,d,c;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  useEffect(() => {
    document.querySelectorAll('.citruss-segmented-control').forEach(seg => {
      const items = seg.querySelectorAll('.segmented-item');
      const indicator = seg.querySelector('.segmented-indicator-glass');
      const count = items.length;

      // Position helper — computes left offset for segment index
      const positionIndicator = idx => {
        const segW = 100 / count;
        indicator.style.left = \`calc(\${segW * idx}% + 3px)\`;
        indicator.style.width = \`calc(\${segW}% - 3px)\`;
      };
      items.forEach((item, idx) => {
        item.addEventListener('click', () => {
          // Skip if already active
          if (item.classList.contains('active')) return;

          // Update text states
          items.forEach(i => i.classList.remove('active'));
          item.classList.add('active');

          // Activate glass morphing during transition
          indicator.classList.add('active');
          indicator.classList.add('morphing');

          // Slide to target segment
          positionIndicator(idx);

          // After transition completes, snap back to solid
          setTimeout(() => {
            indicator.classList.remove('active');
            indicator.classList.remove('morphing');
          }, 400);
        });
      });
    });
  }, []);
  return \`
    <div style="padding: 80px 40px; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 420px; gap: 48px; position: relative;">
      
      <!-- SVG Liquid Lens Filter -->
      <svg style="position: absolute; width: 0; height: 0; pointer-events: none;" aria-hidden="true">
        <defs>
          <filter id="mini-liquid-lens">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix in="blur" mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div style="text-align: center;">
        <h3 style="margin: 0 0 6px; font-family: -apple-system, 'SF Pro Display', 'Outfit', sans-serif; font-weight: 700; font-size: 1.4rem; color: var(--citruss-text-main); letter-spacing: -0.02em;">
          Segmented Control
        </h3>
        <p style="margin: 0; color: var(--citruss-text-muted); font-size: 0.85rem; font-family: -apple-system, 'SF Pro Text', 'Inter', sans-serif; max-width: 420px;">
          Solid indicator pill at rest. Switching tabs morphs it into translucent Liquid Glass before it settles back.
        </p>
      </div>

      <!-- 2-segment example -->
      <div class="citruss-segmented-control-wrapper">
        <div class="citruss-segmented-control">
          <button class="segmented-item active">For You</button>
          <button class="segmented-item">Library</button>
          <div class="segmented-indicator-glass">
            <div class="segmented-indicator-filter"></div>
            <div class="segmented-indicator-overlay"></div>
            <div class="segmented-indicator-specular"></div>
          </div>
        </div>
      </div>

      <!-- 3-segment example -->
      <div class="citruss-segmented-control-wrapper">
        <div class="citruss-segmented-control">
          <button class="segmented-item active">All</button>
          <button class="segmented-item">Music</button>
          <button class="segmented-item">Podcasts</button>
          <div class="segmented-indicator-glass">
            <div class="segmented-indicator-filter"></div>
            <div class="segmented-indicator-overlay"></div>
            <div class="segmented-indicator-specular"></div>
          </div>
        </div>
      </div>

      <!-- 4-segment example -->
      <div class="citruss-segmented-control-wrapper">
        <div class="citruss-segmented-control">
          <button class="segmented-item active">Day</button>
          <button class="segmented-item">Week</button>
          <button class="segmented-item">Month</button>
          <button class="segmented-item">Year</button>
          <div class="segmented-indicator-glass">
            <div class="segmented-indicator-filter"></div>
            <div class="segmented-indicator-overlay"></div>
            <div class="segmented-indicator-specular"></div>
          </div>
        </div>
      </div>
    </div>
  \`;
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const g=["LiquidGlassSegmented"];export{s as LiquidGlassSegmented,g as __namedExportsOrder,v as default};
