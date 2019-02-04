import React from 'react';
import styled from 'styled-components'



export const SpinnerStyle = styled.div`
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  border-top: 1.1em solid rgba(255, 255, 255, 0.2);
  border-right: 1.1em solid rgba(255, 255, 255, 0.2);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid #ffffff;
  animation: load8 1.1s infinite linear;
/* &:after {
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
} */
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

`


const Spinner = props => {
    return (
        <SpinnerStyle />
    );
};

export default Spinner;