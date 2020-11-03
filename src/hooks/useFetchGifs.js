import { useState, useEffect } from "react"
import { getFetchGifs } from '../helpers/getGifs';

export const useFetchGifs=(category)=>{
    const [state, setState] = useState({
        data:[],
        loading:true
    });

    useEffect(()=>{
         getFetchGifs(category)
                .then(img=>{
                        setState({
                            data:img,
                            loading:false
                        });
                });
    }, [category]) 
    
    
    return state;
}