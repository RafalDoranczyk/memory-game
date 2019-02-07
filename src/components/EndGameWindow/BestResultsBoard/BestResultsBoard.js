import React from 'react';
import styled from 'styled-components'
import OneResult from './OneResult/OneResult';

const BestResultsBoardWrapper = styled.div`
${({ theme }) => theme.mixins.relativePosition(0, 0)}
height: 100%;

h3{
    ${({ theme }) => theme.mixins.absolutePosition(5, 0)}
    width: 100%;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.7rem;
}

`

const Table = styled.table`
${({ theme }) => theme.mixins.absolutePosition(15, 5)}
font-size: 1.5rem;
width: 90%;
margin: 0 auto;
background-color: ${({ theme }) => theme.colors.orange};
color: ${({ theme }) => theme.colors.orange};

th{
    color: ${({ theme }) => theme.colors.dark};
    padding: .5rem;
    background-color: ${({ theme }) => theme.colors.primary};
}

tr{
    background-color: ${({ theme }) => theme.colors.blue};
}
td{
    color: ${({ theme }) => theme.colors.dark};
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
        <BestResultsBoardWrapper>
            <h3>Top 10 best results</h3>
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