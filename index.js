function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
  .then(function (response){
    console.log(response)
    return response.json()
  })
  .then(function (fetchBooks){
    console.log(fetchBooks)
  })
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});