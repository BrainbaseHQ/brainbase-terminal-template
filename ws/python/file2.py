class Book:
    def __init__(self, title, author, publication_year, isbn):
        self.title = title
        self.author = author
        self.publication_year = publication_year
        self.isbn = isbn
        self.is_checked_out = False

    def __str__(self):
        return f"{self.title} by {self.author} ({self.publication_year}) - ISBN: {self.isbn}"

class Library:
    def __init__(self):
        self.books = []

    def add_book(self, book):
        self.books.append(book)
        print(f"Book added: {book}")

    def remove_book(self, isbn):
        book_to_remove = None
        for book in self.books:
            if book.isbn == isbn:
                book_to_remove = book
                break
        if book_to_remove:
            self.books.remove(book_to_remove)
            print(f"Book removed: {book_to_remove}")
        else:
            print(f"No book found with ISBN: {isbn}")

    def check_out_book(self, isbn):
        for book in self.books:
            if book.isbn == isbn and not book.is_checked_out:
                book.is_checked_out = True
                print(f"Book checked out: {book}")
                return
        print(f"Book not available for check out with ISBN: {isbn}")

    def return_book(self, isbn):
        for book in self.books:
            if book.isbn == isbn and book.is_checked_out:
                book.is_checked_out = False
                print(f"Book returned: {book}")
                return
        print(f"No checked out book found with ISBN: {isbn}")

    def list_books(self):
        if not self.books:
            print("No books in the library.")
        else:
            for book in self.books:
                print(book)

# Example usage:
if __name__ == "__main__":
    library = Library()

    book1 = Book("1984", "George Orwell", 1949, "1234567890")
    book2 = Book("To Kill a Mockingbird", "Harper Lee", 1960, "0987654321")

    library.add_book(book1)
    library.add_book(book2)

    library.list_books()

    library.check_out_book("1234567890")
    library.return_book("1234567890")

    library.remove_book("0987654321")
    library.list_books()
