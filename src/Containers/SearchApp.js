import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserDetail from './UserDetail'
import * as actions from '../actions/Actions';
import SearchBar from "../Components/SearchBar";
import ToolBar from "../Components/ToolBar";
import UserTable from "../Components/UserTable";
import {getFilteredSortedUsers} from "../reducers/rootReducer";


const {searchText, changeActive, addFilter, fetchUsers, resetData} = actions;


class SearchApp extends Component {


    componentWillMount() {
        this.props.getUsers()

    }


    render() {
        const state = this.props;
        return (
            <div className="app container-fluid">

                <SearchBar filterValue={state.filterValue} onKeyUp={this.props.onKeyUp.bind(this)}/>

                <ToolBar onSorted={this.props.onSorted.bind(this)} reset={this.props.reset.bind(this)}/>

                <div className="row">
                    <div className="col-sm-5 col-md-5 col-lg-3">
                        <UserDetail/>
                    </div>
                    <div className="col-sm-7 col-md-7 col-lg-9">
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
    return {
        getUsers: () => dispatch(fetchUsers()),
        onSorted: (type) => {dispatch(addFilter({type}))},
        activeUserChanged: (id) => dispatch(changeActive(id)),
        onKeyUp: (value) => dispatch(searchText(value)),
        reset: () => dispatch(resetData()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchApp);
