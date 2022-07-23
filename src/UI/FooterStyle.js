import styled from 'styled-components'

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  height: 20vh;
  background-color: black;
  z-index: 1;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`
