import BooksCollection from './modules/manageBooks.js';
import { viewListMenu, addBookMenu, contactMenu } from './modules/menu.js';
import { DateTime } from './modules/luxon.js';

const booksCollection = new BooksCollection();
booksCollection.init();

const books = document.querySelector('.books');
const form = document.querySelector('#form');
const contactSection = document.querySelector('.contact-section');
const addNew = document.querySelector('#add-new-book');
const dateTime = document.getElementById('date');

setInterval(() => {
  dateTime.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
}, 1000);

form.classList.add('hidden');
contactSection.classList.add('hidden');
books.classList.remove('hidden');
addNew.style.textDecoration = 'underline';

viewListMenu();
addBookMenu();
contactMenu();
