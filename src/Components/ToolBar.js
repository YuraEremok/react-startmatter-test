import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'

export default class ToolBar extends Component {

  constructor(props) {
    super(props);
  }


  onSortedByName(e) {
    this.props.onSorted('name');
  }

  onSortedByAge(e) {
    this.props.onSorted('age');
  }




  render() {

    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="toolbar">
            <Button variant="outline-primary" onClick={this.onSortedByName.bind(this)}>
            Sort by name
            </Button>
            <Button  variant="outline-primary"  onClick={this.onSortedByAge.bind(this)}>
            Sort by age
            </Button>
              <Button  variant="outline-primary"  onClick={this.props.reset.bind(this)}>
                  Reset
              </Button>
          </div>
        </div>
      </div>
    );
  }
}
