import React from 'react';
import HeroeListado from '../heroes/HeroeListado';

const ScreenMarvel = () => {
    return (
        <> 
            <h1>Marvel Screen</h1>
            <br />
            <HeroeListado publisher={'Marvel Comics'}/>
        </>
     );
}
 
export default ScreenMarvel;