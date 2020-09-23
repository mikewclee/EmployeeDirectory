import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import SearchBar from './components/SearchBar';
import EmployeeList from './components/EmployeeList';

function App() {
  const [query, setQuery] = useState("");

  function handleSearch (event) {
    event.preventDefault();
    setQuery(event.target.value.trim());
  }

  return (
    <div>
      <Header />
      <SearchBar handleSearch={handleSearch}/>
      <EmployeeList query={query} />
    </div>
  );
}

export default App;