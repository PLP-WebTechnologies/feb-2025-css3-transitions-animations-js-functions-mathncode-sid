const themeSelect = document.getElementById('themeSelect');
const body = document.body;

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
body.classList.add(`${savedTheme}-theme`);
themeSelect.value = savedTheme;

// Update theme on selection change
themeSelect.addEventListener('change', () => {
  const selectedTheme = themeSelect.value;
  body.classList.remove('light-theme', 'dark-theme');
  body.classList.add(`${selectedTheme}-theme`);
  localStorage.setItem('theme', selectedTheme);
});

// Card Flip Animation
const card = document.getElementById('themeCard');
const animateBtn = document.getElementById('animateBtn');

animateBtn.addEventListener('click', () => {
  card.classList.toggle('flipped');
});
