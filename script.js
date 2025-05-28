const app = document.getElementById("app");
let darkMode = true;

// Main services
const mainServices = [
  { name: "Video Editing", description: "Documentaries, Wedding, Faceless, AI Edits, Ads, YouTube Automation", image: "https://placehold.co/600x400/1A2F4C/FFFFFF?text=Video+Editing " },
  { name: "Graphic Design", description: "Logos, Banners, UI/UX, Social Media Posts", image: "https://placehold.co/600x400/1A2F4C/FFFFFF?text=Graphic+Design " },
  { name: "Content Writing", description: "SEO Articles, Blog Writing, YouTube Scripts", image: "https://placehold.co/600x400/1A2F4C/FFFFFF?text=Content+Writing " },
  { name: "YouTube Monetization", description: "Channel Setup, Growth Strategy, Audit", image: "https://placehold.co/600x400/1A2F4C/FFFFFF?text=YouTube+Monetization " }
];

// Subcategories per service
const subCategories = {
  "Video Editing": [
    { name: "Documentaries", price: "$299+", preview: "https://player.vimeo.com/video/769798708?autoplay=1&loop=1 " },
    { name: "Wedding Videos", price: "$399+", preview: "https://player.vimeo.com/video/769798708?autoplay=1&loop=1 " },
    { name: "Faceless Shorts", price: "$199+", preview: "https://player.vimeo.com/video/769798708?autoplay=1&loop=1 " },
    { name: "Tech Explained", price: "$249+", preview: "https://player.vimeo.com/video/769798708?autoplay=1&loop=1 " },
    { name: "Sports Highlights", price: "$299+", preview: "https://player.vimeo.com/video/769798708?autoplay=1&loop=1 " },
    { name: "Mama/Family Vlogs", price: "$199+", preview: "https://player.vimeo.com/video/769798708?autoplay=1&loop=1 " },
    { name: "Gun/Vlog Edits", price: "$299+", preview: "https://player.vimeo.com/video/769798708?autoplay=1&loop=1 " }
  ],
  "Graphic Design": [
    { name: "Logo Design", price: "$149+", preview: "https://placehold.co/600x400/333/FFF.png?text=Logo+Design " },
    { name: "Social Media Post", price: "$79+", preview: "https://placehold.co/600x400/333/FFF.png?text=Social+Post " },
    { name: "Banner Design", price: "$99+", preview: "https://placehold.co/600x400/333/FFF.png?text=Banner+Design " },
    { name: "UI/UX Mockup", price: "$199+/hr", preview: "https://placehold.co/600x400/333/FFF.png?text=UI+Mockup " }
  ],
  "Content Writing": [
    { name: "SEO Article", price: "$49/page", preview: "https://placehold.co/600x400/333/FFF.png?text=SEO+Article " },
    { name: "Product Descriptions", price: "$39/item", preview: "https://placehold.co/600x400/333/FFF.png?text=Descriptions " },
    { name: "YouTube Script", price: "$59/video", preview: "https://placehold.co/600x400/333/FFF.png?text=Script " }
  ],
  "YouTube Monetization": [
    { name: "Channel Setup", price: "$199+", preview: "https://placehold.co/600x400/333/FFF.png?text=Channel+Setup " },
    { name: "Monetization Audit", price: "$99+", preview: "https://placehold.co/600x400/333/FFF.png?text=Audit " },
    { name: "Growth Consultation", price: "$129/hr", preview: "https://placehold.co/600x400/333/FFF.png?text=Growth+Consulting " }
  ]
};

// Inject SVG Logo
document.getElementById("logo-icon").innerHTML = `
<svg viewBox="0 0 50 50" width="32" height="32">
  <circle cx="25" cy="25" r="24" fill="none" stroke="var(--accent)" stroke-width="2"/>
  <text x="10" y="32" fill="var(--cta)" font-size="24" font-weight="bold">R</text>
</svg>
`;

