const{useEffect:x}=__STORYBOOK_MODULE_PREVIEW_API__,L={title:"Interactive/Liquid Glass Slider"},i=()=>(x(()=>{const r=document.querySelector(".slider-track-wrapper"),t=document.querySelector(".slider-thumb-glass"),a=document.querySelector(".slider-progress"),l=document.querySelector(".slider-value-badge");if(!r||!t||!a)return;let s=!1;const o=e=>{const m=r.getBoundingClientRect();let n=(e-m.left)/m.width*100;n=Math.max(0,Math.min(100,n)),a.style.width=`${n}%`,t.style.left=`${n}%`,l&&(l.textContent=`${Math.round(n)}%`)},f=e=>{s=!0,t.classList.add("active"),o(e.clientX),document.addEventListener("mousemove",d),document.addEventListener("mouseup",c)},d=e=>{s&&o(e.clientX)},c=()=>{s=!1,t.classList.remove("active"),document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",c)},y=e=>{s=!0,t.classList.add("active"),o(e.touches[0].clientX),document.addEventListener("touchmove",u,{passive:!0}),document.addEventListener("touchend",v)},u=e=>{s&&o(e.touches[0].clientX)},v=()=>{s=!1,t.classList.remove("active"),document.removeEventListener("touchmove",u),document.removeEventListener("touchend",v)};r.addEventListener("mousedown",f),r.addEventListener("touchstart",y,{passive:!0})},[]),`
    <div style="padding: 80px 40px; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 340px; gap: 32px; position: relative;">
      
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
          Liquid Glass Slider
        </h3>
        <p style="margin: 0; color: var(--citruss-text-muted); font-size: 0.85rem; font-family: -apple-system, 'SF Pro Text', 'Inter', sans-serif; max-width: 400px;">
          Solid knob at rest. Grab &amp; drag to see it morph into translucent frosted glass.
        </p>
      </div>

      <div class="citruss-liquid-slider-wrapper">
        <div class="slider-track-wrapper">
          <div class="slider-container">
            <div class="slider-progress" style="width: 50%;"></div>
            <div class="slider-thumb-glass" style="left: 50%;">
              <div class="slider-thumb-glass-filter"></div>
              <div class="slider-thumb-glass-overlay"></div>
              <div class="slider-thumb-glass-specular"></div>
            </div>
          </div>
        </div>
      </div>

      <span class="slider-value-badge" style="
        font-family: -apple-system, 'SF Pro Text', 'Inter', sans-serif;
        font-size: 0.8rem;
        font-weight: 600;
        color: var(--citruss-text-muted);
        letter-spacing: 0.02em;
      ">50%</span>
    </div>
  `);i.parameters={docs:{source:{code:`
<div class="citruss-liquid-slider-wrapper">
  <div class="slider-track-wrapper">
    <div class="slider-container">
      <div class="slider-progress" style="width: 50%;"></div>
      <div class="slider-thumb-glass" style="left: 50%;">
        <div class="slider-thumb-glass-filter"></div>
        <div class="slider-thumb-glass-overlay"></div>
        <div class="slider-thumb-glass-specular"></div>
      </div>
    </div>
  </div>
</div>`.trim()}}};var p,g,h;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  useEffect(() => {
    const track = document.querySelector('.slider-track-wrapper');
    const thumb = document.querySelector('.slider-thumb-glass');
    const progress = document.querySelector('.slider-progress');
    const valBadge = document.querySelector('.slider-value-badge');
    if (!track || !thumb || !progress) return;
    let isDragging = false;
    const updateSlider = clientX => {
      const rect = track.getBoundingClientRect();
      let pct = (clientX - rect.left) / rect.width * 100;
      pct = Math.max(0, Math.min(100, pct));
      progress.style.width = \`\${pct}%\`;
      thumb.style.left = \`\${pct}%\`;
      if (valBadge) valBadge.textContent = \`\${Math.round(pct)}%\`;
    };

    // ── Mouse ──
    const onDown = e => {
      isDragging = true;
      thumb.classList.add('active');
      updateSlider(e.clientX);
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
    };
    const onMove = e => {
      if (isDragging) updateSlider(e.clientX);
    };
    const onUp = () => {
      isDragging = false;
      thumb.classList.remove('active');
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };

    // ── Touch ──
    const onTouchStart = e => {
      isDragging = true;
      thumb.classList.add('active');
      updateSlider(e.touches[0].clientX);
      document.addEventListener('touchmove', onTouchMove, {
        passive: true
      });
      document.addEventListener('touchend', onTouchEnd);
    };
    const onTouchMove = e => {
      if (isDragging) updateSlider(e.touches[0].clientX);
    };
    const onTouchEnd = () => {
      isDragging = false;
      thumb.classList.remove('active');
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onTouchEnd);
    };
    track.addEventListener('mousedown', onDown);
    track.addEventListener('touchstart', onTouchStart, {
      passive: true
    });
  }, []);
  return \`
    <div style="padding: 80px 40px; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 340px; gap: 32px; position: relative;">
      
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
          Liquid Glass Slider
        </h3>
        <p style="margin: 0; color: var(--citruss-text-muted); font-size: 0.85rem; font-family: -apple-system, 'SF Pro Text', 'Inter', sans-serif; max-width: 400px;">
          Solid knob at rest. Grab &amp; drag to see it morph into translucent frosted glass.
        </p>
      </div>

      <div class="citruss-liquid-slider-wrapper">
        <div class="slider-track-wrapper">
          <div class="slider-container">
            <div class="slider-progress" style="width: 50%;"></div>
            <div class="slider-thumb-glass" style="left: 50%;">
              <div class="slider-thumb-glass-filter"></div>
              <div class="slider-thumb-glass-overlay"></div>
              <div class="slider-thumb-glass-specular"></div>
            </div>
          </div>
        </div>
      </div>

      <span class="slider-value-badge" style="
        font-family: -apple-system, 'SF Pro Text', 'Inter', sans-serif;
        font-size: 0.8rem;
        font-weight: 600;
        color: var(--citruss-text-muted);
        letter-spacing: 0.02em;
      ">50%</span>
    </div>
  \`;
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const S=["LiquidGlassSlider"];export{i as LiquidGlassSlider,S as __namedExportsOrder,L as default};
