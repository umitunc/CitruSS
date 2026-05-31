import { useEffect } from 'storybook/preview-api';
import { bindGlobalNavigation } from './dashboard/interactions.js';
import { renderAdminPanelDashboard } from './dashboard/admin-dashboard.js';
import { renderAnalyticsDashboard } from './dashboard/analytics-dashboard.js';
import { renderECommerceStorefront } from './dashboard/ecommerce-dashboard.js';
import { renderKanbanProjectManagement } from './dashboard/kanban-dashboard.js';
import { renderCloudExplorer } from './dashboard/explorer-dashboard.js';
import { renderUserSettings } from './dashboard/settings-dashboard.js';
import { renderTabbedSettings } from './dashboard/tabbed-settings-dashboard.js';
import { renderLoginPage } from './dashboard/login-page.js';
import { renderRegisterPage } from './dashboard/register-page.js';

export default {
  title: 'Showcase/Pro Dashboard',
  parameters: {
    layout: 'fullscreen',
  },
};

// Bind navigation click event listeners once globally
bindGlobalNavigation();

export const AdminPanelDashboard = () => renderAdminPanelDashboard(useEffect);

export const AnalyticsDashboard = () => renderAnalyticsDashboard(useEffect);

export const ECommerceStorefront = () => renderECommerceStorefront(useEffect);

export const KanbanProjectManagement = () => renderKanbanProjectManagement(useEffect);

export const CloudExplorer = () => renderCloudExplorer(useEffect);

export const UserSettings = () => renderUserSettings(useEffect);

export const TabbedSettings = () => renderTabbedSettings(useEffect);

export const LoginPage = () => renderLoginPage(useEffect);

export const RegisterPage = () => renderRegisterPage(useEffect);
