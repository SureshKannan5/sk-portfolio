
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import {React,Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact} from '@fortawesome/free-brands-svg-icons';
import MediaQuery from "react-responsive"
class About extends Component {
    state={
        letterClass:'text-animate'
    }
    componentDidMount(){

        setTimeout(() => {
           this.setState({
            letterClass:'text-animate-hover'
           })
          }, 3000)
    }
    render() {
        const {letterClass} = this.state;
        return (
            <div className='container about-page'>
            <div className="text-zone">
                <h1>
                <AnimatedLetters letterClass={letterClass} setArray={['A','b','o','u','t',' ','M','e']} idx={15}/>
                </h1>
                <p>   I'm very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.</p>
            <p align="LEFT">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>         
            </div>
            <MediaQuery minWidth={1224}>
            <div className="stage-cube-cont desktop">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color='#DD0031'/>
                    </div>
                    <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
                </div>
            </div>
            </MediaQuery>
            <MediaQuery maxWidth={1224}>
            <div className="stage-cube-cont mobile">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color='#DD0031'/>
                    </div>
                    <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
                </div>
            </div>
            </MediaQuery>
        </div>
        );
    }
}

export default About;
