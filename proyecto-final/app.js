const events = [
  { id: 1, title: "Taller de Git desde cero", category: "Tecnología", date: "2026-11-12T17:00:00", place: "Aula 2.4", price: 0, description: "Aprende el flujo básico de Git trabajando en equipo." },
  { id: 2, title: "Club de conversación en inglés", category: "Idiomas", date: "2026-11-14T18:30:00", place: "Cafetería central", price: 0, description: "Una sesión informal para practicar conversación." },
  { id: 3, title: "Introducción a la impresión 3D", category: "Tecnología", date: "2026-11-18T16:00:00", place: "Fab Lab", price: 4, description: "Diseña una primera pieza y conoce el proceso de impresión." },
  { id: 4, title: "Ruta fotográfica por el campus", category: "Cultura", date: "2026-11-20T17:30:00", place: "Biblioteca", price: 0, description: "Practica composición y cuenta historias con imágenes." },
  { id: 5, title: "Torneo solidario de voleibol", category: "Deporte", date: "2026-11-22T10:00:00", place: "Polideportivo", price: 3, description: "Equipos mixtos y recaudación para el banco de alimentos." },
  { id: 6, title: "Cómo presentar tu proyecto final", category: "Carrera", date: "2026-11-26T18:00:00", place: "Salón de grados", price: 0, description: "Técnicas para estructurar y defender una presentación." },
];

const elements = {
  search: document.querySelector("#search"),
  filters: document.querySelector("#category-filters"),
  list: document.querySelector("#event-list"),
  count: document.querySelector("#result-count"),
  empty: document.querySelector("#empty-state"),
  clear: document.querySelector("#clear-filters"),
  theme: document.querySelector("#theme-toggle"),
};

const storedFavorites = JSON.parse(localStorage.getItem("campus-favorites") || "[]");
const state = {
  query: "",
  category: "Todas",
  favorites: new Set(storedFavorites),
};

function normalize(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function formatDate(value) {
  return new Intl.DateTimeFormat("es-ES", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character]);
}

function createFilters() {
  const categories = ["Todas", ...new Set(events.map((event) => event.category))];
  elements.filters.innerHTML = categories.map((category, index) => {
    const id = `category-${index}`;
    return `
      <input type="radio" name="category" id="${id}" value="${escapeHtml(category)}" ${index === 0 ? "checked" : ""}>
      <label for="${id}">${escapeHtml(category)}</label>
    `;
  }).join("");
}

function filteredEvents() {
  const query = normalize(state.query.trim());
  return events.filter((event) => {
    const matchesCategory = state.category === "Todas" || event.category === state.category;
    const searchable = normalize(`${event.title} ${event.place} ${event.description}`);
    return matchesCategory && searchable.includes(query);
  });
}

function eventCard(event) {
  const favorite = state.favorites.has(event.id);
  return `
    <article class="event-card">
      <div class="card-top">
        <div>
          <p class="badge">${escapeHtml(event.category)}</p>
          <h3>${escapeHtml(event.title)}</h3>
        </div>
        <button class="favorite-button" type="button" data-event-id="${event.id}"
          aria-pressed="${favorite}" aria-label="${favorite ? "Quitar de" : "Añadir a"} favoritos: ${escapeHtml(event.title)}">
          <span aria-hidden="true">${favorite ? "★" : "☆"}</span>
        </button>
      </div>
      <p class="event-description">${escapeHtml(event.description)}</p>
      <dl class="event-meta">
        <div><dt>Fecha</dt><dd>${formatDate(event.date)}</dd></div>
        <div><dt>Lugar</dt><dd>${escapeHtml(event.place)}</dd></div>
        <div><dt>Precio</dt><dd>${event.price === 0 ? "Gratis" : `${event.price} €`}</dd></div>
      </dl>
    </article>
  `;
}

function render() {
  const visibleEvents = filteredEvents();
  elements.list.innerHTML = visibleEvents.map(eventCard).join("");
  elements.count.textContent = `${visibleEvents.length} ${visibleEvents.length === 1 ? "resultado" : "resultados"}`;
  elements.empty.hidden = visibleEvents.length !== 0;
}

function saveFavorites() {
  localStorage.setItem("campus-favorites", JSON.stringify([...state.favorites]));
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  elements.theme.setAttribute("aria-pressed", String(theme === "dark"));
  localStorage.setItem("campus-theme", theme);
}

elements.search.addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});

elements.filters.addEventListener("change", (event) => {
  if (event.target.matches('input[name="category"]')) {
    state.category = event.target.value;
    render();
  }
});

elements.list.addEventListener("click", (event) => {
  const button = event.target.closest("[data-event-id]");
  if (!button) return;
  const eventId = Number(button.dataset.eventId);
  state.favorites.has(eventId) ? state.favorites.delete(eventId) : state.favorites.add(eventId);
  saveFavorites();
  render();
});

elements.clear.addEventListener("click", () => {
  state.query = "";
  state.category = "Todas";
  elements.search.value = "";
  elements.filters.querySelector('input[value="Todas"]').checked = true;
  render();
  elements.search.focus();
});

elements.theme.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
});

createFilters();
setTheme(localStorage.getItem("campus-theme") || "light");
render();

