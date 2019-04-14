import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    transform: ${({isSended}) => isSended ? 'translateX(100%)': 'translateX(0)'};
    transition: .3s;
    font-size: 1.5rem;
    @media (orientation:landscape){
        font-size: 1.2rem;
        @media(min-width: 700px){
            font-size: 2rem;
        }
    }
    & label{
        color: ${({ theme }) => theme.colors.primary}
    }
    & input{
        flex-basis: 15%;
        width: 70%;
        max-width: 250px;
        min-height: 30px;
        text-align: center;
    }

    & button{
        font-weight: 700;
        background-color: ${({ theme }) => theme.colors.orange};;
        padding: 10px;
        border-radius: 50px;
        @media (orientation: landscape){
        font-size: 1rem;
            @media(min-width: 700px){
                font-size: 2rem;
                padding: 15px 10px;
            }
        }
    }
`



const SendResult = props => {

    const { fetchedResults, postAndGetResults, isSended, name, changeName } = props

    return (
        <FormWrapper
            fetchedResults={fetchedResults}
            onSubmit={postAndGetResults}
            isSended={isSended} >
            <label
                htmlFor="name">Enter your name </label>
            <input
                placeholder='Your name here'
                type="text"
                id='name'
                value={name}
                onChange={changeName} />

            <button
                disabled={isSended ? true : false}>
                Send your result!
                </button>
        </FormWrapper>

    );
};

export default SendResult;