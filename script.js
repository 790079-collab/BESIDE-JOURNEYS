/* Website rendering and small interactions. Most editable content lives in content.js. */
(() => {
  const c = SITE_CONTENT;
  const $ = (id) => document.getElementById(id);
  const setText = (id, value) => { if ($(id)) $(id).textContent = value || ""; };
  const setImage = (id, url) => { if ($(id)) $(id).src = url || ""; };
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));

  document.title = `${c.brand.name} | Private Medical & Travel Concierge`;
  setText("announcement", c.brand.announcement);
  setText("brand-name", c.brand.name); setText("footer-brand-name", c.brand.name);
  setText("brand-descriptor", c.brand.descriptor);
  setText("hero-eyebrow", c.hero.eyebrow); setText("hero-title", c.hero.title);
  setText("hero-intro", c.hero.intro); setText("hero-button", c.hero.button);
  setText("hero-footnote", c.hero.footnote); setText("hero-caption", c.hero.caption);
  $("hero-image").style.backgroundImage = `url("${c.hero.image}")`;
  setText("intro-eyebrow", c.intro.eyebrow); setText("intro-title", c.intro.title); setText("intro-text", c.intro.text);
  setText("medical-note", c.medical.note);

  $("service-grid").innerHTML = c.services.map(s => `
    <article class="service-card">
      <img src="${esc(s.image)}" alt="${esc(s.title)}" loading="lazy">
      <div class="service-card-body"><span class="service-number">${esc(s.number)} / SERVICE</span>
      <h3>${esc(s.title)}</h3><p>${esc(s.description)}</p></div>
    </article>`).join("");

  setText("travel-title", c.travel.title); setText("travel-intro", c.travel.intro);
  setImage("travel-image", c.travel.image); setText("travel-callout", c.travel.callout);
  $("travel-options").innerHTML = c.travel.options.map(o => `
    <div class="travel-option"><strong>${esc(o.title)}</strong><span>${esc(o.text)}</span></div>`).join("");

  setText("why-intro", c.why.intro);
  $("why-grid").innerHTML = c.reasons.map(r => `
    <article class="why-card"><span class="why-icon">${esc(r.icon)}</span><h3>${esc(r.title)}</h3><p>${esc(r.text)}</p></article>`).join("");

  setText("approach-title", c.approach.title); setText("approach-intro", c.approach.intro);
  $("steps").innerHTML = c.steps.map(s => `
    <article class="step"><span class="step-num">${esc(s.number)}</span><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></article>`).join("");

  setText("about-title", c.about.title); setText("about-text", c.about.text);
  setText("about-text-two", c.about.textTwo); setText("about-signature", c.about.signature);
  setImage("about-image", c.about.image);

  setText("contact-title", c.contact.title); setText("contact-text", c.contact.text);
  setText("form-privacy", c.contact.privacy);
  $("contact-details").innerHTML = `<div>${esc(c.brand.location)}</div>${c.brand.email ? `<div><a href="mailto:${esc(c.brand.email)}">${esc(c.brand.email)}</a></div>` : ""}${c.brand.phone ? `<div>${esc(c.brand.phone)}</div>` : ""}`;
  $("interest").innerHTML = c.enquiryOptions.map(o => `<option>${esc(o)}</option>`).join("");
  setText("footer-tagline", c.footer.tagline); setText("copyright", c.footer.copyright);
  setText("legal-note", c.contact.legal);

  const form = $("enquiry-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(`Website enquiry — ${data.get("interest")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nInterest: ${data.get("interest")}\nPreferred timing: ${data.get("timing") || "Not specified"}\n\nEnquiry:\n${data.get("message") || "Not specified"}`
    );
    if (!c.brand.email || c.brand.email.includes("yourdomain.co.nz")) {
      $("form-status").textContent = "This demonstration form is not connected yet. Please update the business email in content.js before publishing.";
      return;
    }
    window.location.href = `mailto:${c.brand.email}?subject=${subject}&body=${body}`;
    $("form-status").textContent = "Your email app should open with your enquiry prepared. Please review and send it there.";
  });

  const toggle = $("menu-toggle"), nav = $("main-nav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "×" : "☰";
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open"); toggle.setAttribute("aria-expanded","false"); toggle.textContent = "☰";
  }));
})();
