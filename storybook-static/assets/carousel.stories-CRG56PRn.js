const{useEffect:n}=__STORYBOOK_MODULE_PREVIEW_API__,d={title:"Interactive/Carousel"},a=`
<div class="citruss-carousel" id="demo-carousel-component">
  <div class="carousel-inner">
    
    <!-- Slide 1 -->
    <div class="carousel-item active" style="background: linear-gradient(135deg, rgba(255, 107, 0, 0.15) 0%, rgba(255, 159, 67, 0.05) 100%);">
      <div class="slide-glow-orb" style="background: var(--citruss-orange); top: 10%; left: 10%;"></div>
      <div class="slide-content-wrapper">
        <span class="slide-badge">
          <span class="material-symbols-rounded">auto_awesome</span>
          Glassmorphism Engine
        </span>
        <h3>Fluid Glass Interface</h3>
        <p>CitruSS UI offers modern, highly realistic frosted glass design tokens that are perfectly synchronized with light and dark mode systems.</p>
      </div>
    </div>
    
    <!-- Slide 2 -->
    <div class="carousel-item" style="background: linear-gradient(135deg, rgba(132, 204, 22, 0.15) 0%, rgba(163, 230, 53, 0.05) 100%);">
      <div class="slide-glow-orb" style="background: var(--citruss-lime); top: 20%; right: 10%;"></div>
      <div class="slide-content-wrapper">
        <span class="slide-badge">
          <span class="material-symbols-rounded">speed</span>
          Zero Dependency
        </span>
        <h3>Pure Performance</h3>
        <p>Built with vanilla CSS and lightweight, modular JavaScript to run optimally without loading heavy external libraries or frameworks.</p>
      </div>
    </div>
    
    <!-- Slide 3 -->
    <div class="carousel-item" style="background: linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(14, 165, 233, 0.05) 100%);">
      <div class="slide-glow-orb" style="background: #38bdf8; bottom: 10%; left: 30%;"></div>
      <div class="slide-content-wrapper">
        <span class="slide-badge">
          <span class="material-symbols-rounded">desktop_windows</span>
          Cross-Platform
        </span>
        <h3>Electron & Web Ready</h3>
        <p>Tailored to provide elite frame rates and native-feeling desktop styling for Electron wrapper apps as well as standard web platforms.</p>
      </div>
    </div>

  </div>
  
  <!-- Controls -->
  <button class="carousel-control control-prev" aria-label="Previous Slide">
    <span class="material-symbols-rounded">chevron_left</span>
  </button>
  <button class="carousel-control control-next" aria-label="Next Slide">
    <span class="material-symbols-rounded">chevron_right</span>
  </button>
  
  <!-- Indicators -->
  <div class="carousel-indicators">
    <button class="indicator-dot active" aria-label="Go to slide 1"></button>
    <button class="indicator-dot" aria-label="Go to slide 2"></button>
    <button class="indicator-dot" aria-label="Go to slide 3"></button>
  </div>
</div>
`.trim(),l=`
// Initialize the Carousel component
const el = document.getElementById('demo-carousel-component');
if (el && window.CitruSS?.Carousel) {
  new window.CitruSS.Carousel(el, { interval: 4500 });
}
`.trim(),e=()=>(n(()=>{var t;const s=document.getElementById("demo-carousel-component");s&&((t=window.CitruSS)!=null&&t.Carousel)&&new window.CitruSS.Carousel(s,{interval:4500})},[]),`
    <div style="padding: 40px; max-width: 650px; margin: 0 auto; font-family: 'Outfit', sans-serif;">
      <h3 style="color: var(--citruss-text-main); font-weight: 900; margin-bottom: 24px; font-size: 1.8rem; letter-spacing: -0.03em;">
        Carousel
      </h3>
      
      ${a}

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper">
        <summary>
          💻 View HTML & JS Code Examples
        </summary>
        <div>
          <div>
            <h5 style="color: var(--citruss-lime); margin: 18px 18px 8px 18px; font-size: 0.85rem; font-weight: 700; font-family: 'Outfit', sans-serif;">Carousel HTML:</h5>
            <pre><code class="language-html">${a.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>
          </div>
          <div style="border-top: 1px solid rgba(255,255,255,0.06);">
            <h5 style="color: var(--citruss-orange); margin: 18px 18px 8px 18px; font-size: 0.85rem; font-weight: 700; font-family: 'Outfit', sans-serif;">Initialization JS:</h5>
            <pre><code class="language-javascript">${l.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>
          </div>
        </div>
      </details>
    </div>
  `);e.parameters={docs:{source:{code:`${a}

/* Javascript */
${l}`}}};var r,o,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  useEffect(() => {
    const el = document.getElementById('demo-carousel-component');
    if (el && window.CitruSS?.Carousel) {
      new window.CitruSS.Carousel(el, {
        interval: 4500
      });
    }
  }, []);
  return \`
    <div style="padding: 40px; max-width: 650px; margin: 0 auto; font-family: 'Outfit', sans-serif;">
      <h3 style="color: var(--citruss-text-main); font-weight: 900; margin-bottom: 24px; font-size: 1.8rem; letter-spacing: -0.03em;">
        Carousel
      </h3>
      
      \${carouselHTML}

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper">
        <summary>
          💻 View HTML & JS Code Examples
        </summary>
        <div>
          <div>
            <h5 style="color: var(--citruss-lime); margin: 18px 18px 8px 18px; font-size: 0.85rem; font-weight: 700; font-family: 'Outfit', sans-serif;">Carousel HTML:</h5>
            <pre><code class="language-html">\${carouselHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
          </div>
          <div style="border-top: 1px solid rgba(255,255,255,0.06);">
            <h5 style="color: var(--citruss-orange); margin: 18px 18px 8px 18px; font-size: 0.85rem; font-weight: 700; font-family: 'Outfit', sans-serif;">Initialization JS:</h5>
            <pre><code class="language-javascript">\${carouselJS.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
          </div>
        </div>
      </details>
    </div>
  \`;
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const c=["StandardCarousel"];export{e as StandardCarousel,c as __namedExportsOrder,d as default};
