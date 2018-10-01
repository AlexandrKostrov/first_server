import React, { Component } from 'react';
import Header from '../Header/header';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
 


class Home extends Component {
 

 


    render() {
        const {getEmpls} = this.props;
        return (
            <div>
                <Header />
                {/* <Table data={this.props.department} getEmpls={getEmpls}/> */}
            </div>
        );
    }
}

export default  Home;