"use strict";

function searchQuotes(quotes, term) {
  const needle = term.trim().toLowerCase();
  if (!needle) {
    return [];
  }
  return quotes.filter(
    (q) =>
      q.author.toLowerCase().includes(needle) ||
      q.saying.toLowerCase().includes(needle)
  );
}

function debounce(fn, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}
