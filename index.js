
class Book {
  constructor(title, author) {
    this.id = Date.now().toString();
    this.title = title;
    this.author = author;
  }
}

class BooksCollection {
  constructor() {
    this.books = [];
  }

  addBook(title, author) {
    if (title === '' || author === '') {
      // eslint-disable-next-line no-alert
      alert('Please fill both fields');
    } else {
      const newBook = new Book(title, author);
      this.books.push(newBook);
    }
  }

  removeBook(id) {
    this.books = this.books.filter((book) => book.id !== id);
  }

  viewBooks() {
    // Remove all existing book elements from the container
    const container = document.querySelector('.books');
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    // Update books
    this.books.forEach((book) => {
      // Create the container div
      const bookInfo = document.createElement('div');
      bookInfo.className = 'book-info';
      bookInfo.innerHTML = `<p><span class="book-title">"${book.title}"</span> by <span class="book-author"> ${book.author}</span></p>`;

      // Create and append the button
      const button = document.createElement('button');
      button.className = 'remove-book';
      button.type = 'button';
      button.textContent = 'Remove';
      button.dataset.id = book.id; // Set the book ID as a data attribute
      bookInfo.appendChild(button);

      // Add event listener to remove button
      button.addEventListener('click', (event) => {
        const { id } = event.target.dataset;
        this.removeBook(id);
        this.viewBooks();
      });

      // Append the container div to the html
      container.appendChild(bookInfo);
    });

    // Update local storage
    this.saveBooks();
  }

  saveBooks() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  loadBooks() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  init() {
    this.loadBooks();
    this.viewBooks();

    // Adding new book
    const addBookBtn = document.querySelector('#add-book');
    addBookBtn.addEventListener('click', () => {
      const form = document.getElementById('form');
      const title = document.querySelector('#new-title').value;
      const author = document.querySelector('#new-author').value;
      this.addBook(title, author);
      this.viewBooks();
      form.reset();
    });
  }
}

const booksCollection = new BooksCollection();
booksCollection.init();

const list = document.querySelector('#book-list');
const addNew = document.querySelector('#add-new-book');
const contact = document.querySelector('#contact-us');
const books = document.querySelector('.books');
const form = document.querySelector('#form');
const contactSection = document.querySelector('.contact-section');
const heading = document.getElementById('h1');

form.classList.add('hidden');
contactSection.classList.add('hidden');
books.classList.remove('hidden');
addNew.style.textDecoration = 'underline';

list.addEventListener('click', () => {
  list.style.textDecoration = 'underline';
  addNew.style.textDecoration = 'none';
  contact.style.textDecoration = 'none';
  form.classList.add('hidden');
  books.classList.remove('hidden');
  contactSection.classList.add('hidden');
  heading.style.display = 'block';
});

addNew.addEventListener('click', () => {
  list.style.textDecoration = 'none';
  addNew.style.textDecoration = 'underline';
  contact.style.textDecoration = 'none';
  form.classList.remove('hidden');
  books.classList.remove('hidden');
  contactSection.classList.add('hidden');
});

contact.addEventListener('click', () => {
  list.style.textDecoration = 'none';
  addNew.style.textDecoration = 'none';
  contact.style.textDecoration = 'underline';
  form.classList.add('hidden');
  books.classList.add('hidden');
  contactSection.classList.remove('hidden');
  heading.style.display = 'none';
});
