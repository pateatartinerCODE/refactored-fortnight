const countries = {
  "United States": {
    code: "US", lat: 38.9, lng: -77.0,
    summary: "Croissance résiliente tirée par la consommation et l'innovation, avec une politique monétaire encore restrictive.",
    gdp: "2.1%", inflation: "3.0%", rate: "5.25%", currency: "USD", equityMarket: "S&P 500", riskScore: 43,
    geoRisks: ["Polarisation politique interne", "Rivalité techno-commerciale avec la Chine"],
    opportunities: ["IA, cloud et productivité", "Investissements en transition énergétique"],
    assetImpact: ["Actions: leadership big tech", "Obligations: volatilité sur la courbe", "FX: USD supporté", "Commodities: demande énergétique stable"],
    thesis: "Surpondérer les actions de qualité avec pricing power, neutraliser la duration et conserver une couverture USD.",
    signals: { equity: ["UP", "Bénéfices robustes et profondeur de marché."], bond: ["NEUTRAL", "Inflation encore au-dessus de la cible mais en décélération."], fx: ["UP", "Différentiel de taux favorable au dollar."], commodity: ["NEUTRAL", "Demande stable, offre sensible aux chocs."] },
    trend: [2.8, 2.6, 2.4, 2.2, 2.0, 2.1, 2.0, 2.1], radar: { politique: 55, inflation: 45, externe: 35, dette: 62, croissance: 40 }
  },
  "China": {
    code: "CN", lat: 39.9, lng: 116.4,
    summary: "Reprise hétérogène, soutien budgétaire ciblé et fragilité persistante de l'immobilier.",
    gdp: "4.6%", inflation: "0.9%", rate: "3.45%", currency: "CNY", equityMarket: "CSI 300", riskScore: 61,
    geoRisks: ["Tensions technologiques avec les États-Unis", "Risque chaînes d'approvisionnement"],
    opportunities: ["Industrie EV/batteries", "Automation et robotique"],
    assetImpact: ["Actions: valorisations attractives mais sentiment fragile", "Obligations: biais accommodant", "FX: CNY sous pression", "Commodities: impact majeur sur métaux industriels"],
    thesis: "Approche barbell: exposition sélective aux leaders export + protection défensive Asie.",
    signals: { equity: ["NEUTRAL", "Mesures de soutien positives mais confiance inégale."], bond: ["UP", "Environnement de taux plus souple."], fx: ["DOWN", "Différentiel de croissance perçu vs US moins favorable."], commodity: ["UP", "Demande structurelle en métaux de transition."] },
    trend: [5.8, 5.5, 5.1, 4.8, 4.7, 4.5, 4.4, 4.6], radar: { politique: 58, inflation: 25, externe: 70, dette: 68, croissance: 52 }
  },
  "Vietnam": {
    code: "VN", lat: 21.0, lng: 105.8,
    summary: "Croissance dynamique tirée par les exportations manufacturières et le reroutage des supply chains.",
    gdp: "6.2%", inflation: "3.4%", rate: "4.50%", currency: "VND", equityMarket: "VN-Index", riskScore: 47,
    geoRisks: ["Sensibilité au commerce mondial", "Exposition à l'énergie importée"],
    opportunities: ["Relocalisation industrielle", "Infrastructure digitale"],
    assetImpact: ["Actions: potentiel de rattrapage", "Obligations: marché en développement", "FX: VND dépend du USD", "Commodities: exposé aux coûts énergétiques"],
    thesis: "Thèse growth frontier avec sélection rigoureuse des exportateurs et hedge devise partiel.",
    signals: { equity: ["UP", "Momentum manufacturier favorable."], bond: ["NEUTRAL", "Liquidité locale encore variable."], fx: ["NEUTRAL", "Stabilité pilotée par la banque centrale."], commodity: ["DOWN", "Vulnérable aux hausses énergétiques."] },
    trend: [5.1, 5.3, 5.6, 5.8, 6.0, 6.1, 6.0, 6.2], radar: { politique: 38, inflation: 40, externe: 57, dette: 42, croissance: 28 }
  },
  "India": {
    code: "IN", lat: 28.6, lng: 77.2,
    summary: "Grand moteur de croissance domestique avec capex public et digitalisation massive.",
    gdp: "6.8%", inflation: "4.7%", rate: "6.50%", currency: "INR", equityMarket: "NIFTY 50", riskScore: 49,
    geoRisks: ["Prix de l'énergie importée", "Risque électoral/réglementaire"],
    opportunities: ["Manufacturing + services IT", "Infrastructure et consommation"],
    assetImpact: ["Actions: premium de valorisation justifié", "Obligations: rendement réel attractif", "FX: INR sensible au pétrole", "Commodities: demande robuste"],
    thesis: "Maintenir un biais positif long terme, privilégier financials, infra et digital platforms.",
    signals: { equity: ["UP", "Croissance bénéficiaire structurellement élevée."], bond: ["UP", "Rendement réel reste défensif."], fx: ["NEUTRAL", "Flux d'investissements compensent la facture énergétique."], commodity: ["UP", "Demande industrielle soutenue."] },
    trend: [6.1, 6.2, 6.4, 6.5, 6.6, 6.7, 6.7, 6.8], radar: { politique: 45, inflation: 50, externe: 44, dette: 55, croissance: 30 }
  },
  "South Korea": {
    code: "KR", lat: 37.6, lng: 127.0,
    summary: "Économie cyclique très exposée aux semi-conducteurs et au commerce global.",
    gdp: "2.3%", inflation: "2.6%", rate: "3.50%", currency: "KRW", equityMarket: "KOSPI", riskScore: 52,
    geoRisks: ["Tension géopolitique péninsule coréenne", "Cycle global des puces"],
    opportunities: ["Mémoire HBM/IA", "Industrie batteries"],
    assetImpact: ["Actions: levier sur cycle tech", "Obligations: profil qualité", "FX: KRW pro-cyclique", "Commodities: exposé aux métaux"],
    thesis: "Positionnement tactique sur leaders semi lors des phases d'accélération du cycle IA.",
    signals: { equity: ["UP", "Reprise du cycle semi."], bond: ["NEUTRAL", "Inflation mieux ancrée."], fx: ["DOWN", "Devise sensible au risk-off global."], commodity: ["NEUTRAL", "Dépendance aux inputs importés."] },
    trend: [1.4, 1.6, 1.8, 2.0, 2.1, 2.2, 2.2, 2.3], radar: { politique: 60, inflation: 36, externe: 64, dette: 48, croissance: 41 }
  },
  "Japan": {
    code: "JP", lat: 35.7, lng: 139.7,
    summary: "Sortie graduelle du régime de déflation, politique monétaire en normalisation progressive.",
    gdp: "1.1%", inflation: "2.2%", rate: "0.10%", currency: "JPY", equityMarket: "Nikkei 225", riskScore: 46,
    geoRisks: ["Dépendance énergétique", "Sensibilité aux tensions régionales"],
    opportunities: ["Réformes de gouvernance", "Robotique et automatisation"],
    assetImpact: ["Actions: rerating structurel", "Obligations: risque de remontée JGB", "FX: JPY volatile", "Commodities: importateur net"],
    thesis: "Privilégier entreprises exportatrices et cas de transformation de gouvernance.",
    signals: { equity: ["UP", "Réformes corporate favorables."], bond: ["DOWN", "Normalisation BOJ pèse sur duration."], fx: ["NEUTRAL", "JPY dépend de l'écart de taux US-JP."], commodity: ["DOWN", "Termes de l'échange sensibles aux prix énergie."] },
    trend: [0.4, 0.5, 0.7, 0.8, 0.9, 1.0, 1.0, 1.1], radar: { politique: 42, inflation: 35, externe: 49, dette: 78, croissance: 55 }
  },
  "Germany": {
    code: "DE", lat: 52.5, lng: 13.4,
    summary: "Économie industrielle sous pression cyclique, mais base exportatrice et ingénierie solides.",
    gdp: "0.6%", inflation: "2.5%", rate: "3.75%", currency: "EUR", equityMarket: "DAX", riskScore: 57,
    geoRisks: ["Coût énergétique en Europe", "Demande externe chinoise plus faible"],
    opportunities: ["Green industrial transition", "Automation industrielle"],
    assetImpact: ["Actions: dispersion sectorielle élevée", "Obligations: sensible trajectoire BCE", "FX: EUR dépend du cycle global", "Commodities: impact direct énergie"],
    thesis: "Stratégie sélective sur champions industriels à bilan solide et pricing power global.",
    signals: { equity: ["NEUTRAL", "Cycle manufacturier encore mou."], bond: ["UP", "Désinflation graduelle en zone euro."], fx: ["NEUTRAL", "EUR coincé entre croissance faible et balance courante."], commodity: ["DOWN", "Demande industrielle interne modérée."] },
    trend: [1.2, 1.0, 0.9, 0.8, 0.7, 0.6, 0.5, 0.6], radar: { politique: 40, inflation: 44, externe: 62, dette: 53, croissance: 66 }
  },
  "France": {
    code: "FR", lat: 48.8, lng: 2.3,
    summary: "Croissance modérée avec soutien de la demande intérieure et contraintes budgétaires accrues.",
    gdp: "0.9%", inflation: "2.4%", rate: "3.75%", currency: "EUR", equityMarket: "CAC 40", riskScore: 54,
    geoRisks: ["Risque social interne", "Pression budgétaire et trajectoire de dette"],
    opportunities: ["Aéronautique/luxe", "Nucléaire et transition énergétique"],
    assetImpact: ["Actions: résilience des multinationales", "Obligations: prime de risque budgétaire", "FX: dépend dynamique zone euro", "Commodities: faible levier direct"],
    thesis: "Conserver exposition aux leaders globaux, tout en surveillant le spread souverain.",
    signals: { equity: ["NEUTRAL", "Qualité élevée mais sensibilité cycle Europe."], bond: ["DOWN", "Vigilance sur la trajectoire budgétaire."], fx: ["NEUTRAL", "Dépendance à la BCE et au dollar."], commodity: ["NEUTRAL", "Impact indirect via coûts d'importation."] },
    trend: [1.4, 1.3, 1.2, 1.1, 1.0, 0.9, 0.8, 0.9], radar: { politique: 52, inflation: 42, externe: 46, dette: 72, croissance: 60 }
  }
};

