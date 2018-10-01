import { connect } from 'react-redux';
import { compose, withHandlers, withState } from 'recompose';
import {receiveDepartments,receiveEmployees} from '../../actions/index';
import Table from './Table';

export default compose(connect(
    ({ department  }) => ({
        department 
     
    } ),
    {
        receiveDepartments,
        receiveEmployees
    }
  ))(Table);
