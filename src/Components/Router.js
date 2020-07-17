import React from 'react';
import {HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from "Routes/Home";
import TV from "Routes/TV";
import Header from "Components/Header";
import Search from "Routes/Search";
import Detail from "Routes/Detail";

export default () => {
    return (
        <Router>
            <>
                <Header />
                {/* 'Switch' only allow to render one at a time */}
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/tv" exact component={TV} />
                    {/* <Route path="/tv/popular" render={() => <h1>Popular</h1>} /> */}
                    <Route path="/search" exact component={Search} />
                    
                    {/* 'Router' by default gives information of the props to the 'Route' */}
                    <Route path="/movie/:id" component={Detail}/>
                    <Route path="/show/:id" component={Detail}/>

                    {/* if none of the above url matches correctly, redirect back to home */}
                    <Redirect from="*" to="/" />
                </Switch>
            </>
        </Router>
    )
}        
