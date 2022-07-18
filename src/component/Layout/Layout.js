import React, { Component } from 'react';
import './index.scss'
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import MediaQuery from 'react-responsive';

class Layout extends Component {
    render() {
        return (
            <div className="App">
                <Sidebar />
                <MediaQuery maxWidth={1224}>
                <div className="page mobile">
                    <Outlet/>
                </div>
                </MediaQuery>
                <MediaQuery minWidth={1224}>
                <div className="page desktop">
                    <Outlet/>
                </div>
                </MediaQuery>
            </div>
        );
    }
}

export default Layout;
