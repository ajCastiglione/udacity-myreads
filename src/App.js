import React from 'react';
import { Route, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookList from './BookList';
import Search from './Search';

class BooksApp extends React.Component {
  state = { books: [] }

  componentDidMount() {

    // get books on load
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  changeShelf = ( newBook, newShelf ) => {
    BooksAPI.update(newBook, newShelf).then(response =>{
      // set shelf for new or updated book
      newBook.shelf = newShelf
      // Fetch new list, without updated or new book
      let updatedBooks = this.state.books.filter( book => book.id !== newBook.id )
      // add book to the array and set the state
      updatedBooks.push(newBook);
      this.setState({ books: updatedBooks })
    })
  }

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Route path="/search" render={( { history }) => (
          <Search
            books={ books }
            changeShelf={ this.changeShelf }
          />
        )} />

        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <BookList
              books={ books }
              changeShelf={ this.changeShelf }
            />

            <div className="open-search">
              <Link to="/search">Search</Link>
            </div>
          </div>
        )} />
        
      </div>
    )
  }
}

export default BooksApp
