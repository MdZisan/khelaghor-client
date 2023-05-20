import React from 'react';
import loadinggif from '../../assets/Loading screen.gif'
const Loading = () => {
    return (
        <div className='flex justify-center'>
            <img src={loadinggif} alt="" className='' />
        </div>
    );
};

export default Loading;