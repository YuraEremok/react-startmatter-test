import * as types from '../constants/ActionTypes';


export const addFilter = (filter) => ({type: types.ADD_FILTER,filter})
export const searchText = (text) => ({type: types.SEARCH_TEXT,text})
export const changeActive = (id) => ({type: types.CHANGE_ACTIVE,id})
export let receiveUsers = (data) => ({type: types.RECEIVE_USERS, data})
export const fetchUsers = () => ({type: types.FETCH_USERS_SAGA})
export const toggleEditMode = () => ({type: types.EDIT_MODE})
export const editUser = (value,id,key) => ({type: types.EDIT_USER,value,id,key})
export const resetData = () => ({type: types.RESET_DATA})
export const updateUser = (user) => ({type: types.UPDATE_USER,user})
export const getSortDataToState = (data) => ({type: types.SORTED_DATA,data})



