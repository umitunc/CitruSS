# CitruSS — UI CSS Kit: Implementation Plan
### Glassmorphism Dashboard & Web App (including Electron.js) Architecture

Bu doküman, **Trunçgil Teknoloji** çatısı altında geliştirilmesi planlanan, narenciye tazeliğini ve estetiğini modern dijital arayüzlere taşıyan **CitruSS** CSS UI Kit projesinin kapsamlı kodlama, mimari ve entegrasyon stratejilerini içermektedir. Doküman; hem bağımsız web uygulamaları, hem kurumsal admin panelleri hem de **Electron.js** tabanlı masaüstü yazılımları için optimize edilmiş bir *Glassmorphism (Cam Morfizmi)* tasarım sisteminin hayata geçirilme rehberidir.

---

## 1. Proje Vizyonu ve Tasarım Felsefesi

**CitruSS**, adını ve ruhunu turunçgillerin canlılığından alan, en üst düzey görsel performansı hedefleyen bir arayüz kütüphanesidir. Geleneksel düz (flat) veya materyal tasarımların ötesine geçerek; katmanlı, ışık geçirgenliğine sahip ve derinlik hissi barındıran **Frosted Glass (Buzlu Cam)** efektini standartlaştırır.

### Temel Mimari Prensipler
*   **Hafiflik ve Hız (Zero-Dependency):** Herhangi bir JavaScript kütüphanesine (React, Vue vb.) veya ek tasarım motoruna bağımlı kalmaksızın, sadece ham CSS ve HTML güçleriyle çalışır. Gzip sıkıştırması sonrası CDN boyutu **< 15KB** olarak hedeflenmiştir.
*   **Çalışma Zamanı Dinamikliği (Runtime Flexibility):** Tüm renkler, blur oranları ve kenarlık opaklıkları CSS Custom Properties (Özel Özellikler) ile yönetilir. Bu sayede Light/Dark Mode veya marka renk değişimleri DOM manipülasyonu gerekmeden anlık olarak tetiklenebilir.
*   **Masaüstü (Electron.js) Yerelliği:** Chromium render motorunun donanım ivmeli (GPU Accelerated) katman oluşturma yeteneklerini sonuna kadar kullanarak, masaüstü uygulamalarında kasma veya takılma olmaksızın işletim sistemi seviyesinde şeffaflık hissi sunar.

---

## 2. Teknik Stack ve Derleme Hattı (Build Pipeline)

Projenin derleme, sıkıştırma ve dağıtım süreçleri tamamen modern web standartlarına uygun şekilde otomatize edilecektir:

```
+------------------+      +-------------------+      +--------------------+      +------------------+
|  Sass (SCSS)     | ---> | PostCSS           | ---> | Lightning CSS      | ---> | Dağıtım (CDN)    |
|  Kaynak Kodları  |      | Autoprefixer / v4 |      | Minify & Optimize  |      | NPM / jsDelivr   |
+------------------+      +-------------------+      +--------------------+      +------------------+
```

*   **Sass (SCSS):** `Dart-Sass` kütüphanesi kullanılarak modüler yapılar (`@use`, `@forward`) ile kod tabanı yönetilir.
*   **PostCSS & Autoprefixer:** Yazılan modern CSS kodlarına otomatik olarak `-webkit-backdrop-filter` gibi tarayıcı ve motor uyumluluk ön eklerini ekler.
*   **Lightning CSS:** CSS dosyasını küçültür, kullanılmayan kuralları eler ve renk tanımlarını en optimize formata (örn. hex yerine oklch veya rgba) indirger.

---

## 3. Klasör ve Dosya Yapısı (SCSS Architecture)

Projenin sürdürülebilir, genişletilebilir ve modüler olabilmesi için 7-1 mimari modelinin sadeleştirilmiş bir versiyonu kullanılacaktır:

```
citruss/
├── src/
│   ├── core/
│   │   ├── _reset.scss       # Element sıfırlamaları (Modern Reset / Normalize)
│   │   ├── _variables.scss   # Çekirdek CSS değişkenleri ve renk paleti
│   │   └── _mixins.scss      # Cam efekti, responsive yapılar ve animasyon fonksiyonları
│   ├── components/
│   │   ├── _buttons.scss     # Işıltılı, yarı şeffaf ve cam efektli buton tasarımları
│   │   ├── _cards.scss       # Frosted Glass içerik, istatistik ve metrik kartları
│   │   ├── _sidebar.scss     # Sol navigasyon, dikey menü ve profil alanı bileşenleri
│   │   ├── _inputs.scss      # Form elemanları, odaklanma (focus) ve hata durumları
│   │   └── _dropdown.scss    # Katmanlı, z-index hiyerarşisi yüksek açılır paneller
│   ├── layout/
│   │   ├── _grid.scss        # CSS Grid ve Flexbox tabanlı esnek yerleşim motoru
│   │   └── _dashboard.scss   # Standart Admin Paneli iskelet yerleşimi (Layout Wrapper)
│   └── citruss.scss          # Tüm alt modülleri birleştiren ana giriş kapısı
├── dist/
│   ├── citruss.css           # Geliştirme aşamasında debug edilebilir ham çıktı
│   └── citruss.min.css       # Production için optimize edilmiş ve sıkıştırılmış CDN çıktısı
└── package.json              # Bağımlılıklar, scriptler ve npm yayınlama konfigürasyonu
```

