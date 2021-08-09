const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkboxRef = document.querySelector('#theme-switch-toggle');

checkboxRef.addEventListener('change', toggleSwitch);

function toggleSwitch() {
  checkboxRef.checked ? switchOn() : switchOff();
}

function switchOn() {
  document.body.classList.add(Theme.DARK);
  document.body.classList.remove(Theme.LIGHT);
  localStorage.setItem('theme', Theme.DARK);
  checkboxRef.checked = true;
}

function switchOff() {
  document.body.classList.add(Theme.LIGHT);
  document.body.classList.remove(Theme.DARK);
  localStorage.setItem('theme', Theme.LIGHT);
  checkboxRef.checked = false;
}

function currentTheme() {
  const userTheme = localStorage.getItem('theme');
  if (userTheme === Theme.LIGHT || userTheme === null) {
    switchOff();
  } else {
    switchOn();
  }
}

currentTheme();
