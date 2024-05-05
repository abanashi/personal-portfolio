// theme-switcher.js

document.addEventListener("DOMContentLoaded", function () {
  // Function to set the theme on the <body> tag and save it as a cookie
  function setTheme(theme) {
    document.body.setAttribute("data-bs-theme", theme);

    // Save the theme selection as a cookie with a long expiration date
    document.cookie = `theme=${theme}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
  }

  // Function to toggle between light and dark themes
  function toggleTheme() {
    const currentTheme = document.body.getAttribute("data-bs-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    // Toggle theme and save the updated selection as a cookie
    setTheme(newTheme);
  }

  // Function to apply the theme based on system preferences
  function applySystemPreferences() {
    // Check if the user prefers a dark color scheme
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // Set the theme based on system preferences and save it as a cookie
    setTheme(prefersDarkMode ? "dark" : "light");
  }

  // Function to get the value of a cookie by name
  function getCookie(name) {
    const match = document.cookie.match(
      new RegExp(
        `(?:^|;\\s*)${name.replace(
          /([.*+?\^${}()|\[\]\/\\])/g,
          "\\$1"
        )}=([^;]*)`
      )
    );
    return match ? decodeURIComponent(match[1]) : null;
  }

  // Check if a theme cookie exists and apply it when the page loads
  const savedTheme = getCookie("theme");
  if (savedTheme) {
    setTheme(savedTheme);
  }

  // Event listener for dropdown items
  document.querySelectorAll(".dropdown-item").forEach(function (item) {
    item.addEventListener("click", function (event) {
      event.preventDefault();

      // Check which dropdown item was clicked and set the theme accordingly
      if (this.textContent.includes("Light Mode")) {
        setTheme("light");
      } else if (this.textContent.includes("Dark Mode")) {
        setTheme("dark");
      } else if (this.textContent.includes("Use my system preferences")) {
        // Apply theme based on system preferences if "Use my system preferences" is clicked
        applySystemPreferences();
      }
    });
  });

  // Event listener for theme switch link
  const themeSwitch = document.getElementById("themeSwitch");
  if (themeSwitch) {
    // Check if themeSwitch element exists
    themeSwitch.addEventListener("click", function (event) {
      const target = event.target;

      // Toggle theme when theme switch link is clicked
      if (target && target.matches(".custom-nav-link")) {
        toggleTheme();
      }
    });
  }
});
