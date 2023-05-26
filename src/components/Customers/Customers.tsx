import React from 'react';

import ce_logo from '../../resources/images/ce_logo.png';
import ecs_logo from '../../resources/images/ecs_logo.png';
import mqf_logo from '../../resources/images/mqf_logo.png';
import nef_logo from '../../resources/images/nef_logo.png';
import pp_logo from '../../resources/images/pp_logo.png';
import tff_logo from '../../resources/images/tff_logo.png';
import vrola_logo from '../../resources/images/vrola_logo.png';


const Customers = () => {
  return (
    <div className='customers_wrapper'>
      <div>
        <img
          className='customers_logo'
          src={ce_logo}
          alt='Centigrade Logistics logo'
        />
      </div>
      <div>
        <img
          className='customers_logo'
          src={ecs_logo}
          alt='Elite Cold Storage logo'
        />
      </div>
      <div>
        <img
          className='customers_logo'
          src={mqf_logo}
          alt='Maximum Quality Foods logo'
        />
      </div>
      <div>
        <img
          className='customers_logo'
          src={nef_logo}
          alt='Automatic Rolls logo'
        />
      </div>
      <div>
        <img
          className='customers_logo'
          src={pp_logo}
          alt='Porky Products logo'
        />
      </div>
      <div>
        <img
          className='customers_logo'
          src={tff_logo}
          alt='The Fillo Factory logo'
        />
      </div>
      <div>
        <img className='customers_logo' src={vrola_logo} alt='Vrola logo' />
      </div>
    </div>
  );
};
export default Customers;
