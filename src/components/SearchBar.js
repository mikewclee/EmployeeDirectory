import React from 'react';

function SearchBar(props) {
  return (
    <nav className="navbar bg-primary d-flex justify-content-center" onSubmit={e => e.preventDefault()}>
      <form className="form-inline position-relative" >
        <input className="form-control"
          style={{ width: "600px" }}
          onChange={props.handleSearch}
          name="search"
          type="search"
          placeholder="Search Employee"
        />
      </form>
    </nav>
  )
}

export default SearchBar;