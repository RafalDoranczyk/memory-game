import React from 'react';
import styled from 'styled-components'
import OneResult from './OneResult/OneResult';

const BestResultsBoardWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
h3{
    flex-basis: 15%;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.7rem;
    @media (orientation: landscape){
        font-size: 1.2rem;
        @media (min-width: 700px){
            font-size: 2rem;
        }
    }
}

`

const Table = styled.table`
    font-size: 1.5rem;
    width: 70%;
    margin: 0 auto;
    flex-basis: 80%;
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.orange};

    @media(orientation:landscape){
        font-size: 1rem;
        @media(min-width: 700px){
            font-size: 2rem;
        }
    }
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
            <h3>Top 8 best results</h3>
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