import React from 'react';
import { Link } from 'react-router-dom';

class SearchMain extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      search:'',
      location: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.search();
  }

  search() {
    console.log('works');
    // this.props.searchbiz().then(push history thingy)

  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="search">
          <div className="left-search-container">
            <div className="div-label-find">
              <label htmlFor="left-search-input">Find</label>
            </div>
            <div className="div-input">
              <input onChange={this.update('search')} id="left-search-input"
                placeholder="home cleaners, burgers, spas..."
                type="text" value={this.state.search}></input>
            </div>
          </div>
          <div className="right-search-container">
            <div className="div-label-near">
              <label htmlFor="right-search-input">Near</label>
            </div>
            <div className="div-input">
              <input id="right-search-input"
                placeholder="address, neighborhood, city, state or zip"
                type="text" value={this.state.location} onChange={this.update('location')}></input>
            </div>
          </div>
          <div className="right-search-logo">
            <button type="submit" className="logo-glass"><i className="fas fa-search"></i></button>
          </div>
        </div>
      </form>
    );
  }
}







export default SearchMain;
