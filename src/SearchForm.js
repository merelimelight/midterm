import React from "react";

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ""
    };
  }
  handleSearchInputChange = event => {
    this.setState({
      searchValue: event.target.value
    });
  };
  handleSearch = event => {
    event.preventDefault();

    if (this.state.searchValue <= 18 && this.state.searchValue > 0) {
      this.props.onSearch(this.state.searchValue);
    } else {
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSearch}>
        <input
          type="text"
          value={this.state.searchValue}
          onChange={this.handleSearchInputChange}
        />
        <button type="submit">Jump to Page</button>
      </form>
    );
  }
}
