import React from 'react';

import {
    BrowserRouter as Router, 
    Switch,
    Route, 
    Redirect
} from 'react-router-dom';
import ScreenMarvel from '../components/marvel/Marvel';
import ScreenDC from '../components/dc/ScreenDC';
import HeroeScreen from '../components/heroes/HeroeScreen';
import { Navbar } from '../components/ui/Navbar';

export const Dashboard=()=>{
    return(
      <>
        <Navbar/>
        <div className="container mt-2">
            <Switch>
                <Route exact path="/marvel" component={ScreenMarvel}/>
                <Route exact path="/marvel/:heroeId" component={HeroeScreen}/>
                <Route exact path="/dc" component={ScreenDC}/>
                <Redirect to="/marvel" />
            </Switch>
        </div>
      </>  
    )
}

