import React from "react";
import "./styles.css";
import SearchForm from "./SearchForm";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: null,
      jokes: [],
      isFetchingJoke: false,
      searchTerm: null
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.searchjoke = this.searchjoke.bind(this);
  }

  searchjoke(limit) {
    this.setState({ isFetchingJoke: true });
    fetch(
      `https://icanhazdadjoke.com/search?term=${this.state.searchTerm}&limit=${limit}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      }
    )
      .then((response) => response.json())
      .then((json) => {
        const jokes = json.results;
        console.log(jokes);
        this.setState({ jokes, isFetchingJoke: false });
      });
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  renderJokes() {
    return (
      <p>
        {this.state.jokes.map((item) => (
          <li key={item.id}>{item.joke}</li>
        ))}
      </p>
    );
  }

  render() {
    return (
      <div className="App">
        <SearchForm
          onSearchSubmit={() => this.searchjoke()}
          onSearchChange={this.onSearchChange}
          isFetchingJoke={this.state.isFetchingJoke}
          SingleSearch={() => this.searchjoke(1)}
        />

        {this.state.isFetchingJoke ? "searching for joke" : this.renderJokes()}

        <p>{this.state.searchTerm}</p>
      </div>
    );
  }
}
