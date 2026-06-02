import{O as n,w as s}from"./index-DqkXPhuf.js";import{a as t}from"./index-D515mFra.js";import"./preload-helper-C1FmrZbK.js";import"./iframe-DPoSv9Md.js";function a(r){const e={p:"p",strong:"strong",...n(),...r.components};return s.jsxs(s.Fragment,{children:[s.jsx(t,{title:"Getting Started/App Screen Layout"}),`
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
.tag { color: #e11d48; }
.attr { color: #d97706; }
`}),`
`,s.jsxs("div",{className:"citruss-doc-container",children:[s.jsx("div",{className:"citruss-tech-dots"}),s.jsx("h1",{children:"App Screen Layout (Optional)"}),s.jsx("div",{style:{fontSize:"1.1rem",color:"rgba(255, 255, 255, 0.8)",marginBottom:"32px",position:"relative",zIndex:"2"},children:s.jsx(e.p,{children:"Learn how to build window-optimized, viewport-bound application layouts with fixed headers/footers and independent content scrolling."})}),s.jsx("h2",{children:"Introduction & Best Practices"}),s.jsx("p",{children:s.jsxs(e.p,{children:[`When building desktop applications (e.g., using Electron.js) or web dashboards, a common design challenge is managing scroll behavior.
Instead of allowing the entire window or document body to scroll, modern UX patterns favor a `,s.jsx(e.strong,{children:"fixed viewport screen structure"}),":"]})}),s.jsxs("ul",{children:[s.jsxs("li",{children:["The main application fits exactly 100% of the screen height (",s.jsx("code",{children:"100vh"}),")."]}),s.jsxs("li",{children:["The ",s.jsx(e.strong,{children:"Header"})," and ",s.jsx(e.strong,{children:"Footer"})," remain static, locked in place."]}),s.jsxs("li",{children:["The ",s.jsx(e.strong,{children:"Content"})," area expands to fill the remaining screen space and handles its own internal overflow."]})]}),s.jsx("p",{children:s.jsxs(e.p,{children:["CitruSS UI provides ",s.jsx("code",{children:".citruss-app-layout"})," as an ",s.jsx(e.strong,{children:"optional, opt-in"})," structural pattern. You are not forced to use it, but it provides a plug-and-play setup for applications that demand this specific layout."]})}),s.jsx("h2",{children:"HTML Markup Structure"}),s.jsx("p",{children:"Apply the following classes to establish the layout:"}),s.jsx("div",{className:"citruss-code-card",children:s.jsx("pre",{children:s.jsxs("code",{children:[s.jsxs(e.p,{children:["<",s.jsx("span",{className:"keyword",children:"div"})," ",s.jsx("span",{className:"attr",children:"class"}),"=",s.jsx("span",{className:"string",children:'"citruss-app-layout"'}),">",s.jsx("br",{}),`
  `,s.jsx("span",{className:"comment",children:"<!-- Fixed Header -->"}),s.jsx("br",{}),`
  <`,s.jsx("span",{className:"keyword",children:"header"})," ",s.jsx("span",{className:"attr",children:"class"}),"=",s.jsx("span",{className:"string",children:'"layout-header"'}),">",s.jsx("br",{}),`
    <`,s.jsx("span",{className:"keyword",children:"div"})," ",s.jsx("span",{className:"attr",children:"class"}),"=",s.jsx("span",{className:"string",children:'"citruss-navbar"'}),">...</",s.jsx("span",{className:"keyword",children:"div"}),">",s.jsx("br",{}),`
  </`,s.jsx("span",{className:"keyword",children:"header"}),">",s.jsx("br",{}),s.jsx("br",{})]}),s.jsxs(e.p,{children:["  ",s.jsx("span",{className:"comment",children:"<!-- Layout Content Wrapper -->"}),s.jsx("br",{}),`
  <`,s.jsx("span",{className:"keyword",children:"div"})," ",s.jsx("span",{className:"attr",children:"class"}),"=",s.jsx("span",{className:"string",children:'"layout-content-wrapper"'}),">",s.jsx("br",{}),`
    `,s.jsx("span",{className:"comment",children:"<!-- Optional Sidebar -->"}),s.jsx("br",{}),`
    <`,s.jsx("span",{className:"keyword",children:"aside"})," ",s.jsx("span",{className:"attr",children:"class"}),"=",s.jsx("span",{className:"string",children:'"layout-sidebar"'}),">...</",s.jsx("span",{className:"keyword",children:"aside"}),">",s.jsx("br",{}),s.jsx("br",{})]}),s.jsxs(e.p,{children:["    ",s.jsx("span",{className:"comment",children:"<!-- Scrollable Content Area -->"}),s.jsx("br",{}),`
    <`,s.jsx("span",{className:"keyword",children:"main"})," ",s.jsx("span",{className:"attr",children:"class"}),"=",s.jsx("span",{className:"string",children:'"layout-content"'}),">",s.jsx("br",{}),`
      <`,s.jsx("span",{className:"keyword",children:"div"})," ",s.jsx("span",{className:"attr",children:"class"}),"=",s.jsx("span",{className:"string",children:'"citruss-card"'}),">...</",s.jsx("span",{className:"keyword",children:"div"}),">",s.jsx("br",{}),`
    </`,s.jsx("span",{className:"keyword",children:"main"}),">",s.jsx("br",{}),`
  </`,s.jsx("span",{className:"keyword",children:"div"}),">",s.jsx("br",{}),s.jsx("br",{})]}),s.jsxs(e.p,{children:["  ",s.jsx("span",{className:"comment",children:"<!-- Fixed Footer -->"}),s.jsx("br",{}),`
  <`,s.jsx("span",{className:"keyword",children:"footer"})," ",s.jsx("span",{className:"attr",children:"class"}),"=",s.jsx("span",{className:"string",children:'"layout-footer"'}),">",s.jsx("br",{}),`
    <`,s.jsx("span",{className:"keyword",children:"div"})," ",s.jsx("span",{className:"attr",children:"class"}),"=",s.jsx("span",{className:"string",children:'"citruss-footer-content"'}),">...</",s.jsx("span",{className:"keyword",children:"div"}),">",s.jsx("br",{}),`
  </`,s.jsx("span",{className:"keyword",children:"footer"}),">",s.jsx("br",{}),`
</`,s.jsx("span",{className:"keyword",children:"div"}),">"]})]})})}),s.jsx("h2",{children:"Key Features"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Zero Body Scroll:"})," Disables viewport scrolling to provide a native application feel."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Independent Sub-Scrolling:"})," Sidebars and Main Content areas scroll independently, keeping navigation accessible at all times."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Nested Flex Box:"})," Uses optimized flexbox rules with ",s.jsx("code",{children:"min-height: 0"})," to bypass browser calculation bugs."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Glassmorphic Scrollbars:"})," Content elements automatically inherit modern, semi-transparent scrollbar designs that adapt dynamically to dark and light modes."]})]})]})]})}function d(r={}){const{wrapper:e}={...n(),...r.components};return e?s.jsx(e,{...r,children:s.jsx(a,{...r})}):a(r)}export{d as default};
