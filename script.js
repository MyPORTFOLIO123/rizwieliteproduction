const app = document.getElementById("app");

let currentView = "home";
let darkMode = true;
let logoUrl = "";

const mainServices = [
  {
    name: "Video Editing",
    description:
      "All types of video editing including documentaries, weddings, YouTube automation, faceless videos, AI edits, and ads.",
    image: "https://placehold.co/600x400/1A2F4C/FFFFFF?text=Video+Editing ",
  },
  {
    name: "Graphic Design",
    description: "Logo design, social media posts, banners, UI/UX mockups, and more.",
    image: "https://placehold.co/600x400/1A2F4C/FFFFFF?text=Graphic+Design ",
  },
  {
    name: "Content Writing",
    description: "SEO articles, product descriptions, blog writing, and YouTube scripts.",
    image: "https://placehold.co/600x400/1A2F4C/FFFFFF?text=Content+Writing ",
  },
  {
    name: "YouTube Monetization",
    description: "Channel setup, monetization audit, content strategy, growth consulting.",
    image: "https://placehold.co/600x400/1A2F4C/FFFFFF?text=YouTube+Monetization ",
  },
];

const subCategories = {
  "Video Editing": [
    { name: "Documentaries", price: "$299+", preview: "https://player.vimeo.com/video/769798708 ", type: "video" },
    { name: "Wedding", price: "$399+", preview: "https://player.vimeo.com/video/769798708 ", type: "video" },
    { name: "Faceless YouTube", price: "$199+", preview: "https://player.vimeo.com/video/769798708 ", type: "video" },
    { name: "Advertising", price: "$249+", preview: "https://player.vimeo.com/video/769798708 ", type: "video" },
    { name: "YouTube Automation", price: "$349+", preview: "https://player.vimeo.com/video/769798708 ", type: "video" },
    { name: "War Videos", price: "$299+", preview: "https://player.vimeo.com/video/769798708 ", type: "video" },
    { name: "Gun Videos", price: "$299+", preview: "https://player.vimeo.com/video/769798708 ", type: "video" },
    { name: "Mama Videos", price: "$199+", preview: "https://player.vimeo.com/video/769798708 ", type: "video" },
    { name: "Tech Videos", price: "$249+", preview: "https://player.vimeo.com/video/769798708 ", type: "video" },
    { name: "Sports / Football", price: "$299+", preview: "https://player.vimeo.com/video/769798708 ", type: "video" },
  ],
  "Graphic Design": [
    { name: "Logo Design", price: "$149+", preview: "https://placehold.co/600x400/333/FFF.png?text=Logo+Design ", type: "image" },
    { name: "Social Media Posts", price: "$79+", preview: "https://placehold.co/600x400/333/FFF.png?text=Social+Posts ", type: "image" },
    { name: "Flyers/Banners", price: "$99+", preview: "https://placehold.co/600x400/333/FFF.png?text=Banner+Design ", type: "image" }
  ],
  "Content Writing": [
    { name: "SEO Articles", price: "$49/page", preview: "https://placehold.co/600x400/333/FFF.png?text=SEO+Article ", type: "image" },
    { name: "Product Descriptions", price: "$39/item", preview: "https://placehold.co/600x400/333/FFF.png?text=Product+Descriptions ", type: "image" },
    { name: "YouTube Scripts", price: "$59/video", preview: "https://placehold.co/600x400/333/FFF.png?text=YouTube+Script ", type: "image" }
  ],
  "YouTube Monetization": [
    { name: "Channel Setup", price: "$199+", preview: "https://placehold.co/600x400/333/FFF.png?text=Channel+Setup ", type: "image" },
    { name: "Monetization Audit", price: "$99+", preview: "https://placehold.co/600x400/333/FFF.png?text=Audit ", type: "image" },
    { name: "Growth Consultation", price: "$129/hr", preview: "https://placehold.co/600x400/333/FFF.png?text=Growth+Consulting ", type: "image" }
  ]
};

