(function () {
  var storageKey = 'faffNaughtTheme';
  var root = document.documentElement;
  var toggle = document.querySelector('.theme-toggle');

  if (!toggle) return;

  function applyTheme(theme) {
    var isDark = theme === 'dark';
    root.dataset.theme = isDark ? 'dark' : 'light';
    toggle.setAttribute('aria-pressed', String(isDark));
    toggle.setAttribute('aria-label', isDark ? 'Switch to day mode' : 'Switch to evening mode');
  }

  try {
    applyTheme(localStorage.getItem(storageKey) === 'dark' ? 'dark' : 'light');
  } catch (error) {
    applyTheme('light');
  }

  toggle.addEventListener('click', function () {
    var nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);

    try {
      localStorage.setItem(storageKey, nextTheme);
    } catch (error) {
      // Theme still changes for the current page even when storage is unavailable.
    }
  });
})();
