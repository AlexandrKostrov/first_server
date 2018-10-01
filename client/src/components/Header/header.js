import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';
import './style.css';

class Header extends Component {
    state = {
        showNav: false,
    }
    render() {
        return (
            <header>
                <div>
                        <Link to='/api/departments'>
                        <button>Add</button>
                        </Link>
                        <button>Edit</button>
                        <button>Delete</button>
                        <button>List</button>
                </div>
            </header>
        );
    }
}

export default Header;