function navigate(category) {
  currentView = category;
  render();
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function render() {
  app.innerHTML = "";

  if (currentView === "home") {
    // Render Home View
    const homeHTML = `
      <section class="services-section">
        <div class="container">
          <h2 class="section-title">Our Services</h2>
          <div class="card-grid">
            ${mainServices.map(service => `
              <div class="service-card" onclick="navigate('${service.name}')">
                <img src="${service.image}" alt="${service.name}" />
                <div class="card-body">
                  <h3>${service.name}</h3>
                  <p>${service.description}</p>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <section class="testimonials-section">
        <div class="container">
          <h2 class="section-title">What Clients Say</h2>
          <div class="testimonial-cards">
            <div class="testimonial">“Rizwi's edits boosted my YouTube revenue by 200%!”</div>
            <div class="testimonial">“Delivered before deadline with perfect quality.”</div>
            <div class="testimonial">“The AI editing package saved me 10 hours a week.”</div>
          </div>
        </div>
      </section>

      <section class="clients-section">
        <div class="container">
          <h2 class="section-title">Trusted By</h2>
          <div class="client-logos">
            <img src="https://placehold.co/150x50/333/FFF.png?text=Client+1 " alt="Client 1" />
            <img src="https://placehold.co/150x50/333/FFF.png?text=Client+2 " alt="Client 2" />
            <img src="https://placehold.co/150x50/333/FFF.png?text=Client+3 " alt="Client 3" />
            <img src="https://placehold.co/150x50/333/FFF.png?text=Client+4 " alt="Client 4" />
          </div>
        </div>
      </section>

      <section id="profile" class="profile-section">
        <div class="container">
          <h2>About Me</h2>
          <div class="profile-content">
            <img src="https://placehold.co/400x400/333/FFF.png?text=Rizwi " alt="Rizwi Gul" />
            <p>I’m Rizwi, a creative freelancer with over 5 years of experience helping creators and brands go viral. My mission is to deliver high-quality content quickly and affordably.</p>
          </div>
        </div>
      </section>

      <section id="contact" class="contact-section">
        <div class="container">
          <h2>Get in Touch</h2>
          <form class="contact-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea rows="5" placeholder="Tell us about your project..."></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    `;
    app.innerHTML = homeHTML;
  } else {
    // Render Category Page
    const services = subCategories[currentView];
    const cards = services.map(service => `
      <div class="service-card">
        <iframe src="${service.preview}?autoplay=1&loop=1&title=0" allowfullscreen></iframe>
        <div class="card-body">
          <h3>${service.name}</h3>
          <p class="price">${service.price}</p>
          <div class="cta-buttons">
            <a href="https://wa.me/+923325318695?text=Hi%20RizwiElite ,%20I%20want%20${encodeURIComponent(service.name)}!" target="_blank" class="whatsapp">WhatsApp Now</a>
            <a href="mailto:rizwigul@gmail.com?subject=${encodeURIComponent(service.name)} Inquiry" class="email">Email Inquiry</a>
          </div>
        </div>
      </div>
    `).join("");

    const backBtn = `<button onclick="navigate('home')" class="back-btn">← Back to Home</button>`;
    const section = `
      <section class="category-page">
        ${backBtn}
        <div class="container">
          <h2>RizwiElite-Production | ${currentView}</h2>
          <div class="card-grid">
            ${cards}
          </div>
        </div>
      </section>
    `;
    app.innerHTML = section;
  }

  // Update Theme
  document.body.className = darkMode ? "dark" : "light";

  // Handle Logo Preview
  const logoImg = document.querySelector("#site-title img");
  if (logoUrl && logoImg) {
    logoImg.src = logoUrl;
  }
}

document.getElementById("logoInput")?.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      logoUrl = e.target.result;
      const title = document.getElementById("site-title");
      if (!title.querySelector("img")) {
        const img = document.createElement("img");
        img.id = "logo-img";
        img.alt = "Logo";
        title.prepend(img);
      }
      title.querySelector("img").src = logoUrl;
    };
    reader.readAsDataURL(file);
  }
});

document.getElementById("themeToggle").addEventListener("click", () => {
  darkMode = !darkMode;
  render();
});

window.navigate = navigate;
window.scrollToSection = scrollToSection;

render();