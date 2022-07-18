import './index.scss'
import React from 'react';

const AnimatedLetters = ({letterClass,setArray,idx}) => {
    return (
        <span>
            {
                setArray.map((char,i)=>(
                  <span key={char+i} className={`${letterClass} _${i+idx}`}>
                    
                    {char === ' ' ? (
                            <div>
                               <span>&nbsp;</span>
                            </div>
                        ) : char}
                  </span>
                ))
            }
        </span>
    );
}

export default AnimatedLetters;
