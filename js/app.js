import {
  ITINERARY_DAYS,
  MAP_PINS,
  BUDGET_STYLES,
  FIXED_TICKETS_PER_PERSON_VND,
  EXCHANGE_RATE_VND_PER_EUR,
  PACKING_CHECKLIST,
  VIETNAMESE_PHRASES,
} from './data.js';

const STORAGE_KEYS = {
  doneStops: 'tamcoc_done_stops_v1',
  packedItems: 'tamcoc_packed_items_v1',
  startDate: 'tamcoc_start_date_v1',
};

const state = {
  startDate: getInitialStartDate(),
  activeDay: 'all',
  doneStops: loadSet(STORAGE_KEYS.doneStops),
  packedItems: loadSet(STORAGE_KEYS.packedItems),
  activePinId: MAP_PINS[0].id,
  travelers: 2,
  budgetStyle: 'comfort',
};

/* ==========================================================================
   Date & Formatting Helpers
   ========================================================================== */
function getTodayISO() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function getInitialStartDate() {
  const saved = localStorage.getItem(STORAGE_KEYS.startDate);
  if (saved && /^\d{4}-\d{2}-\d{2}$/.test(saved)) {
    return saved;
  }
  return getTodayISO();
}

function addDays(isoDate, offset) {
  const [y, m, d] = isoDate.split('-').map(Number);
  const date = new Date(y, m - 1, d + offset);
  return date;
}

function formatItalianDate(date, { short = false } = {}) {
  const formatted = new Intl.DateTimeFormat('it-IT', {
    weekday: short ? 'short' : 'long',
    day: 'numeric',
    month: short ? 'short' : 'long',
  }).format(date);
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

function formatVnd(amount) {
  return `${new Intl.NumberFormat('it-IT').format(Math.round(amount))} VND`;
}

function formatEur(vndAmount) {
  const eur = Math.round(vndAmount / EXCHANGE_RATE_VND_PER_EUR);
  return `€ ${new Intl.NumberFormat('it-IT').format(eur)}`;
}

function loadSet(key) {
  try {
    const raw = localStorage.getItem(key);
    return new Set(raw ? JSON.parse(raw) : []);
  } catch {
    return new Set();
  }
}

function saveSet(key, set) {
  try {
    localStorage.setItem(key, JSON.stringify([...set]));
  } catch {
    // Ignore storage quota errors
  }
}

/* ==========================================================================
   Hero & Trip Dates
   ========================================================================== */
function renderTripDates() {
  const start = addDays(state.startDate, 0);
  const end = addDays(state.startDate, 2);
  const isToday = state.startDate === getTodayISO();

  const startEl = document.getElementById('trip-start-display');
  const endEl = document.getElementById('trip-end-display');
  const dateInput = document.getElementById('trip-start-input');

  if (startEl) {
    startEl.textContent = `${isToday ? 'Oggi · ' : ''}${formatItalianDate(start, { short: true })}, 12:00`;
  }
  if (endEl) {
    endEl.textContent = `${formatItalianDate(end, { short: true })}, 11:30`;
  }
  if (dateInput && dateInput.value !== state.startDate) {
    dateInput.value = state.startDate;
  }
}

/* ==========================================================================
   Day Tabs & Timeline
   ========================================================================== */
function renderDayTabs() {
  const container = document.getElementById('day-tabs');
  if (!container) return;

  const tabs = [
    {
      id: 'all',
      title: 'Tutto il viaggio',
      sub: '2 notti · 12 tappe',
    },
    ...ITINERARY_DAYS.map((day) => {
      const date = addDays(state.startDate, day.dayOffset);
      return {
        id: day.id,
        title: day.shortLabel,
        sub: formatItalianDate(date, { short: true }),
      };
    }),
  ];

  container.innerHTML = tabs
    .map(
      (tab) => `
      <button
        type="button"
        id="tab-${tab.id}"
        class="day-tab ${state.activeDay === tab.id ? 'active' : ''}"
        role="tab"
        aria-selected="${state.activeDay === tab.id}"
        data-day="${tab.id}"
      >
        <span class="day-tab-title">${tab.title}</span>
        <span class="day-tab-sub">${tab.sub}</span>
      </button>
    `
    )
    .join('');

  container.querySelectorAll('.day-tab').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.activeDay = btn.dataset.day;
      renderDayTabs();
      renderTimeline();
    });
  });
}

