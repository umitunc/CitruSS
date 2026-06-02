import{O as i,w as a}from"./index-BE8O6Mn_.js";import{a as s}from"./index-DGdFm7sy.js";import"./preload-helper-C1FmrZbK.js";import"./iframe-CgkO_K3A.js";function e(r){const t={p:"p",...i(),...r.components};return a.jsxs(a.Fragment,{children:[a.jsx(s,{title:"Getting Started/Accessibility standards"}),`
`,a.jsx("style",{children:`
.citruss-doc-container {
  color: var(--citruss-text-main, #ffffff) !important;
  font-family: "Outfit", "Inter", sans-serif !important;
  padding: 40px 20px !important;
  background: transparent !important;
  position: relative;
  overflow: visible !important;
}

.citruss-doc-container h1,
.citruss-doc-container h2,
.citruss-doc-container h3,
.citruss-doc-container h4 {
  color: #ffffff !important;
}

[data-theme="light"] .citruss-doc-container h1,
[data-theme="light"] .citruss-doc-container h2,
[data-theme="light"] .citruss-doc-container h3,
[data-theme="light"] .citruss-doc-container h4 {
  color: #0f172a !important;
}

.citruss-tech-dots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255, 255, 255, 0.06) 1.2px, transparent 0);
  background-size: 24px 24px;
  mask-image: radial-gradient(circle at center, black 75%, transparent 100%);
  pointer-events: none;
  z-index: 1;
}

[data-theme="light"] .citruss-tech-dots {
  background-image: radial-gradient(rgba(15, 23, 42, 0.06) 1.2px, transparent 0);
}

.citruss-a11y-card {
  background-color: rgba(17, 25, 40, 0.45) !important;
  backdrop-filter: blur(20px) saturate(180%) !important;
  -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
  align-items: flex-start;
  box-shadow: 
    inset 0 1.5px 0 0 rgba(255, 255, 255, 0.08),
    0 12px 30px rgba(0, 0, 0, 0.3) !important;
  position: relative;
  z-index: 2;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  color: #ffffff !important;
}

[data-theme="light"] .citruss-a11y-card {
  background-color: rgba(255, 255, 255, 0.45) !important;
  border: 1px solid rgba(255, 255, 255, 0.4) !important;
  box-shadow: 
    inset 0 1.5px 0 0 rgba(255, 255, 255, 0.85),
    0 12px 30px 0 rgba(15, 23, 42, 0.08) !important;
  color: #0f172a !important;
}

.citruss-a11y-card:hover {
  transform: translateY(-2px);
  border-color: rgba(255, 107, 0, 0.4) !important;
  background-color: rgba(17, 25, 40, 0.55) !important;
  box-shadow: 
    inset 0 1.5px 0 0 rgba(255, 255, 255, 0.15),
    0 16px 40px rgba(255, 107, 0, 0.15),
    0 8px 24px rgba(0,0,0,0.4) !important;
}

[data-theme="light"] .citruss-a11y-card:hover {
  background-color: rgba(255, 255, 255, 0.65) !important;
  border-color: rgba(255, 107, 0, 0.55) !important;
  box-shadow: 
    inset 0 1.5px 0 0 rgba(255, 255, 255, 0.95),
    0 15px 35px 0 rgba(255, 107, 0, 0.15),
    0 8px 24px 0 rgba(15, 23, 42, 0.08) !important;
}

.a11y-badge {
  background: rgba(163, 230, 53, 0.15);
  border: 1px solid rgba(163, 230, 53, 0.3);
  color: #a3e635;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 700;
  white-space: nowrap;
}

[data-theme="light"] .a11y-badge {
  background: rgba(132, 204, 22, 0.15);
  border: 1px solid rgba(132, 204, 22, 0.3);
  color: #4d7c0f;
}

.a11y-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 6px 0;
  color: #ffffff;
}

[data-theme="light"] .a11y-title {
  color: #0f172a !important;
}

.a11y-desc {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7) !important;
  margin: 0;
  line-height: 1.5;
}

[data-theme="light"] .a11y-desc {
  color: rgba(15, 23, 42, 0.75) !important;
}
`}),`
`,a.jsxs("div",{className:"citruss-doc-container",children:[a.jsx("div",{className:"citruss-tech-dots"}),a.jsx("h1",{children:"Accessibility Standards"}),a.jsx("div",{style:{fontSize:"1.1rem",color:"rgba(255, 255, 255, 0.8)",marginBottom:"32px",position:"relative",zIndex:"2"},children:a.jsx(t.p,{children:"We believe the web should be usable by everyone. CitruSS UI components are built following high accessibility standards."})}),a.jsxs("div",{className:"citruss-a11y-card",children:[a.jsx("div",{children:a.jsx("span",{className:"a11y-badge",children:"WCAG 2.1 AA"})}),a.jsxs("div",{children:[a.jsx("h3",{className:"a11y-title",children:"Color contrast & readability"}),a.jsx("div",{className:"a11y-desc",children:a.jsx(t.p,{children:"We carefully design our text layers, card surfaces, and gradients to guarantee readable text-to-background contrast configurations."})})]})]}),a.jsxs("div",{className:"citruss-a11y-card",children:[a.jsx("div",{children:a.jsx("span",{className:"a11y-badge",children:"ARIA Roles"})}),a.jsxs("div",{children:[a.jsx("h3",{className:"a11y-title",children:"Semantic markup & screen readers"}),a.jsx("div",{className:"a11y-desc",children:a.jsx(t.p,{children:"Our interactive components (Drawers, Modals, Accordions, Tabs) are configured with appropriate keyboard handling and ARIA attributes."})})]})]}),a.jsxs("div",{className:"citruss-a11y-card",children:[a.jsx("div",{children:a.jsx("span",{className:"a11y-badge",children:"Focus Indicators"})}),a.jsxs("div",{children:[a.jsx("h3",{className:"a11y-title",children:"Interactive keyboard controls"}),a.jsx("div",{className:"a11y-desc",children:a.jsx(t.p,{children:"We implement vibrant, high-visibility focus states on inputs, buttons, and custom selector controls for keyboard-only visitors."})})]})]})]})]})}function l(r={}){const{wrapper:t}={...i(),...r.components};return t?a.jsx(t,{...r,children:a.jsx(e,{...r})}):e(r)}export{l as default};
