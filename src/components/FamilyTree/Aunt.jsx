import React from 'react';
import Cousin from './Cousin';

const Aunt = () => {
    return (
        <div>
            <h3>Aunt</h3>
            <section>
                <Cousin name='Lucky'></Cousin>
                <Cousin name='Bobby'></Cousin>
            </section>
        </div>
    );
};

export default Aunt;