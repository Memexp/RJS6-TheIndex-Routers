import React, { Component } from "react";
import BookTable from "./BookTable";
import SearchBar from "./SearchBar";
class BookList extends Component {
  state = {
    filteredBooks: this.props.books
  };
  filterBooks = query => {
    query = query.toLowerCase();
    let filteredBooks = this.props.books.filter(book =>
      `${book.title} ${book.color} ${book.authors.name}`
        .toLowerCase()
        .includes(query)
    );
    this.setState({ filteredBooks: filteredBooks });
  };

  filterColors = color => {
    if (color) {
      let filteredColors = this.props.books.filter(
        book => book.color === color
      );
      this.setState({ filteredBooks: filteredColors });
    } else {
      this.setState({ filteredBooks: this.props.books });
    }
  };

  componentDidUpdate(prevState) {
    console.log(prevState);
    if (prevState.match.params.color !== this.props.match.params.color) {
      this.filterColors(this.props.match.params.color);
    }
  }

  render() {
    console.log(this.props.match.params.color);
    return (
      <div>
        <SearchBar onChange={this.filterBooks} />
        <BookTable books={this.state.filteredBooks} />
      </div>
    );
  }
}
export default BookList;
