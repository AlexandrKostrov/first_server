import axios from 'axios';
import {getDepartments, getEmployees} from '../api/api';

export   function  receiveDepartments(){     
    return {
        type:'DEPARTMENTS',
      
        promise:getDepartments
    }

}

export function receiveEmployees(id){
    return{
        type:'EMPLOYEES',
        payload: id,
        promise:getEmployees
    }
}