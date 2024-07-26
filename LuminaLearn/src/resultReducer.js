/ reducers/result.js
const initialState = {
    result: [] // Array of answers
};

export default function resultReducer(state = initialState, action) {
    switch (action.type) {
        case 'PUSH_ANSWER':
            return {
                ...state,
                result: [...state.result, action.payload]
            };
        default:
            return state;
    }
}