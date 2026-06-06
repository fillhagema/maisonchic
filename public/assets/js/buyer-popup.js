(function () {
  if (window.__maisonChicBuyerPopup) return;
  window.__maisonChicBuyerPopup = true;

  var products = [
    {
      name: "Tonnelle de Jardin Pliable 3x3m",
      image: "/tonnelle-de-jardin-3x3m-fr-fr/img/hero-blanc.jpg"
    },
    {
      name: "Nespresso INISSIA + 100 Capsules",
      image: "/machine-caf-nespresso-inissia-100-capsules-fr-fr/img/rouge.jpg"
    },
    {
      name: "Table Pliante de Pique-Nique 180cm",
      image: "/table-pliante-de-pique-nique-180x75x72cm-fr-fr/img/variant-1.jpg"
    },
    {
      name: "2400W Plancha électrique XXL",
      image: "/2400w-plancha-lectrique-xxl-fr-fr/img/product-1.jpg"
    },
    {
      name: "Parasol de Jardin Inclinable 270cm",
      image: "/parasol-de-jardin-270cm-fr/img/variant-beige.jpg"
    },
    {
      name: "Ensemble Bistrot Pliant 3 Pièces",
      image: "/ensemble-de-bistrot-pliant-mobilier-de-jardin-en-m-tal-3-pi-ces-avec-1-table-et-2-chaises-r-sistant-aux-intemp-ries-et-aux-uv-pour-balcon-terrasse-et-jardin-rouge-brique-fr-fr/img/variant-rouge.jpg"
    },
    {
      name: "Bear Hachoir Électrique 2L + 1.8L",
      image: "/bear-2l-1-8l-hachoir-lectrique-fr/img/product-hero.jpg"
    },
    {
      name: "Mixeur Plongeant Multifonction 1000W",
      image: "/mixeur-plongeant/img/ref-1.jpg"
    },
    {
      name: "Set Ustensiles Cuisine Silicone 12 Pièces",
      image: "/img/set-ustensiles-de-cuisine-silicone-12-pi-ces/variant-1.jpg"
    },
    {
      name: "Milwaukee Power Combo",
      image: "/milwaukee-power-combo-fr/img/hero.jpg"
    }
  ];

  var buyers = [
    { name: "L****o", city: "Paris" },
    { name: "M****e", city: "Lyon" },
    { name: "S****a", city: "Marseille" },
    { name: "A****n", city: "Toulouse" },
    { name: "C****e", city: "Bordeaux" },
    { name: "N****s", city: "Nantes" },
    { name: "R****d", city: "Lille" },
    { name: "E****a", city: "Nice" }
  ];

  var style = document.createElement("style");
  style.textContent =
    ".mc-buyer-popup{position:fixed;left:24px;bottom:24px;z-index:9999;width:min(410px,calc(100vw - 28px));display:grid;grid-template-columns:74px 1fr auto;gap:14px;align-items:center;background:#8df0b8;border:1px solid #5fcf92;border-radius:10px;box-shadow:0 16px 42px rgba(16,24,40,.18);padding:14px 16px 14px 14px;color:#123026;font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;transform:translateY(140%);opacity:0;transition:transform .45s cubic-bezier(.2,.8,.2,1),opacity .3s ease}" +
    ".mc-buyer-popup.is-visible{transform:translateY(0);opacity:1}" +
    ".mc-buyer-popup__image{width:74px;height:74px;border-radius:18px;object-fit:cover;background:#fff}" +
    ".mc-buyer-popup__product{font-weight:800;font-size:17px;line-height:1.2;margin-bottom:8px;color:#28634a}" +
    ".mc-buyer-popup__text{font-size:15px;line-height:1.35;color:#111827}" +
    ".mc-buyer-popup__time{font-size:13px;margin-top:4px;color:#1f2937}" +
    ".mc-buyer-popup__close{width:34px;height:34px;display:grid;place-items:center;border:0;background:transparent;color:#2f7053;cursor:pointer;font-size:34px;line-height:1}" +
    "@media(max-width:640px){.mc-buyer-popup{left:12px;right:12px;bottom:16px;width:auto;grid-template-columns:62px 1fr auto;padding:12px}.mc-buyer-popup__image{width:62px;height:62px;border-radius:16px}.mc-buyer-popup__product{font-size:15px}.mc-buyer-popup__text{font-size:14px}.mc-buyer-popup__close{font-size:30px}}";
  document.head.appendChild(style);

  var popup = document.createElement("div");
  popup.className = "mc-buyer-popup";
  popup.setAttribute("role", "status");
  popup.setAttribute("aria-live", "polite");
  popup.innerHTML =
    '<img class="mc-buyer-popup__image" alt="Produit commandé">' +
    '<div><div class="mc-buyer-popup__product"></div><div class="mc-buyer-popup__text"></div><div class="mc-buyer-popup__time"></div></div>' +
    '<button class="mc-buyer-popup__close" type="button" aria-label="Fermer">×</button>';
  document.body.appendChild(popup);

  var img = popup.querySelector(".mc-buyer-popup__image");
  var productText = popup.querySelector(".mc-buyer-popup__product");
  var buyerText = popup.querySelector(".mc-buyer-popup__text");
  var timeText = popup.querySelector(".mc-buyer-popup__time");
  var close = popup.querySelector(".mc-buyer-popup__close");
  var hideTimer;

  img.src = products[0].image;
  img.alt = products[0].name;

  function randomItem(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  function randomDelay() {
    return 180000 + Math.floor(Math.random() * 60000);
  }

  function showPopup() {
    var product = randomItem(products);
    var buyer = randomItem(buyers);
    var minutes = 3 + Math.floor(Math.random() * 16);
    productText.textContent = product.name;
    buyerText.textContent = buyer.name + " de " + buyer.city + " vient de commander ce produit";
    timeText.textContent = "Il y a " + minutes + " minutes";
    img.src = product.image;
    img.alt = product.name;
    popup.classList.add("is-visible");
    clearTimeout(hideTimer);
    hideTimer = setTimeout(function () {
      popup.classList.remove("is-visible");
    }, 9000);
    setTimeout(showPopup, randomDelay());
  }

  close.addEventListener("click", function () {
    popup.classList.remove("is-visible");
  });

  setTimeout(showPopup, 9000);
})();
