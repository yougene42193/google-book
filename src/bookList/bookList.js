import React, { Component } from 'react';
import './bookList.css'
import Book from './book/book'

export default class BookList extends Component {
    render() {
        return (
            <div>
                {this.props.books.map(book => (
                    <Book 
                        key={book.id}
                        title={book.volumeInfo.title}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        author={book.volumeInfo.authors}
                        description={book.volumeInfo.description}
                    />
                ))}
            </div>
        )
    }
}

BookList.defaultProps = { books: [] };