const glossary = {
  inflation: "Hausse générale des prix. Si elle monte trop vite, le pouvoir d'achat baisse et les banques centrales relèvent souvent les taux.",
  GDP: "Le PIB (GDP) mesure la taille de l'économie sur une période donnée. Plus il progresse, plus l'activité économique est forte.",
  "rate cut": "Baisse des taux directeurs par la banque centrale pour stimuler crédit, consommation et investissement.",
  yield: "Rendement d'une obligation. Quand les rendements montent, le prix des obligations existantes baisse en général.",
  FX: "Le marché des devises. Il mesure la valeur relative d'une monnaie par rapport à une autre.",
  "risk premium": "Rémunération supplémentaire demandée pour porter un actif plus risqué."
};

const countryButtons = document.getElementById("countryButtons");
const compareSelect = document.getElementById("compareSelect");
const analysis = document.getElementById("analysis");
const welcome = document.getElementById("welcome");
const loadingMask = document.getElementById("loadingMask");
let currentCountry = null;
let globe;

function init() {
  Object.keys(countries).forEach((name) => {
    const btn = document.createElement("button");
    btn.className = "country-btn";
    btn.textContent = name;
    btn.addEventListener("click", () => selectCountry(name));
    countryButtons.appendChild(btn);

    const opt = document.createElement("option");
    opt.value = name;
    opt.textContent = name;
    compareSelect.appendChild(opt);
  });

  compareSelect.addEventListener("change", () => renderComparison(compareSelect.value));
  document.getElementById("closeDrawer").addEventListener("click", () => document.getElementById("eduDrawer").classList.remove("open"));
  document.getElementById("copyBriefBtn").addEventListener("click", copyBrief);
  document.getElementById("printBriefBtn").addEventListener("click", () => window.print());

  initGlobe();
}

