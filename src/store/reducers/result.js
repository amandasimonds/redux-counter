import * as actionTypes from "../actions"

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT :
            return {
                ...state,
                //concat is like push, but it pushes a NEW array rather than manipulating the original array
                results: state.results.concat(
                    {
                        id: new Date(),
                        //to get an action from the global state, use action payload
                        value: action.result
                    }
                )
            }
        case actionTypes.DELETE_RESULT :
            //One of doing it
            // const id = 2;
            // //create a copy of the array and distribute all the elements in state results into the new array
            // const newArray = [...state.results]
            // newArray.splice(id, 1)

            //Other way to do it
            //filter returns a new array
            //filter takes a function as an input, function is executed on each element in the array, and determines if each element fulfills a certain condition to make it into the new array
            //returns a new array which returns true for all elements where the id is not equal to the id that we passed through the filter
            const updatedArray = state.results.filter(result => result.id !== action.resultElId)
            return {
                ...state,
                results: updatedArray
            }
        default:
            //this returns the current state! not the updated
            return state;
    }
}

export default reducer