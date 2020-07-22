import * as actionTypes from "./actionTypes"

export const saveResult = ( res ) => {
    //we can transform the data here
    //const updatedResult = res * 2;
    return {
        type: actionTypes.STORE_RESULT,
        //pass it on as a payload
        result: res
    }
}

export const storeResult = (res) => {
    //we get dispatch here from thunk
    //thunk steps in and dispatches the action again
    //this is allowing us to execute asynchronous code here!
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(res)); 
        }, 2000);
    }
};

export const deleteResult = (resElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElId
    };
};