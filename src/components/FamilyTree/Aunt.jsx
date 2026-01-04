import React from 'react';
import Cousin from './cousin';

const Aunt = () => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousin name='Lucky'></Cousin>
                <Cousin name='Bobby'></Cousin>
            </section>
        </div>
    );
};

export default Aunt;