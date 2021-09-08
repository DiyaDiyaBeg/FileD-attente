import React from 'react';
import ImageFond from '../components/ImageFond';
import Logo from '../components/Logo';
import Tables from '../components/Tables';
import Time from '../components/Time';

const Afficheur = () => {
    return (
        <div classname="afficheur">
            <Logo></Logo>
            <ImageFond></ImageFond> 
            <Time></Time>
           <Tables></Tables>
            
            
        </div>
    );
};

export default Afficheur;