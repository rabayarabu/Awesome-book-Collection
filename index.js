const bookDetails = document.querySelector('.new_books');
const title = document.querySelector('#new-title');
const author = document.querySelector('#new-author');
const button = document.querySelector('#add-book');
let bookShelves = JSON.parse(localStorage.getItem('bookShelves')) || [];

// add a new book
function addNewBook() {
  if (title.value === '' && author.value === '') {
    alert('Please fill up all fields');
  } else {
    bookShelves.push({
      id: Math.floor(Math.random() * 1000),
      title: title.value,
      author: author.value,
    });
    localStorage.setItem('bookShelves', JSON.stringify(bookShelves));
  }
}

// show the book list
function showBookList() {
  const bookLists = JSON.parse(localStorage.getItem('bookShelves'));
  let container = '';
  bookLists.forEach((bookList) => {
    container += `
    <div class="books">
      <p class="title">"${bookList.title}"</p>
      <p class="author">${bookList.author}</p><br>
      <button class="deleteBtn" id="${bookList.id}" type="submit">Remove</button>
      <br>
    </div>
    `;
  });
  bookDetails.innerHTML = container;
}
// get item

window.addEventListener('load', () => {
  showBookList();
});
// remove
function removeBook(e) {
  if (e.target.classList.contains('deleteBtn')) {
    bookShelves = bookShelves.filter((book) => book.id.toString() !== e.target.id);

    localStorage.setItem('bookShelves', JSON.stringify(bookShelves));
  }
  showBookList();
}
document.addEventListener('click', removeBook);

// Add
button.addEventListener('click', (e) => {
  e.preventDefault();

  addNewBook();
  showBookList();
  title.value = '';
  author.value = '';
});