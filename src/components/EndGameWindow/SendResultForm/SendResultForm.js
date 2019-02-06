import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
height: 100%;
display: flex;
flex-flow: column nowrap;
justify-content: space-around;
align-items: center;
transform: ${props => {
        if (props.isSended) return "translateX(+100%)"
        return 'translateX(0)'
    }};
    transition: .3s;

input{
    flex-basis: 15%;
    width: 70%;
    text-align: center;
}
button{
    background-color: #FF8964;
    border: none;
    padding: 10px;
    border-radius: 50px;
    font-weight: 900;
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