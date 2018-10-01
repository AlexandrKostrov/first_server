import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Table from './components/Table/';
import Home from './components/Home/Home';
import Layout from './hocs/layout';

const Routes = () => {
    return (
        <div>
            <Home />
            <Switch>
                <Route exact path="/" component={Table} />
                <Route  path="/api/departemts_empl"  component={Table} />
            </Switch>
        </div>
    );
};

export default Routes;