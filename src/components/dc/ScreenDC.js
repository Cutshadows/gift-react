
import React from 'react';
import HeroeListado from '../heroes/HeroeListado';

const ScreenDC = () => {
    return (
        <> 
            <h1>
                Screen DC
            </h1>

            <br />
            <HeroeListado publisher={'DC Comics'}/>
        </>
     );
}
 
export default ScreenDC;