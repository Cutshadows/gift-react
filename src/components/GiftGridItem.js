import React from 'react';
const GiftGridItem = ({title, url}) => {
   // const {url, id, title}=img;
    return ( 
        <div className="card animate__animated animate__pulse">
            <img src={url} alt={title}/>
            <p>{title.substring(0, 12)}</p>
        </div>
     );
}
 
export default GiftGridItem;