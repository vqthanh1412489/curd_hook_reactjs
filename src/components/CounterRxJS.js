import React, { useState } from 'react';
import * as Rx from 'rxjs';


import './index.scss';
function CounterRxJS(props) {
    const a = [1, 2, 3, 4, 5, 6, 7, 8];
    console.log(a);

    console.log(Rx.Observable.from(a).filter(num => num % 2).map(num => num * num));
    return (
        <div>

        </div>
    )
}

export default CounterRxJS;