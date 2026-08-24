// IIFE to keep this off the global scope
(() => {
  "use strict";

  const $ = (selector) => document.querySelector(selector);

  const stageEl = $("[data-js-stage]");
  const authorEl = $("[data-js-author]");
  const quoteEl = $("[data-js-quote]");
  const searchInputEl = $("[data-js-search-input]");
  const searchClearEl = $("[data-js-search-clear]");
  const resultsEl = $("[data-js-results]");
  const searchStatusEl = $("[data-js-search-status]");
  const themeToggleEl = $("[data-js-theme-toggle]");
  const shareButtonEl = $("[data-js-share-button]");
  const copyStatusEl = $("[data-js-copy-status]");
  const themeColorMetaEl = $("[data-js-theme-color-meta]");
  const historyBackEl = $("[data-js-history-back]");
  const historyForwardEl = $("[data-js-history-forward]");

  const SUN_ICON = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`;
  const MOON_ICON = `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  const LINK_ICON = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;
  const CHECK_ICON = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>`;

  // Clear then re-set so screen readers announce it even if unchanged
  function announce(el, message) {
    el.textContent = "";
    requestAnimationFrame(() => {
      el.textContent = message;
    });
  }

  function getAuthorFromURL() {
    return new URLSearchParams(location.search).get("author")?.trim().toLowerCase() || null;
  }

  // Makes a short id for this saying's shareable link, based on its own text
  // Uses a plain for loop, not for...of - emoji count differently and would change the id
  function hashQuote(quote) {
    const str = `${quote.author}${quote.saying}`;
    let hash = 5381;
    for (let i = 0; i < str.length; i++) {
      hash = (hash * 33 + str.charCodeAt(i)) >>> 0;
    }
    return hash.toString(36);
  }

  const quoteIdMap = new Map();
  for (const quote of QUOTES) {
    const id = hashQuote(quote);
    if (quoteIdMap.has(id)) {
      console.warn(`Duplicate saying id "${id}" - one of these shadows the other:`, quoteIdMap.get(id), quote);
    }
    quoteIdMap.set(id, quote);
  }

  // index.html?q=anything never 404s server-side, so a bad id is caught here
  const requestedQuoteId = new URLSearchParams(location.search).get("q");
  const isBrokenSharedLink =
    requestedQuoteId !== null && !quoteIdMap.has(requestedQuoteId);

  if (isBrokenSharedLink) {
    location.replace("./404.html");
    return;
  }

  function buildQuoteURL(id) {
    return `${location.pathname}?q=${id}`;
  }

  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fall through to the legacy approach below
    }
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    textarea.remove();
    return copied;
  }

  // ?author= scopes the deck to matching authors; a filter matching nobody
  // silently falls back to the full deck rather than showing an empty state
  const authorFilter = getAuthorFromURL();
  const activeQuotes = authorFilter
    ? QUOTES.filter((q) => q.author.toLowerCase().includes(authorFilter))
    : QUOTES;

  const deck = createQuoteDeck(activeQuotes.length ? activeQuotes : QUOTES);

  let currentQuote = null;

  // seq tracks position in the visited-sayings history, for the nav buttons
  let latestSeq = 0;
  let currentSeq = 0;

  function updateHistoryButtons() {
    historyBackEl.disabled = currentSeq <= 0;
    historyForwardEl.disabled = currentSeq >= latestSeq;
  }

  // DOM-only update, also used by popstate, so it must not touch history
  // 120ms so it lands after .stage's 150ms CSS fade-out has visibly started
  function renderQuote(quote) {
    currentQuote = quote;
    stageEl.classList.add("is-changing");
    setTimeout(() => {
      authorEl.textContent = quote.author;
      quoteEl.textContent = quote.saying;
      stageEl.classList.remove("is-changing");
    }, 120);
  }

  // Replaces rather than pushes a new entry - restores seq from history.state
  // when it matches, so back/forward stay correct after a reload
  function initializeQuote(quote) {
    const id = hashQuote(quote);
    const existingState = history.state;
    const seq =
      existingState && existingState.quoteId === id && typeof existingState.seq === "number"
        ? existingState.seq
        : 0;

    currentSeq = seq;
    latestSeq = seq;
    history.replaceState({ quoteId: id, seq }, "", buildQuoteURL(id));
    renderQuote(quote);
    updateHistoryButtons();
  }

  function navigateToQuote(quote) {
    const id = hashQuote(quote);
    latestSeq += 1;
    currentSeq = latestSeq;
    history.pushState({ quoteId: id, seq: currentSeq }, "", buildQuoteURL(id));
    renderQuote(quote);
    updateHistoryButtons();
  }

  function showNextQuote() {
    navigateToQuote(deck.next());
  }

  window.addEventListener("popstate", (event) => {
    const state = event.state;
    if (!state || typeof state.quoteId !== "string") return;
    const quote = quoteIdMap.get(state.quoteId);
    if (!quote) return;
    currentSeq = state.seq;
    exitSearch();
    renderQuote(quote);
    updateHistoryButtons();
  });

  historyBackEl.addEventListener("click", () => history.back());
  historyForwardEl.addEventListener("click", () => history.forward());

  function createResultItem(quote) {
    const authorSpan = document.createElement("span");
    authorSpan.className = "results-author";
    authorSpan.textContent = quote.author;

    const sayingSpan = document.createElement("span");
    sayingSpan.className = "results-saying";
    sayingSpan.textContent = quote.saying;

    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("aria-label", `${quote.author}: ${quote.saying}`);
    button.append(authorSpan, sayingSpan);
    button.addEventListener("click", () => {
      navigateToQuote(quote);
      exitSearch();
    });

    const item = document.createElement("li");
    item.append(button);
    return item;
  }

  function createEmptyResultItem() {
    const item = document.createElement("li");
    item.className = "results-empty";
    item.textContent = "No sayings found";
    return item;
  }

  function showSearchResults(matches) {
    const items = matches.length
      ? matches.map(createResultItem)
      : [createEmptyResultItem()];
    resultsEl.replaceChildren(...items);

    announce(
      searchStatusEl,
      matches.length === 1 ? "1 saying found" : `${matches.length} sayings found`
    );

    resultsEl.classList.remove("is-hidden");
    stageEl.classList.add("is-hidden");
    shareButtonEl.classList.add("is-hidden");
  }

  function exitSearch() {
    searchInputEl.value = "";
    searchStatusEl.textContent = "";
    searchClearEl.classList.add("is-hidden");
    resultsEl.classList.add("is-hidden");
    stageEl.classList.remove("is-hidden");
    shareButtonEl.classList.remove("is-hidden");
  }

  const handleSearchInput = debounce((term) => {
    if (!term.trim()) {
      exitSearch();
      return;
    }
    showSearchResults(searchQuotes(QUOTES, term));
  }, 150);

  searchInputEl.addEventListener("input", (event) => {
    searchClearEl.classList.toggle("is-hidden", !event.target.value);
    handleSearchInput(event.target.value);
  });

  searchClearEl.addEventListener("click", () => {
    exitSearch();
    searchInputEl.focus();
  });

  stageEl.addEventListener("click", showNextQuote);

  // Only fires when nothing has focus, to avoid double-firing with whatever
  // native keyboard handling a focused control already has
  document.addEventListener("keyup", (event) => {
    if (event.key === " " && document.activeElement === document.body) {
      event.preventDefault();
      showNextQuote();
    }
  });

  let touchStartX = 0;
  let touchStartY = 0;

  stageEl.addEventListener("touchstart", (event) => {
    ({ screenX: touchStartX, screenY: touchStartY } = event.changedTouches[0]);
  });

  stageEl.addEventListener("touchend", (event) => {
    const { screenX, screenY } = event.changedTouches[0];
    const deltaX = screenX - touchStartX;
    const deltaY = screenY - touchStartY;
    const isHorizontalSwipe =
      Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY);
    if (isHorizontalSwipe) {
      showNextQuote();
    }
  });

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    themeToggleEl.innerHTML = theme === "light" ? MOON_ICON : SUN_ICON;
    const targetMode = theme === "light" ? "Dark mode" : "Light mode";
    themeToggleEl.dataset.tooltip = targetMode;
    themeToggleEl.setAttribute("aria-label", `Switch to ${targetMode.toLowerCase()}`);
    themeColorMetaEl.setAttribute("content", theme === "light" ? "#f4f6fb" : "#030712");
    localStorage.setItem("theme", theme);
  }

  themeToggleEl.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    applyTheme(current === "light" ? "dark" : "light");
  });

  applyTheme(localStorage.getItem("theme") || "dark");

  shareButtonEl.innerHTML = LINK_ICON;

  let shareIconResetTimeoutId;

  shareButtonEl.addEventListener("click", async () => {
    if (!currentQuote) return;
    const url = `${location.origin}${buildQuoteURL(hashQuote(currentQuote))}`;
    const copied = await copyToClipboard(url);

    if (copied) {
      clearTimeout(shareIconResetTimeoutId);
      shareButtonEl.innerHTML = CHECK_ICON;
      shareIconResetTimeoutId = setTimeout(() => {
        shareButtonEl.innerHTML = LINK_ICON;
      }, 1500);
      announce(copyStatusEl, "Link copied to clipboard");
    } else {
      announce(copyStatusEl, "Couldn't copy the link. Copy it from the address bar instead.");
    }
  });

  const sharedQuote = requestedQuoteId ? quoteIdMap.get(requestedQuoteId) : null;
  if (sharedQuote) {
    deck.setLastAuthor(sharedQuote.author);
  }
  initializeQuote(sharedQuote || deck.next());
})();
