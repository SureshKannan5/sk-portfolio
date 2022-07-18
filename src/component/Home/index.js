import React, { Component } from 'react';
import devtitle from '../../assets/images/logo-s.png'
import {Link} from 'react-router-dom'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';


class Home extends Component {
    state = {
        letterClass:'text-animate'
    }
    componentDidMount(){
        setTimeout(() => {
            
            this.setState({
                letterClass:'text-animate-hover'
            })
            }, 4000);
    }
   
    render() {
        const {letterClass} = this.state;
        const nameArray = ['u','r','e','s','h']
        return (
            
            <div className='container home-page'>
                <div className="text-zone">
                    <h1><span className={letterClass}>H</span>
                    <span className={`${letterClass} _10`}>e</span>
                    <span className={`${letterClass} _11`}>y</span><br/>
                    <span className={`${letterClass} _13`}>I'</span>
                    <span className={`${letterClass} _14`}>m</span>
                    <img src={devtitle} alt='developer'></img>
                    <AnimatedLetters letterClass={letterClass} setArray={nameArray} idx={15}/>
                    </h1>
                    <h2>UI/UX Designer,Full Stack developer<br/>
                    Based in India</h2>
                    <p className='body-content'>Helping Start-ups,Small businesses, and agencies achive high quality websites and exceptional user experience</p>
                    <Link to={'/contact'} className='flat-button'>CONTACT ME</Link>
                </div>
            </div>
        );
    }
}

export default Home;
