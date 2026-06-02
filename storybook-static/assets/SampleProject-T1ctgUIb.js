import{O as n,w as s}from"./index-Dt8ME-QP.js";import{a as e}from"./index-BTANtrXd.js";import"./preload-helper-C1FmrZbK.js";import"./iframe-hSpA13Iw.js";function r(a){const t={p:"p",...n(),...a.components};return s.jsxs(s.Fragment,{children:[s.jsx(e,{title:"Getting Started/Sample project"}),`
`,s.jsx("style",{children:`
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

.citruss-sample-card {
  background-color: rgba(17, 25, 40, 0.45) !important;
  backdrop-filter: blur(20px) saturate(180%) !important;
  -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 
    inset 0 1.5px 0 0 rgba(255, 255, 255, 0.08),
    0 12px 36px rgba(0,0,0,0.4) !important;
  position: relative;
  z-index: 2;
}

[data-theme="light"] .citruss-sample-card {
  background-color: rgba(255, 255, 255, 0.45) !important;
  border: 1px solid rgba(255, 255, 255, 0.4) !important;
  box-shadow: 
    inset 0 1.5px 0 0 rgba(255, 255, 255, 0.85),
    0 12px 30px 0 rgba(15, 23, 42, 0.08) !important;
}

pre {
  background: transparent !important;
  margin: 0 !important;
  padding: 0 !important;
}

code {
  font-family: 'Fira Code', 'Courier New', monospace !important;
  font-size: 0.9rem !important;
  color: #a3e635 !important;
}

[data-theme="light"] code {
  color: #334155 !important; /* Neutral dark slate fallback for light mode to allow nested styling to work */
}

.kw { color: #f43f5e !important; }
.str { color: #10b981 !important; }
.tag { color: #3b82f6 !important; }
.attr { color: #a855f7 !important; }
.comment { color: #6b7280 !important; font-style: italic; }
`}),`
`,s.jsxs("div",{className:"citruss-doc-container",children:[s.jsx("div",{className:"citruss-tech-dots"}),s.jsx("h1",{children:"Sample Project"}),s.jsx("div",{style:{fontSize:"1.1rem",color:"rgba(255, 255, 255, 0.8)",marginBottom:"32px",position:"relative",zIndex:"2"},children:s.jsx(t.p,{children:"Let's build a beautiful, high-fidelity landing card prototype using CitruSS UI in single-file HTML format."})}),s.jsx("h2",{children:"Complete index.html Blueprint"}),s.jsxs("p",{children:["Copy and save the code template below as ",s.jsx("code",{children:"index.html"})," to witness the premium frosted glass and vibrant gradients immediately:"]}),s.jsx("div",{className:"citruss-sample-card",children:s.jsx("pre",{children:s.jsx("code",{children:s.jsxs(t.p,{children:["<!",s.jsx("span",{className:"kw",children:"DOCTYPE"})," ",s.jsx("span",{className:"attr",children:"html"}),">",s.jsx("br",{}),`
<`,s.jsx("span",{className:"tag",children:"html"})," ",s.jsx("span",{className:"attr",children:"lang"}),"=",s.jsx("span",{className:"str",children:'"en"'}),">",s.jsx("br",{}),`
<`,s.jsx("span",{className:"tag",children:"head"}),">",s.jsx("br",{}),`
  <`,s.jsx("span",{className:"tag",children:"meta"})," ",s.jsx("span",{className:"attr",children:"charset"}),"=",s.jsx("span",{className:"str",children:'"UTF-8"'})," />",s.jsx("br",{}),`
  <`,s.jsx("span",{className:"tag",children:"meta"})," ",s.jsx("span",{className:"attr",children:"name"}),"=",s.jsx("span",{className:"str",children:'"viewport"'})," ",s.jsx("span",{className:"attr",children:"content"}),"=",s.jsx("span",{className:"str",children:'"width=device-width, initial-scale=1.0"'})," />",s.jsx("br",{}),`
  <`,s.jsx("span",{className:"tag",children:"title"}),">CitruSS Quick Prototype</",s.jsx("span",{className:"tag",children:"title"}),">",s.jsx("br",{}),`
  `,s.jsx("span",{className:"comment",children:"<!-- 1. Include CitruSS core CSS styles -->"}),s.jsx("br",{}),`
  <`,s.jsx("span",{className:"tag",children:"link"})," ",s.jsx("span",{className:"attr",children:"rel"}),"=",s.jsx("span",{className:"str",children:'"stylesheet"'})," ",s.jsx("span",{className:"attr",children:"href"}),"=",s.jsx("span",{className:"str",children:'"https://cdn.jsdelivr.net/npm/citruss-ui/dist/citruss.css"'})," />",s.jsx("br",{}),`
  <`,s.jsx("span",{className:"tag",children:"style"}),">",s.jsx("br",{}),`
    body {`,s.jsx("br",{}),`
      background: #060913;`,s.jsx("br",{}),`
      background-image: radial-gradient(at 50% 50%, rgba(255, 107, 0, 0.15), transparent 60%);`,s.jsx("br",{}),`
      min-height: 100vh;`,s.jsx("br",{}),`
      display: flex;`,s.jsx("br",{}),`
      align-items: center;`,s.jsx("br",{}),`
      justify-content: center;`,s.jsx("br",{}),`
      margin: 0;`,s.jsx("br",{}),`
    }`,s.jsx("br",{}),`
  </`,s.jsx("span",{className:"tag",children:"style"}),">",s.jsx("br",{}),`
</`,s.jsx("span",{className:"tag",children:"head"}),">",s.jsx("br",{}),`
<`,s.jsx("span",{className:"tag",children:"body"}),">",s.jsx("br",{}),s.jsx("br",{}),`
  `,s.jsx("span",{className:"comment",children:"<!-- 2. Draw a Glass Card -->"}),s.jsx("br",{}),`
  <`,s.jsx("span",{className:"tag",children:"div"})," ",s.jsx("span",{className:"attr",children:"class"}),"=",s.jsx("span",{className:"str",children:'"citruss-card glass-premium"'})," ",s.jsx("span",{className:"attr",children:"style"}),"=",s.jsx("span",{className:"str",children:'"max-width: 400px;"'}),">",s.jsx("br",{}),`
    <`,s.jsx("span",{className:"tag",children:"div"})," ",s.jsx("span",{className:"attr",children:"class"}),"=",s.jsx("span",{className:"str",children:'"card-header"'}),">",s.jsx("br",{}),`
      <`,s.jsx("span",{className:"tag",children:"h3"})," ",s.jsx("span",{className:"attr",children:"style"}),"=",s.jsx("span",{className:"str",children:'"color: var(--citruss-orange);"'}),">CitruSS Active</",s.jsx("span",{className:"tag",children:"h3"}),">",s.jsx("br",{}),`
    </`,s.jsx("span",{className:"tag",children:"div"}),">",s.jsx("br",{}),`
    <`,s.jsx("span",{className:"tag",children:"div"})," ",s.jsx("span",{className:"attr",children:"class"}),"=",s.jsx("span",{className:"str",children:'"card-body"'}),">",s.jsx("br",{}),`
      <`,s.jsx("span",{className:"tag",children:"p"}),">Your framework-agnostic frosted UI sandbox is successfully running!</",s.jsx("span",{className:"tag",children:"p"}),">",s.jsx("br",{}),`
      <`,s.jsx("span",{className:"tag",children:"button"})," ",s.jsx("span",{className:"attr",children:"class"}),"=",s.jsx("span",{className:"str",children:'"citruss-btn btn-primary"'}),">Launch App</",s.jsx("span",{className:"tag",children:"button"}),">",s.jsx("br",{}),`
    </`,s.jsx("span",{className:"tag",children:"div"}),">",s.jsx("br",{}),`
  </`,s.jsx("span",{className:"tag",children:"div"}),">",s.jsx("br",{}),s.jsx("br",{}),`
</`,s.jsx("span",{className:"tag",children:"body"}),">",s.jsx("br",{}),`
</`,s.jsx("span",{className:"tag",children:"html"}),">"]})})})})]})]})}function d(a={}){const{wrapper:t}={...n(),...a.components};return t?s.jsx(t,{...a,children:s.jsx(r,{...a})}):r(a)}export{d as default};