function navigate(page) {
  const hero = document.getElementById("hero");
  if (page === 'home') {
    hero.style.display = 'flex';
    app.innerHTML = '';
  } else {
    hero.style.display = 'none';
    app.innerHTML = '';

    if (page === 'services') {
      const cards = mainServices.map(s => `
        <div class="card fadeInUp" onclick="openSub('${s.name}')">
          <img src="${s.image}" alt="${s.name}">
          <div class="card-body">
            <h3>${s.name}</h3>
            <p>${s.description}</p>
          </div>
        </div>
      `).join('');
      app.innerHTML = `<h2 class="section-title mb-8 fadeInUp" style="animation-delay: 0.2s">Choose A Service</h2><div class="card-grid">${cards}</div>`;
    } else if (subCategories[page]) {
      const subs = subCategories[page].map((sc, i) => `
        <div class="card fadeInUp" onclick="showPlanOptions('${encodeURIComponent(sc.name)}', '${sc.price}', '${page.replace(/\s+/g, '')}${i}')" style="animation-delay: ${i * 0.1}s;">
          <iframe src="${sc.preview}" allowfullscreen title="${sc.name}"></iframe>
          <div class="card-body">
            <h3>${sc.name}</h3>
            <p class="price">${sc.price}</p>
          </div>
        </div>
      `).join('');
      app.innerHTML = `
        <h2 class="section-title fadeInUp" style="animation-delay: 0.2s;">${page} Styles</h2>
        <div class="subcategory-grid">${subs}</div>
      `;
    } else if (page === 'portfolio') {
      const portfolioItems = [
        { title: "Wedding Edit", desc: "Delivered in 48 hours with cinematic effects." },
        { title: "YouTube Automation", desc: "Template-based editing for fast delivery." },
        { title: "Logo Rebrand", desc: "Brand identity for Dubai Restaurant" }
      ];
      const cards = portfolioItems.map(p => `
        <div class="card fadeInUp">
          <img src="https://picsum.photos/seed/ ${p.title}/600/400" alt="${p.title}" />
          <div class="card-body">
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
          </div>
        </div>
      `).join('');
      app.innerHTML = `<h2 class="section-title fadeInUp">My Work Portfolio</h2><div class="card-grid">${cards}</div>`;
    } else if (page === 'about') {
      app.innerHTML = `
        <section class="container my-12 fadeInUp">
          <h2 class="section-title mb-6">About Me</h2>
          <div class="flex flex-col md:flex-row items-center gap-8">
            <img src="https://placehold.co/400x400/333/FFF.png?text=Rizwi " class="rounded-full w-32 h-32 shadow-xl" />
            <div class="md:text-left text-center">
              <h3 class="text-xl font-bold mb-2">Rizwi Gul</h3>
              <p>I'm Rizwi, a creative freelancer with over 5 years of experience helping creators and brands go viral. My mission is to deliver high-quality content quickly and affordably.</p>
            </div>
          </div>
        </section>
      `;
    } else if (page === 'contact') {
      app.innerHTML = `
        <section class="container my-12 fadeInUp">
          <h2 class="section-title mb-6">Get in Touch</h2>
          <form class="max-w-3xl mx-auto" action="#">
            <input type="text" placeholder="Your Name" class="w-full px-4 py-3 rounded bg-[#0E243F] text-white border-none outline-none mb-4">
            <input type="email" placeholder="Your Email" class="w-full px-4 py-3 rounded bg-[#0E243F] text-white border-none outline-none mb-4">
            <textarea rows="5" placeholder="Tell us about your project..." class="w-full px-4 py-3 rounded bg-[#0E243F] text-white border-none outline-none mb-4"></textarea>
            <button type="submit" class="bg-[#00F5FF] text-[#0A1A2F] px-6 py-3 rounded-full font-bold hover:bg-[#00cccc] transition">Send Message</button>
          </form>
        </section>
      `;
    }
}

function openSub(service) {
  navigate(service);
}

function showPlanOptions(name, price, planId) {
  const whatsappMsg = `Hi RizwiElite, I'd like to activate ${decodeURIComponent(name)} at ${price}`;
  const emailHref = `mailto:rizwigul@gmail.com?subject=${name}%20Inquiry`;
  const whatsappHref = `https://wa.me/+923325318695?text= ${encodeURIComponent(whatsappMsg)}`;

  document.getElementById("whatsappLink").href = whatsappHref;
  document.getElementById("emailLink").href = emailHref;
  document.getElementById("planModal").classList.remove('hidden');
}

function closeModal() {
  document.getElementById("planModal").classList.add('hidden');
}

// Theme Toggle
document.getElementById("themeToggle").addEventListener("change", () => {
  document.body.classList.toggle("dark", !document.getElementById("themeToggle").checked);
  document.body.classList.toggle("light", document.getElementById("themeToggle").checked);
});

// Initial Load
window.addEventListener("DOMContentLoaded", () => {
  navigate("home");
});