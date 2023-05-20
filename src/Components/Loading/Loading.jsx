import React from 'react';
import loadinggif from '../../assets/Loading screen.gif'
const Loading = () => {
    return (
        <div>
            <img src={loadinggif} alt="" className='h-screen w-screen' />
        </div>
    );
};

export default Loading;