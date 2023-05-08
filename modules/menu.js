const list = document.querySelector('#book-list');
const addNew = document.querySelector('#add-new-book');
const contact = document.querySelector('#contact-us');
const books = document.querySelector('.books');
const form = document.querySelector('#form');
const contactSection = document.querySelector('.contact-section');
const heading = document.getElementById('h1');

const viewListMenu = () => {
  list.addEventListener('click', () => {
    list.style.textDecoration = 'underline';
    addNew.style.textDecoration = 'none';
    contact.style.textDecoration = 'none';
    form.classList.add('hidden');
    books.classList.remove('hidden');
    contactSection.classList.add('hidden');
    heading.style.display = 'block';
  });
};
const addBookMenu = () => {
  addNew.addEventListener('click', () => {
    list.style.textDecoration = 'none';
    addNew.style.textDecoration = 'underline';
    contact.style.textDecoration = 'none';
    form.classList.remove('hidden');
    books.classList.remove('hidden');
    contactSection.classList.add('hidden');
  });
};

const contactMenu = () => {
  contact.addEventListener('click', () => {
    list.style.textDecoration = 'none';
    addNew.style.textDecoration = 'none';
    contact.style.textDecoration = 'underline';
    form.classList.add('hidden');
    books.classList.add('hidden');
    contactSection.classList.remove('hidden');
    heading.style.display = 'none';
  });
};
export { viewListMenu, addBookMenu, contactMenu };