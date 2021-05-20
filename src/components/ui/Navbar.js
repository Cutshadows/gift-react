import React, { useContext } from 'react';

import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

const {
    LOGOUT
}=types;


export const Navbar = () => {
    const history=useHistory();
    const {user:{name}, dispatch} = useContext(AuthContext);
    const handleLogout=()=>{
        dispatch({
            type:LOGOUT
        });
        history.replace('/login');
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 nav justify-content-end mr-1">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-warning">
                     {name}
                    </span>
                    {/* <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/login"
                    >
                        Logout
                    </NavLink> */}
                    <button
                        className="nav-item nav-link btn"
                        onClick={handleLogout}>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}