---

## 4. Çekirdek Tasarım Sistemi ve Matematiksel Modelleme

Glassmorphism efektinin estetik başarısı, arka plan geçirgenliği (Alpha kanalı), katman gölgesi (Box Shadow) ve bulanıklık yarıçapının (Blur Radius) matematiksel dengesine dayanır. 

Cam efektinin geçirgenlik fonksiyonu:
$$G(c) = rgba(c_{red}, c_{green}, c_{blue}, \alpha) + \text{blur}(\beta\text{px})$$

*   Burada $\alpha$ (opaklık) değeri **0.03 ile 0.20** arasında tutulmalıdır. Üst üste binen katmanlarda bu oran birikerek kontrastı artırır.
*   $\beta$ (bulanıklık yarıçapı) değeri **10px ile 16px** arasında optimize edilmiştir. 10px altındaki değerler arkadaki objeleri çok net göstererek görsel karmaşaya yol açar; 16px üzerindeki değerler ise GPU render maliyetini artırır.

### Çekirdek Değişken Dosyası (`src/core/_variables.scss`)

```scss
:root {
    /* CitruSS Narenciye Renk Paleti (Şirket Mirası) */
    --citruss-orange: #ff6b00;
    --citruss-tangerine: #ff9f43;
    --citruss-lemon: #feca57;
    --citruss-lime: #1dd1a1;
    
    /* Derin Koyu Mod Arka Planları (Dashboard Çekirdeği) */
    --citruss-bg-main: #0a0c12;
    --citruss-bg-surface: #111420;
    
    /* Glassmorphism Çekirdek Değişkenleri */
    --citruss-glass-bg: rgba(255, 255, 255, 0.03);
    --citruss-glass-border: rgba(255, 255, 255, 0.07);
    --citruss-glass-blur: 14px;
    --citruss-glass-shadow: rgba(0, 0, 0, 0.4);
    
    /* Tipografi ve Yazı Renkleri */
    --citruss-text-main: #f8fafc;
    --citruss-text-muted: #94a3b8;
    --citruss-font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
}

/* Light Mode Alternatifi (Çalışma Zamanında [data-theme="light"] ile tetiklenir) */
[data-theme="light"] {
    --citruss-bg-main: #f4f6fa;
    --citruss-bg-surface: #ffffff;
    --citruss-glass-bg: rgba(0, 0, 0, 0.02);
    --citruss-glass-border: rgba(0, 0, 0, 0.06);
    --citruss-glass-blur: 12px;
    --citruss-glass-shadow: rgba(0, 0, 0, 0.05);
    --citruss-text-main: #0f172a;
    --citruss-text-muted: #64748b;
}
```

---

## 5. Temel Bileşen Tasarımları (Component Specifications)

### A. Ana İçerik Kartı (`src/components/_cards.scss`)

Admin dashboard panellerindeki metrikleri, grafikleri ve listeleri taşıyacak ana elementtir.

```scss
.citruss-card {
    background: var(--citruss-glass-bg);
    border: 1px solid var(--citruss-glass-border);
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 8px 32px 0 var(--citruss-glass-shadow);
    color: var(--citruss-text-main);
    backdrop-filter: blur(var(--citruss-glass-blur));
    -webkit-backdrop-filter: blur(var(--citruss-glass-blur));
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), 
                border-color 0.25s ease, 
                box-shadow 0.25s ease;
    
    /* İçeriklerin cam sınırlarından taşmasını engellemek için */
    overflow: hidden; 
    
    /* Hover durumunda narenciye ışıltısı ve derinlik artışı */
    &:hover {
        transform: translateY(-4px);
        border-color: rgba(255, 159, 67, 0.3); /* Tangerine Işıltısı */
        box-shadow: 0 12px 40px 0 rgba(255, 107, 0, 0.15);
    }
}
```

### B. Narenciye Aksiyon Butonu (`src/components/_buttons.scss`)

Cam efektiyle entegre çalışan, tıklandığında mikro-etkileşim sunan modern buton yapısı.

