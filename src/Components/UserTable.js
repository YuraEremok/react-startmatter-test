import React, { Component } from 'react';
import UserRow from './UserRow';

export default class UserTable extends Component {

  render() {


    const userData = this.props.userData;
    let userRows = [];
    if(userData) {

        const userRow =  userData.map(user => {
       return <UserRow
            user={user}
            key={user.id}
            activeUserChanged={this.props.activeUserChanged.bind(this)}
        />


      });
        userRows.push(userRow);

    }

    const isDataLoaded = !this.props.isFetching;
    const loading = <span>Loading...</span>;

    return isDataLoaded? (
      <table className="user-list table table-striped ">
        <thead className="thead-dark">
          <tr>
            <th className="d-none d-sm-block">Image</th>
            <th>Name</th>
            <th className="d-none d-sm-block">Age</th>
            <th>Reg  date</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userRows}
        </tbody>
      </table>
    ) : (loading);
  }
}
