import React from 'react';
import styled from 'styled-components'
import OneResult from './OneResult/OneResult';

const BestResultsBoardWrapper = styled.div`
position: absolute;
top: 5%;
left: ${props => {
        if (props.fetchedResults.length > 0) return '0'
        return '-110%'
    }};
transition: .4s;
height: 100%;
width: 100%;
/* background-color: red; */
font-size: 15px;
`
const Table = styled.table`
height: 80%;
width: 90%;
margin: 10px auto 0 auto;
background-color: #FFDC00;
color: #111;
tr{
    background-color: #FF4136;
}
td{
    color: #000;
}
`


const BestResultsBoard = props => {
    const { fetchedResults } = props


    const results = fetchedResults.map((result, index) => (
        <OneResult
            time={result.time}
            name={result.name}
            key={index}
        />
    ))

    return (
        <BestResultsBoardWrapper
            fetchedResults={fetchedResults}
        >
            <h3>Top 10 Best results</h3>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {results}
                </tbody>

            </Table>

        </BestResultsBoardWrapper>
    );
};

export default BestResultsBoard;