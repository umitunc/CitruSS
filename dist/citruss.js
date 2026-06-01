const h = {
  fire: function({ title: a, text: t, icon: e = "info", showCancelButton: s = !1, confirmButtonText: i = "OK", cancelButtonText: r = "Cancel" }) {
    return new Promise((n) => {
      const o = document.createElement("div");
      o.className = "citruss-swal-container", o.innerHTML = `
        <div class="citruss-swal-box">
          <div class="citruss-swal-icon citruss-swal-icon-${e}"></div>
          <h3 style="color: var(--citruss-text-main); margin-bottom: 8px; font-weight: 800;">${a}</h3>
          <p style="color: var(--citruss-text-muted); margin-bottom: 24px; font-size: 0.9rem;">${t}</p>
          <div style="display:flex; gap:12px; justify-content:center;">
            ${s ? `<button class="citruss-btn" id="citruss-swal-cancel">${r}</button>` : ""}
            <button class="citruss-btn btn-primary" id="citruss-swal-confirm">${i}</button>
          </div>
        </div>
      `, document.body.appendChild(o), setTimeout(() => {
        o.classList.add("active"), o.querySelector(".citruss-swal-box").classList.add("show");
      }, 10);
      const d = (c) => {
        o.classList.remove("active"), o.querySelector(".citruss-swal-box").classList.remove("show"), setTimeout(() => {
          o.remove(), n({ isConfirmed: c });
        }, 300);
      };
      o.querySelector("#citruss-swal-confirm").onclick = () => d(!0), s && (o.querySelector("#citruss-swal-cancel").onclick = () => d(!1));
    });
  },
  confirm: function(a, t) {
    return this.fire({
      title: a,
      text: t,
      icon: "warning",
      showCancelButton: !0,
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel"
    });
  }
}, m = {
  show: function({ title: a, message: t, type: e = "info", duration: s = 4e3 }) {
    let i = document.querySelector(".citruss-toast-container");
    i || (i = document.createElement("div"), i.className = "citruss-toast-container", document.body.appendChild(i));
    const r = document.createElement("div");
    r.className = `citruss-toast toast-${e}`, r.innerHTML = `
      <div class="toast-body">
        <div class="toast-title">${a}</div>
        <div class="toast-message">${t}</div>
      </div>
      <div class="toast-close">×</div>
    `, i.appendChild(r), setTimeout(() => r.classList.add("show"), 50);
    const n = () => {
      r.classList.remove("show"), r.style.transform = "translateX(120%)", setTimeout(() => r.remove(), 400);
    };
    r.querySelector(".toast-close").onclick = n, setTimeout(n, s);
  }
};
class y {
  constructor(t, e = {}) {
    this.element = t, this.options = e, this.isMulti = e.multiple || !1, this.searchable = e.searchable || !1, this.selectedValues = /* @__PURE__ */ new Set(), this.highlightedIndex = -1, this.init();
  }
  init() {
    this.trigger = this.element.querySelector(".citruss-select-trigger"), this.menu = this.element.querySelector(".citruss-dropdown-menu"), this.searchField = this.element.querySelector(".dropdown-search-box input"), this.items = Array.from(this.element.querySelectorAll(".dropdown-item")), this.trigger.addEventListener("click", (t) => {
      t.stopPropagation(), this.toggle();
    }), this.searchField && (this.searchField.addEventListener("click", (t) => t.stopPropagation()), this.searchField.addEventListener("input", (t) => this.filterOptions(t.target.value))), this.items.forEach((t) => {
      t.addEventListener("click", (e) => {
        e.stopPropagation(), this.selectItem(t);
      });
    }), this.element.addEventListener("keydown", (t) => this.handleKeydown(t)), document.addEventListener("click", (t) => {
      this.element.contains(t.target) || this.close();
    });
  }
  toggle() {
    const t = this.menu.classList.contains("active");
    document.querySelectorAll(".citruss-dropdown-menu").forEach((e) => e.classList.remove("active")), t ? this.close() : (this.menu.classList.add("active"), this.searchField && (this.searchField.value = "", this.filterOptions(""), setTimeout(() => this.searchField.focus(), 50)));
  }
  close() {
    this.menu.classList.remove("active"), this.highlightedIndex = -1, this.items.forEach((t) => t.classList.remove("highlighted"));
  }
  selectItem(t) {
    const e = t.getAttribute("data-value"), s = t.textContent.trim().replace("✓", "").trim();
    this.isMulti ? (this.selectedValues.has(e) ? (this.selectedValues.delete(e), t.classList.remove("selected")) : (this.selectedValues.add(e), t.classList.add("selected")), this.updateTriggerMulti()) : (this.selectedValues.clear(), this.selectedValues.add(e), this.items.forEach((i) => i.classList.remove("selected")), t.classList.add("selected"), this.trigger.querySelector(".trigger-text").textContent = s, this.close()), this.options.onChange && this.options.onChange(Array.from(this.selectedValues));
  }
  updateTriggerMulti() {
    const t = this.trigger.querySelector(".chips-container");
    if (t.innerHTML = "", this.selectedValues.size === 0) {
      t.innerHTML = `<span class="trigger-text">${this.options.placeholder || "Select options"}</span>`;
      return;
    }
    this.selectedValues.forEach((e) => {
      const s = this.items.find((n) => n.getAttribute("data-value") === e), i = s.textContent.trim().replace("✓", "").trim(), r = document.createElement("span");
      r.className = "chip", r.innerHTML = `${i} <span class="remove-btn" data-val="${e}">×</span>`, r.querySelector(".remove-btn").onclick = (n) => {
        n.stopPropagation(), this.selectedValues.delete(e), s.classList.remove("selected"), this.updateTriggerMulti(), this.options.onChange && this.options.onChange(Array.from(this.selectedValues));
      }, t.appendChild(r);
    });
  }
  filterOptions(t) {
    this.items.forEach((e) => {
      e.textContent.toLowerCase().includes(t.toLowerCase()) ? e.style.display = "flex" : e.style.display = "none";
    });
  }
  handleKeydown(t) {
    if (!this.menu.classList.contains("active")) return;
    const e = this.items.filter((s) => s.style.display !== "none");
    t.key === "ArrowDown" ? (t.preventDefault(), this.highlightedIndex = (this.highlightedIndex + 1) % e.length, this.updateHighlight(e)) : t.key === "ArrowUp" ? (t.preventDefault(), this.highlightedIndex = (this.highlightedIndex - 1 + e.length) % e.length, this.updateHighlight(e)) : t.key === "Enter" ? (t.preventDefault(), this.highlightedIndex >= 0 && this.highlightedIndex < e.length && this.selectItem(e[this.highlightedIndex])) : t.key === "Escape" && this.close();
  }
  updateHighlight(t) {
    this.items.forEach((e) => e.classList.remove("highlighted")), t[this.highlightedIndex] && (t[this.highlightedIndex].classList.add("highlighted"), t[this.highlightedIndex].scrollIntoView({ block: "nearest" }));
  }
}
const w = {
  validateForm: function(a) {
    const t = document.querySelector(a);
    if (!t) return !1;
    let e = !0;
    return t.querySelectorAll("[required], [data-citruss-rules]").forEach((i) => {
      const r = i.closest(".citruss-input-group");
      if (!r) return;
      let n = !0, o = "";
      i.hasAttribute("required") && !i.value.trim() && (n = !1, o = "This field is required.");
      const d = i.getAttribute("data-citruss-rules");
      if (n && d && i.value) {
        const c = d.split("|");
        for (let u of c) {
          if (u === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i.value)) {
            n = !1, o = "Please enter a valid email address.";
            break;
          }
          if (u.startsWith("min:")) {
            const f = parseInt(u.split(":")[1]);
            if (i.value.length < f) {
              n = !1, o = `Must be at least ${f} characters.`;
              break;
            }
          }
        }
      }
      if (n) {
        r.classList.remove("is-invalid"), r.classList.add("is-valid");
        let c = r.querySelector(".citruss-valid-feedback");
        c || (c = document.createElement("div"), c.className = "citruss-valid-feedback", c.textContent = "Looks good!", r.appendChild(c));
      } else {
        e = !1, r.classList.remove("is-valid"), r.classList.add("is-invalid");
        let c = r.querySelector(".citruss-invalid-feedback");
        c || (c = document.createElement("div"), c.className = "citruss-invalid-feedback", r.appendChild(c)), c.textContent = o;
      }
    }), e;
  },
  bind: function(a, t) {
    const e = document.querySelector(a);
    e && e.addEventListener("submit", (s) => {
      s.preventDefault(), this.validateForm(a) && t && t(e);
    });
  }
};
class b {
  constructor(t, e = {}) {
    this.container = document.getElementById(t), this.container && (this.steps = Array.from(this.container.querySelectorAll(".citruss-wizard-step")), this.nodes = Array.from(this.container.querySelectorAll(".wizard-step-node")), this.currentStep = 0, this.progressBar = this.container.querySelector(".citruss-progress-bar .progress-fill"), this.init());
  }
  init() {
    this.showStep(0);
    const t = this.container.querySelector(".wizard-next"), e = this.container.querySelector(".wizard-prev");
    t && t.addEventListener("click", () => this.next()), e && e.addEventListener("click", () => this.prev());
  }
  showStep(t) {
    this.steps.forEach((s, i) => {
      s.style.display = i === t ? "block" : "none";
    }), this.nodes.forEach((s, i) => {
      s.classList.remove("active", "completed"), i < t ? s.classList.add("completed") : i === t && s.classList.add("active");
    }), this.currentStep = t;
    const e = t / (this.steps.length - 1) * 100;
    this.progressBar && (this.progressBar.style.width = `${e}%`);
  }
  next() {
    this.currentStep < this.steps.length - 1 && this.showStep(this.currentStep + 1);
  }
  prev() {
    this.currentStep > 0 && this.showStep(this.currentStep - 1);
  }
}
class p {
  constructor(t) {
    this.container = t, this.container && (this.links = Array.from(this.container.querySelectorAll(".citruss-tab-link")), this.init());
  }
  init() {
    this.links.forEach((t) => {
      t.addEventListener("click", (e) => {
        e.preventDefault(), this.activate(t);
      });
    });
  }
  activate(t) {
    const e = t.getAttribute("data-target");
    if (!e) return;
    const s = t.closest(".citruss-tabs-wrapper");
    if (!s) return;
    s.querySelectorAll(".citruss-tab-link").forEach((n) => n.classList.remove("active"));
    const i = s.parentElement;
    i.querySelectorAll(".citruss-tab-pane").forEach((n) => n.classList.remove("active")), t.classList.add("active");
    const r = i.querySelector(e);
    r && r.classList.add("active");
  }
}
class g {
  constructor(t) {
    this.container = t, this.container && (this.headers = Array.from(this.container.querySelectorAll(".accordion-header")), this.init());
  }
  init() {
    this.headers.forEach((t) => {
      t.addEventListener("click", () => {
        const e = t.closest(".citruss-accordion"), s = e.classList.contains("active");
        if (this.container.querySelectorAll(".citruss-accordion").forEach((i) => {
          i.classList.remove("active");
          const r = i.querySelector(".accordion-body");
          r && (r.style.maxHeight = "0");
        }), !s) {
          e.classList.add("active");
          const i = e.querySelector(".accordion-body");
          i && (i.style.maxHeight = i.scrollHeight + "px");
        }
      });
    });
  }
}
class L {
  constructor(t, e = {}) {
    this.carousel = t, this.carousel && (this.inner = this.carousel.querySelector(".carousel-inner"), this.items = Array.from(this.carousel.querySelectorAll(".carousel-item")), this.dots = Array.from(this.carousel.querySelectorAll(".indicator-dot")), this.currentIndex = 0, this.interval = e.interval || 5e3, this.autoPlayTimer = null, this.init());
  }
  init() {
    const t = this.carousel.querySelector(".control-prev"), e = this.carousel.querySelector(".control-next");
    t && t.addEventListener("click", () => {
      this.prev(), this.resetTimer();
    }), e && e.addEventListener("click", () => {
      this.next(), this.resetTimer();
    }), this.dots.forEach((s, i) => {
      s.addEventListener("click", () => {
        this.goTo(i), this.resetTimer();
      });
    }), this.startTimer();
  }
  goTo(t) {
    t < 0 && (t = this.items.length - 1), t >= this.items.length && (t = 0), this.currentIndex = t, this.inner && (this.inner.style.transform = `translateX(-${t * 100}%)`), this.dots.forEach((e, s) => {
      e.classList.toggle("active", s === t);
    });
  }
  next() {
    this.goTo(this.currentIndex + 1);
  }
  prev() {
    this.goTo(this.currentIndex - 1);
  }
  startTimer() {
    this.interval > 0 && (this.autoPlayTimer = setInterval(() => this.next(), this.interval));
  }
  resetTimer() {
    this.autoPlayTimer && (clearInterval(this.autoPlayTimer), this.startTimer());
  }
}
class S {
  constructor(t) {
    this.drawer = t, this.drawer && (this.id = this.drawer.id, this.backdrop = null, this.init());
  }
  init() {
    this.drawer.querySelectorAll(".drawer-close, [data-citruss-close]").forEach((t) => {
      t.addEventListener("click", () => this.hide());
    });
  }
  show() {
    this.backdrop = document.createElement("div"), this.backdrop.className = "citruss-drawer-backdrop", document.body.appendChild(this.backdrop), setTimeout(() => {
      this.backdrop.classList.add("active"), this.drawer.classList.add("show");
    }, 20), this.escapeHandler = (t) => {
      t.key === "Escape" && this.hide();
    }, document.addEventListener("keydown", this.escapeHandler), this.backdrop.onclick = () => this.hide();
  }
  hide() {
    this.drawer.classList.remove("show"), this.backdrop && (this.backdrop.classList.remove("active"), setTimeout(() => {
      this.backdrop && this.backdrop.remove(), this.backdrop = null;
    }, 300)), document.removeEventListener("keydown", this.escapeHandler);
  }
}
const v = {
  drawersMap: /* @__PURE__ */ new Map(),
  init: function() {
    document.querySelectorAll(".citruss-drawer").forEach((a) => {
      this.drawersMap.set(a.id, new S(a));
    }), document.querySelectorAll('[data-citruss-toggle="drawer"]').forEach((a) => {
      const t = a.getAttribute("data-target");
      a.addEventListener("click", (e) => {
        e.preventDefault();
        const s = this.drawersMap.get(t);
        s && s.show();
      });
    });
  }
}, E = {
  bind: function(a, t) {
    const e = document.querySelector(a), s = document.getElementById(t);
    !e || !s || (e.addEventListener("contextmenu", (i) => {
      i.preventDefault(), s.style.display = "block";
      const r = Math.min(i.clientX, window.innerWidth - s.offsetWidth - 10), n = Math.min(i.clientY, window.innerHeight - s.offsetHeight - 10);
      s.style.left = `${r}px`, s.style.top = `${n}px`;
    }), document.addEventListener("click", () => {
      s.style.display = "none";
    }));
  }
}, k = {
  bind: function(a, t, e) {
    const s = document.querySelector(a), i = document.getElementById(t);
    !s || !i || (s.addEventListener("click", (r) => {
      r.stopPropagation();
      const n = i.classList.contains("active");
      if (document.querySelectorAll(".citruss-popover").forEach((o) => o.classList.remove("active")), !n) {
        i.classList.add("active");
        const o = e || s.getAttribute("data-citruss-popover-pos") || i.getAttribute("data-citruss-popover-pos") || "top";
        this.position(s, i, o);
      }
    }), document.addEventListener("click", (r) => {
      i.contains(r.target) || i.classList.remove("active");
    }));
  },
  position: function(a, t, e = "top") {
    const s = a.getBoundingClientRect();
    let i = 0, r = 0;
    e === "bottom" ? (i = s.left + s.width / 2 - t.offsetWidth / 2, r = s.bottom + 8) : e === "left" ? (i = s.left - t.offsetWidth - 8, r = s.top + s.height / 2 - t.offsetHeight / 2) : e === "right" ? (i = s.right + 8, r = s.top + s.height / 2 - t.offsetHeight / 2) : (i = s.left + s.width / 2 - t.offsetWidth / 2, r = s.top - t.offsetHeight - 8), i = Math.max(8, Math.min(i, window.innerWidth - t.offsetWidth - 8)), r = Math.max(8, Math.min(r, window.innerHeight - t.offsetHeight - 8)), t.style.left = `${i}px`, t.style.top = `${r}px`;
  }
};
class l {
  constructor(t) {
    t && (this.element = t, this.init());
  }
  init() {
    this.buttons = {
      light: this.element.querySelector('[data-theme-value="light"]'),
      dark: this.element.querySelector('[data-theme-value="dark"]')
    }, this.buttons.light && this.buttons.light.addEventListener("click", () => this.setTheme("light")), this.buttons.dark && this.buttons.dark.addEventListener("click", () => this.setTheme("dark"));
    const t = l.getCurrentTheme();
    this.updateUI(t), window.addEventListener("storage", (e) => {
      e.key === "citruss-theme" && this.updateUI(e.newValue);
    });
  }
  setTheme(t) {
    l.applyTheme(t), this.updateUI(t);
    const e = new CustomEvent("citruss-theme-change", { detail: { theme: t } });
    document.dispatchEvent(e);
  }
  updateUI(t) {
    this.buttons.light && this.buttons.dark && (t === "light" ? (this.buttons.light.classList.add("active"), this.buttons.dark.classList.remove("active")) : (this.buttons.dark.classList.add("active"), this.buttons.light.classList.remove("active")));
  }
  /**
   * Helper to get current active theme (from localStorage, DOM attribute, or system preference)
   */
  static getCurrentTheme() {
    if (typeof window > "u") return "dark";
    const t = localStorage.getItem("citruss-theme");
    if (t) return t;
    const e = document.documentElement.getAttribute("data-theme");
    return e || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
  }
  /**
   * Applies the theme to the document and persists it
   */
  static applyTheme(t) {
    typeof window > "u" || (document.documentElement.setAttribute("data-theme", t), localStorage.setItem("citruss-theme", t), document.body.classList.add("citruss-theme-transitioning"), setTimeout(() => {
      document.body.classList.remove("citruss-theme-transitioning");
    }, 400));
  }
  /**
   * Auto-initialize theme on load
   */
  static autoInit() {
    if (typeof window > "u") return;
    const t = this.getCurrentTheme();
    this.applyTheme(t);
    const e = () => {
      document.querySelectorAll(".citruss-theme-toggle").forEach((s) => {
        new l(s);
      });
    };
    document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", e) : e();
  }
}
l.autoInit();
const x = {
  fire: h.fire.bind(h),
  confirm: h.confirm.bind(h),
  toast: m.show.bind(m),
  Dropdown: y,
  Validator: w,
  Wizard: b,
  Tabs: p,
  Accordion: g,
  Carousel: L,
  Drawers: v,
  ContextMenu: E,
  Popovers: k,
  ThemeToggle: l
};
typeof window < "u" && (window.CitruSS = x, document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-citruss-accordion]").forEach((a) => {
    new g(a);
  }), document.querySelectorAll(".citruss-tabs-wrapper").forEach((a) => {
    new p(a);
  }), v.init();
}));
export {
  g as CitruSSAccordion,
  L as CitruSSCarousel,
  E as CitruSSContextMenu,
  h as CitruSSDialog,
  v as CitruSSDrawers,
  y as CitruSSDropdown,
  k as CitruSSPopovers,
  p as CitruSSTabs,
  l as CitruSSThemeToggle,
  m as CitruSSToast,
  w as CitruSSValidator,
  b as CitruSSWizard,
  x as default
};
