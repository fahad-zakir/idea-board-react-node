import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class LogInPage extends Component {
    render() {
        return (
            <div>
                <div className="styling">
                    <Link to="/">Home</Link>
                </div>
               <h1>Nicely Done!</h1> 
            </div>
        );
    }
}

export default LogInPage;