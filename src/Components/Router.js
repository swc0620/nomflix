import React from 'react';
import {HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";

export default () => {
    return (
        <Router>
            {/* 'Switch' only allow to render one at a time */}
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/tv" exact component={TV} />
                {/* <Route path="/tv/popular" render={() => <h1>Popular</h1>} /> */}
                <Route path="/search" exact component={Search} />
                {/* if none of the above url matches correctly, redirect back to home */}
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    )
}