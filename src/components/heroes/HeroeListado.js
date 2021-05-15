import React,{useMemo} from 'react';
import { getHeroByPublisher } from '../selectors/getHeroByPublisher';
import HeroeTarjeta from './HeroeTarjeta';

const HeroeListado = ({publisher}) => {

    const heroes= useMemo(() => getHeroByPublisher(publisher), [publisher]);
    
    return ( 
        <div className="row row-cols-2 row-cols-md-4 animate__animated animate__fadeIn">
            {
                heroes.map(hero=>(
                    <HeroeTarjeta 
                        key={hero.id}
                        {...hero}
                    />
                ))
            }
        </div>
     );
}
 
export default HeroeListado;