function renderProgress() {
  const total = ITINERARY_DAYS.reduce((acc, d) => acc + d.stops.length, 0);
  const done = state.doneStops.size;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  const fill = document.getElementById('progress-fill');
  const label = document.getElementById('progress-label');
  const navPill = document.getElementById('nav-progress-text');

  if (fill) fill.style.width = `${pct}%`;
  if (label) label.textContent = `${done}/${total} tappe completate`;
  if (navPill) navPill.textContent = `${done}/${total} fatte`;
}

function renderTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container) return;

  const visibleDays =
    state.activeDay === 'all'
      ? ITINERARY_DAYS
      : ITINERARY_DAYS.filter((d) => d.id === state.activeDay);

  container.innerHTML = visibleDays
    .map((day) => {
      const dateObj = addDays(state.startDate, day.dayOffset);
      const isToday = day.dayOffset === 0 && state.startDate === getTodayISO();
      const dateStr = `${isToday ? 'Oggi, ' : ''}${formatItalianDate(dateObj)}`;

      const stopsHtml = day.stops
        .map((stop) => {
          const isDone = state.doneStops.has(stop.id);
          return `
            <article class="stop-card ${isDone ? 'is-done' : ''}" id="stop-${stop.id}">
              <div class="stop-time-col">
                <span class="stop-time">${stop.time}</span>
                <span class="stop-duration">${stop.duration}</span>
                <span class="stop-transport">${stop.transport}</span>
              </div>
              <div class="stop-body">
                <div class="stop-top">
                  <div>
                    <h4 class="stop-title">${stop.title}</h4>
                    <p class="stop-subtitle">${stop.subtitle}</p>
                  </div>
                  <button
                    type="button"
                    class="stop-check-btn"
                    data-toggle-stop="${stop.id}"
                    aria-pressed="${isDone}"
                  >
                    <span>${isDone ? '✓ Completata' : 'Segna fatta'}</span>
                  </button>
                </div>
                <p class="stop-desc">${stop.description}</p>
                <div class="stop-tip">
                  <strong>Consiglio pratico:</strong> ${stop.tip}
                </div>
                <div class="stop-footer">
                  <span class="stop-cost">${stop.costLabel}</span>
                  <div class="stop-actions">
                    <button
                      type="button"
                      class="btn-link"
                      data-focus-pin="${stop.mapPinId}"
                    >
                      Vedi su mappa
                    </button>
                    <a
                      class="btn-link"
                      href="${stop.mapsUrl}"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Maps ↗
                    </a>
                  </div>
                </div>
              </div>
            </article>
          `;
        })
        .join('');

      return `
        <div class="day-group">
          <div class="day-banner">
            <div>
              <h3>${day.shortLabel} — ${day.title}</h3>
            </div>
            <span class="day-banner-meta">${dateStr} · ${day.periodLabel}</span>
          </div>
          <div class="timeline-list">
            ${stopsHtml}
          </div>
        </div>
      `;
    })
    .join('');

  container.querySelectorAll('[data-toggle-stop]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.toggleStop;
      if (state.doneStops.has(id)) {
        state.doneStops.delete(id);
      } else {
        state.doneStops.add(id);
      }
      saveSet(STORAGE_KEYS.doneStops, state.doneStops);
      renderTimeline();
      renderProgress();
    });
  });

  container.querySelectorAll('[data-focus-pin]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.activePinId = btn.dataset.focusPin;
      renderMap();
      const mapSection = document.getElementById('mappa');
      if (mapSection) {
        mapSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ==========================================================================
   Interactive Karst Map
   ========================================================================== */
function renderMap() {
  const pinsLayer = document.getElementById('map-pins-layer');
  const detailContainer = document.getElementById('map-detail-card');
  const pillsContainer = document.getElementById('map-pin-pills');

  if (pinsLayer) {
    pinsLayer.innerHTML = MAP_PINS.map((pin) => {
      const active = pin.id === state.activePinId;
      const labelOffsetY = pin.y < 110 ? 26 : -19;
      return `
        <g
          class="map-pin ${active ? 'active' : ''}"
          data-pin-id="${pin.id}"
          tabindex="0"
          role="button"
          aria-label="Seleziona ${pin.title}"
        >
          <circle class="map-pin-circle" cx="${pin.x}" cy="${pin.y}" r="${active ? 14 : 12}" />
          <text class="map-pin-num" x="${pin.x}" y="${pin.y}">${pin.num}</text>
          <text class="map-pin-label" x="${pin.x}" y="${pin.y + labelOffsetY}" text-anchor="middle">
            ${pin.label}
          </text>
        </g>
      `;
    }).join('');

    pinsLayer.querySelectorAll('.map-pin').forEach((el) => {
      const select = () => {
        state.activePinId = el.dataset.pinId;
        renderMap();
      };
      el.addEventListener('click', select);
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          select();
        }
      });
    });
  }

  if (pillsContainer) {
    pillsContainer.innerHTML = MAP_PINS.map(
      (pin) => `
        <button
          type="button"
          class="map-pill-btn ${pin.id === state.activePinId ? 'active' : ''}"
          data-pin-pill="${pin.id}"
        >
          ${pin.num}. ${pin.label}
        </button>
      `
    ).join('');

    pillsContainer.querySelectorAll('.map-pill-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.activePinId = btn.dataset.pinPill;
        renderMap();
      });
    });
  }

  const activePin = MAP_PINS.find((p) => p.id === state.activePinId) || MAP_PINS[0];
  if (detailContainer && activePin) {
    detailContainer.innerHTML = `
      <div>
        <span class="map-detail-badge">${activePin.dayTag}</span>
        <h3>${activePin.title}</h3>
        <p class="stop-desc">${activePin.description}</p>
        <div class="map-detail-meta">
          <div class="meta-item">
            <span>Distanza</span>
            <strong>${activePin.distance}</strong>
          </div>
          <div class="meta-item">
            <span>Orario ideale</span>
            <strong>${activePin.bestTime}</strong>
          </div>
        </div>
      </div>
      <div>
        <a
          class="btn-link"
          href="${activePin.mapsUrl}"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apri posizione in Google Maps ↗
        </a>
      </div>
    `;
  }
}

