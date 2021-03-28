import menuCd from './menu.json';
import menuElem from './temp/element.hbs';
import './styles.css';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme'
};

const choiceRef = {
    bodyRef: document.querySelector('body'),
    themeRef: document.querySelector('#theme-switch-toggle'),
    menuRef: document.querySelector('ul.js-menu')
};

const creatCards = menuElem(menuCd);

   choiceRef.menuRef.insertAdjacentHTML('beforeend', creatCards);
   choiceRef.themeRef.addEventListener('change', setClassList);
   choiceRef.themeRef.addEventListener('change', setLocalStorage);

function changeTheme(a, b) {
    choiceRef.bodyRef.classList.add(a);
    choiceRef.bodyRef.classList.remove(b);
};

function setClassList() {
    const x = choiceRef.themeRef.checked;
    if (x) {
        return changeTheme(Theme.DARK, Theme.LIGHT);
    } else {
        changeTheme(Theme.LIGHT, Theme.DARK);
         }
};

function setLocalStorage() {
    const z = choiceRef.themeRef.checked;
    if (z) {
        localStorage.setItem('theme', Theme.DARK);
    } else {
        localStorage.removeItem('theme');
        localStorage.setItem('theme', Theme.LIGHT);
         }
};

const storageTheme = localStorage.getItem('theme');
if (storageTheme === Theme.DARK) {
    choiceRef.bodyRef.classList.add(Theme.DARK);
    choiceRef.themeRef.checked = true;
};