function initGlobe() {
  const points = Object.entries(countries).map(([name, d]) => ({
    name,
    lat: d.lat,
    lng: d.lng,
    size: 0.34,
    color: "#73ffc4"
  }));

  if (typeof Globe === "undefined") {
    document.getElementById("globeViz").innerHTML = "<p style='padding:20px;color:#9fb1d4'>Impossible de charger le moteur 3D (hors ligne).</p>";
    return;
  }

  globe = Globe()(document.getElementById("globeViz"))
    .globeImageUrl("https://unpkg.com/three-globe/example/img/earth-night.jpg")
    .bumpImageUrl("https://unpkg.com/three-globe/example/img/earth-topology.png")
    .backgroundColor("rgba(0,0,0,0)")
    .pointsData(points)
    .pointLat("lat")
    .pointLng("lng")
    .pointAltitude("size")
    .pointColor(() => "#71ffd0")
    .pointRadius(0.42)
    .pointLabel((d) => `<div style='padding:6px'><b>${d.name}</b><br/>Click to load intelligence brief</div>`)
    .onPointClick((d) => selectCountry(d.name, true));

  globe.controls().autoRotate = true;
  globe.controls().autoRotateSpeed = 0.28;
  globe.controls().enableDamping = true;
  globe.controls().dampingFactor = 0.06;
}

