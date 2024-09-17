import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { add } from '../../store/reducers/contacts'

import { FormWrapper, SubmitButton } from './styles'
import { MainContainer, Title, Input } from '../../styles'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  
  const registerTask = (event: FormEvent) => {
    event.preventDefault()

    dispatch(
      add({
        name,
        email,
        phone,
      })
    )
    navigate('/')
  }
  return (
    <MainContainer>
      <Title>Novo contato</Title>
      <FormWrapper onSubmit={registerTask}>
        <Input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          type="text"
          value={phone}
          placeholder="Phone"
          onChange={(event) => setPhone(event.target.value)}
        />
        <SubmitButton type="submit">Register</SubmitButton>
      </FormWrapper>
    </MainContainer>
  )
}

export default Form