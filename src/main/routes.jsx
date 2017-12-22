import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomeRoutes from '../content/home/home.routes';

const routes = [
    ...HomeRoutes
];

export default (
    <Switch>
        {
            routes.map((route, index) => {
                return (
                    <Route key={index} path={route.path} component={route.component} />
                )
            })
        }
        <Redirect path="*" to="/" />
    </Switch>
);