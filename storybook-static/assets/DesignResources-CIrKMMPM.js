import{O as o,w as r}from"./index-DqkXPhuf.js";import{a as s}from"./index-D515mFra.js";import"./preload-helper-C1FmrZbK.js";import"./iframe-DPoSv9Md.js";function a(e){const t={p:"p",...o(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{title:"Getting Started/Design resources"}),`
`,r.jsx("style",{children:`
.citruss-doc-container {
  color: var(--citruss-text-main, #ffffff) !important;
  font-family: "Outfit", "Inter", sans-serif !important;
  padding: 20px 0 !important;
  background: transparent !important;
  position: relative;
  overflow: hidden;
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

.citruss-resource-card {
  background-color: rgba(17, 25, 40, 0.45) !important;
  backdrop-filter: blur(20px) saturate(180%) !important;
  -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 
    inset 0 1.5px 0 0 rgba(255, 255, 255, 0.08),
    0 12px 30px rgba(0, 0, 0, 0.3) !important;
  position: relative;
  z-index: 2;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  color: #ffffff !important;
}

[data-theme="light"] .citruss-resource-card {
  background-color: rgba(255, 255, 255, 0.45) !important;
  border: 1px solid rgba(255, 255, 255, 0.4) !important;
  box-shadow: 
    inset 0 1.5px 0 0 rgba(255, 255, 255, 0.85),
    0 12px 30px 0 rgba(15, 23, 42, 0.08) !important;
  color: #0f172a !important;
}

.citruss-resource-card:hover {
  transform: translateY(-2px);
  border-color: rgba(255, 107, 0, 0.4) !important;
  background-color: rgba(17, 25, 40, 0.55) !important;
  box-shadow: 
    inset 0 1.5px 0 0 rgba(255, 255, 255, 0.15),
    0 16px 40px rgba(255, 107, 0, 0.15),
    0 8px 24px rgba(0,0,0,0.4) !important;
}

[data-theme="light"] .citruss-resource-card:hover {
  background-color: rgba(255, 255, 255, 0.65) !important;
  border-color: rgba(255, 107, 0, 0.55) !important;
  box-shadow: 
    inset 0 1.5px 0 0 rgba(255, 255, 255, 0.95),
    0 15px 35px 0 rgba(255, 107, 0, 0.15),
    0 8px 24px 0 rgba(15, 23, 42, 0.08) !important;
}

.resource-info {
  flex: 1;
}

.resource-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 6px 0;
  color: #ffffff;
}

[data-theme="light"] .resource-title {
  color: #0f172a !important;
}

.resource-desc {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.65) !important;
  margin: 0;
  line-height: 1.5;
}

[data-theme="light"] .resource-desc {
  color: rgba(15, 23, 42, 0.75) !important;
}

.resource-btn,
.sbdocs a.resource-btn,
.sbdocs .resource-btn {
  display: inline-flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-size: 0.9rem;
  font-weight: 700;
  color: #ffffff !important;
  text-decoration: none !important;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(255, 107, 0, 0.85), rgba(255, 159, 67, 0.85)) !important;
  backdrop-filter: blur(10px) !important;
  -webkit-backdrop-filter: blur(10px) !important;
  border: 1px solid rgba(255, 159, 67, 0.5) !important;
  box-shadow: 
    inset 0 1px 0 0 rgba(255, 255, 255, 0.35),
    0 4px 12px 0 rgba(255, 107, 0, 0.25) !important;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  white-space: nowrap;
  margin-left: 20px;
  position: relative;
  z-index: 2;
}

[data-theme="light"] .resource-btn,
[data-theme="light"] .sbdocs a.resource-btn {
  background: linear-gradient(135deg, rgba(255, 107, 0, 0.9), rgba(255, 159, 67, 0.9)) !important;
  color: #ffffff !important;
  border: 1px solid rgba(255, 107, 0, 0.4) !important;
}

.resource-btn:hover,
.sbdocs a.resource-btn:hover {
  color: #ffffff !important;
  transform: translateY(-2px);
  background: linear-gradient(135deg, rgba(255, 107, 0, 0.95), rgba(255, 159, 67, 0.95)) !important;
  box-shadow: 
    inset 0 1px 0 0 rgba(255, 255, 255, 0.45),
    0 8px 20px 0 rgba(255, 107, 0, 0.35) !important;
}

.resource-btn:active,
.sbdocs a.resource-btn:active {
  transform: translateY(0) scale(0.96);
}
`}),`
`,r.jsxs("div",{className:"citruss-doc-container",children:[r.jsx("div",{className:"citruss-tech-dots"}),r.jsx("h1",{children:"Design Resources"}),r.jsx("div",{style:{fontSize:"1.1rem",color:"rgba(255, 255, 255, 0.8)",marginBottom:"32px",position:"relative",zIndex:"2"},children:r.jsx(t.p,{children:"Access design source files, palette libraries, and styling tokens to accelerate your layout designs and prototypes."})}),r.jsxs("div",{className:"citruss-resource-card",children:[r.jsxs("div",{className:"resource-info",children:[r.jsx("h3",{className:"resource-title",children:"Figma UI Kit & Component Library"}),r.jsx("div",{className:"resource-desc",children:"Duplicate the comprehensive Figma file containing all frosted glass layers, cards, inputs, buttons, and layouts."})]}),r.jsx("a",{href:"#",className:"resource-btn",children:"Get Figma File"})]}),r.jsxs("div",{className:"citruss-resource-card",children:[r.jsxs("div",{className:"resource-info",children:[r.jsx("h3",{className:"resource-title",children:"CitruSS Style Tokens (JSON / SCSS)"}),r.jsx("div",{className:"resource-desc",children:"Raw design token definitions including HSL color coordinates, border radii sizes, and backdrop blur variables."})]}),r.jsx("a",{href:"#",className:"resource-btn",children:"Explore Tokens"})]}),r.jsxs("div",{className:"citruss-resource-card",children:[r.jsxs("div",{className:"resource-info",children:[r.jsx("h3",{className:"resource-title",children:"Mesh Gradient Vector Pack"}),r.jsx("div",{className:"resource-desc",children:"A collection of custom vector assets and radial CSS settings configured for dark mode and soft pastel themes."})]}),r.jsx("a",{href:"#",className:"resource-btn",children:"Download Asset Pack"})]})]})]})}function l(e={}){const{wrapper:t}={...o(),...e.components};return t?r.jsx(t,{...e,children:r.jsx(a,{...e})}):a(e)}export{l as default};
