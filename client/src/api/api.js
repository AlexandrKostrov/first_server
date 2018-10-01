 import axios from 'axios';

export   function getDepartments ()  {
      return   axios.get(`/api/departments`)
      .then(r => r.data);
}

export   function getEmployees (id)  {
      return   axios.get(`/api/departemts_empl?departmentId=${id}`)
      .then(r => r.data);
}