function selectCountry(name, fromGlobe = false) {
  currentCountry = name;
  const data = countries[name];
  welcome.classList.add("hidden");
  analysis.classList.remove("hidden");

  showLoading();
  setTimeout(() => {
    document.getElementById("countryTitle").textContent = name;
    document.getElementById("macroSummary").textContent = data.summary;
    renderKpis(data);
    renderRisk(data.riskScore);
    renderSignals(data.signals);
    renderList("geoRisks", data.geoRisks);
    renderList("opportunities", data.opportunities);
    renderList("assetImpact", data.assetImpact);
    document.getElementById("thesis").textContent = data.thesis;

    drawTrend(data.trend);
    drawRadar(data.radar);
    setActiveCountryButtons(name);
    compareSelect.value = name;
    document.getElementById("comparisonCard").classList.add("hidden");

    if (fromGlobe && globe) {
      globe.pointOfView({ lat: data.lat, lng: data.lng, altitude: 1.7 }, 900);
    }
    hideLoading();
  }, 320);
}

function renderKpis(data) {
  const cards = [
    ["GDP", data.gdp, "GDP"],
    ["Inflation", data.inflation, "inflation"],
    ["Taux directeur", data.rate, "rate cut"],
    ["Devise", data.currency, "FX"],
    ["Marché actions", data.equityMarket, "yield"],
    ["Risk premium", `${data.riskScore}/100`, "risk premium"]
  ];

  const box = document.getElementById("kpiCards");
  box.innerHTML = cards
    .map(([label, value, term]) => `<article class="kpi"><div class="label"><span class="term" data-term="${term}">${label}</span></div><div class="value">${value}</div></article>`)
    .join("");
  attachTermHandlers();
}

function renderRisk(score) {
  document.getElementById("riskValue").textContent = `${score} / 100`;
  const bar = document.getElementById("riskBar");
  bar.style.width = "0";
  requestAnimationFrame(() => { bar.style.width = `${score}%`; });
}

function renderSignals(signals) {
  const container = document.getElementById("signals");
  container.innerHTML = Object.entries(signals).map(([k, [state, explanation]]) => {
    const css = state.toLowerCase();
    return `<article class="signal"><div><strong>${capitalize(k)}</strong> — <span class="state ${css}">${state}</span></div><small>${explanation}</small></article>`;
  }).join("");
}

function renderComparison(compareName) {
  if (!currentCountry || compareName === currentCountry) return;
  const a = countries[currentCountry];
  const b = countries[compareName];
  document.getElementById("comparisonCard").classList.remove("hidden");
  const rows = [["GDP", a.gdp, b.gdp], ["Inflation", a.inflation, b.inflation], ["Rate", a.rate, b.rate], ["Currency", a.currency, b.currency], ["Risk score", a.riskScore, b.riskScore], ["Equity index", a.equityMarket, b.equityMarket]];
  document.getElementById("comparisonGrid").innerHTML = rows.map(([label, left, right]) => `<article class="metric"><div class="label">${label}</div><div>${currentCountry}: <strong>${left}</strong></div><div>${compareName}: <strong>${right}</strong></div></article>`).join("");
}

