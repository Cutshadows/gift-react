import React,{useMemo} from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm';
import HeroeTarjeta from '../heroes/HeroeTarjeta';
import { getHeroByName } from '../selectors/getHeroByName';


const SearchScreen = ({history}) => {
    const location=useLocation();
   const {q=''}=queryString.parse(location.search);

    const [formValue, handleInputChange]=useForm({
        inputsearch:q
    });
    const {inputsearch}=formValue;
    const heroesFiltered=useMemo(()=>getHeroByName(q), [q]);

    const handleSearch=(e)=>{
        e.preventDefault();
        history.push(`?q=${inputsearch}`);
    }
    return ( 
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <form onSubmit={handleSearch}>
                        <input type="text"
                            name='inputsearch'
                            onChange={handleInputChange}
                            autoComplete="off"
                            placeholder="Find your hero"
                            className="form-control"/>
                    </form>
                    <button
                        type="submit"
                        className="btn m-1 btn-block btn-outline-primary"
                    >
                        Search...
                    </button>
                </div>
                <div className="col-7">
                        <h4>Results</h4>
                        {
                            (q==='')
                            &&
                                <div className="alert alert-info">
                                    Search a hero
                                </div>
                        }
                        {
                            (q!=='' && heroesFiltered.length===0)
                            &&
                                <div className="alert alert-warning">
                                    There is not a hero with {q}
                                </div>
                        }
                        <hr />
                        {
                            heroesFiltered.map(hero=>(
                                <HeroeTarjeta key={hero.id} 
                                {...hero}/>
                            ))
                        }

                </div>
            </div>
        </div>

     );
}
 
export default SearchScreen;