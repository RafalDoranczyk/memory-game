import React from 'react';
import styled from 'styled-components'



export const SpinnerStyle = styled.div`


:before {
  content: '';
  box-sizing: border-box;
  position: absolute;
  width: 60px;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
  height: 60px;
  border-radius: 50%;
  border: 2px solid #ccc;
  border-top-color: #333;
  animation: spinner .6s linear infinite;
}

@keyframes spinner {
  to {transform: rotate(360deg)}
}
 

`


const Spinner = props => {
  return (
    <SpinnerStyle />
  );
};

export default Spinner;