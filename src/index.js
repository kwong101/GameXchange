import React from 'react';
import ReactDOM from 'react-dom';

import "./index.css";

import App from './App';

import register from "./serviceWorker.js";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";


/* react-router delegating the render function to App.js,
which is where we can find the route to path descriptions */
/* FIXME: Do we need a switch here? Why is that there 
if there is only one route in the block */
ReactDOM.render( <BrowserRouter>
    <Switch>
        <Route path="/" component={App} />
    </Switch>
    </BrowserRouter>, document.getElementById('root')
);

register();


