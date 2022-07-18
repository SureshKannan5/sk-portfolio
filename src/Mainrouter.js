import React, { Component } from 'react';
import Layout from './component/Layout/Layout';
import {Routes,Route} from 'react-router-dom'
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';


class Mainrouter extends Component {
    render() {
        return (
    <Routes>
      <Route exact path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route exact path='/About' element={<About/>}/>
      <Route exact path='/Contact' element={<Contact/>}/>
      </Route>
    </Routes>
        );
    }
}

export default Mainrouter;