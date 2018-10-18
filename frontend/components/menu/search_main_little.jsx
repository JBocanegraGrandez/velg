import React from 'react';
import { withRouter, Link } from 'react-router-dom';
class SearchMain extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      search:'',
      location: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // this.props.searchbiz(this.state.search);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.search(this.state.search);
  }

  search(arg) {
    console.log('works');
    this.props.searchbiz(arg).then((res) => this.props.history.push(`/business/${res.businesses.id}`));

  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="little-search">
          <div className="little-left-search-container">
            <div className="little-div-label-find">
              <label htmlFor="left-search-input">Find</label>
            </div>
            <div className="little-div-input">
              <input onChange={this.update('search')} id="little-left-search-input"
                placeholder="home cleaners, burgers, spas..."
                type="text" value={this.state.search}></input>
            </div>
          </div>
          <div className="little-right-search-container">
            <div className="little-div-label-near">
              <label htmlFor="right-search-input">Near</label>
            </div>
            <div className="little-div-input">
              <input id="little-right-search-input"
                placeholder="address, neighborhood, city, state or zip"
                type="text" value={this.state.location} onChange={this.update('location')}></input>
            </div>
          </div>
          <div className="little-right-search-logo">
            <button type="submit" className="little-logo-glass"><i className="fas fa-search"></i></button>
          </div>
        </div>
      </form>
    );
  }
}




export default withRouter(SearchMain);
