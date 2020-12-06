import '../src/styles.css'
import menuListItems from './menu.json'
import menuItems from '../templates/menu-items.hbs'

// Дом узлы
const ulMenuRef = document.querySelector('.js-menu');
const inputThemeSwitchRef = document.querySelector('.theme-switch__toggle');
const bodyRef = document.querySelector('body');

// Добавление разметки
const markup = menuItems(menuListItems)
ulMenuRef.insertAdjacentHTML('beforeend', markup)

// Cлушатели
inputThemeSwitchRef.addEventListener('change', changeTheme)



const tagListItem = document.querySelectorAll('.tag-list__item');
tagListItem.forEach(el => {
    if (el.textContent === '') {
        el.remove()
    }
})


function changeTheme(e) {
    if (e.target.checked) {
        // запысывае в локал тема черная
        localStorage.setItem('theme', 'dark');
        if (localStorage.getItem('theme') === 'dark') {
            bodyRef.classList.add('dark-theme')
        }
        }
    else {
        localStorage.removeItem('theme');
        bodyRef.classList.remove('dark-theme')
    }
    
}
if (localStorage.getItem('theme')) {
    bodyRef.classList.add('dark-theme')
    inputThemeSwitchRef.checked = true
}