/* ==========================================================================
   Budget Calculator
   ========================================================================== */
function renderBudget() {
  const styleCfg = BUDGET_STYLES[state.budgetStyle];
  const rooms = Math.ceil(state.travelers / 2);
  const nights = 2;

  const hotelVnd = rooms * nights * styleCfg.hotelPerNightPerRoomVnd;
  const ticketsVnd = state.travelers * FIXED_TICKETS_PER_PERSON_VND;
  const foodVnd = state.travelers * styleCfg.foodTotalPerPersonVnd;
  const transportVnd = state.travelers * styleCfg.transportPerPersonVnd;
  const totalVnd = hotelVnd + ticketsVnd + foodVnd + transportVnd;

  const travelersVal = document.getElementById('travelers-value');
  if (travelersVal) {
    travelersVal.textContent = `${state.travelers} ${state.travelers === 1 ? 'persona' : 'persone'}`;
  }

  document.querySelectorAll('[data-budget-style]').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.budgetStyle === state.budgetStyle);
  });

  const summary = document.getElementById('budget-summary');
  if (!summary) return;

  summary.innerHTML = `
    <div class="budget-total-header">
      <div>
        <div class="section-eyebrow" style="margin-bottom: 4px;">Stima totale (2 notti)</div>
        <div class="budget-eur">${formatEur(totalVnd)}</div>
      </div>
      <div class="budget-vnd">${formatVnd(totalVnd)}</div>
    </div>
    <div class="budget-rows">
      <div class="budget-row">
        <span class="budget-row-label">Alloggio (${nights} notti · ${rooms} ${rooms === 1 ? 'camera' : 'camere'})</span>
        <span class="budget-row-val">${formatEur(hotelVnd)} · ${formatVnd(hotelVnd)}</span>
      </div>
      <div class="budget-row">
        <span class="budget-row-label">Barche, grotte, Hang Múa & templi</span>
        <span class="budget-row-val">${formatEur(ticketsVnd)} · ${formatVnd(ticketsVnd)}</span>
      </div>
      <div class="budget-row">
        <span class="budget-row-label">Pasti, caffè & acqua (2 giorni)</span>
        <span class="budget-row-val">${formatEur(foodVnd)} · ${formatVnd(foodVnd)}</span>
      </div>
      <div class="budget-row">
        <span class="budget-row-label">Bici/scooter locale & transfer</span>
        <span class="budget-row-val">${formatEur(transportVnd)} · ${formatVnd(transportVnd)}</span>
      </div>
    </div>
    <p class="budget-note">
      Cambio indicativo: 1 € ≈ ${new Intl.NumberFormat('it-IT').format(EXCHANGE_RATE_VND_PER_EUR)} VND.
      Quota media: <strong>${formatEur(totalVnd / state.travelers)} a persona</strong>.
    </p>
  `;
}

