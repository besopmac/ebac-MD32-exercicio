import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import ContactClass from '../../models/Contact'

import { remove, edit } from '../../store/reducers/contacts'

type Props = ContactClass

const Contact = ({
    id,
    name: initialName,
    email: initialEmail,
    phone: initialPhone
  }: Props) => {
  const dispatch = useDispatch()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [contact, setContact] = useState(false);

  useEffect(() => {
    if (initialName.length > 0) setName(initialName)
    if (initialEmail.length > 0) setEmail(initialEmail)
    if (initialPhone.length > 0) setPhone(initialPhone)
  }, [initialName, initialEmail, initialPhone])

  function cancelEdition() {
    setContact(false)
    setName(initialName)
    setEmail(initialEmail)
    setPhone(initialPhone)
  }

  return (
    <S.Card>
      <S.Info>
        <S.Title
          value={name}
          disabled={!contact}
          isEditing={contact}
          onChange={(e) => setName(e.target.value)}
        />
        <S.Input
          value={phone}
          disabled={!contact}
          isEditing={contact}
          onChange={(e) => setPhone(e.target.value)}
        />

        {contact ? (
          <S.Input
            value={email}
            disabled={!contact}
            isEditing={contact}
            onChange={(e) => setEmail(e.target.value)}
          />
        ) : (
          <a href={`mailto:${email}`}>{email}</a>
        )}
      </S.Info>

      <S.Actions>
        {contact ? (
          <>
            <S.SaveButton
              onClick={() => {
                dispatch(
                  edit({
                    id,
                    name,
                    phone,
                    email
                  })
                ),
                  setContact(false)
              }}
            >
              Salvar
            </S.SaveButton>
            <S.DeleteButton onClick={cancelEdition}>Cancelar</S.DeleteButton>    
          </>
        ) : (
          <>
            <S.EditButton onClick={() => setContact(true)}>Editar</S.EditButton>
            <S.DeleteButton onClick={() => dispatch(remove(id))}>Remover</S.DeleteButton>
          </>
        )}
      </S.Actions>
    </S.Card>
  )
}

export default Contact