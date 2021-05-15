import React from 'react';
import {Link} from 'react-router-dom';

const HeroeTarjeta = ({id, superhero, alter_ego, first_appearance, characters}) => {
    return ( 
        <div className="card mb-3" style={{maxWidth:540}}>
            <div className="row g-0">
                <div className="col-md-4 col-mb-8">
                    <img src={`./assets/heroes/${id}.jpg`} className="card-img mt-3" alt={superhero} />
                </div>
                <div className="col-md-8 col-mb-4">
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">
                            {alter_ego}
                        </p>
                        {
                            (alter_ego!==characters)
                            && <p className="card-text">{characters}</p>
                        }
                        <p className="card-text">
                            <small className="text-muted">
                                {first_appearance}
                            </small>
                        </p>
                        <Link to={`./hero/${id}`}>
                            Mas...
                        </Link>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default HeroeTarjeta;