// reducers

import * as c_name from './../constants'

const reducer = (state={}, action) => {
    switch(action.type){
        case c_name.REQUEST_MUSIC:
            return {...state, loading: true};
        case c_name.RECEIVING_MUSIC:
            return {...state, json:action.json, loading: false}
        default:
            return state;
    }
};

export default reducer;