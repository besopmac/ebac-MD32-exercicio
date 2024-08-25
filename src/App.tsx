import { Provider } from "react-redux"
import { Container, GlobalStyle } from "./styles"
import store from "./store"

function App() {
  return (
    <Provider store={store}>
      <Container>
        <GlobalStyle />
        
      </Container>
    </Provider>
  )
}

export default App
