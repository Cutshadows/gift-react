import React from 'react';
const GiftGridItem = ({title, url}) => {
   // const {url, id, title}=img;
  // console.log(title, url)
    return ( 
        <div className="card">
            <img src={url} alt={title}/>
            <p>{title.substring(0, 12)}</p>
        </div>
     );
}
 
export default GiftGridItem;