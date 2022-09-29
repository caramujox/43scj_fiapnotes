import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    transform: scale(0.2) rotate(180deg);
    opacity: 0;
  }
  to {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
`

export const cardGradientBackground = `
  background: var(--bgPrimary);
  background: -webkit-linear-gradient(to top, var(--primary), var(--bgPrimary)); 
  background: linear-gradient(to top, var(--primary), var(--bgPrimary)); 
`

export const Container = styled.article`
  width: 200px;
  height: 200px;
  padding: 10px;
  position: relative;

  color: var(--white);

  ${cardGradientBackground}

  box-shadow: 2px 2px 10px #00000099;

  animation: ${fadeIn} ease-in 0.5s;

  p:first-child {
    font-size: 14px;
    margin-bottom: 10px;
    color: var(--gray);
  }

  .material-icons {
    position: absolute;
    bottom: 5px;
    right: 5px;

    font-size: 32px;
    cursor: pointer;
    transition: 0.3s;
  }

  .material-icons:not(#priority):hover {
    color: #333;
    transform: scale(1.1);
    transform: rotate(360deg);
  }

  #priority {
    position: absolute;
    bottom: 5px;
    left: 5px;
    width: fit-content;
  }

  #edit_note {
    position: absolute;
    bottom: 5px;
    left: 65%;
    width: fit-content;
  }
`
