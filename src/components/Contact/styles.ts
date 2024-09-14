import styled from 'styled-components'
import variables from '../../styles/variables'

type InputProps = {
  isEditing?: boolean}

export const Card = styled.div`
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 32px;
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Info = styled.div`
  gap: 6px;
  display: flex;
  margin-bottom: 12px;
  flex-direction: column;
`

export const Actions = styled.div`
  gap: 8px;
  display: flex;
  justify-content: flex-start;
`

export const Input = styled.input<InputProps>`
  width: 100%;
  border: none;
  display: block;
  font-size: 14px;
  line-height: 24px;
  background: transparent;
  color: ${variables.black};
  padding-bottom: ${(props) => props.isEditing && '8px'};
  border-bottom: ${(props) => props.isEditing ? '1px solid' : 'none'} rgba(0, 0, 0, 0.15);
`

export const Title = styled(Input)`
  font-size: 18px;
  font-weight: bold;
`

export const Button = styled.button`
  border: none;
  cursor: pointer;
  padding: 8px 14px;
  font-weight: bold;
  border-radius: 6px;
  color: ${variables.grey};
`

export const DeleteButton = styled(Button)`
  color: ${variables.white};
  background-color: ${variables.red};
`

export const EditButton = styled(Button)`
  color: ${variables.black};
  background-color: ${variables.orange};
`

export const SaveButton = styled(Button)`
  color: ${variables.white};
  background-color: ${variables.green};
`