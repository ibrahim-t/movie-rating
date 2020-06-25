
const initialState = {};
export function reducer(state = initialState, actions) {

    switch (actions.type) {
        case "INITIAL_LOAD":
            return {
                ...state,
                movieData: actions.movies
            }
        case "ROW_SELECTED":
            return {
                ...state,
                selectedData: actions.selectedData
            }
        case "ADD_DrishyamROW":
            return {
                ...state,
                data: { ...state.data, Rows: [...state.data.Rows, actions.newData] }
            }
        default:
            return Object.keys(state).length == 0 ? initialState : state;
    }
}