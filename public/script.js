const fetchBooks = async () => {
  const response = await fetch('/api/books');
  const books = await response.json();
  const bookList = document.getElementById('book-list');
  bookList.innerHTML = '';
  books.forEach(book => {
    const bookItem = document.createElement('div');
    bookItem.innerHTML = `<h3>${book.title}</h3><p>${book.author}</p>`;
    bookList.appendChild(bookItem);
  });
};

fetchBooks();