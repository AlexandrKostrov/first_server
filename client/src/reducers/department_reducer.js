export default function stateReducer(state = [], action) {
    switch (action.type) {
        case 'DEPARTMENTS_GET': {
            const newState = action.result;
            console.log(newState);
            return newState;
        }
 
        case 'EMPLOYEES_GET': {
            const newState = action.result;
            console.log(newState);
            return newState;
        }


        default:
            return state;
    }
}