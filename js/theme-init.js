"use strict";
// Runs before first paint so the page never flashes the wrong theme
document.documentElement.setAttribute("data-theme", localStorage.getItem("theme") || "dark");
