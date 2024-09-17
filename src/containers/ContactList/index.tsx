import { useSelector } from "react-redux"
import { RootReducer } from "../../store"
import { MainContainer, Title } from "../../styles"

import Contact from "../../components/Contact"
import { Fragment } from "react/jsx-runtime"

const ContactList = () => {
  const { items } = useSelector((state: RootReducer) => state.contacts)

  return (
    <MainContainer>
      <Title>Lista de contatos</Title>
      {items.map((contact) => (
        <Fragment key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
          />
        </Fragment>
      ))}
    </MainContainer>
  )
}

export default ContactList