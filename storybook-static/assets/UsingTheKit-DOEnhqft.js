import{O as a,w as s}from"./index-BE8O6Mn_.js";import{a as i}from"./index-DGdFm7sy.js";import"./preload-helper-C1FmrZbK.js";import"./iframe-CgkO_K3A.js";function e(t){const r={p:"p",...a(),...t.components};return s.jsxs(s.Fragment,{children:[s.jsx(i,{title:"Getting Started/Using the Kit"}),`
`,s.jsx("style",{children:`
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

.citruss-code-card {
  background-color: rgba(17, 25, 40, 0.45) !important;
  backdrop-filter: blur(20px) saturate(180%) !important;
  -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  border-radius: 20px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 
    inset 0 1.5px 0 0 rgba(255, 255, 255, 0.08),
    0 12px 36px rgba(0,0,0,0.4) !important;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
}

[data-theme="light"] .citruss-code-card {
  background-color: rgba(255, 255, 255, 0.45) !important;
  border: 1px solid rgba(255, 255, 255, 0.4) !important;
  box-shadow: 
    inset 0 1.5px 0 0 rgba(255, 255, 255, 0.85),
    0 12px 30px 0 rgba(15, 23, 42, 0.08) !important;
}

.citruss-code-card:hover {
  border-color: rgba(255, 107, 0, 0.4) !important;
  background-color: rgba(17, 25, 40, 0.55) !important;
}

[data-theme="light"] .citruss-code-card:hover {
  border-color: rgba(255, 107, 0, 0.55) !important;
  background-color: rgba(255, 255, 255, 0.55) !important;
}

code {
  font-family: 'Fira Code', 'Courier New', monospace !important;
  font-size: 0.9rem !important;
}

.keyword { color: #f43f5e; }
.string { color: #10b981; }
.comment { color: #6b7280; font-style: italic; }
.function { color: #3b82f6; }
`}),`
`,s.jsxs("div",{className:"citruss-doc-container",children:[s.jsx("div",{className:"citruss-tech-dots"}),s.jsx("h1",{children:"Using the Kit"}),s.jsx("div",{style:{fontSize:"1.1rem",color:"rgba(255, 255, 255, 0.8)",marginBottom:"32px",position:"relative",zIndex:"2"},children:s.jsx(r.p,{children:"Learn how to import the design system tokens, styles, and initialize our dynamic interactive components."})}),s.jsx("h2",{children:"1. Importing SCSS/CSS"}),s.jsx("p",{children:"To load the frosted glass styles and fruit-themed color palettes, import the entry stylesheet at the root of your application:"}),s.jsx("div",{className:"citruss-code-card",children:s.jsx("pre",{children:s.jsx("code",{children:s.jsxs(r.p,{children:[s.jsx("span",{className:"comment",children:"// Import pre-compiled CSS"}),s.jsx("br",{}),`
`,s.jsx("span",{className:"keyword",children:"import"})," ",s.jsx("span",{className:"string",children:"'citruss-ui/dist/citruss.css'"}),";",s.jsx("br",{}),s.jsx("br",{}),`
`,s.jsx("span",{className:"comment",children:"// Or compile directly using SCSS sources"}),s.jsx("br",{}),`
`,s.jsx("span",{className:"keyword",children:"@import"})," ",s.jsx("span",{className:"string",children:"'citruss-ui/src/citruss.scss'"}),";"]})})})}),s.jsx("h2",{children:"2. Activating the JS Component Engine"}),s.jsx("p",{children:"Some of CitruSS UI's premium components—such as Toasts, Modals, Drawers, and Carousels—feature dynamic transitions and client-side interactions. Initialize the JS engine globally:"}),s.jsx("div",{className:"citruss-code-card",children:s.jsx("pre",{children:s.jsx("code",{children:s.jsxs(r.p,{children:[s.jsx("span",{className:"keyword",children:"import"})," ",s.jsx("span",{className:"function",children:"CitruSS"})," ",s.jsx("span",{className:"keyword",children:"from"})," ",s.jsx("span",{className:"string",children:"'citruss-ui'"}),";",s.jsx("br",{}),s.jsx("br",{}),`
`,s.jsx("span",{className:"comment",children:"// Initialize all interactive components on the page"}),s.jsx("br",{}),`
`,s.jsx("span",{className:"function",children:"CitruSS"}),".",s.jsx("span",{className:"function",children:"init"}),"();"]})})})}),s.jsx("h2",{children:"3. Basic HTML Structure"}),s.jsx("p",{children:"Wrap your cards or layouts with standard CitruSS utility classes to instantly apply frosted reflections:"}),s.jsx("div",{className:"citruss-code-card",children:s.jsx("pre",{children:s.jsx("code",{children:s.jsxs(r.p,{children:["<",s.jsx("span",{className:"keyword",children:"div"})," className=",s.jsx("span",{className:"string",children:'"citruss-card glass-premium"'}),">",s.jsx("br",{}),`
  <`,s.jsx("span",{className:"keyword",children:"h3"}),">Glassmorphic Title</",s.jsx("span",{className:"keyword",children:"h3"}),">",s.jsx("br",{}),`
  <`,s.jsx("span",{className:"keyword",children:"p"}),">Beautiful backdrop-filter effects are applied seamlessly.</",s.jsx("span",{className:"keyword",children:"p"}),">",s.jsx("br",{}),`
</`,s.jsx("span",{className:"keyword",children:"div"}),">"]})})})})]})]})}function l(t={}){const{wrapper:r}={...a(),...t.components};return r?s.jsx(r,{...t,children:s.jsx(e,{...t})}):e(t)}export{l as default};
