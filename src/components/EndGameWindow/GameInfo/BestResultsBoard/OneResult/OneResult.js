import React from 'react';

const OneResult = props => {
    const { time, name } = props
    return (
        <tr>
            <td>{name}</td>
            <td>{time}</td>
        </tr>
    );
};

export default OneResult;