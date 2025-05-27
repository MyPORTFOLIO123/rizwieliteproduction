document.addEventListener("DOMContentLoaded", function () {
  const year = new Date().getFullYear();
  document.getElementById("year").textContent = year;

  const themeToggleBtn = document.getElementById("darkModeToggle");

  // Check saved user preference or default to light mode
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    document.body.classList.add("dark");
    themeToggleBtn.textContent = "☀️";
  }

  // Toggle dark mode
  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      themeToggleBtn.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      themeToggleBtn.textContent = "🌙";
    }
  });

  const services = [
    {
      id: "video",
      title: "Video Editing",
      image: "https://placehold.co/400x300?text=Video+Editing ",
      subcategories: [
        { name: "Documentary Style", price: "$250", image: "https://placehold.co/300x200 " },
        { name: "Faceless/Animated Videos", price: "$180", image: "https://placehold.co/300x200 " },
        { name: "B-Roll & Stock Integration", price: "$100", image: "https://placehold.co/300x200 " },
        { name: "Advertisements & Commercials", price: "$300", image: "https://placehold.co/300x200 " },
        { name: "Wedding Films", price: "$350", image: "https://placehold.co/300x200 " },
        { name: "YouTube Automation Packages", price: "$200", image: "https://placehold.co/300x200 " },
        { name: "AI-Enhanced Videos", price: "$220", image: "https://placehold.co/300x200 " },
      ],
    },
    {
      id: "writing",
      title: "Content Writing",
      image: "https://placehold.co/400x300?text=Content+Writing ",
      subcategories: [
        { name: "SEO Blog Posts", price: "$50/500 words", image: "https://placehold.co/300x200 " },
        { name: "Sales Copy & Landing Pages", price: "$120", image: "https://placehold.co/300x200 " },
        { name: "Product Descriptions", price: "$30/item", image: "https://placehold.co/300x200 " },
        { name: "Press Releases", price: "$150", image: "https://placehold.co/300x200 " },
        { name: "Whitepapers & E-Books", price: "$400", image: "https://placehold.co/300x200 " },
        { name: "Email Campaign Sequences", price: "$100", image: "https://placehold.co/300x200 " },
        { name: "Social Media Captions", price: "$20/post", image: "https://placehold.co/300x200 " },
      ],
    },
    {
      id: "design",
      title: "Graphics Designing",
      image: "https://placehold.co/400x300?text=Graphics+Designing ",
      subcategories: [
        { name: "Logo & Branding Kits", price: "$200", image: "https://placehold.co/300x200 " },
        { name: "Social Media Graphics", price: "$80/package", image: "https://placehold.co/300x200 " },
        { name: "Infographics & Data Viz", price: "$150", image: "https://placehold.co/300x200 " },
        { name: "Brochures & Flyers", price: "$100", image: "https://placehold.co/300x200 " },
        { name: "Business Cards & Stationery", price: "$70", image: "https://placehold.co/300x200 " },
        { name: "Banner & Ad Creative", price: "$120", image: "https://placehold.co/300x200 " },
        { name: "Presentation Decks", price: "$180", image: "https://placehold.co/300x200 " },
      ],
    },
    {
      id: "web",
      title: "Website Creation",
      image: "https://placehold.co/400x300?text=Website+Creation ",
      subcategories: [
        { name: "Landing Pages & One-Pagers", price: "$300", image: "https://placehold.co/300x200 " },
        { name: "E-Commerce Stores", price: "$800", image: "https://placehold.co/300x200 " },
        { name: "Portfolio & Blog Sites", price: "$400", image: "https://placehold.co/300x200 " },
        { name: "Custom Web Applications", price: "$1,200", image: "https://placehold.co/300x200 " },
        { name: "Responsive Redesigns", price: "$500", image: "https://placehold.co/300x200 " },
        { name: "CMS Integration", price: "$600", image: "https://placehold.co/300x200 " },
        { name: "Maintenance & Updates", price: "$100/month", image: "https://placehold.co/300x200 " },
      ],
    },
  ];

  const serviceGrid = document.getElementById("service-grid");
  const subcategorySection = document.getElementById("subcategories");
  const subcategoryTitle = document.getElementById("subcategory-title");
  const subcategoryList = document.getElementById("subcategory-list");

  services.forEach((service) => {
    const card = document.createElement("div");
    card.className =
      "cursor-pointer border p-4 rounded-lg shadow-sm hover:shadow transition-all";
    card.innerHTML = `
      <img src="${service.image}" alt="${service.title}" class="rounded w-full h-40 object-cover mb-4" />
      <h3 class="font-semibold text-lg">${service.title}</h3>
    `;
    card.onclick = () => showSubcategories(service);
    serviceGrid.appendChild(card);
  });

  function showSubcategories(service) {
    subcategoryTitle.textContent = service.title;
    subcategoryList.innerHTML = "";

    service.subcategories.forEach((sub) => {
      const item = document.createElement("div");
      item.className = "bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow dark:bg-gray-800";
      item.innerHTML = `
        <img src="${sub.image}" alt="${sub.name}" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h4 class="font-semibold">${sub.name}</h4>
          <div class="flex justify-between items-center mt-2">
            <span class="text-sm text-gray-600 dark:text-gray-400">${sub.price}</span>
            <button onclick="window.open('https://wa.me/923325318695 ', '_blank')"
              class="bg-black text-white text-sm px-3 py-1 rounded hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition">
              Activate
            </button>
          </div>
        </div>
      `;
      subcategoryList.appendChild(item);
    });

    subcategorySection.classList.remove("hidden");
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
  }
});