import { useEffect } from '@storybook/preview-api';

export default {
  title: 'Navigation/Treeview',
};

export const TreeviewShowcase = () => {
  useEffect(() => {
    document.querySelectorAll('.citruss-treeview .tree-node').forEach(node => {
      node.onclick = () => {
        const siblingList = node.nextElementSibling;
        const toggleIcon = node.querySelector('.node-toggle');
        if (siblingList && siblingList.tagName === 'UL') {
          const isCollapsed = siblingList.style.display === 'none';
          siblingList.style.display = isCollapsed ? 'flex' : 'none';
          if (toggleIcon) {
            toggleIcon.classList.toggle('expanded', isCollapsed);
          }
        }
      };
    });
  }, []);

  return `
    <div style="padding: 30px; max-width: 450px;">
      <h3 style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 800; margin-bottom: 20px; font-size: 1.5rem;">
        Treeview Component
      </h3>
      
      <div class="citruss-treeview">
        
        <!-- Folder Node -->
        <div class="tree-node">
          <span class="node-toggle expanded">▶</span>
          <span class="node-icon">📁</span>
          <span>src</span>
        </div>
        
        <!-- Nested List -->
        <ul>
          
          <div class="tree-node">
            <span class="node-toggle expanded">▶</span>
            <span class="node-icon">📁</span>
            <span>components</span>
          </div>
          
          <ul>
            <li class="tree-node">
              <span class="node-icon" style="color:var(--citruss-lime);">📄</span>
              <span>_accordion.scss</span>
            </li>
            <li class="tree-node">
              <span class="node-icon" style="color:var(--citruss-lime);">📄</span>
              <span>_buttons.scss</span>
            </li>
            <li class="tree-node">
              <span class="node-icon" style="color:var(--citruss-lime);">📄</span>
              <span>_sidebar.scss</span>
            </li>
          </ul>

          <div class="tree-node">
            <span class="node-toggle">▶</span>
            <span class="node-icon">📁</span>
            <span>js</span>
          </div>
          
          <ul style="display: none;">
            <li class="tree-node">
              <span class="node-icon" style="color:#38bdf8;">📄</span>
              <span>index.js</span>
            </li>
          </ul>

        </ul>

      </div>
    </div>
  `;
};
