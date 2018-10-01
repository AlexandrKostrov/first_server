import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import tableHoc from './tableHoc';
import './style.css';



class Table extends React.Component {

    async componentWillMount() {
        await this.props.receiveDepartments();
        console.log(this.props)
       }
       render(){
        
        const { data,getEmpls,department } = this.props;
        console.log(department) 
    return (
       
        <table>
            <tbody>
                {department.map(elem => {
                    return (
                       
                        <tr key={elem._id}>
                          {Object.keys(elem).map(key =>{
                              if(key !== 'date' && key !== '__v'){
                              return(
                                  <td key={key}>
                                      {elem[key]}
                                  </td>
                              )}
                          })} 
                        
                          <td><button>Delete</button></td>
                          <td><Link to={`/api/departemts_empl?departmentId=${elem._id}`}>
                          <button onClick={getEmpls(elem._id)}>Employee List</button></Link></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );}
};

export default tableHoc(Table);