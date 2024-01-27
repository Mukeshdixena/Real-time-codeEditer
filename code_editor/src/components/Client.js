import React from 'react';

import Avator from 'react-avatar';

const Client = ({userName}) => {
    return (
        <div className='client'>

            <Avator name={userName} size={50} round="14px"></Avator>
            <span className='userName'>
                {userName}

            </span>
        </div >
    )
}

export default Client;