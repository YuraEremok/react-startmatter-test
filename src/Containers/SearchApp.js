import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserDetail from './UserDetail'
import * as actions from '../actions/Actions';
import SearchBar from "../Components/SearchBar";
import ToolBar from "../Components/ToolBar";
import UserTable from "../Components/UserTable";
import {getFilteredSortedUsers} from "../reducers/rootReducer";
import {getSortDataToState} from "../actions/Actions";


const {searchText, changeActive, addFilter, fetchUsers, resetData} = actions;






class SearchApp extends Component {



    componentWillMount() {
        this.props.getUsers()

    }



    render() {
        const state = this.props;
        let abc = getFilteredSortedUsers(state)

        return (
            <div className="app container-fluid">

                <SearchBar filterValue={state.filterValue} onKeyUp={this.props.onKeyUp.bind(this)}/>

                <ToolBar onSorted={this.props.onSorted.bind(this)}  reset={this.props.reset.bind(this)}/>

                <div className="row">
                    <div className="col-sm-5 col-md-5 col-lg-4">
                        <UserDetail />
                    </div>
                    <div className="col-sm-7 col-md-7 col-lg-8">
                        <UserTable
                            isFetching={state.isFetching}
                            userData={getFilteredSortedUsers(state)}
                            activeUserChanged={this.props.activeUserChanged.bind(this)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return state


}


const mapDispatchToProps = (dispatch) => {
debugger
    return{

    getUsers: () => dispatch(fetchUsers()),
    onSorted: (type) =>{
        dispatch(addFilter({type}));
    },
    activeUserChanged: (id) => dispatch(changeActive(id)),
    onKeyUp: (value) => dispatch(searchText(value)),
     reset: () => dispatch(resetData()),
        // getSortData:(data)=>(dispatch(getSortDataToState(data)))
}}


export default connect(mapStateToProps, mapDispatchToProps)(SearchApp);
