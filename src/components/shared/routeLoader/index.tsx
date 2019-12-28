import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import './style.scss';

const routeLoader = () => (
  <div className="lazy-route-loader" >
      <AiOutlineLoading3Quarters className="icon" size={50}/>
  </div>
);

export default routeLoader;
