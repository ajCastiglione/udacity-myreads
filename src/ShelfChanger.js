import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ShelfChanger extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
  }

  render() {
    const { book, books, changeShelf } = this.props

    // default the current shelf to 'none'
    let currentShelf = 'none'

    // if book is in current list, set current shelf to book.shelf
    for (let single_book of books ) {
      
      if (single_book.id === book.id)  {
        currentShelf = single_book.shelf
        break
      } 
    }

    return (
      <div className="book-shelf-changer">
        <select  onChange={(event) => changeShelf(book, event.target.value)}
          defaultValue={ currentShelf }>
          <option value="move_me" disabled>Move me...?</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }

}

export default ShelfChanger
