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