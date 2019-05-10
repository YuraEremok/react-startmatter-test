import React, { Component } from 'react';

export default class SearchBar extends Component {


  onKeyUp(e) {
    this.props.onKeyUp(e.target.value);
  }


  render() {
      console.log(this.props.filterValue)

      return (
      <div className="row">
        <div className="col-sm-12">
          <div className="searchbar form-group">
            <input
                value={this.props.filterValue}
               type="text"
               onChange={this.onKeyUp.bind(this)}
               className="form-control"
               placeholder="Search people by name..."
             />
          </div>
        </div>
      </div>
    );
  }
}
