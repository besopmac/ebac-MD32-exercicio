import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  height: 100vh;
  padding: 40px;
  overflow-y: scroll;
`

export const Title = styled.p`
  display: block;
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 40px;
`

export const Input = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  border-color: #666;
  color: #666;
  width: 100%;
`