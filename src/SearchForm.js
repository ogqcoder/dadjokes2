import React from "react";

const searchForm = (props) => {
  const onSubmit = (event) => {
    event.preventDefault();
    props.onSearchSubmit();
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Enter Text"
        onChange={props.onSearchChange}
      />
      <button disabled={props.isFetchingJoke}>Search</button>

      <button disabled={props.isFetchingJoke} onClick={props.SingleSearch}>
        I'm Feeling Funny
      </button>
    </form>
  );
};

export default searchForm;
