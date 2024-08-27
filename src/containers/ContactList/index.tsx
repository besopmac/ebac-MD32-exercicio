import { Container, AddButton } from "./styles"

const ContactList = () => {
  return (
    <Container>
      <div>
        <h3>John Doe</h3>
        <p>+1 (555) 555-5555</p>
        <a href="mailto:T9n9e@example.com">T9n9e@example.com</a>

        <div>
          <button>Editar</button>
          <button>Remover</button>
        </div>
      </div>
      <AddButton to="/register">Adicionar Contato</AddButton>
    </Container>
  )
}

export default ContactList