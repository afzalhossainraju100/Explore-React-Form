import React from 'react';
import MySelf from './MySelf';
import Bro from './Bro';
import Sister from './Sister';

const Dad = () => {
    return (
      <div>
        <h3>Dad</h3>
        <section className='flex'>
            <MySelf></MySelf>
            <Bro></Bro>
            <Sister></Sister>
        </section>
      </div>
    );
};

export default Dad;