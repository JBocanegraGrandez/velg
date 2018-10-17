

import React from 'react';
const SearchMain = () => (
  <div className="search">
    <div className="left-search-container">
      <div className="div-label-find">
        <label htmlFor="left-search-input">Find</label>
      </div>
      <div className="div-input">
        <input id="left-search-input"
          placeholder="home cleaners, burgers, spas..."
          type="text"></input>
      </div>
    </div>
    <div className="right-search-container">
      <div className="div-label-near">
        <label htmlFor="right-search-input">Near</label>
      </div>
      <div className="div-input">
        <input id="right-search-input"
          placeholder="address, neighborhood, city, state or zip"
          type="text"></input>
      </div>
    </div>
    <div className="right-search-logo">
      <button type="submit" className="logo-glass"><i className="fas fa-search"></i></button>
    </div>
  </div>
);

export default SearchMain;
