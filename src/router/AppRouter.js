import React, { useContext } from 'react';

import {
    BrowserRouter as Router, 
    Switch,
    // Route 
} from 'react-router-dom';
import { AuthContext } from '../auth/authContext';
import LoginScreen from '../components/login/LoginScreen';
import { Dashboard } from './Dashboard';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


export const AppRouter=()=>{

    const {user} = useContext(AuthContext);
    return(
      <Router>
          <div>
          <Switch>
              <PublicRoute 
                isAuthenticated={user.logged}
                exact
                path="/login" 
                component={LoginScreen} />
                
              <PrivateRoute 
                isAuthenticated={user.logged}
                path="/" 
                component={Dashboard} />
          </Switch>
          </div>
      </Router>  
    )
}