function drawTrend(points) {
  const canvas = document.getElementById("macroTrend");
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  ctx.fillStyle = "rgba(6,11,22,.38)";
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = "rgba(133,170,236,.25)";
  for (let i = 1; i <= 4; i++) {
    const y = (h / 5) * i;
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
  }

  const min = Math.min(...points) - .5;
  const max = Math.max(...points) + .5;
  const coords = points.map((p, i) => ({ x: (i / (points.length - 1)) * (w - 24) + 12, y: h - ((p - min) / (max - min)) * (h - 30) - 14 }));

  ctx.beginPath();
  coords.forEach((c, i) => i === 0 ? ctx.moveTo(c.x, c.y) : ctx.lineTo(c.x, c.y));
  ctx.strokeStyle = "#54d6ff";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.beginPath();
  coords.forEach((c, i) => i === 0 ? ctx.moveTo(c.x, h - 12) : ctx.lineTo(c.x, h - 12));
  coords.slice().reverse().forEach((c) => ctx.lineTo(c.x, c.y));
  ctx.closePath();
  const grad = ctx.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, "rgba(84,214,255,.28)");
  grad.addColorStop(1, "rgba(84,214,255,0)");
  ctx.fillStyle = grad;
  ctx.fill();
}

function drawRadar(r) {
  const canvas = document.getElementById("riskRadar");
  const ctx = canvas.getContext("2d");
  const labels = Object.keys(r), vals = Object.values(r);
  const cx = canvas.width / 2, cy = canvas.height / 2, radius = 82;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let level = 1; level <= 4; level++) {
    ctx.beginPath();
    labels.forEach((_, i) => {
      const angle = (Math.PI * 2 * i) / labels.length - Math.PI / 2;
      const rr = (radius * level) / 4;
      const x = cx + Math.cos(angle) * rr;
      const y = cy + Math.sin(angle) * rr;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.strokeStyle = "rgba(133,170,236,.35)";
    ctx.stroke();
  }

  ctx.beginPath();
  vals.forEach((v, i) => {
    const angle = (Math.PI * 2 * i) / vals.length - Math.PI / 2;
    const rr = (radius * v) / 100;
    const x = cx + Math.cos(angle) * rr;
    const y = cy + Math.sin(angle) * rr;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.fillStyle = "rgba(84,214,255,.24)";
  ctx.strokeStyle = "#54d6ff";
  ctx.lineWidth = 1.8;
  ctx.fill();
  ctx.stroke();

  labels.forEach((label, i) => {
    const angle = (Math.PI * 2 * i) / labels.length - Math.PI / 2;
    const x = cx + Math.cos(angle) * (radius + 16);
    const y = cy + Math.sin(angle) * (radius + 16);
    ctx.fillStyle = "#b3c7e8";
    ctx.font = "12px Inter";
    ctx.fillText(capitalize(label), x - 22, y);
  });
}

function renderList(id, values) {
  document.getElementById(id).innerHTML = values.map((v) => `<li>${v}</li>`).join("");
}

function attachTermHandlers() {
  document.querySelectorAll(".term").forEach((el) => {
    el.addEventListener("click", () => {
      const term = el.dataset.term;
      document.getElementById("eduTermTitle").textContent = term;
      document.getElementById("eduTermBody").textContent = glossary[term] || "Définition bientôt disponible.";
      document.getElementById("eduDrawer").classList.add("open");
    });
  });
}

function setActiveCountryButtons(name) {
  document.querySelectorAll(".country-btn").forEach((b) => b.classList.toggle("active", b.textContent === name));
}

function showLoading() {
  loadingMask.classList.remove("hidden");
}

function hideLoading() {
  loadingMask.classList.add("hidden");
}

function copyBrief() {
  if (!currentCountry) return;
  const d = countries[currentCountry];
  const text = `${currentCountry}\nRésumé: ${d.summary}\nGDP: ${d.gdp}\nInflation: ${d.inflation}\nRate: ${d.rate}\nRisk: ${d.riskScore}/100\nThesis: ${d.thesis}`;
  navigator.clipboard.writeText(text).then(() => alert("Brief copié dans le presse-papiers."));
}

function capitalize(v) {
  return v.charAt(0).toUpperCase() + v.slice(1);
}

init();
