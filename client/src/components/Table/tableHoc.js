import React from 'react';
import axios from 'axios';

export default function tableHoc(Component){
    return class extends React.Component{
        getEmpls =  (id) => {
            return async () =>{
                const obj = await this.props.receiveEmployees(id);
    
            }
         
        } 
        render(){
            return(
                <Component {...this.props} getEmpls={this.getEmpls}/>
            )
        }
    }
}