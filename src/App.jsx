import React from 'react';
import { Outlet } from 'react-router';
import "./App.css";

export default class App extends React.Component{
    render(){
        return <div className="page">
            <h1>Main App Page</h1>
            <main className="container">
                <Outlet/>
            </main>
        </div>;
    }
}


