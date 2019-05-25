import React from 'react';
import Top from './Top';
import Bottom from './Bottom';
import './index.scss';

function Footer(){
    return(
        <div className="footer">
            <Top/>
            <Bottom/>
        </div>
    );
}

export default Footer;