(() => {
  "use strict";

  const STORAGE_KEY = "lowSignalSavedFrequencies";
  const FILTERS = ["all", "romance", "friends", "family", "rivals", "coworkers", "neighbors", "open"];

  const screens = [...document.querySelectorAll(".screen")];
  const scanDisplay = document.getElementById("scanDisplay");
  const scanStatus = document.getElementById("scanStatus");
  const frequencyReadout = document.getElementById("frequencyReadout");
  const resultStage = document.getElementById("resultStage");
  const filterControls = document.getElementById("filterControls");
  const savedDrawer = document.getElementById("savedDrawer");
  const drawerShade = document.getElementById("drawerShade");
  const savedList = document.getElementById("savedList");
  const savedCount = document.getElementById("savedCount");
  const savedDrawerCount = document.getElementById("savedDrawerCount");
  const unknownDisplay = document.getElementById("unknownDisplay");
  const unknownStatus = document.getElementById("unknownStatus");
  const unknownFrequency = document.getElementById("unknownFrequency");
  const unknownResult = document.getElementById("unknownResult");

  let activeFilter = "all";
  let lastCharacterId = null;
  let savedIds = readSavedIds();
  let scanTimer = null;

  function readSavedIds() {
    try {
      const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return Array.isArray(data) ? data : [];
    } catch (error) {
      return [];
    }
  }

  function writeSavedIds() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedIds));
    renderSavedDrawer();
    updateSaveButtons();
  }

  function showScreen(name) {
    screens.forEach(screen => screen.classList.toggle("active", screen.dataset.screen === name));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function randomFrequency() {
    return (87.7 + Math.random() * 19.9).toFixed(1) + " FM";
  }

  function buildFilters() {
    filterControls.innerHTML = FILTERS.map(filter => (
      `<button class="filter-control ${filter === activeFilter ? "active" : ""}" data-filter="${filter}" type="button">${filter.toUpperCase()}</button>`
    )).join("");
  }

  function getFilteredCharacters(forUnknownCaller = false) {
    return SIGNAL_CHARACTERS.filter(character => {
      if (forUnknownCaller && !character.unknownCaller) return false;
      return activeFilter === "all" || character.categories.includes(activeFilter);
    });
  }

  function pickCharacter(pool) {
    if (!pool.length) return null;
    const options = pool.length > 1 ? pool.filter(character => character.id !== lastCharacterId) : pool;
    return options[Math.floor(Math.random() * options.length)] || pool[0];
  }

  function startScan() {
    clearInterval(scanTimer);
    scanDisplay.classList.add("scanning");
    scanStatus.textContent = "SCANNING";
    resultStage.innerHTML = `<div class="empty-result"><span>SEARCHING FREQUENCIES</span><p>Hold for signal acquisition.</p></div>`;

    scanTimer = setInterval(() => {
      frequencyReadout.textContent = randomFrequency();
    }, 80);

    window.setTimeout(() => {
      clearInterval(scanTimer);
      const character = pickCharacter(getFilteredCharacters());
      scanDisplay.classList.remove("scanning");

      if (!character) {
        scanStatus.textContent = "NO SIGNAL";
        resultStage.innerHTML = `<div class="empty-result"><span>NO MATCHING SIGNALS</span><p>Choose another signal type.</p></div>`;
        return;
      }

      lastCharacterId = character.id;
      scanStatus.textContent = "SIGNAL FOUND";
      frequencyReadout.textContent = randomFrequency();
      resultStage.innerHTML = characterCard(character);
      bindCardButtons();
    }, 1550);
  }

  function groupClass(character) {
    return String(character.group || "Guest").replace(/[^a-z0-9]/gi, "");
  }

  function contactUrl(character) {
    if (character.contact && character.contact !== "#") return character.contact;
    if (character.memberId) return `https://lowsignal.jcink.net/index.php?act=Msg&CODE=4&MID=${character.memberId}`;
    return character.profile || "#";
  }

  function characterCard(character, encounter = null) {
    const isSaved = savedIds.includes(character.id);
    return `
      <article class="character-card ${groupClass(character)}" data-character-card="${character.id}">
        <div class="character-image" style="background-image:url('${character.image}')"></div>
        <div class="character-body">
          <div class="card-signal-line">
            <span class="signal-found">SIGNAL FOUND</span>
            <span class="availability-status ${character.open === false ? "closed" : ""}">
              <i></i>${character.open === false ? "CLOSED" : "OPEN"}
            </span>
          </div>
          <div class="seeking-signals" aria-label="Seeking">
            ${(character.seeking || character.categories || [])
              .filter(item => String(item).toLowerCase() !== "open" && String(item).toLowerCase() !== "all")
              .map(item => `<span>${item}</span>`).join("")}
          </div>
          <h2>${character.name}</h2>
          <div class="character-meta">
            <span>${character.age}</span>
            <span>${character.occupation}</span>
            <span>${character.relationship}</span>
          </div>
          <p class="character-hook">${character.hook}</p>
          <div class="character-tags">
            ${character.tags.map(tag => `<span>${tag}</span>`).join("")}
          </div>
          ${encounter ? encounterMarkup(encounter) : ""}
          <div class="card-actions">
            <button class="save-action ${isSaved ? "saved" : ""}" data-save="${character.id}" type="button">${isSaved ? "FREQUENCY SAVED" : "SAVE FREQUENCY"}</button>
            <a href="${character.profile}" target="_blank" rel="noopener">TUNE IN</a>
            <a href="${contactUrl(character)}" target="_blank" rel="noopener">MAKE CONTACT</a>
          </div>
        </div>
      </article>`;
  }

  function encounterMarkup(encounter) {
    return `
      <div class="encounter-card">
        <span>ENCOUNTER</span>
        <div class="encounter-grid">
          <div class="encounter-item"><span>LOCATION</span><strong>${encounter.location}</strong></div>
          <div class="encounter-item"><span>SITUATION</span><strong>${encounter.situation}</strong></div>
          <div class="encounter-item"><span>COMPLICATION</span><strong>${encounter.complication}</strong></div>
        </div>
      </div>`;
  }

  function beginUnknownTransmission() {
    unknownDisplay.classList.add("connecting");
    unknownStatus.textContent = "CONNECTING";
    unknownResult.innerHTML = `<div class="empty-result"><span>SEARCHING UNKNOWN FREQUENCIES</span><p>Transmission in progress.</p></div>`;

    const timer = setInterval(() => {
      unknownFrequency.textContent = randomFrequency();
    }, 75);

    window.setTimeout(() => {
      clearInterval(timer);
      unknownDisplay.classList.remove("connecting");
      const character = pickCharacter(getFilteredCharacters(true));
      const encounter = SIGNAL_ENCOUNTERS[Math.floor(Math.random() * SIGNAL_ENCOUNTERS.length)];

      if (!character || !encounter) {
        unknownStatus.textContent = "LINE SILENT";
        unknownResult.innerHTML = `<div class="empty-result"><span>NO TRANSMISSION FOUND</span><p>Add eligible characters and encounters to the data files.</p></div>`;
        return;
      }

      lastCharacterId = character.id;
      unknownStatus.textContent = "SIGNAL FOUND";
      unknownFrequency.textContent = randomFrequency();
      unknownResult.innerHTML = characterCard(character, encounter);
      bindCardButtons();
    }, 1650);
  }

  function toggleSaved(id) {
    savedIds = savedIds.includes(id) ? savedIds.filter(savedId => savedId !== id) : [...savedIds, id];
    writeSavedIds();
  }

  function bindCardButtons() {
    document.querySelectorAll("[data-save]").forEach(button => {
      button.addEventListener("click", () => toggleSaved(button.dataset.save));
    });
  }

  function updateSaveButtons() {
    document.querySelectorAll("[data-save]").forEach(button => {
      const isSaved = savedIds.includes(button.dataset.save);
      button.classList.toggle("saved", isSaved);
      button.textContent = isSaved ? "FREQUENCY SAVED" : "SAVE FREQUENCY";
    });
  }

  function renderSavedDrawer() {
    const savedCharacters = savedIds.map(id => SIGNAL_CHARACTERS.find(character => character.id === id)).filter(Boolean);
    savedCount.textContent = savedCharacters.length;
    savedDrawerCount.textContent = savedCharacters.length;

    savedList.innerHTML = savedCharacters.length ? savedCharacters.map(character => `
      <article class="saved-mini ${groupClass(character)}">
        <div class="saved-mini-image" style="background-image:url('${character.image}')"></div>
        <div class="saved-mini-body">
          <h3>${character.name}</h3>
          <p>${character.age} · ${character.occupation}</p>
          <div class="saved-mini-actions">
            <a href="${character.profile}" target="_blank" rel="noopener">TUNE IN</a>
            <a href="${contactUrl(character)}" target="_blank" rel="noopener">CONTACT</a>
            <button data-remove="${character.id}" type="button">REMOVE</button>
          </div>
        </div>
      </article>`).join("") : `<div class="empty-result"><span>NO SAVED FREQUENCIES</span><p>Saved characters will appear here.</p></div>`;

    document.querySelectorAll("[data-remove]").forEach(button => {
      button.addEventListener("click", () => toggleSaved(button.dataset.remove));
    });
  }

  function openSavedDrawer() {
    savedDrawer.classList.add("open");
    drawerShade.classList.add("active");
    savedDrawer.setAttribute("aria-hidden", "false");
    document.getElementById("savedToggle").setAttribute("aria-expanded", "true");
  }

  function closeSavedDrawer() {
    savedDrawer.classList.remove("open");
    drawerShade.classList.remove("active");
    savedDrawer.setAttribute("aria-hidden", "true");
    document.getElementById("savedToggle").setAttribute("aria-expanded", "false");
  }

  filterControls.addEventListener("click", event => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    activeFilter = button.dataset.filter;
    buildFilters();
    startScan();
  });

  document.getElementById("startScan").addEventListener("click", () => { showScreen("scan"); startScan(); });
  document.getElementById("scanAgain").addEventListener("click", startScan);
  document.getElementById("startUnknown").addEventListener("click", () => showScreen("unknown"));
  document.getElementById("beginTransmission").addEventListener("click", beginUnknownTransmission);
  document.getElementById("savedToggle").addEventListener("click", openSavedDrawer);
  document.getElementById("openSaved").addEventListener("click", openSavedDrawer);
  document.getElementById("closeSaved").addEventListener("click", closeSavedDrawer);
  drawerShade.addEventListener("click", closeSavedDrawer);
  document.querySelectorAll("[data-go]").forEach(button => button.addEventListener("click", () => showScreen(button.dataset.go)));
  document.addEventListener("keydown", event => { if (event.key === "Escape") closeSavedDrawer(); });

  buildFilters();
  renderSavedDrawer();
})();
