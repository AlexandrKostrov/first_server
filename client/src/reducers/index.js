import { combineReducers } from 'redux';
import employees from './employee_reducer';
import department from './department_reducer';

const rootReducer = combineReducers({
    employees,
    department
});

export default rootReducer;