import React, { Component } from 'react';


export default class UserRow extends Component {

    handleClick(e) {

        this.props.activeUserChanged(this.props.user.id);
    }

    render() {

        const userData = this.props.user;
        return (
            <tr onClick={this.handleClick.bind(this)}>
                <td            className="d-none d-sm-block"
                >
                    <img alt="img" src={`/images/${userData.image}.jpg`} className="user-image " />
                </td>
                <td>{userData.name}</td>
                <td className="d-none d-sm-block">{userData.age}</td>
                <td>{userData.RegistrationDate}</td>
                <td>{userData.email}</td>
            </tr>
        );
    }
}

