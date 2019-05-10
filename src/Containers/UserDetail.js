import React from 'react';
import {connect} from 'react-redux';
import {editUser, toggleEditMode, updateUser} from "../actions/Actions";
import {getActiveUser} from "../reducers/rootReducer";
import * as types from "../constants/ActionTypes";


let UserDetail = (props) => {
    const userDetail = props.activeUser;
    console.log(userDetail);

    const detailMarkup = !userDetail ? (
        <h3>Nothing found :(</h3>
    ) : (
        <div className="thumbnail">
            <button onClick={props.onEditClick}>Edit</button>
            {props.editMode?<button onClick={()=>props.save(userDetail)}>Save</button>:""}

            <img alt="img" src={`images/${userDetail.image}.jpg`}/>
            <div className="thumbnail-caption">
                <h3>{userDetail.name}</h3>
                <table className="table ">
                    <tbody>
                    <tr>

                        <td>Age:</td>
                        <td>{props.editMode ? <input type="text" value={userDetail.age} onChange={
                            (e) => {
                                props.onChangeEditUser(e.currentTarget.value, userDetail.id, "age")
                            }}/> : userDetail.age}</td>
                    </tr>
                    <tr>
                        <td>Registration Date:</td>
                        <td>{props.editMode ? <input type="text" value={userDetail.RegistrationDate} onChange={
                            (e) => {
                                props.onChangeEditUser(e.currentTarget.value, userDetail.id, "RegistrationDate")
                            }}/> : userDetail.RegistrationDate}</td>
                    </tr>
                    <tr>


                        <td>email:</td>
                        <td>{props.editMode ? <input type="text" value={userDetail.email} onChange={
                            (e) => {
                                props.onChangeEditUser(e.currentTarget.value, userDetail.id, "email")
                            }}/> : userDetail.email}</td>
                    </tr>


                    </tbody>
                </table>
               <p>
                    <b>Status:</b>
                    <div className="tdStatus">{props.editMode ? <textarea type="text" rows="auto" cols="45" value={userDetail.status} onChange={
                        (e) => {
                            props.onChangeEditUser(e.currentTarget.value, userDetail.id, "status")
                        }}/> : <p>{userDetail.status}</p>}</div>
                </p>
            </div>
        </div>
    );


    const loading = <span></span>;


    return props.isFetching ? loading : detailMarkup;

}


const mapStateToProps = (state) => {

    return {
        data: state.data,
        currentInputValue: state.currentInputValue,
        activeUser: getActiveUser(state),
        isFetching: state.isFetching,
        editMode: state.editMode,

    }
}


const mapDispatchToProps = (dispatch, getState) => {
    return {
        onEditClick: () => dispatch(toggleEditMode()),
        onChangeEditUser: (value, id, key) => {
            dispatch(editUser(value, id, key));
        },
        save: (user) => {
            debugger
            dispatch(updateUser(user))
            dispatch(toggleEditMode())

        }
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(UserDetail)