/* ==========================================================================
   Toolkit: Checklist & Phrases
   ========================================================================== */
function renderChecklist() {
  const list = document.getElementById('packing-checklist');
  if (!list) return;

  list.innerHTML = PACKING_CHECKLIST.map((item) => {
    const checked = state.packedItems.has(item.id);
    return `
      <li class="checklist-item ${checked ? 'checked' : ''}">
        <label>
          <input
            type="checkbox"
            id="${item.id}"
            data-pack-id="${item.id}"
            ${checked ? 'checked' : ''}
          />
          <span>${item.label}</span>
        </label>
      </li>
    `;
  }).join('');

  list.querySelectorAll('[data-pack-id]').forEach((input) => {
    input.addEventListener('change', () => {
      const id = input.dataset.packId;
      if (input.checked) {
        state.packedItems.add(id);
      } else {
        state.packedItems.delete(id);
      }
      saveSet(STORAGE_KEYS.packedItems, state.packedItems);
      renderChecklist();
    });
  });
}

function renderPhrases() {
  const container = document.getElementById('phrase-list');
  if (!container) return;

  container.innerHTML = VIETNAMESE_PHRASES.map(
    (p) => `
      <div class="phrase-item">
        <div>
          <div class="phrase-vi">${p.vi}</div>
          <div class="phrase-phonetic">/${p.phonetic}/</div>
        </div>
        <div class="phrase-it">${p.it}</div>
      </div>
    `
  ).join('');
}

/* ==========================================================================
   Event Wiring & Initialization
   ========================================================================== */
function bindGlobalControls() {
  const dateInput = document.getElementById('trip-start-input');
  if (dateInput) {
    dateInput.addEventListener('change', () => {
      if (dateInput.value) {
        state.startDate = dateInput.value;
        localStorage.setItem(STORAGE_KEYS.startDate, state.startDate);
        renderTripDates();
        renderDayTabs();
        renderTimeline();
      }
    });
  }

  const decBtn = document.getElementById('travelers-dec');
  const incBtn = document.getElementById('travelers-inc');

  if (decBtn) {
    decBtn.addEventListener('click', () => {
      if (state.travelers > 1) {
        state.travelers -= 1;
        renderBudget();
      }
    });
  }

  if (incBtn) {
    incBtn.addEventListener('click', () => {
      if (state.travelers < 8) {
        state.travelers += 1;
        renderBudget();
      }
    });
  }

  document.querySelectorAll('[data-budget-style]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.budgetStyle = btn.dataset.budgetStyle;
      renderBudget();
    });
  });

  const resetBtn = document.getElementById('reset-progress-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      state.doneStops.clear();
      state.packedItems.clear();
      state.startDate = getTodayISO();
      localStorage.removeItem(STORAGE_KEYS.doneStops);
      localStorage.removeItem(STORAGE_KEYS.packedItems);
      localStorage.removeItem(STORAGE_KEYS.startDate);
      renderTripDates();
      renderDayTabs();
      renderTimeline();
      renderProgress();
      renderChecklist();
    });
  }
}

function init() {
  renderTripDates();
  renderDayTabs();
  renderTimeline();
  renderProgress();
  renderMap();
  renderBudget();
  renderChecklist();
  renderPhrases();
  bindGlobalControls();
}

document.addEventListener('DOMContentLoaded', init);
