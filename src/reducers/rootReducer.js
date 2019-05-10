import * as types from '../constants/ActionTypes';


export const INITIAL_STATE = {
    data: [],
    filterValue: '',
    sortType: '',
    isFetching: true,
    didInvalidate: false,
    editMode: false,
    activeUserId: null,
    isDesc: false,
    sortedData: []
};


export default function searchlist(state = INITIAL_STATE, action) {

    switch (action.type) {

        case types.ADD_FILTER:

            return {
                ...state,
                sortType: action.filter.type,
                isDesc: !state.isDesc,
                // activeUserId:state.sortedData[0]
            }

        case types.SEARCH_TEXT:

            return {
                ...state,
                filterValue: action.text.toLowerCase()

            }

        case types.CHANGE_ACTIVE:

            return {
                ...state,
                activeUserId: action.id
            }

        case types.RECEIVE_USERS:

            return {
                ...state,
                data: action.data,
                activeUserId: action.data[0].id,
                isFetching: false
            }

        case types.EDIT_MODE:
            return {
                ...state,
                editMode: !state.editMode
            }

        case types.EDIT_USER:

            let stateCopy = {...state};
            let id = action.id
            let key = action.key;


            stateCopy.data = stateCopy.data.map(u => {
                if (u.id === id) {

                    return {...u, [key]: action.value};
                } else {
                    return u;
                }
            })
            //stateCopy.currentInputValue = action.value
            return stateCopy


        case types.RESET_DATA: {
            return {
                ...state,
                filterValue: "",
                sortType: '',
                activeUserId: 0

            }
        }


        default:
            return state;
    }
}

export const getActiveUser = (state) => {
    let activeUsers = state.data.filter(u => u.id == state.activeUserId);
    if (activeUsers.length) return activeUsers[0];
    return null;
}


export const getFilteredSortedUsers = (state) => {

    const filterType = state.sortType;
    const filter = x => x.name.toLowerCase().includes(state.filterValue);
    const filteredData = state.data.filter(filter);
    const filterFunc = (a, b) => {
        if (state.isDesc) {
            if (a[filterType] < b[filterType]) return -1;
            if (a[filterType] > b[filterType]) return 1;
        } else {
            if (a[filterType] > b[filterType]) return -1;
            if (a[filterType] < b[filterType]) return 1;
        }
        return 0;
    };
    let sortedData = filteredData.sort(filterFunc)


    return sortedData;

}

