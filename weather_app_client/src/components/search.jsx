import React from "react";
import axios from "axios";

function Search() {

const getCity = () => {
    
}

  return (
    <div>
      <div className="searchArea">
        <form onSubmit={getCity}>
          <label>City: </label>
          <input className="mb-3" controlId="formBasic" placeholder="city"/>


          <button variant="primary" type="submit" onSubmit={getCity}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search;
