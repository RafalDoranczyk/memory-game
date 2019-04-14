import React from 'react';

const OneResult = ({time, name}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{time}</td>
        </tr>
    );
};

export default OneResult;