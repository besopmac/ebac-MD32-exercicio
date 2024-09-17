import styled from 'styled-components'
import variables from '../../styles/variables'

export const Aside = styled.aside`
  padding: 16px;
  background-color: #eee;
  height: 100vh;
`

export const Button = styled.button`
  border: none;
  cursor: pointer;
  padding: 8px 14px;
  font-weight: bold;
  border-radius: 6px;
  color: ${variables.white};
  background-color: ${variables.black};
`