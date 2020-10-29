import React, {Fragment} from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getFetchGifs } from '../helpers/getGifs';
import GiftGridItem from './GiftGridItem';

const GiftGrid = ({category}) => {

    const {loading}=useFetchGifs();
    
    console.log(data, loading)
    /*   const [images, setImages] = useState([])
    useEffect(()=>{
        getFetchGifs(category)
            .then(setImages);
    }, [category]) */
    
    
    return ( 
        <Fragment>
            <li>{category}</li>
            {loading? 'Cargando...':'Data Cargada'}
          { /*  <div className="card-grid">
                    {
                        images.map(img=>(
                                <GiftGridItem 
                                key={img.id}
                            // img={img} />
                            {...img}/>
                        ))
                    }
            </div> */}
        </Fragment>
     );
}
 
export default GiftGrid;