

import React from 'react';
const SearchMain = () => (
  <div className="little-search">
    <div className="little-left-search-container">
      <div className="little-div-label-find">
        <label htmlFor="left-search-input">Find</label>
      </div>
      <div className="little-div-input">
        <input id="little-left-search-input"
          placeholder="home cleaners, burgers, spas..."
          type="text"></input>
      </div>
    </div>
    <div className="little-right-search-container">
      <div className="little-div-label-near">
        <label htmlFor="right-search-input">Near</label>
      </div>
      <div className="little-div-input">
        <input id="little-right-search-input"
          placeholder="address, neighborhood, city, state or zip"
          type="text"></input>
      </div>
    </div>
    <div className="little-right-search-logo">
      <button type="submit" className="little-logo-glass"><i className="fas fa-search"></i></button>
    </div>
  </div>
);

export default SearchMain;
