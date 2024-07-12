const books = document.querySelectorAll('#book-list li');

books.forEach(book => {
    book.addEventListener('click', function() {
        books.forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
    });
});
