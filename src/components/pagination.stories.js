export default {
  title: 'Navigation/Pagination',
};

export const PaginationShowcase = () => {
  return `
    <div style="padding: 30px;">
      <h3 style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 800; margin-bottom: 20px; font-size: 1.5rem;">
        Pagination (Sayfalama)
      </h3>
      
      <div style="display: flex; flex-direction: column; gap: 24px;">
        
        <div>
          <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 12px;">Klasik Sayfalama Kontrolleri:</h4>
          <div class="citruss-pagination">
            <a href="#" class="page-link disabled">◀ Geri</a>
            <a href="#" class="page-link active">1</a>
            <a href="#" class="page-link">2</a>
            <a href="#" class="page-link">3</a>
            <span class="page-dots">...</span>
            <a href="#" class="page-link">12</a>
            <a href="#" class="page-link">İleri ▶</a>
          </div>
        </div>

      </div>
    </div>
  `;
};
