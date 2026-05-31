export const getNavbarHTML = (pageTitle) => {
  return `
    <nav class="citruss-navbar">
      <div class="citruss-d-flex citruss-align-items-center citruss-gap-sm">
        <button class="citruss-btn btn-sm" id="toggle-sidebar-mobile" style="display: none; @media(max-width: 768px) { display: flex; }">
          <span class="citruss-icon icon-rounded">menu</span>
        </button>
        <div class="citruss-breadcrumbs">
          <a href="#" class="breadcrumb-item">Console</a>
          <span class="breadcrumb-separator">/</span>
          <a href="#" class="breadcrumb-item active">${pageTitle}</a>
        </div>
      </div>
      
      <div class="citruss-d-flex citruss-align-items-center citruss-gap-md">
        <button class="citruss-btn btn-sm" id="theme-toggle-btn">☀️ Light Mode</button>
        <button class="citruss-btn btn-sm btn-primary" id="btn-deploy-production">
          <span class="citruss-icon icon-rounded icon-sm" style="margin-right: 4px;">rocket_launch</span>
          <span>Deploy Build</span>
        </button>
      </div>
    </nav>
  `;
};
