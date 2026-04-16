function resizeAndMoveWelcomeSection() {
  const wrapper = document.getElementById('home-page-wrapper');
  const welcomeSectionContainer = document.getElementById(
    'welcome-section-container',
  );
  const welcomeText = document.getElementById('welcome-section-text-container');

  if (window.innerWidth <= 805) {
    if (
      welcomeSectionContainer &&
      welcomeText &&
      !welcomeSectionContainer.contains(welcomeText)
    ) {
      welcomeSectionContainer.appendChild(welcomeText);
    } else {
      // Move the welcome text back to its original position if it exists
      if (
        welcomeText &&
        welcomeSectionContainer &&
        !document.body.contains(welcomeText)
      ) {
        document.body.insertBefore(welcomeText, welcomeSectionContainer.nextSibling);
      } else if (welcomeText && welcomeSectionContainer && welcomeSectionContainer.contains(welcomeText)) {
        document.body.insertBefore(welcomeText, welcomeSectionContainer.nextSibling);
      }
    }
  }
}
window.addEventListener('resize', resizeAndMoveWelcomeSection);
window.addEventListener('load', () => {
  resizeAndMoveWelcomeSection();
});
