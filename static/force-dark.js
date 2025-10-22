// Dark mode doesn't enable as default so this is required to fix it
(function () {
  try {
    const theme = localStorage.getItem('docusaurus.theme');
    if (!theme || theme === 'dark') {
      document.documentElement.classList.remove('docusaurus-theme-light');
      document.documentElement.classList.add('docusaurus-theme-dark');
    }
  } catch (e) {
    console.warn('Dark mode script error:', e);
  }
})();
