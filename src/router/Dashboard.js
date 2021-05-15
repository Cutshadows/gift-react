import React from 'react';

import {
    BrowserRouter as Router, 
    Switch,
    Route, 
    Redirect
} from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';
import SearchScreen from '../components/search/SearchScreen';
import ScreenMarvel from '../components/marvel/Marvel';
import ScreenDC from '../components/dc/ScreenDC';
import HeroeScreen from '../components/heroes/HeroeScreen';
export const Dashboard=()=>{
    return(
      <>
        <Navbar/>
        <div className="container mt-2">
            <Switch>
                <Route exact path="/marvel" component={ScreenMarvel}/>
                <Route exact path="/hero/:heroeId" component={HeroeScreen}/>
                <Route exact path="/dc" component={ScreenDC}/>
                <Route exact path="/search" component={SearchScreen}/>
                <Redirect to="/marvel" />
            </Switch>
        </div>
      </>  
    )
}

