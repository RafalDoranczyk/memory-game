import React from 'react';
import styled from 'styled-components'
import OneResult from './OneResult/OneResult';

const BestResultsBoardWrapper = styled.div`
height: 100%;
display: flex;
flex-flow: column nowrap;
justify-content: space-around;
text-align: center;
`

const Table = styled.table`
width: 90%;
margin: 0 auto;
background-color: #F6820D;
color: #111;
tr{
    background-color: #FFCB2B;
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

        >
            <h3>Top 10 best results</h3>
            <Table
            >
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