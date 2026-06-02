import{O as i,w as t}from"./index-BE8O6Mn_.js";import{a as s}from"./index-DGdFm7sy.js";import"./preload-helper-C1FmrZbK.js";import"./iframe-CgkO_K3A.js";function a(e){const r={p:"p",...i(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"Getting Started/Contribution Guidelines"}),`
`,t.jsx("style",{children:`
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

.citruss-step-list {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  z-index: 2;
}

.step-card {
  background-color: rgba(17, 25, 40, 0.45) !important;
  backdrop-filter: blur(20px) saturate(180%) !important;
  -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  border-radius: 12px;
  padding: 20px 24px;
  display: flex;
  gap: 16px;
  align-items: flex-start;
  box-shadow: 
    inset 0 1.5px 0 0 rgba(255, 255, 255, 0.08),
    0 12px 30px rgba(0, 0, 0, 0.3) !important;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

[data-theme="light"] .step-card {
  background-color: rgba(255, 255, 255, 0.45) !important;
  border: 1px solid rgba(255, 255, 255, 0.4) !important;
  box-shadow: 
    inset 0 1.5px 0 0 rgba(255, 255, 255, 0.85),
    0 12px 30px 0 rgba(15, 23, 42, 0.08) !important;
}

.step-card:hover {
  transform: translateY(-2px);
  border-color: rgba(255, 107, 0, 0.4) !important;
  background-color: rgba(17, 25, 40, 0.55) !important;
  box-shadow: 
    inset 0 1.5px 0 0 rgba(255, 255, 255, 0.15),
    0 16px 40px rgba(255, 107, 0, 0.15),
    0 8px 24px rgba(0,0,0,0.4) !important;
}

[data-theme="light"] .step-card:hover {
  background-color: rgba(255, 255, 255, 0.65) !important;
  border-color: rgba(255, 107, 0, 0.55) !important;
  box-shadow: 
    inset 0 1.5px 0 0 rgba(255, 255, 255, 0.95),
    0 15px 35px 0 rgba(255, 107, 0, 0.15),
    0 8px 24px 0 rgba(15, 23, 42, 0.08) !important;
}

.step-num {
  background: linear-gradient(135deg, #ff6b00 0%, #ff8a00 100%);
  color: #ffffff;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  flex-shrink: 0;
}

.step-content {
  flex: 1;
  text-align: left;
}

.step-title {
  font-weight: 700;
  color: #ffffff !important;
  margin: 0 0 6px 0;
  font-size: 1.1rem;
}

[data-theme="light"] .step-title {
  color: #0f172a !important;
}

.step-desc {
  color: rgba(255, 255, 255, 0.7) !important;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
}

[data-theme="light"] .step-desc {
  color: rgba(15, 23, 42, 0.75) !important;
}
`}),`
`,t.jsxs("div",{className:"citruss-doc-container",children:[t.jsx("div",{className:"citruss-tech-dots"}),t.jsx("h1",{children:"Contribution Guidelines"}),t.jsx("div",{style:{fontSize:"1.1rem",color:"rgba(255, 255, 255, 0.8)",marginBottom:"32px",position:"relative",zIndex:"2"},children:t.jsx(r.p,{children:"We highly appreciate community contributions! Here is how you can help make CitruSS UI even more amazing:"})}),t.jsxs("div",{className:"citruss-step-list",children:[t.jsxs("div",{className:"step-card",children:[t.jsx("div",{className:"step-num",children:"1"}),t.jsxs("div",{className:"step-content",children:[t.jsx("h3",{className:"step-title",children:"Fork & Clone"}),t.jsx("div",{className:"step-desc",children:"Fork the repository on GitHub, then clone your fork locally to begin making additions or fixes."})]})]}),t.jsxs("div",{className:"step-card",children:[t.jsx("div",{className:"step-num",children:"2"}),t.jsxs("div",{className:"step-content",children:[t.jsx("h3",{className:"step-title",children:"Create a branch"}),t.jsxs("div",{className:"step-desc",children:["Always work in a dedicated feature branch named descriptive of your changes (e.g. ",t.jsx("code",{children:"feature/button-glow"}),")."]})]})]}),t.jsxs("div",{className:"step-card",children:[t.jsx("div",{className:"step-num",children:"3"}),t.jsxs("div",{className:"step-content",children:[t.jsx("h3",{className:"step-title",children:"Verify Code Quality"}),t.jsxs("div",{className:"step-desc",children:["Run Stylelint using ",t.jsx("code",{children:"npm run lint:css"})," and ensure that your components look pristine in Storybook."]})]})]}),t.jsxs("div",{className:"step-card",children:[t.jsx("div",{className:"step-num",children:"4"}),t.jsxs("div",{className:"step-content",children:[t.jsx("h3",{className:"step-title",children:"Submit Pull Request"}),t.jsx("div",{className:"step-desc",children:"Push your branch and submit a detailed Pull Request. We will review and merge it promptly!"})]})]})]})]})]})}function l(e={}){const{wrapper:r}={...i(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(a,{...e})}):a(e)}export{l as default};
