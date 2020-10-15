import React from 'react';
import { Link } from 'react-router-dom';

const Partner = ({url = '/', imageUrl}) => {
    
    const img_style = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }

    return (
      <Link className="institution__link" to={url}>
        <div style={img_style} className="institution__image__wrapper"></div>
      </Link>
    );
}

export default Partner;
