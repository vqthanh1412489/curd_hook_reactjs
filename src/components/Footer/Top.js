import React from 'react';
import './index.scss';

function Top() {
    return (
        <div>
            <div class="f-grid">
                <div class="f-grid-col mg-left">
                    <img className="logo" src="/images/logo.png" alt="logo" />
                    <p>
                        Pictures, abstract symbols, materials, and colors are among the ingredients with which a designer or engineer works. To design is to discover relationships and to make arrangements and rearrangements among these ingredients.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, quaerat blanditiis. Eligendi quae tenetur ratione repellendus ut.
                    </p>
                    <div className="readmore">
                        <i className="fas fa-arrow-circle-right"></i>
                        <span>Read More</span>
                    </div>
                    <hr/>
                </div>
                
                <div class="f-grid-col">
                </div>
                <div class="f-grid-col">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, nulla! Assumenda dignissimos harum, molestias iure repudiandae ratione praesentium. Illo facilis et velit ut quam omnis, porro molestiae magni, laboriosam ipsa.
                </div>
                <div class="f-grid-col mg-right">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, nulla! Assumenda dignissimos harum, molestias iure repudiandae ratione praesentium. Illo facilis et velit ut quam omnis, porro molestiae magni, laboriosam ipsa.
                </div>
            </div>
        </div>
    );
}

export default Top;