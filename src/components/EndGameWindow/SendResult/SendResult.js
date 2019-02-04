import React from 'react';
import styled from 'styled-components';
import YourPosition from './YourPosition/YourPosition';

const FormWrapper = styled.form`
position: absolute;
top: 51vh;
left: ${props => {
        if (props.isSended) return '140%'
        return '5%'
    }};
    transition: .9s;
width: 90%;
height: 25vh;
background-color: yellow;
display: flex;
flex-flow: column nowrap;
justify-content: space-around;
align-items: center;
font-size: 18px;
background-color: #333;
border: 1px solid gold;
border-radius: 15px;
text-align: center;
input{
    margin-top: 10px;
    padding: 5px;
    width: 80%;
    text-align: center;
}

button{
    background-color: gold;
    border: none;
    padding: 10px;
    border-radius: 50px;
    font-weight: 900;
}
`



const SendResult = props => {

    const { playerPosition, fetchedResults, postAndGetResults, isSended, name, changeName } = props

    return (
        <>
            <FormWrapper
                fetchedResults={fetchedResults}
                onSubmit={postAndGetResults}
                isSended={isSended} >
                <label
                    htmlFor="name">Enter your name
            <input
                        placeholder='your name here'
                        type="text"
                        id='name'
                        value={name}
                        onChange={changeName} />
                </label>
                <button
                    disabled={isSended ? true : false}>
                    Send your result!
                </button>
            </FormWrapper>
            <YourPosition
                playerPosition={playerPosition}
                fetchedResults={fetchedResults} />
        </>
    );
};

export default SendResult;