```scss
.citruss-btn {
    font-family: var(--citruss-font-family);
    font-weight: 600;
    font-size: 0.95rem;
    padding: 12px 24px;
    border-radius: 8px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.2s ease;
    
    &.btn-primary {
        background: linear-gradient(135deg, rgba(255, 107, 0, 0.2), rgba(255, 159, 67, 0.2));
        border: 1px solid rgba(255, 159, 67, 0.4);
        color: #ffffff;
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        
        &:hover {
            background: linear-gradient(135deg, rgba(255, 107, 0, 0.4), rgba(255, 159, 67, 0.4));
            border-color: var(--citruss-tangerine);
            box-shadow: 0 0 20px 0 rgba(255, 107, 0, 0.35);
        }
        
        &:active {
            transform: scale(0.97);
        }
    }
}
```

---

## 6. Electron.js Masaüstü Entegrasyon Stratejisi

Masaüstü uygulamalarında (Chromium üzerinde) donanım hızlandırmalı cam efektlerinin akıcı çalışabilmesi ve işletim sisteminin yerel estetiğiyle (Windows Acrylic/Mica veya macOS Vibrancy) konuşabilmesi için özel bir yapı kurulmalıdır.

### 1. Main Process Yapılandırması (`main.js`)

Electron penceresi oluşturulurken yerel şeffaflık katmanları aktif edilmeli ve işletim sistemi pencere çerçevesi (frameless) kapatılmalıdır:

```javascript
const { app, BrowserWindow } = require('electron');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1280,
        height: 800,
        frame: false,             // Modern üst bar tasarımı için çerçevesiz pencere
        transparent: true,         // Windows/Linux şeffaflık desteği
        vibrancy: 'under-window',  // macOS yerel buzlu cam efekti (Safari tarzı)
        visualEffectState: 'active',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.loadFile('index.html');
}

app.whenReady().then(createWindow);
```

### 2. Sürükleme ve Pencere Kontrolleri (CSS Katmanı)

Çerçevesiz pencerelerde uygulamanın taşınabilmesi ve sürüklenmesi için sol menü veya üst header alanına özel CSS kuralları atanır:

```scss
.citruss-header {
    -webkit-app-region: drag; /* Pencerenin bu alandan tutularak sürüklenebilmesini sağlar */
    height: 60px;
    background: rgba(10, 12, 18, 0.4);
    backdrop-filter: blur(10px);
    
    /* Butonlar ve etkileşimli alanlar sürükleme alanından muaf tutulmalıdır */
    .citruss-btn, .search-input {
        -webkit-app-region: no-drag;
    }
}
```

---

## 7. Uygulama, Test ve Dağıtım Fazları (Roadmap)

| Faz | Kapsam / Aktivite | Teknik Çıktı / Performans Kriteri |
| --- | --- | --- |
| **Faz 1: Çekirdek** | SCSS altyapısının kurulması, CSS Özel Özellikleri'nin, modern reset kurallarının ve narenciye renk paletinin tanımlanması. | Sıfır harici bağımlılık, global tema değişken mimarisi. |
| **Faz 2: Bileşenler** | Sol dikey menü (Sidebar), içerik kartları, veri tabloları, form girdileri (inputs) ve grafik kapsayıcı panellerinin kodlanması. | Donanım hızlandırmalı katman optimizasyonları (`will-change`). |
| **Faz 3: Masaüstü Entegrasyon** | Electron.js mimarisine sahip prototip pencerelerde (çerçevesiz ve şeffaf) işletim sistemi sürükleme testleri ve performans analizi. | Pencere taşınırken veya yeniden boyutlandırılırken 60+ FPS kararlılığı. |
| **Faz 4: Optimizasyon & Dağıtım** | PostCSS ve Lightning CSS ile derleme otomasyonunun kurulması. GitHub Actions üzerinden npm ve jsDelivr ağlarına dağıtım. | Gzip sıkıştırması sonrası paket boyutu < 15KB. |

---

## 8. Performans ve Erişilebilirlik (WCAG) Standartları

* **Katman Karmaşasını Önleme (GPU Koruması):** Aynı görünüm alanında (Viewport) 5'ten fazla elemente `backdrop-filter: blur()` uygulamak eski ekran kartlarında darboğaz yaratabilir. CitruSS, sadece ana layout katmanlarında (`sidebar`, `header`, `.citruss-card`) blur kullanır; kart içi alt elementlerde ise efektsiz transparan arka planlar tercih eder.
* **WCAG Kontrast Güvencesi (Okunabilirliği Artırma):** Glassmorphic tasarımlarda en büyük risk, parlak bir arka plan görselinin önüne gelen beyaz metinlerin okunamaz hale gelmesidir. CitruSS, bu problemi çözmek için cam katmanının altına görünmez, çok hafif koyu bir gölge maskesi yerleştirir. Bu sayede metin kontrast oranı her zaman **4.5:1** oranının üzerinde kalır.