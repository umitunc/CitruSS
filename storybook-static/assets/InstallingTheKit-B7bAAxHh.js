import{O as i,w as t}from"./index-Dt8ME-QP.js";import{a}from"./index-BTANtrXd.js";import"./preload-helper-C1FmrZbK.js";import"./iframe-hSpA13Iw.js";function s(e){const r={p:"p",...i(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{title:"Getting Started/Installing the Kit"}),`
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

.citruss-terminal-card {
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

[data-theme="light"] .citruss-terminal-card {
  background-color: rgba(255, 255, 255, 0.45) !important;
  border: 1px solid rgba(255, 255, 255, 0.4) !important;
  box-shadow: 
    inset 0 1.5px 0 0 rgba(255, 255, 255, 0.85),
    0 12px 30px 0 rgba(15, 23, 42, 0.08) !important;
}

.citruss-terminal-card:hover {
  border-color: rgba(255, 107, 0, 0.4) !important;
  background-color: rgba(17, 25, 40, 0.55) !important;
}

[data-theme="light"] .citruss-terminal-card:hover {
  border-color: rgba(255, 107, 0, 0.55) !important;
  background-color: rgba(255, 255, 255, 0.55) !important;
}

.citruss-terminal-hdr {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  padding-bottom: 10px;
}

[data-theme="light"] .citruss-terminal-hdr {
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
}

.citruss-term-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.term-red { background: #ef4444; }
.term-yellow { background: #f59e0b; }
.term-green { background: #10b981; }

.citruss-terminal-title {
  margin-left: 8px;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.45);
  font-family: 'Outfit', sans-serif;
}

[data-theme="light"] .citruss-terminal-title {
  color: rgba(15, 23, 42, 0.5) !important;
}

pre {
  background: transparent !important;
  margin: 0 !important;
  padding: 0 !important;
}

code {
  font-family: 'Fira Code', 'Courier New', monospace !important;
  color: #a3e635 !important;
  font-size: 0.95rem !important;
}

[data-theme="light"] code {
  color: #334155 !important; /* Neutral dark slate fallback for light mode to allow nested styling to work */
}

.code-cmd {
  color: #ff6b00 !important;
}

.code-pkg {
  color: #ffffff !important;
}

[data-theme="light"] .code-pkg {
  color: #0f172a !important;
}

.code-comment {
  color: #64748b !important;
}
`}),`
`,t.jsxs("div",{className:"citruss-doc-container",children:[t.jsx("div",{className:"citruss-tech-dots"}),t.jsx("h1",{children:"Installing the Kit"}),t.jsx("div",{style:{fontSize:"1.1rem",color:"rgba(255, 255, 255, 0.8)",marginBottom:"32px",position:"relative",zIndex:"2"},children:t.jsx(r.p,{children:"Get up and running with CitruSS UI in seconds. We support multiple installation vectors to suit any project setup."})}),t.jsx("h2",{children:"1. Package Manager (Recommended)"}),t.jsx("p",{children:"Install the CitruSS package to import components into your build pipelines (Webpack, Vite, Rollup, etc.)."}),t.jsxs("div",{className:"citruss-terminal-card",children:[t.jsxs("div",{className:"citruss-terminal-hdr",children:[t.jsx("div",{className:"citruss-term-dot term-red"}),t.jsx("div",{className:"citruss-term-dot term-yellow"}),t.jsx("div",{className:"citruss-term-dot term-green"}),t.jsx("span",{className:"citruss-terminal-title",children:"bash"})]}),t.jsx("pre",{children:t.jsx("code",{children:t.jsxs(r.p,{children:[t.jsx("span",{className:"code-cmd",children:"npm"})," install ",t.jsx("span",{className:"code-pkg",children:"citruss-ui"})]})})})]}),t.jsx("p",{children:"Alternatively, if you use Yarn or PNPM:"}),t.jsxs("div",{className:"citruss-terminal-card",children:[t.jsxs("div",{className:"citruss-terminal-hdr",children:[t.jsx("div",{className:"citruss-term-dot term-red"}),t.jsx("div",{className:"citruss-term-dot term-yellow"}),t.jsx("div",{className:"citruss-term-dot term-green"}),t.jsx("span",{className:"citruss-terminal-title",children:"bash"})]}),t.jsx("pre",{children:t.jsx("code",{children:t.jsxs(r.p,{children:[t.jsx("span",{className:"code-cmd",children:"yarn"})," add ",t.jsx("span",{className:"code-pkg",children:"citruss-ui"}),t.jsx("br",{}),`
`,t.jsx("span",{className:"code-comment",children:"# OR"}),t.jsx("br",{}),`
`,t.jsx("span",{className:"code-cmd",children:"pnpm"})," add ",t.jsx("span",{className:"code-pkg",children:"citruss-ui"})]})})})]}),t.jsx("h2",{children:"2. Direct Integration & CDN"}),t.jsx("p",{children:"For quick prototypes or lightweight server-rendered setups, include the compiled distribution assets directly in your HTML header:"}),t.jsxs("div",{className:"citruss-terminal-card",children:[t.jsxs("div",{className:"citruss-terminal-hdr",children:[t.jsx("div",{className:"citruss-term-dot term-red"}),t.jsx("div",{className:"citruss-term-dot term-yellow"}),t.jsx("div",{className:"citruss-term-dot term-green"}),t.jsx("span",{className:"citruss-terminal-title",children:"index.html"})]}),t.jsx("pre",{children:t.jsx("code",{children:t.jsxs(r.p,{children:["<",t.jsx("span",{className:"code-cmd",children:"link"}),' rel="stylesheet" href="https://cdn.jsdelivr.net/npm/citruss-ui/dist/citruss.css" />',t.jsx("br",{}),`
<`,t.jsx("span",{className:"code-cmd",children:"script"}),' src="https://cdn.jsdelivr.net/npm/citruss-ui/dist/citruss.js"></',t.jsx("span",{className:"code-cmd",children:"script"}),">"]})})})]})]})]})}function l(e={}){const{wrapper:r}={...i(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(s,{...e})}):s(e)}export{l as default};
